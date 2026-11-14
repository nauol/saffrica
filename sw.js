/* Saffrica : permet l'installation et l'utilisation hors ligne.
   Change le numéro de CACHE à chaque mise à jour des fichiers. */
const CACHE = "saffrica-v4";
const FICHIERS = ["./", "index.html", "donnees.js", "icone.png", "icone-192.png", "manifest.webmanifest"];
const IMAGES = [
  "animal-elephant.jpg", "animal-giraffe.jpg", "animal-zebra.jpg", "animal-blackrhino.jpg",
  "animal-whiterhino.jpg", "animal-buffalo.jpg", "animal-hippo.jpg", "animal-wildebeest.jpg",
  "animal-kudu.jpg", "animal-impala.jpg", "animal-waterbuck.jpg"
];

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
      .then((cles) => Promise.all(cles.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
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
