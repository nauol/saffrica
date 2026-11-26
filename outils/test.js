#!/usr/bin/env node
/*
 * Saffrica : test complet de l'appli.
 *
 * Lancer depuis la racine du dépôt :
 *     node outils/test.js                 (tout)
 *     node outils/test.js --rapide        (sans le parcours des fiches parc par parc)
 *     node outils/test.js --captures DIR  (dossier des captures, sinon dossier temporaire)
 *
 * 1. Données : donnees.js / images.js se chargent, chaque source citée existe,
 *    chaque animal cité existe et a son illustration, cohérence parcs / parkAnimals.
 * 2. Code : le <script> de index.html est syntaxiquement correct, version et cache cohérents.
 * 3. Navigateur (Playwright) : chaque page, en français et en anglais, sans
 *    « undefined », « NaN », « [object » ni erreur JavaScript. Les relais Cloudflare
 *    et Nominatim sont simulés (aucun envoi réel).
 * 4. Captures à 390 px de large de quelques pages types.
 *
 * Code de sortie : 0 si tout va bien, 1 s'il y a au moins un problème.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const http = require("http");
const os = require("os");
const vm = require("vm");

const RACINE = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const RAPIDE = args.includes("--rapide");
const iCap = args.indexOf("--captures");
const CAPTURES = iCap >= 0 && args[iCap + 1] ? path.resolve(args[iCap + 1]) : path.join(os.tmpdir(), "saffrica-captures");

const problemes = [];
const avertissements = [];
function pb(msg) { problemes.push(msg); }
function av(msg) { avertissements.push(msg); }
function titre(t) { console.log("\n== " + t + " =="); }

/* ---------- 1. Données ---------- */
function charger(fichier, nom) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(RACINE, fichier), "utf8"), ctx, { filename: fichier });
  if (!ctx.window[nom]) throw new Error(fichier + " ne définit pas window." + nom);
  return ctx.window[nom];
}

titre("Données");
const D = charger("donnees.js", "APP_DATA");
const I = charger("images.js", "APP_IMAGES");
const ids = (o) => Object.keys(o || {});
const parcs = D.parks || [];
const animaux = D.animals || {};
console.log(`version ${D.meta.version} · ${parcs.length} parcs · ${ids(animaux).length} animaux · ${ids(D.sources).length} sources · ${(D.updates || []).length} nouveautés`);

// Sources citées partout (sauf dans la liste des sources elle-même)
const cites = new Map(); // id -> premier endroit
(function parcourir(o, chemin) {
  if (Array.isArray(o)) o.forEach((x, i) => {
    if (typeof x === "string" && /^s\d+$/.test(x)) { if (!cites.has(x)) cites.set(x, chemin); }
    else parcourir(x, chemin + "[" + i + "]");
  });
  else if (o && typeof o === "object") for (const k in o) {
    if (o === D && k === "sources") continue;
    parcourir(o[k], chemin ? chemin + "." + k : k);
  }
})(D, "");
for (const [id, ou] of cites) if (!D.sources[id]) pb(`source ${id} citée (${ou}) mais absente de sources`);
const inutilisees = ids(D.sources).filter((s) => !cites.has(s));
if (inutilisees.length) av(`${inutilisees.length} source(s) jamais citée(s) : ${inutilisees.slice(0, 15).join(", ")}${inutilisees.length > 15 ? "…" : ""}`);
for (const [id, s] of Object.entries(D.sources)) {
  if (!s.url) av(`source ${id} sans lien (url)`);
  if (!s.title) pb(`source ${id} sans titre`);
}

// Animaux et illustrations
for (const [aid, a] of Object.entries(animaux)) {
  if (!a.name || !a.name.en || !a.name.fr) pb(`animal ${aid} : nom en/fr manquant`);
  if (a.img && !I[a.img]) pb(`animal ${aid} : illustration ${a.img} absente de images.js`);
  if (!a.img) av(`animal ${aid} sans illustration`);
}
const imgUtilisees = new Set(Object.values(animaux).map((a) => a.img).filter(Boolean));
for (const k of ids(I)) if (!imgUtilisees.has(k)) av(`image ${k} présente dans images.js mais jamais utilisée`);

