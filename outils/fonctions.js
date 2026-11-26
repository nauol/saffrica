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
    const animal = new URL(r.request().url()).searchParams.get("animal") || "lion";
    return r.fulfill({ json: { observations: [{ id: "t1", animal, lat: -24.99, lng: 31.59, ts: Date.now() - 2 * 864e5, park: "kruger" }] } });
  });
  await ctx.route("**/nominatim.openstreetmap.org/**", (r) => r.fulfill({ json: { address: { country: "Afrique du Sud" } } }));
  await ctx.route("**/tile.openstreetmap.org/**", (r) => r.abort());
  await ctx.addInitScript(() => { try { if (!sessionStorage.getItem("init")) { sessionStorage.setItem("init", "1"); localStorage.setItem("saffrica-cgu", "3"); localStorage.setItem("awf-lang", "fr"); } } catch (e) {} });
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
  await verif("accueil : recherche d'un pays « bientôt » (ouvre la liste repliée)", async () => {
    await page.fill("#q", "maroc"); await W();
    exige(await page.$eval("#soonBox", (d) => d.open && !d.hidden), "la liste « Autres pays » ne s'ouvre pas");
    exige(await nb("#soonList > li") === 1, "Maroc introuvable dans « Autres pays »");
    await page.fill("#q", ""); await W();
    exige(await nb("#items > li") === D.countries.filter((c) => c.available).length, "effacer la recherche ne réaffiche pas tous les pays");
  });
  await verif("accueil : tuiles Observations et Mes animaux", async () => {
    await go("#/");
    exige(await nb('.qa[href="#/obs"]') === 1, "tuile Observations absente");
    exige(await nb('.qa[href="#/mine"]') === 1, "tuile Mes animaux absente");
    exige(/0 \/ 63/.test(await txt('.qa[href="#/mine"]')), "compteur Mes animaux faux");
  });
  await verif("accueil : « Identifier » ouvre le choix de photo", async () => {
    await go("#/");
    const [fc] = await Promise.all([page.waitForEvent("filechooser", { timeout: 4000 }), page.click("#photoBtn")]);
    exige(fc, "aucun sélecteur de fichier");
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
    exige(await nb(".info.park .fig") === 1 && await nb(".info.world .fig") === 1, "chiffres du parc ou du monde absents");
    exige(await page.$$eval(".sheet .sources li", (l) => l.length) > 0, "sources absentes");
    exige(await nb('.range a.chip[href="#/c/za"]') === 1, "lien vers le pays absent de « Où vit-il »");
  });
  await verif("fiche d'un groupe : types et liens", async () => {
    await go("#/a/baboons");
    exige(await nb(".types .ty") > 0, "les types de babouins ne s'affichent pas");
  });
  await verif("bouton retour : fiche → parc → pays → accueil", async () => {
    await go("#/p/kruger/a/lion"); await page.click("#backBtn"); await W();
    exige(await page.evaluate(() => location.hash) === "#/p/kruger", "fiche → parc");
    await page.click("#backBtn"); await W();
    exige(await page.evaluate(() => location.hash) === "#/c/za", "parc → pays");
    await page.click("#backBtn"); await W();
    exige(await page.evaluate(() => location.hash) === "#/", "pays → accueil");
    exige(await page.$eval("#backBtn", (b) => b.hidden), "le bouton retour reste visible à l'accueil");
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
    exige(await page.evaluate(() => document.documentElement.lang) === "en" && /Collect the wildlife/.test(await txt("h1")), "le passage en anglais ne marche pas");
    await page.click("#langBtn"); await W();
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
    exige(await page.evaluate(() => localStorage.getItem("saffrica-cgu")) === "3", "l'acceptation n'est pas mémorisée");
  });

  /* ---------- observations ---------- */
  await verif("observations : pays, parcs, carte et filtre", async () => {
    await go("#/obs");
    exige(await nb('a.row[href^="#/obs/c/"]') === D.countries.filter((c) => D.parks.some((p) => p.country === c.id)).length, "liste des pays incomplète");
    await go("#/obs/c/za");
    exige(await nb('a.row[href^="#/obs/"]') === parcsDe("za").length, "liste des parcs incomplète");
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
    await photoDepuis("#/obs");
    await clicBouton("Noter l’observation"); await clicBouton("Oui, je suis sur place"); await W(800);
    exige(/Kruger/.test(await txt("#rec .recin")), "le parc Kruger n'est pas reconnu depuis la position");
    await clicBouton("Enregistrer"); await page.waitForSelector("#rec h2:has-text('enregistrée')", { timeout: 10000 });
    exige(posts.length === 1 && posts[0].animal === "lion" && posts[0].park === "kruger", "observation non envoyée ou mauvais parc : " + JSON.stringify(posts));
    await clicBouton("Voir la fiche");
    exige(/#\/a\/lion/.test(await page.evaluate(() => location.hash)), "« Voir la fiche » n'ouvre pas la fiche");
  });
  await verif("photo : photo ancienne → choisir sur la carte → revenir", async () => {
    await photoDepuis("#/obs");
    await clicBouton("Noter l’observation"); await clicBouton("Non, photo plus ancienne");
    await page.click("#obsMapBtn"); await W(400);
    exige(await nb("#pickMap") === 1, "« Choisir sur la carte » n'ouvre pas la carte");
    await page.click(".recbtns .rbtn:not(.primary)"); await W();
    exige(await nb("#obsCoord") === 1, "fermer la carte ne revient pas à « Où et quand »");
  });
  await verif("photo : coordonnées fausses → message d'erreur", async () => {
    await photoDepuis("#/obs");
    await clicBouton("Noter l’observation"); await clicBouton("Non, photo plus ancienne");
    await page.fill("#obsCoord", "n'importe quoi"); await clicBouton("Continuer");
    exige(await nb("#obsCoord") === 1 && /non valides|Invalid/i.test(await txt("#rec .recin")), "pas de message pour des coordonnées fausses");
  });
  await verif("photo : sans réseau à l'envoi → observation gardée puis envoyée", async () => {
    posts.length = 0;
    await photoDepuis("#/obs");
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
    await photoDepuis("#/");
    await clicBouton("Lion");
    exige(/Noter où/.test(await txt("#rec h2")), "toucher l'animal n'ouvre pas « Noter où vous l'avez vu ? »");
  });
  await verif("photo : animal pas dans Saffrica → « Voir sur internet »", async () => {
    relais = { result: { animal: true, sure: true, sci: "Lycaon fictus", name_fr: "Animal inconnu", name_en: "Unknown" } };
    await photoDepuis("#/");
    exige((await boutons()).includes("Voir sur internet"), "bouton « Voir sur internet » absent");
  });
  await verif("photo : aucun animal → garder pour plus tard → page À vérifier", async () => {
    relais = { result: { animal: false } };
    await photoDepuis("#/");
    await clicBouton("Garder pour vérifier plus tard"); await W(800);
    await clicBouton("Voir la liste"); await W(800);
    exige(await page.evaluate(() => location.hash) === "#/verify" && await nb(".pitem") >= 1, "la photo gardée n'apparaît pas dans « À vérifier »");
  });
  await verif("photo : le relais ne répond pas → réessayer / garder", async () => {
    relais = { error: "panne" }; relaisStatus = 500;
    await photoDepuis("#/");
    const b = await boutons();
    exige(b.includes("Réessayer") && b.includes("Garder pour vérifier plus tard"), "boutons d'échec absents : " + b.join(" | "));
    relaisStatus = 200;
  });
  await verif("photo : hors ligne → garder pour plus tard", async () => {
    await go("#/"); await ctx.setOffline(true);
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
