/* Saffrica : permet l'installation et l'utilisation hors ligne.
   Change le numéro de CACHE à chaque mise à jour des fichiers. */
const CACHE = "saffrica-v22";
const CACHE_CDN = "saffrica-cdn"; /* bibliothèque de reconnaissance : gardée d'une mise à jour à l'autre */
const FICHIERS = ["./", "index.html", "donnees.js", "images.js", "icone.png", "icone-192.png", "manifest.webmanifest"];
const IMAGES = []; /* les images sont maintenant dans images.js */

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      c.addAll(FICHIERS).then(() =>
        /* une image manquante ne doit pas empêcher l'installation */
        Promise.all(IMAGES.map((u) => c.add(u).catch(() => {})))
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((cles) => Promise.all(cles.filter((k) => k !== CACHE && k !== CACHE_CDN).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const origine = new URL(req.url).origin;
  if (origine === "https://cdn.jsdelivr.net") {
    e.respondWith(
      caches.open(CACHE_CDN).then((c) =>
        c.match(req).then((enCache) => enCache || fetch(req).then((res) => {
          if (res && res.ok) c.put(req, res.clone());
          return res;
        }))
      )
    );
    return;
  }
  if (origine !== self.location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((enCache) => {
      const reseau = fetch(req).then((res) => {
        if (res && res.ok) { const copie = res.clone(); caches.open(CACHE).then((c) => c.put(req, copie)); }
        return res;
      }).catch(() => enCache || (req.mode === "navigate" ? caches.match("index.html") : undefined));
      return enCache || reseau;
    })
  );
});