// Parcs
const pays = new Map((D.countries || []).map((c) => [c.id, c]));
const vus = new Set();
for (const p of parcs) {
  if (vus.has(p.id)) pb(`parc ${p.id} en double`); vus.add(p.id);
  if (!pays.has(p.country)) pb(`parc ${p.id} : pays ${p.country} inconnu`);
  else if (pays.get(p.country).available === false) pb(`parc ${p.id} : pays ${p.country} marqué non disponible`);
  if (!p.name || !p.name.en || !p.name.fr) pb(`parc ${p.id} : nom en/fr manquant`);
  if (!p.map || typeof p.map.lat !== "number") pb(`parc ${p.id} : map manquante`);
  const z = p.zone;
  if (!z || !(z.south < z.north && z.west < z.east)) pb(`parc ${p.id} : zone (rectangle) manquante ou inversée`);
  else if (p.map && !(p.map.lat >= z.south && p.map.lat <= z.north && p.map.lng >= z.west && p.map.lng <= z.east)) av(`parc ${p.id} : le centre de la carte est hors de sa zone`);
  const pa = (D.parkAnimals || {})[p.id] || {};
  for (const aid of p.animals || []) {
    if (!animaux[aid]) pb(`parc ${p.id} : animal ${aid} inconnu`);
    if (!pa[aid]) pb(`parc ${p.id} : animal ${aid} listé mais sans fiche parkAnimals`);
  }
  for (const aid of ids(pa)) {
    if (!(p.animals || []).includes(aid)) pb(`parkAnimals.${p.id}.${aid} existe mais l'animal n'est pas dans la liste du parc`);
    const f = pa[aid];
    if (!f.pop || !f.pop.en || !f.pop.fr) pb(`parkAnimals.${p.id}.${aid} : pop en/fr manquant`);
    if (!["official", "scientific", "estimate", "unofficial", "none"].includes(f.conf)) pb(`parkAnimals.${p.id}.${aid} : conf « ${f.conf} » inconnu`);
  }
}
for (const pid of ids(D.parkAnimals)) if (!vus.has(pid)) pb(`parkAnimals.${pid} : parc inexistant`);
for (const c of D.countries || []) if (c.available && !parcs.some((p) => p.country === c.id)) pb(`pays ${c.id} disponible mais sans parc`);
for (const aid of ids(D.ranges)) if (!animaux[aid]) pb(`ranges.${aid} : animal inconnu`);

// Textes bilingues vides n'importe où
(function bilingue(o, chemin) {
  if (Array.isArray(o)) return o.forEach((x, i) => bilingue(x, chemin + "[" + i + "]"));
  if (!o || typeof o !== "object") return;
  const k = Object.keys(o);
  if (k.includes("en") && k.includes("fr") && typeof o.en === "string" && typeof o.fr === "string") {
    if (!o.en.trim() || !o.fr.trim()) pb(`texte vide en ${!o.en.trim() ? "anglais" : "français"} : ${chemin}`);
    return;
  }
  for (const kk of k) bilingue(o[kk], chemin ? chemin + "." + kk : kk);
})(D, "");

// Nouveautés
const u0 = (D.updates || [])[0];
if (u0) for (let i = 1; i < D.updates.length; i++) if (D.updates[i].date > D.updates[i - 1].date) { av(`updates : l'entrée ${i} (${D.updates[i].date}) est plus récente que la précédente (ordre)`); break; }

