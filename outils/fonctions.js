/*
 * Saffrica : test des fonctionnalités, une par une, dans un vrai navigateur.
 * Appelé par outils/test.js (section « Fonctionnalités »). Chaque vérification qui échoue
 * est signalée avec son nom ; rien n'est envoyé aux vrais relais (tout est simulé).
 *
 * But : qu'une fonctionnalité qui marchait avant ne puisse plus disparaître sans que le test le voie
 * (ex. 3.0.1 : le bouton « Choisir sur la carte » n'ouvrait plus rien).
 */
"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");

module.exports = async function fonctions({ browser, base, D, I, pb, log }) {
  const img = path.join(os.tmpdir(), "saffrica-test-lion.jpg");
  fs.writeFileSync(img, Buffer.from(I["animal-lion.jpg"].split(",")[1], "base64"));
  let relais = { result: { animal: true, sure: true, sci: "Panthera leo", name_fr: "Lion", name_en: "Lion" } }, relaisStatus = 200;
  const posts = [];
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: "block", permissions: ["geolocation"], geolocation: { latitude: -24.99, longitude: 31.59 } });
  await ctx.route("**/*saffrica-relais*/**", (r) => r.fulfill({ status: relaisStatus, json: relais }));
  await ctx.route("**/*saffrica-obs*/**", (r) => {
    if (r.request().method() === "POST") { posts.push(JSON.parse(r.request().postData() || "{}")); return r.fulfill({ json: { ok: true } }); }
    const u = new URL(r.request().url()), animal = u.searchParams.get("animal");
    if (animal) return r.fulfill({ json: { observations: [{ id: "t1", animal, lat: -24.99, lng: 31.59, ts: Date.now() - 2 * 864e5, park: "kruger" }] } });
    /* carte : une observation au Kruger, une au Maasai Mara, une hors parc */
    return r.fulfill({ json: { observations: [
      { id: "t1", animal: "lion", lat: -24.99, lng: 31.59, ts: Date.now() - 2 * 864e5, park: "kruger" },
      { id: "t2", animal: "elephant", lat: -1.5, lng: 35.1, ts: Date.now() - 3 * 864e5, park: "maasai-mara" },
      { id: "t3", animal: "zebra", lat: -20.0, lng: 25.0, ts: Date.now() - 4 * 864e5, park: null }] } });
  });
  await ctx.route("**/nominatim.openstreetmap.org/**", (r) => r.fulfill({ json: { address: { country: "Afrique du Sud" } } }));
  await ctx.route("**/tile.openstreetmap.org/**", (r) => r.abort());
  /* compte : relais des comptes et connexion Google simulés ; srv = ce que « le serveur » connaît */
  const srv = { seen: [], obs: [], deleted: 0, logins: 0 };
  await ctx.route("**/*saffrica-compte*/**", (r) => {
    const q = r.request(), u = new URL(q.url()), body = JSON.parse(q.postData() || "{}");
    const prof = () => ({ email: "voyageur@example.com", name: "Voyageur Test", seen: srv.seen.slice(), obs: srv.obs.slice() });
    if (u.pathname === "/login") { srv.logins++; return r.fulfill({ json: Object.assign({ token: "b".repeat(64) }, prof()) }); }
    if (u.pathname === "/me") return r.fulfill({ json: prof() });
    if (u.pathname === "/seen") { srv.seen = body.seen || []; return r.fulfill({ json: { ok: true } }); }
    if (u.pathname === "/obs") { if (!srv.obs.some((o) => o.id === body.id)) srv.obs.push(body); return r.fulfill({ json: { ok: true } }); }
    if (u.pathname === "/account" && q.method() === "DELETE") { srv.deleted++; srv.seen = []; srv.obs = []; return r.fulfill({ json: { ok: true } }); }
    return r.fulfill({ json: { ok: true } });
  });
  await ctx.route("https://accounts.google.com/gsi/client", (r) => r.fulfill({ contentType: "application/javascript", body:
    "window.google={accounts:{id:{initialize:function(o){window.__gcb=o.callback;},renderButton:function(el){var b=document.createElement('button');b.id='fakeGoogle';b.type='button';b.textContent='Continuer avec Google';b.onclick=function(){window.__gcb({credential:'faux.jeton.google'});};el.appendChild(b);}}}};" }));
  await ctx.addInitScript(() => { try {
    window.SAFFRICA_GOOGLE_CLIENT_ID = "test-client.apps.googleusercontent.com";
    if (!sessionStorage.getItem("init")) { sessionStorage.setItem("init", "1"); localStorage.setItem("saffrica-cgu", "4"); localStorage.setItem("awf-lang", "fr");
      localStorage.setItem("saffrica-compte", JSON.stringify({ token: "b".repeat(64), email: "voyageur@example.com", name: "Voyageur Test" })); }
  } catch (e) {} });
  const page = await ctx.newPage();
  const erreurs = [];
  page.on("pageerror", (e) => erreurs.push(e.message));
  page.on("dialog", (d) => d.dismiss().catch(() => {}));

  const W = (ms) => page.waitForTimeout(ms || 250);
  const go = async (h) => { await page.evaluate((hh) => { location.hash = hh; }, h); await W(300); };
  const nb = (sel) => page.$$eval(sel, (els) => els.filter((e) => !e.closest("[hidden]") && e.offsetParent !== null).length);
  const txt = (sel) => page.$eval(sel, (e) => e.textContent).catch(() => "");
  const boutons = () => page.$$eval(".recbtns .rbtn", (bs) => bs.map((b) => b.textContent.trim()));
  const clicBouton = async (label) => { const b = await page.$(`.recbtns .rbtn:text-is("${label}")`); if (!b) throw new Error(`bouton « ${label} » introuvable (${(await boutons()).join(" | ")})`); await b.click(); await W(400); };
  const photo = async () => { await page.setInputFiles("#galInput", img); await page.waitForFunction(() => { const h = document.querySelector("#rec .recin h2"); return h && !/Analyse|Préparation|Analysing|Preparing/i.test(h.textContent); }, null, { timeout: 15000 }); await W(200); };
  const ok = [];
  async function verif(nom, fn) {
    if (process.env.SAFF_TRACE) console.log("→ " + nom);
    try { await fn(); ok.push(nom); }
    catch (e) { pb(`fonctionnalité « ${nom} » : ${String(e.message || e).split("\n")[0]}`); }
    await page.evaluate(() => { const r = document.getElementById("rec"); if (r) r.hidden = true; const p = document.getElementById("pick"); if (p) p.remove(); document.querySelectorAll(".zoomview").forEach((z) => z.remove()); }).catch(() => {});
  }
  const exige = (cond, msg) => { if (!cond) throw new Error(msg); };

  await page.goto(base + "#/"); await page.waitForSelector("#app *");
  const parcsDe = (c) => D.parks.filter((p) => p.country === c);

  /* ---------- accueil ---------- */
  await verif("accueil : cartes des pays avec frontière et un point par parc", async () => {
    await go("#/");
    const cartes = await page.$$eval("#items .ccard", (cs) => cs.map((c) => ({ href: c.getAttribute("href"), pts: c.querySelectorAll(".cmap circle").length, img: !!c.querySelector("img") })));
    const dispo = D.countries.filter((c) => c.available);
    exige(cartes.length === dispo.length, `${cartes.length} cartes au lieu de ${dispo.length}`);
    for (const c of dispo) {
      const k = cartes.find((x) => x.href === "#/c/" + c.id);
      exige(k, `carte ${c.id} absente`); exige(k.img, `carte ${c.id} sans image`);
      exige(k.pts === parcsDe(c.id).length, `carte ${c.id} : ${k.pts} points pour ${parcsDe(c.id).length} parcs`);
    }
  });
  await verif("accueil : recherche d'un animal", async () => {
    await go("#/"); await page.fill("#q", "lion"); await W();
    exige(await nb('#res a[href="#/a/lion"]') === 1, "le lion n'apparaît pas dans les résultats");
  });
  await verif("accueil : recherche d'un parc", async () => {
    await page.fill("#q", "kruger"); await W();
    exige(await nb('#res a[href="#/p/kruger"]') === 1, "le Kruger n'apparaît pas dans les résultats");
  });
  await verif("accueil : recherche d'un pays disponible", async () => {
    await page.fill("#q", "kenya"); await W();
    exige(await nb("#items > li") === 1, "le Kenya devrait être le seul pays affiché");
  });
  await verif("accueil : « bientôt » = principaux + 2e cercle + Madagascar seulement", async () => {
    await go("#/");
    const attendus = D.countries.filter((c) => !c.available && c.soon).length;
    exige(await page.$$eval("#soonList > li", (l) => l.length) === attendus, "nombre de pays « bientôt » faux");
    for (const [nom, la] of [["botswana", true], ["madagascar", true], ["malawi", true], ["maroc", false], ["mali", false]]) {
      await page.fill("#q", nom); await W(150);
      exige((await nb("#soonList > li")) === (la ? 1 : 0), `${nom} ${la ? "absent de" : "présent dans"} « bientôt »`);
    }
    await page.fill("#q", ""); await W();
  });
  await verif("accueil : recherche d'un pays « bientôt » (ouvre la liste repliée)", async () => {
    await page.fill("#q", "botswana"); await W();
    exige(await page.$eval("#soonBox", (d) => d.open && !d.hidden), "la liste « Autres pays » ne s'ouvre pas");
    exige(await nb("#soonList > li") === 1, "Botswana introuvable dans « Autres pays »");
    await page.fill("#q", ""); await W();
    exige(await nb("#items > li") === D.countries.filter((c) => c.available).length, "effacer la recherche ne réaffiche pas tous les pays");
  });
  await verif("accueil : tuiles Observations et Mes animaux", async () => {
    await go("#/");
    exige(await nb('.qa[href="#/obs"]') === 1, "tuile Observations absente");
    exige(await nb('.qa[href="#/mine"]') === 1, "tuile Mes animaux absente");
    exige(/0 \/ 63/.test(await txt('.qa[href="#/mine"]')), "compteur Mes animaux faux");
  });
  await verif("Identifier : d'abord le pays, puis le parc, puis la photo (centrée sur ce parc)", async () => {
    await go("#/");
    exige(/Pays disponibles/.test(await txt("#cHead h2")), "titre « Pays disponibles… » absent");
    await page.click("#idTile"); await W();
    exige(await page.evaluate(() => location.hash) === "#/id", "la tuile Identifier n'ouvre pas le choix du pays");
    exige(await nb('.ccard[href="#/id/c/na"]') === 1 && await nb('.idpick[data-none]') === 1, "cartes des pays ou « Hors parc » absentes");
    await page.click('.ccard[href="#/id/c/na"]'); await W();
    exige(await nb(".idpick[data-park]") === D.parks.filter((p) => p.country === "na").length, "liste des parcs de Namibie incomplète");
    relais = { result: { animal: true, sure: true, sci: "Panthera leo", name_fr: "Lion", name_en: "Lion" } };
    const [fc] = await Promise.all([page.waitForEvent("filechooser", { timeout: 4000 }), page.click('.idpick[data-park="etosha"]')]);
    exige(fc, "toucher un parc n'ouvre pas le choix de photo");
    await fc.setFiles(img);
    await page.waitForFunction(() => { const h = document.querySelector("#rec .recin h2"); return h && /Lion/.test(h.textContent); }, null, { timeout: 15000 });
    exige(await page.evaluate(() => window.SAFFRICA_REC.area && window.SAFFRICA_REC.area.park) === "etosha", "le parc touché n'est pas retenu pour la carte");
    exige((await boutons()).includes("Juste voir la fiche"), "depuis Identifier, « Juste voir la fiche » devrait être proposé");
    await clicBouton("Annuler").catch(() => page.evaluate(() => { document.getElementById("rec").hidden = true; }));
  });
  await verif("accueil, Observations et Identifier : mêmes pays, même ordre, même présentation", async () => {
    const ordre = async (h) => { await go(h); return page.$$eval(".ccard", (cs) => cs.map((c) => c.getAttribute("href").split("/").pop())); };
    const a = await ordre("#/"), o = await ordre("#/obs"), i = await ordre("#/id");
    exige(a.join() === o.join() && a.join() === i.join(), `ordre des pays différent : accueil ${a} · observations ${o} · identifier ${i}`);
    exige(a.join() === "ke,za,na,tz", "ordre voulu : Kenya, Afrique du Sud, Namibie, Tanzanie — obtenu " + a);
    for (const h of ["#/obs", "#/id"]) {
      await go(h);
      exige(await nb("#app > .eyebrow") === 1 && /Où êtes-vous/.test(await txt("#app h1")), `${h} : présentation différente (surtitre + « Où êtes-vous ? »)`);
      exige((await txt("#app .lead")).length < 110, `${h} : texte d'introduction trop long`);
    }
  });
  await verif("compte : connexion Google obligatoire, récupération, synchro, Mon compte, suppression", async () => {
    const existe = async (sel) => (await page.$(sel)) !== null;
    srv.seen = ["giraffe"]; srv.obs = [{ id: "srv-obs-0001", animal: "lion", lat: -24.99, lng: 31.59, ts: Date.now() - 5 * 864e5, park: "kruger" }];
    /* nouveau téléphone : pas de compte, pas d'animaux vus */
    await page.evaluate(() => { localStorage.removeItem("saffrica-compte"); localStorage.removeItem("saffrica-seen"); localStorage.removeItem("saffrica-mesobs"); });
    await page.goto(base + "#/"); await page.reload(); await W(600);
    exige(await existe("#login"), "l'écran de connexion n'apparaît pas sans compte");
    await page.waitForSelector("#fakeGoogle", { timeout: 8000 });
    await page.click("#fakeGoogle"); await W(800);
    exige(!(await existe("#login")), "l'écran de connexion reste affiché après la connexion");
    exige(await page.evaluate(() => JSON.parse(localStorage.getItem("saffrica-seen") || "[]").includes("giraffe")), "les animaux vus du compte ne sont pas récupérés");
    await go("#/compte"); await W(300);
    exige(/Voyageur Test/.test(await txt("#app h1")) && await nb("a.myobs") === 1 && /Lion/.test(await txt("a.myobs")), "« Mon compte » ne montre pas le nom ou l'observation récupérée");
    await page.click("#menuBtn"); await W();
    exige(await nb('#menu a.mrow[href="#/compte"], #menu .mrow.cur') >= 1 && /Mon compte/.test(await txt("#menu")), "« Mon compte » absent du menu");
    await page.click("#menuOv").catch(() => {}); await W();
    /* cocher un animal → envoyé au compte */
    await go("#/p/kruger/a/leopard"); await page.click("#seenBtn"); await W(2200);
    exige(srv.seen.includes("leopard") && srv.seen.includes("giraffe"), "l'animal coché n'est pas enregistré sur le compte : " + srv.seen);
    await page.click("#seenBtn"); await W(2200);
    /* suppression du compte */
    await go("#/compte"); await page.click("#accDelete"); await W();
    await clicBouton("Supprimer définitivement"); await W(600);
    exige(srv.deleted === 1, "la suppression n'a pas été demandée au serveur");
    exige(await page.evaluate(() => !localStorage.getItem("saffrica-compte") && !localStorage.getItem("saffrica-seen")), "les données du compte restent sur le téléphone");
    await clicBouton("Fermer"); await W(600);
    exige(await existe("#login"), "après suppression, l'écran de connexion devrait revenir");
    /* on se reconnecte pour la suite des tests */
    await page.waitForSelector("#fakeGoogle", { timeout: 8000 }); await page.click("#fakeGoogle"); await W(800);
    exige(!(await existe("#login")), "reconnexion impossible");
  });
  await verif("écrans sans textes d'explication (ils sont dans les conditions)", async () => {
    for (const h of ["#/", "#/id/c/za", "#/obs/c/za", "#/obs/kruger", "#/p/kruger/a/lion"]) {
      await go(h); await W(300);
      const t = await page.evaluate(() => document.getElementById("app").innerText);
      exige(!/intelligence artificielle \(Google\)|contributeurs OpenStreetMap|pas des comptages exacts/.test(t), `texte d'explication encore affiché sur ${h}`);
    }
  });

  /* ---------- pays, parc, fiche ---------- */
  await verif("page pays : carte et liste des parcs", async () => {
    await go("#/c/ke");
    exige(await nb(".ccard.static .cmap circle") === parcsDe("ke").length, "frontière ou points absents");
    exige(await nb('a.row[href^="#/p/"]') === parcsDe("ke").length, "liste des parcs incomplète");
  });
  await verif("page parc : animaux, recherche, observations, sources, légende", async () => {
    const k = D.parks.find((p) => p.id === "kruger");
    await go("#/p/kruger");
    exige(await nb("#items > a.tile") === k.animals.length, "grille d'animaux incomplète");
    await page.fill("#q", "lion"); await W();
    exige(await nb("#items > a.tile") >= 1 && await nb("#items > a.tile") < k.animals.length, "la recherche ne filtre pas");
    exige(await nb('a.obsbtn[href="#/obs/kruger"]') === 1, "lien vers la carte des observations absent");
    exige(await page.$$eval(".card.park details .sources li", (l) => l.length) > 0, "sources du parc absentes");
    exige(await nb(".legend li") === 5, "légende des statuts absente");
  });
  await verif("fiche : bouton « vu » (marche, s'enregistre, s'annule)", async () => {
    await go("#/p/kruger/a/lion");
    await page.click("#seenBtn"); await W();
    exige(await page.$eval("#seenBtn", (b) => b.classList.contains("on")), "le bouton ne passe pas à « vu »");
    exige((await page.evaluate(() => localStorage.getItem("saffrica-seen") || "")).includes("lion"), "« vu » non mémorisé");
    await page.click("#seenBtn"); await W();
    exige(!(await page.evaluate(() => localStorage.getItem("saffrica-seen") || "")).includes("lion"), "« vu » ne s'annule pas");
  });
  await verif("fiche : zoom de l'illustration", async () => {
    await go("#/p/kruger/a/lion"); await page.click("#zoomBtn"); await W();
    exige(await nb(".zoomview img") === 1, "le zoom ne s'ouvre pas");
    await page.click(".zoomview button"); await W();
    exige(await nb(".zoomview") === 0, "le zoom ne se ferme pas");
  });
  await verif("fiche : dernière observation, chiffres, sources, pays", async () => {
    await go("#/p/kruger/a/lion"); await W(800);
    const ls = await txt("#lsBody");
    exige(ls && !/Chargement|Loading/i.test(ls), "la dernière observation ne s'affiche pas");
    exige(await nb(".factgrid .fc") >= 8 && /1 620/.test(await txt(".fc.pk .v")) && (await txt(".fc.world .v")).length > 0, "rectangles des chiffres absents ou incomplets");
    exige(!(await page.$$eval(".sx", (l) => l.some((e) => parseFloat(getComputedStyle(e).borderLeftWidth) > 1))), "les barres de couleur mâle/femelle sont revenues");
    const vides = await page.$$eval(".fc .v", (l) => l.filter((e) => !e.textContent.trim()).length);
    exige(vides === 0, vides + " rectangle(s) sans valeur");
    exige(await page.$$eval(".sheet .sources li", (l) => l.length) > 0, "sources absentes");
    exige(await nb('.range a.chip[href="#/c/za"]') >= 1, "lien vers le pays absent de « Où vit-il »");
    exige(await page.$eval(".srcfold details", (d) => !d.open).catch(() => false), "les sources de la fiche devraient être repliées");
    await page.click(".srcfold summary"); await W();
    exige(await page.$eval(".srcfold details", (d) => d.open), "la flèche ne déplie pas les sources");
  });
  await verif("fiche → « Voir toutes les observations » : carte filtrée sur cet animal", async () => {
    await go("#/p/kruger/a/lion"); await W(800);
    const href = await page.$eval("#lsBody a.obsbtn", (a) => a.getAttribute("href"));
    exige(/\/a\/lion$/.test(href), "le lien ne garde pas l'animal : " + href);
    await page.click("#lsBody a.obsbtn");
    await page.waitForFunction(() => { const s = document.getElementById("obsSel"); return s && s.options.length > 1; }, null, { timeout: 15000 });
    exige(await page.$eval("#obsSel", (s) => s.value) === "lion", "la carte ne s'ouvre pas filtrée sur le lion");
  });
  await verif("fiche d'un groupe : types et liens", async () => {
    await go("#/a/baboons");
    exige(await nb(".types .ty") > 0, "les types de babouins ne s'affichent pas");
  });
  await verif("bouton retour : fiche → parc → pays → accueil", async () => {
    await go("#/"); await go("#/c/za"); await go("#/p/kruger"); await go("#/p/kruger/a/lion"); await page.click("#backBtn"); await W();
    exige(await page.evaluate(() => location.hash) === "#/p/kruger", "fiche → parc");
    await page.click("#backBtn"); await W();
    exige(await page.evaluate(() => location.hash) === "#/c/za", "parc → pays");
    await page.click("#backBtn"); await W();
    exige(await page.evaluate(() => location.hash) === "#/", "pays → accueil");
    exige(await page.$eval("#backBtn", (b) => b.hidden), "le bouton retour reste visible à l'accueil");
  });

  await verif("bouton retour : revient à la page d'où l'on vient (parc → carte des observations → parc)", async () => {
    await go("#/"); await go("#/c/za"); await go("#/p/kruger");
    await page.click('a.obsbtn[href="#/obs/kruger"]'); await W(400);
    exige(await page.evaluate(() => location.hash) === "#/obs/kruger", "le bouton du parc n'ouvre pas sa carte des observations");
    exige(await nb('a.parklink[href="#/p/kruger"]') === 1, "pas de lien « Infos et animaux du parc » sur la carte du parc");
    await page.click("#backBtn"); await W();
    exige(await page.evaluate(() => location.hash) === "#/p/kruger", "retour depuis la carte ne ramène pas au parc");
    await page.click('a.obsbtn[href="#/obs/kruger"]'); await W(400);
    await page.click('a.parklink'); await W();
    exige(await page.evaluate(() => location.hash) === "#/p/kruger", "le lien « Infos et animaux du parc » ne mène pas au parc");
    await page.click("#backBtn"); await W();
    exige(await page.evaluate(() => location.hash) === "#/c/za", "après le lien, retour devrait mener au pays");
    await go("#/obs"); await go("#/obs/c/za"); await go("#/obs/kruger"); await page.click("#backBtn"); await W();
    exige(await page.evaluate(() => location.hash) === "#/obs/c/za", "depuis Observations, retour devrait rester dans Observations");
  });

  /* ---------- Mes animaux ---------- */
  await verif("Mes animaux : cocher, titre, filtres, recherche", async () => {
    await page.evaluate(() => localStorage.removeItem("saffrica-seen"));
    await go("#/mine");
    await page.click('.tilewrap[data-id="lion"] .chk'); await W();
    exige(/1 vu/.test(await txt("#rank")), "le compteur ne passe pas à 1");
    await page.click('#flt button[data-f="seen"]'); await W();
    exige(await nb("#items > .tilewrap") === 1, "filtre « Vus » faux");
    await page.click('#flt button[data-f="not"]'); await W();
    exige(await nb("#items > .tilewrap") === 62, "filtre « Pas encore vus » faux");
    await page.click('#flt button[data-f="all"]'); await page.fill("#q", "zèbre"); await W();
    exige(await nb("#items > .tilewrap") >= 1 && await nb("#items > .tilewrap") < 63, "la recherche ne filtre pas");
    await page.evaluate(() => localStorage.removeItem("saffrica-seen"));
  });

  /* ---------- menu, langue, pied de page, conditions ---------- */
  await verif("menu : bloc fixe, « vous êtes ici », navigation", async () => {
    await go("#/p/kruger/a/lion"); await page.click("#menuBtn"); await W();
    exige(await nb("#menu .mrow") >= 6, "menu incomplet (3 fixes + pays, parc, animal)");
    await page.click('#menu a.mrow[href="#/obs"]'); await W();
    exige(await page.evaluate(() => location.hash) === "#/obs" && await page.$eval("#menu", (m) => m.hidden), "le lien du menu ne navigue pas ou le menu reste ouvert");
  });
  await verif("langue : passer en anglais et revenir", async () => {
    await go("#/"); await page.click("#langBtn"); await W();
    exige(await nb("#langMenu button") === 2, "le bouton de langue n'ouvre pas le menu déroulant");
    await page.keyboard.press("Escape"); await W();
    exige(await nb("#langMenu") === 0, "Échap ne ferme pas le menu des langues");
    await page.click("#langBtn"); await W(); await page.click('#langMenu [data-l="en"]'); await W();
    exige(await page.evaluate(() => document.documentElement.lang) === "en" && /Collect the wildlife/.test(await txt("h1")), "le passage en anglais ne marche pas");
    exige(await nb("#langMenu") === 0, "le menu des langues reste ouvert après le choix");
    await page.click("#langBtn"); await W(); await page.click('#langMenu [data-l="fr"]'); await W();
    exige(await page.evaluate(() => document.documentElement.lang) === "fr", "le retour en français ne marche pas");
  });
  await verif("pied de page : Nouveautés et conditions", async () => {
    await go("#/"); await page.click('#footer a[href="#/news"]'); await W();
    exige(await nb("article.upd") === D.updates.length, "page Nouveautés incomplète");
    await page.click("#cguLink"); await W();
    exige(await nb("#cguOk") === 1, "les conditions ne s'ouvrent pas");
    await page.click("#cguOk"); await W();
  });
  await verif("conditions à la première ouverture", async () => {
    await page.evaluate(() => localStorage.removeItem("saffrica-cgu")); await page.reload(); await W(500);
    exige(await nb("#cguOk") === 1, "les conditions ne s'affichent pas au premier lancement");
    await page.click("#cguOk"); await W();
    exige(await page.evaluate(() => localStorage.getItem("saffrica-cgu")) === "4", "l'acceptation n'est pas mémorisée");
  });

  /* ---------- observations ---------- */
  await verif("observations : pays, parcs, carte et filtre", async () => {
    await go("#/obs");
    exige(await nb('a.ccard[href^="#/obs/c/"]') === D.countries.filter((c) => D.parks.some((p) => p.country === c.id)).length, "cartes des pays incomplètes");
    exige(await nb('a.row[href="#/obs/none"]') === 1, "« Hors parc » absent");
    exige(await nb("#photoBtn") === 0, "la page Observations ne doit plus avoir de bouton photo (choisir d'abord où l'on est)");
    await go("#/obs/c/za");
    exige(await nb('a.row[href^="#/obs/"]') === parcsDe("za").length, "liste des parcs incomplète");
    exige(await nb("#photoBtn") === 1, "bouton photo absent sur la page du pays");
    await go("#/obs/kruger");
    await page.waitForFunction(() => document.querySelector("#obsMap.leaflet-container") || /réseau|connexion/i.test((document.getElementById("obsMsg") || {}).textContent || ""), null, { timeout: 15000 });
    if (await nb("#obsMap.leaflet-container")) {
      exige(await page.$$eval("#obsSel option", (o) => o.length) >= 2, "le filtre par animal n'est pas rempli");
      exige(await page.$$eval(".leaflet-interactive", (o) => o.length) >= 1, "aucun point d'observation sur la carte");
    } else log("  (carte Leaflet non téléchargeable ici : message « pas de réseau » vérifié à la place)");
  });

  /* ---------- photos : tous les résultats possibles ---------- */
  const photoDepuis = async (h) => { await go(h); await photo(); };
  await verif("photo : animal reconnu → noter sur place (position GPS) → enregistré dans le bon parc", async () => {
    relais = { result: { animal: true, sure: true, sci: "Panthera leo", name_fr: "Lion", name_en: "Lion" } };
    posts.length = 0;
    await photoDepuis("#/obs/kruger");
    await clicBouton("Noter l’observation"); await clicBouton("Oui, je suis sur place"); await W(800);
    exige(/Kruger/.test(await txt("#rec .recin")), "le parc Kruger n'est pas reconnu depuis la position");
    await clicBouton("Enregistrer"); await page.waitForSelector("#rec h2:has-text('enregistrée')", { timeout: 10000 });
    exige(posts.length === 1 && posts[0].animal === "lion" && posts[0].park === "kruger", "observation non envoyée ou mauvais parc : " + JSON.stringify(posts));
    await clicBouton("Voir la fiche");
    exige(/#\/a\/lion/.test(await page.evaluate(() => location.hash)), "« Voir la fiche » n'ouvre pas la fiche");
  });
  await verif("photo : photo ancienne → choisir sur la carte → revenir", async () => {
    await photoDepuis("#/obs/kruger");
    await clicBouton("Noter l’observation"); await clicBouton("Non, photo plus ancienne");
    await page.click("#obsMapBtn"); await W(400);
    exige(await nb("#pickMap") === 1, "« Choisir sur la carte » n'ouvre pas la carte");
    await page.click(".recback"); await W();
    exige(await nb("#obsCoord") === 1, "la flèche retour de la carte ne revient pas à « Où et quand »");
  });
  await verif("photo : flèches retour à chaque étape (sans perdre la photo ni l'animal)", async () => {
    relais = { result: { animal: true, sure: true, sci: "Panthera leo", name_fr: "Lion", name_en: "Lion" } };
    await photoDepuis("#/id");
    exige(await nb("#rec .recback") === 0, "le résultat de l'IA ne devrait pas avoir de flèche retour");
    await clicBouton("Noter l’observation");
    await page.click("#rec .recback"); await W();
    exige(/Lion/.test(await txt("#rec h2")) && (await boutons()).includes("Noter l’observation"), "« Noter où ? » ← ne revient pas au résultat");
    await clicBouton("Noter l’observation"); await clicBouton("Non, photo plus ancienne");
    await page.click("#rec .recback"); await W();
    exige(/Noter où/.test(await txt("#rec h2")), "« Où et quand » ← ne revient pas à « Noter où ? »");
    await clicBouton("Non, photo plus ancienne");
    await page.fill("#obsCoord", "-24.99, 31.59"); await clicBouton("Continuer");
    exige(/Enregistrer/.test(await txt("#rec h2")), "pas d'écran « Enregistrer »");
    await page.click("#rec .recback"); await W();
    exige(await nb("#obsCoord") === 1 && (await page.inputValue("#obsCoord")) === "-24.99, 31.59", "« Enregistrer » ← ne revient pas à « Où et quand » avec les coordonnées");
    await clicBouton("Annuler");
    await photoDepuis("#/id");
    await clicBouton("Noter l’observation"); await clicBouton("Oui, je suis sur place"); await W(800);
    exige(/Enregistrer/.test(await txt("#rec h2")), "pas d'écran « Enregistrer » après la position");
    await page.click("#rec .recback"); await W();
    exige(/Noter où/.test(await txt("#rec h2")), "« Enregistrer » (sur place) ← ne revient pas à « Noter où ? »");
  });
  await verif("photo : « Juste voir la fiche » puis flèche retour → revient à la photo", async () => {
    relais = { result: { animal: true, sure: true, sci: "Panthera leo", name_fr: "Lion", name_en: "Lion" } };
    await photoDepuis("#/id");
    await clicBouton("Juste voir la fiche");
    exige(/^#\/a\/lion/.test(await page.evaluate(() => location.hash)), "« Juste voir la fiche » n'ouvre pas la fiche");
    exige(await page.$eval("#rec", (r) => r.hidden), "la fenêtre photo reste ouverte sur la fiche");
    await page.click("#backBtn"); await W(400);
    exige(!(await page.$eval("#rec", (r) => r.hidden)) && (await boutons()).includes("Noter l’observation") && await nb("#rec .recin img") === 1, "la flèche retour ne rouvre pas le résultat avec la photo");
    await clicBouton("Noter l’observation");
    exige(/Noter où/.test(await txt("#rec h2")), "depuis la photo retrouvée, « Noter l'observation » ne marche pas");
    await clicBouton("Annuler"); await go("#/");
    await go("#/a/lion"); await page.click("#backBtn"); await W();
    exige(await page.$eval("#rec", (r) => r.hidden), "une fiche ouverte plus tard ne devrait plus rouvrir l'ancienne photo");
  });
  const centreCarte = async (depuis) => {
    relais = { result: { animal: true, sure: true, sci: "Panthera leo", name_fr: "Lion", name_en: "Lion" } };
    await photoDepuis(depuis);
    await clicBouton("Noter l’observation"); await clicBouton("Non, photo plus ancienne");
    await page.click("#obsMapBtn");
    await page.waitForFunction(() => window.SAFFRICA_REC && window.SAFFRICA_REC.pickMap && document.querySelector("#pickMap.leaflet-container"), null, { timeout: 15000 });
    await W(400);
    return page.evaluate(() => { const m = window.SAFFRICA_REC.pickMap, c = m.getCenter(); return { lat: c.lat, lng: c.lng, zoom: m.getZoom() }; });
  };
  await verif("photo : « Choisir sur la carte » centré sur le parc choisi", async () => {
    const k = D.parks.find((p) => p.id === "kruger"), c = await centreCarte("#/obs/kruger");
    exige(Math.abs(c.lat - k.map.lat) < 0.3 && Math.abs(c.lng - k.map.lng) < 0.3 && c.zoom === k.map.zoom, "carte non centrée sur le Kruger : " + JSON.stringify(c));
  });
  await verif("carte des observations : la même partout (tous les parcs + hors parc)", async () => {
    for (const [h, centre] of [["#/obs/kruger", D.parks.find((p) => p.id === "kruger").map], ["#/obs/maasai-mara", D.parks.find((p) => p.id === "maasai-mara").map], ["#/obs/none", null]]) {
      await go(h);
      await page.waitForFunction(() => window.SAFFRICA_REC && window.SAFFRICA_REC.obsMap && document.querySelectorAll("#obsMap .leaflet-interactive").length >= 3, null, { timeout: 15000 });
      exige(await page.$$eval("#obsMap .leaflet-interactive", (l) => l.length) === 3, `${h} : les 3 observations (2 parcs + hors parc) ne sont pas toutes sur la carte`);
      exige(await page.$$eval("#obsSel option", (o) => o.length) === 4, `${h} : le filtre ne liste pas les animaux de tous les parcs`);
      const c = await page.evaluate(() => { const m = window.SAFFRICA_REC.obsMap, x = m.getCenter(); return { lat: x.lat, lng: x.lng, zoom: m.getZoom() }; });
      if (centre) exige(Math.abs(c.lat - centre.lat) < 0.3 && Math.abs(c.lng - centre.lng) < 0.3 && c.zoom === centre.zoom, `${h} : la carte n'est pas centrée sur le parc ` + JSON.stringify(c));
      else exige(c.zoom <= 4, `${h} : la carte « hors parc » devrait montrer toute l'Afrique ` + JSON.stringify(c));
    }
    await page.selectOption("#obsSel", "elephant"); await W(300);
    exige(await page.$$eval("#obsMap .leaflet-interactive", (l) => l.length) === 1, "le filtre par animal ne marche pas sur la carte unique");
  });
  await verif("« Choisir sur la carte » ne montre pas les autres observations", async () => {
    await centreCarte("#/obs/kruger");
    exige(await page.$$eval("#pickMap .leaflet-interactive", (l) => l.length) === 0, "des observations apparaissent sur « Choisir sur la carte »");
  });
  await verif("cartes : limites des parcs dessinées, et toucher la carte marche toujours", async () => {
    const n = D.parks.filter((p) => p.shape || p.zone).length;
    await go("#/obs/kruger");
    await page.waitForFunction(() => window.SAFFRICA_REC && window.SAFFRICA_REC.obsMap && document.querySelector("#obsMap .leaflet-overlay-pane path"), null, { timeout: 15000 });
    exige(await page.$$eval("#obsMap .leaflet-overlay-pane path:not(.leaflet-interactive)", (l) => l.length) === n, "limites des parcs absentes de la carte d'un parc");
    await centreCarte("#/obs/kruger");
    exige(await page.$$eval("#pickMap .leaflet-overlay-pane path:not(.leaflet-interactive)", (l) => l.length) === n, "limites des parcs absentes de « Choisir sur la carte »");
    const box = await page.$eval("#pickMap", (e) => { const r = e.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
    await page.mouse.click(box.x, box.y); await W(300);
    exige(/-?\d+\.\d{5}, -?\d+\.\d{5}/.test(await txt("#pickMsg")), "toucher la carte (dans un parc) ne place plus le point");
  });
  await verif("photo : « Choisir sur la carte » centré sur le pays choisi", async () => {
    const c = await centreCarte("#/obs/c/ke");
    exige(c.lat > -5 && c.lat < 5 && c.lng > 33 && c.lng < 42 && c.zoom >= 4, "carte non centrée sur le Kenya : " + JSON.stringify(c));
  });
  await verif("photo : « Choisir sur la carte » sur toute l'Afrique depuis « Hors parc » ou l'accueil", async () => {
    for (const h of ["#/obs/none", "#/id"]) { const c = await centreCarte(h); exige(c.zoom <= 4, `${h} : carte trop zoomée ` + JSON.stringify(c)); }
  });
  await verif("carte d'un parc : la fenêtre photo passe bien devant la carte", async () => {
    await go("#/obs/kruger");
    await page.waitForFunction(() => document.querySelector("#obsMap .leaflet-tile-pane"), null, { timeout: 15000 });
    /* tuiles simulées qui couvrent toute la carte (les vraies tuiles ne se chargent pas pendant le test) */
    await page.evaluate(() => { const t = document.createElement("div"); t.style.cssText = "position:absolute;left:-3000px;top:-3000px;width:7000px;height:7000px;background:#9c9"; document.querySelector("#obsMap .leaflet-tile-pane").appendChild(t); });
    await photo();
    const dessus = await page.evaluate(() => {
      const r = document.querySelector("#rec .recin").getBoundingClientRect(), pts = [[0.5, 0.5], [0.5, 0.9], [0.2, 0.8], [0.8, 0.95]];
      return pts.every(([x, y]) => { const e = document.elementFromPoint(r.left + r.width * x, r.top + r.height * y); return e && e.closest("#rec"); });
    });
    exige(dessus, "la carte du parc passe devant la fenêtre");
  });
  await verif("photo : coordonnées fausses → message d'erreur", async () => {
    await photoDepuis("#/obs/kruger");
    await clicBouton("Noter l’observation"); await clicBouton("Non, photo plus ancienne");
    await page.fill("#obsCoord", "n'importe quoi"); await clicBouton("Continuer");
    exige(await nb("#obsCoord") === 1 && /non valides|Invalid/i.test(await txt("#rec .recin")), "pas de message pour des coordonnées fausses");
  });
  await verif("photo : sans réseau à l'envoi → observation gardée puis envoyée", async () => {
    posts.length = 0;
    await photoDepuis("#/obs/kruger");
    await clicBouton("Noter l’observation"); await clicBouton("Non, photo plus ancienne");
    await page.fill("#obsCoord", "-2.33, 34.83"); await clicBouton("Continuer");
    await ctx.setOffline(true);
    await clicBouton("Enregistrer"); await page.waitForSelector("#rec h2:has-text('gardée')", { timeout: 10000 });
    exige((await page.evaluate(() => JSON.parse(localStorage.getItem("saffrica-obsq") || "[]").length)) === 1, "l'observation n'est pas gardée en attente");
    await ctx.setOffline(false); await page.evaluate(() => window.dispatchEvent(new Event("online"))); await go("#/obs"); await W(1500);
    exige(posts.length === 1 && posts[0].park === "serengeti", "l'observation gardée n'est pas envoyée au retour du réseau (ou mauvais parc) : " + JSON.stringify(posts));
  });
  await verif("photo : l'IA hésite → toucher un animal le choisit pour l'observation", async () => {
    relais = { result: { animal: true, sure: false, sci: "Panthera leo", name_fr: "Lion", name_en: "Lion" } };
    await photoDepuis("#/id");
    await clicBouton("Lion");
    exige(/Noter où/.test(await txt("#rec h2")), "toucher l'animal n'ouvre pas « Noter où vous l'avez vu ? »");
  });
  await verif("photo : animal pas dans Saffrica → « Voir sur internet »", async () => {
    relais = { result: { animal: true, sure: true, sci: "Lycaon fictus", name_fr: "Animal inconnu", name_en: "Unknown" } };
    await photoDepuis("#/id");
    exige((await boutons()).includes("Voir sur internet"), "bouton « Voir sur internet » absent");
  });
  await verif("photo : aucun animal → garder pour plus tard → page À vérifier", async () => {
    relais = { result: { animal: false } };
    await photoDepuis("#/id");
    await clicBouton("Garder pour vérifier plus tard"); await W(800);
    await clicBouton("Voir la liste"); await W(800);
    exige(await page.evaluate(() => location.hash) === "#/verify" && await nb(".pitem") >= 1, "la photo gardée n'apparaît pas dans « À vérifier »");
  });
  await verif("photo : le relais ne répond pas → réessayer / garder", async () => {
    relais = { error: "panne" }; relaisStatus = 500;
    await photoDepuis("#/id");
    const b = await boutons();
    exige(b.includes("Réessayer") && b.includes("Garder pour vérifier plus tard"), "boutons d'échec absents : " + b.join(" | "));
    relaisStatus = 200;
  });
  await verif("photo : hors ligne → garder pour plus tard", async () => {
    await go("#/id"); await ctx.setOffline(true);
    await photo();
    exige(/Pas de réseau|No network/i.test(await txt("#rec h2")) && (await boutons()).includes("Garder pour vérifier plus tard"), "écran hors ligne absent");
    await ctx.setOffline(false);
  });
  await verif("À vérifier : lien à l'accueil, choisir l'animal, supprimer", async () => {
    await go("#/"); await W(600);
    exige(await nb("#pendLink") === 1, "le lien « À vérifier » n'apparaît pas à l'accueil");
    await go("#/verify"); await W(600);
    const avant = await nb(".pitem");
    await page.click(`.pitem .rbtn:text-is("Choisir l’animal")`); await W();
    exige(await nb("#pick .pickrow") > 10, "la liste pour choisir l'animal ne s'ouvre pas");
    await page.fill("#pq", "léopard"); await W();
    exige(await nb("#pick .pickrow") === 1, "la recherche dans la liste ne filtre pas");
    await page.click("#pick .pickrow"); await W(600);
    exige(/leopard/.test(await page.evaluate(() => location.hash)), "choisir l'animal n'ouvre pas sa fiche");
    exige((await page.evaluate(() => localStorage.getItem("saffrica-seen") || "")).includes("leopard"), "l'animal choisi n'est pas coché « vu »");
    await go("#/verify"); await W(600);
    exige(await nb(".pitem") === avant - 1, "la photo n'est pas retirée de la liste");
  });

  if (erreurs.length) for (const e of [...new Set(erreurs)]) pb("fonctionnalités : erreur JavaScript : " + e);
  log(`${ok.length} fonctionnalités vérifiées`);
  await ctx.close();
};