/* ---------- 2. Code ---------- */
titre("Code");
const html = fs.readFileSync(path.join(RACINE, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
scripts.forEach((s, i) => { try { new vm.Script(s, { filename: "index.html <script> n°" + (i + 1) }); } catch (e) { pb(`index.html, <script> n°${i + 1} : ${e.message}`); } });
const sw = fs.readFileSync(path.join(RACINE, "sw.js"), "utf8");
try { new vm.Script(sw); } catch (e) { pb("sw.js : " + e.message); }
const cache = (sw.match(/const CACHE = "([^"]+)"/) || [])[1];
console.log(`${scripts.length} script(s) inline · cache ${cache}`);
const listeSw = (sw.match(/const FICHIERS = \[([^\]]*)\]/) || [, ""])[1].match(/"([^"]+)"/g) || [];
for (const f of listeSw.map((x) => x.slice(1, -1))) if (f !== "./" && !fs.existsSync(path.join(RACINE, f))) pb(`sw.js met en cache ${f}, qui n'existe pas`);
try {
  const ancien = require("child_process").execSync("git show origin/main:sw.js", { cwd: RACINE, stdio: ["ignore", "pipe", "ignore"] }).toString();
  const ancienD = require("child_process").execSync("git show origin/main:donnees.js", { cwd: RACINE, stdio: ["ignore", "pipe", "ignore"], maxBuffer: 64e6 }).toString();
  const cacheEnLigne = (ancien.match(/const CACHE = "([^"]+)"/) || [])[1];
  const versionEnLigne = (ancienD.match(/version: "([^"]+)"/) || [])[1];
  const fichiersApp = ["index.html", "donnees.js", "images.js", "sw.js", "manifest.webmanifest", "icone.png", "icone-192.png"];
  const change = require("child_process").execSync("git diff --name-only origin/main -- " + fichiersApp.join(" "), { cwd: RACINE }).toString().trim();
  if (change) {
    console.log(`fichiers de l'appli modifiés par rapport au site en ligne : ${change.split("\n").join(", ")}`);
    if (cache === cacheEnLigne) pb(`l'appli a changé mais le cache est toujours ${cache} : l'incrémenter dans sw.js`);
    if (D.meta.version === versionEnLigne) pb(`l'appli a changé mais meta.version est toujours ${versionEnLigne}`);
  }
} catch (e) { av("comparaison avec origin/main impossible (git fetch origin main ?)"); }

/* ---------- 3. Navigateur ---------- */
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".png": "image/png", ".webmanifest": "application/manifest+json", ".json": "application/json", ".css": "text/css" };
function serveur() {
  return new Promise((res) => {
    const s = http.createServer((req, rep) => {
      let p = decodeURIComponent(req.url.split("?")[0]);
      if (p.endsWith("/")) p += "index.html";
      const f = path.join(RACINE, p);
      if (!f.startsWith(RACINE) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { rep.writeHead(404); return rep.end(); }
      rep.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" });
      fs.createReadStream(f).pipe(rep);
    });
    s.listen(0, "127.0.0.1", () => res(s));
  });
}

async function navigateur() {
  let chromium;
  try { ({ chromium } = require("playwright")); } catch (e) { pb("Playwright introuvable : test navigateur non fait"); return; }
  const srv = await serveur();
  const base = `http://127.0.0.1:${srv.address().port}/`;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: "block" });
  const now = Date.now();
  // Relais et services externes simulés : aucune donnée réelle n'est envoyée.
  await ctx.route("**/*saffrica-obs*/**", (r) => {
    if (r.request().method() === "POST") return r.fulfill({ json: { ok: true } });
    const u = new URL(r.request().url());
    const animal = u.searchParams.get("animal") || "lion";
    return r.fulfill({ json: { observations: [{ id: "test1", animal, lat: -24.0, lng: 31.5, ts: now - 3 * 3600e3, park: "kruger" }] } });
  });
  await ctx.route("**/*saffrica-relais*/**", (r) => r.fulfill({ json: { ok: true, test: true } }));
  await ctx.route("**/nominatim.openstreetmap.org/**", (r) => r.fulfill({ json: { address: { country: "South Africa" } } }));
  await ctx.route("**/tile.openstreetmap.org/**", (r) => r.abort());
  await ctx.addInitScript(() => { try { localStorage.setItem("saffrica-cgu", "3"); } catch (e) {} });

  const page = await ctx.newPage();
  const erreurs = [];
  let ici = "";
  page.on("pageerror", (e) => erreurs.push(`${ici} : ${e.message}`));
  page.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) erreurs.push(`${ici} : console : ${m.text()}`); });

  const routes = ["#/", "#/mine", "#/news", "#/verify", "#/obs"];
  for (const c of D.countries) if (parcs.some((p) => p.country === c.id)) routes.push("#/c/" + c.id, "#/obs/c/" + c.id);
  for (const p of parcs) routes.push("#/p/" + p.id);
  for (const aid of ids(animaux)) routes.push("#/a/" + aid);
  if (!RAPIDE) for (const p of parcs) for (const aid of p.animals || []) routes.push(`#/p/${p.id}/a/${aid}`);
  routes.push("#/obs/" + parcs[0].id, "#/obs/none");

  const MOTS = /\bundefined\b|\bNaN\b|\[object /;
  for (const lang of ["fr", "en"]) {
    titre(`Navigateur (${lang}) : ${routes.length} pages`);
    await page.goto(base + "#/");
    await page.evaluate((l) => { localStorage.setItem("awf-lang", l); }, lang);
    await page.reload();
    await page.waitForSelector("#app *");
    let n = 0;
    for (const h of routes) {
      ici = `${lang} ${h}`;
      await page.evaluate((hh) => { location.hash = hh; }, h);
      if (h.startsWith("#/obs/") && !h.startsWith("#/obs/c/")) await page.waitForTimeout(1500);
      else await page.waitForTimeout(h.startsWith("#/a/") || h.includes("/a/") ? 30 : 10);
      const r = await page.evaluate(() => {
        const app = document.getElementById("app");
        const txt = document.body.innerText;
        const attrs = [...document.querySelectorAll("[href],[src],[alt],[aria-label],[placeholder]")].map((e) => ["href", "src", "alt", "aria-label", "placeholder"].map((a) => { const v = e.getAttribute(a) || ""; return v.startsWith("data:") ? "" : v; }).join(" ")).join(" ");
        return { vide: !app || app.innerHTML.trim().length < 20, txt, attrs, lang: document.documentElement.lang };
      });
      if (r.vide) pb(`${ici} : page vide`);
      const m = (r.txt.match(MOTS) || r.attrs.match(MOTS));
      if (m) {
        const t = r.txt + " " + r.attrs, i = t.search(MOTS);
        pb(`${ici} : « ${m[0]} » affiché : …${t.slice(Math.max(0, i - 60), i + 40).replace(/\s+/g, " ")}…`);
      }
      if (r.lang !== lang) pb(`${ici} : langue de la page ${r.lang} au lieu de ${lang}`);
      n++;
    }
    console.log(`${n} pages parcourues`);
  }
  for (const e of [...new Set(erreurs)]) pb("erreur JavaScript, " + e);

  /* ---------- 4. Captures ---------- */
  titre("Captures (390 px)");
  fs.mkdirSync(CAPTURES, { recursive: true });
  const p0 = parcs[0], a0 = p0.animals[0];
  const types = [["accueil", "#/"], ["pays", "#/c/" + p0.country], ["parc", "#/p/" + p0.id], ["fiche", `#/p/${p0.id}/a/${a0}`], ["mes-animaux", "#/mine"], ["nouveautes", "#/news"]];
  const dernier = parcs[parcs.length - 1];
  types.push(["parc-dernier-ajoute", "#/p/" + dernier.id]);
  await page.evaluate(() => localStorage.setItem("awf-lang", "fr"));
  await page.reload();
  for (const [nom, h] of types) {
    await page.evaluate((hh) => { location.hash = hh; }, h);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(CAPTURES, nom + ".png"), fullPage: false });
  }
  console.log("captures dans " + CAPTURES);

  await browser.close();
  srv.close();
}

(async () => {
  try { await navigateur(); } catch (e) { pb("test navigateur interrompu : " + (e && e.stack || e)); }
  titre("Résultat");
  if (avertissements.length) {
    console.log(`${avertissements.length} avertissement(s) (à regarder, pas bloquant) :`);
    for (const a of avertissements.slice(0, 40)) console.log("  ⚠ " + a);
    if (avertissements.length > 40) console.log(`  … et ${avertissements.length - 40} autres`);
  }
  if (problemes.length) {
    console.log(`${problemes.length} problème(s) :`);
    for (const p of problemes.slice(0, 80)) console.log("  ✗ " + p);
    if (problemes.length > 80) console.log(`  … et ${problemes.length - 80} autres`);
    process.exit(1);
  }
  console.log("✓ Aucun problème.");
})();
