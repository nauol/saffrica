# Saffrica — consignes pour Claude Code

Ce fichier est lu automatiquement par chaque session Claude Code. Il décrit le projet, ses règles et la méthode de travail.
⚠️ Il est **public** (dépôt et site GitHub Pages) : n'y mettre aucun secret (clé, mot de passe).

Répondre à l'utilisateur **en français**, simplement : il n'est pas développeur.

---

## 1. Le projet
Saffrica est une application web mobile (PWA), **bilingue français/anglais**, pour les **safaris en Afrique**. On choisit pays → parc → animal → fiche. On peut aussi identifier un animal par photo (IA en ligne), noter où on l'a vu (observations partagées entre tous les utilisateurs, avec carte) et cocher les animaux vus (page « Mes animaux », avec titres).

- Site : https://nauol.github.io/saffrica (GitHub Pages, publié depuis la branche `main`)
- Dépôt : github.com/nauol/saffrica
- Chaque chiffre affiché a une **source et une date**. Quand une info manque : « Non trouvé dans les sources utilisées ».
- Fiches et recherche marchent **hors ligne**.
- **Zéro coût mensuel** : GitHub Pages, Cloudflare gratuit, Gemini gratuit. Pas de carte bancaire. Ne rien proposer de payant.

## 2. Les fichiers
L'appli tient en 8 fichiers à la racine (ci-dessous). Il n'y a **pas de règle figée** sur le nombre de fichiers : on peut ajouter ce qui est utile (scripts de test, outils…). Tout ce qui est dans le dépôt est public sur le site : rien de secret. Si un nouveau fichier doit marcher hors ligne, l'ajouter à `FICHIERS` dans `sw.js`.

| Fichier | Rôle | Taille |
|---|---|---|
| `index.html` | toute l'appli : HTML + CSS + un seul `<script>` inline, sans framework | ~126 Ko |
| `donnees.js` | `window.APP_DATA` (toutes les données) | ~1,3 Mo |
| `images.js` | `window.APP_IMAGES` (illustrations en base64, clé `animal-<id>.jpg`) | ~5,7 Mo |
| `sw.js` | service worker (cache `saffrica-vNN`) | |
| `manifest.webmanifest` | manifeste PWA | |
| `icone.png`, `icone-192.png` | icônes | |
| `inter.woff2` | police Inter (latin, graisses 400–800, licence OFL), servie localement pour marcher hors ligne | 48 Ko |
| `CLAUDE.md` | ce fichier (pas mis en cache par `sw.js`, pas utilisé par l'appli) | |
| `outils/test.js` | test complet (voir §9) | |
| `outils/fonctions.js` | test des fonctionnalités une par une (appelé par `test.js`) | |
| `.claude/skills/` | skills de design pour Claude Code : `web-design-guidelines` (Vercel, règles de qualité UI) et 12 styles `style-*` (awesome-design-md). taste-skill volontairement non installé (fait pour des sites vitrines, 40 Mo, script automatique) | |

Les relais Cloudflare (`worker.js`, `worker-obs.js`) ne sont PAS dans le dépôt : l'utilisateur les colle lui-même dans Cloudflare. Si on les modifie, donner le code complet à coller.

## 3. Faire une nouvelle version
1. `donnees.js` → `meta.version` (ex. `"2.10.1"` → `"2.10.2"`), et ajouter une entrée **en tête** de `updates: [` (date, title {en,fr}, text {en,fr}, src []).
2. `sw.js` → incrémenter `const CACHE = "saffrica-vNN"` (sinon les utilisateurs gardent l'ancienne version).
3. Vérifier la syntaxe du `<script>` de `index.html` et que `donnees.js` / `images.js` se chargent dans Node.
4. Tester (voir §9).

## 4. Publier (Git)
- Travailler sur une **branche de travail**, jamais directement sur `main`.
- **Publier sur `main` (= mettre le site à jour) seulement quand l'utilisateur le demande** (« publie », « mets en ligne »).
- Un commit normal par version, message « Saffrica X.Y.Z : résumé ». ~~Plus de commit « Vide le dépôt avant la version X »~~ : Git enregistre déjà les différences, l'historique reste lisible et on peut revenir en arrière facilement.
- Avant de publier, vérifier `git ls-files` : aucun fichier de travail oublié (données temporaires, captures…).
- Après publication : GitHub Pages met ~1 à 10 min ; ouvrir l'appli deux fois pour que le cache se mette à jour.

## 5. Design (version 3.0, direction « App premium » choisie le 26 nov. 2026)
- Style clair et net façon app iPhone, police Inter, couleur principale vert `#2F6B3B`, fond `#F2F2F0`, cartes blanches arrondies (18 px), ombres légères. **Mode sombre automatique** (variables CSS redéfinies dans `@media (prefers-color-scheme: dark)`). Toutes les couleurs passent par les variables de `:root`.
- Accueil : « Guide de safari / Collectionnez la faune » (titre plus petit, classe `htitle`), recherche, 3 tuiles (Identifier par photo en vert, Observations avec épingle violette, Mes animaux avec étoile orange), puis **une grande carte image par pays** avec la **frontière du pays dessinée en blanc** et **un point par parc** (`countryCard`, `countryMap`), puis « Autres pays · bientôt » replié : **seulement les pays marqués `soon: true`** (§11).
- Page pays : même carte en en-tête, puis liste groupée des parcs. Page parc : surtitre pays, titre, carte d'infos, grille d'animaux (vignettes image + nom + statut ; vu = contour vert + coche).
- Fiche animal : illustration plein écran en haut, barre du haut transparente (elle reprend un fond quand on fait défiler : classe `scrolled`), puis une « feuille » arrondie (`.sheet`) : surtitre parc, nom, chiffres du parc et du monde, où le voir, à propos, etc. Bouton « vu » en bas sur toute la largeur. `body.is-fiche` est posé quand la vue renvoie `fiche: true`.
- Nouveau pays : ajouter dans `countries[]` `cover` (id de l'animal de la photo) et `outline` {viewBox, d, proj:[k, minx, miny, s], src} — frontière Nominatim simplifiée (`polygon_threshold=0.03`, îles lointaines retirées), projetée comme dans `outils`/l'historique (x = lng·k, y = −lat, mis à l'échelle sur 100).
- Avant de changer le design : maquettes et captures à 390 px (clair + sombre) montrées à l'utilisateur.
- **Parcours photo → observation** (3.0.1, voulu par l'utilisateur) : `recHandle` note d'où vient la photo (`ctx` = `"obs"` depuis les pages Observations, `"home"` sinon). Résultat : gros bouton « Noter l'observation » ; depuis l'accueil seulement, petit « Juste voir la fiche » ; si l'IA hésite, toucher un animal le choisit pour l'observation. **Aucun « Voir la fiche » pendant les étapes** (sur place ? → où et quand → Enregistrer) : la fiche et la carte ne sont proposées qu'à la fin (« Observation enregistrée »). « Où et quand » : coordonnées, « ou », bouton « Choisir sur la carte », puis date. Chaque étape a un petit « Annuler » et, **après le résultat de l'IA, une flèche retour ← en haut à gauche** (`recShow({back})`) qui revient à l'étape précédente sans perdre la photo ni l'animal (`REC.showResult` rouvre le résultat). La page « Photos à vérifier » garde l'ancien comportement (fiche directe).
- **Page Observations (3.2.0)** : on choisit **d'abord où l'on est** (cartes des pays + « Hors parc »), **pas de bouton photo sur `#/obs`**. Page pays `#/obs/c/<pays>` : liste des parcs, puis « Ailleurs dans ce pays ? » + bouton photo. Page parc `#/obs/<parc>` : carte des observations + bouton photo. `obsArea()` retient la zone au moment de la photo (`REC.area`) : « Choisir sur la carte » s'ouvre sur ce parc (`park.map`), ce pays (cadre calculé depuis `outline`) ou toute l'Afrique (hors parc, accueil).
- **Cartes Leaflet dans la page** : `.obsmap` a `position: relative; z-index: 0; isolation: isolate`, sinon les tuiles passent devant les fenêtres (`.recbox`). Le test simule des tuiles pour le vérifier.
- **Limites des parcs sur les cartes (3.3.0)** : `drawParks(map, parcCourant)` dessine tous les `shape` en gris foncé discret (`#1b1d18`, le parc affiché plus marqué), en pointillés pour un parc sans contour (rectangle `zone`, ex. Mapungubwe). Non cliquables (`interactive: false`) pour que toucher la carte place toujours le point. Sur la carte d'un parc (`#/obs/<parc>`) et sur « Choisir sur la carte ».
- **Carte unique des observations (3.4.0)** : la carte d'un parc et « Hors parc » chargent **toutes** les observations (`GET /?limit=1000`, sans `park`) ; seul le zoom de départ change (parc → `park.map`, hors parc → Afrique). Le filtre par animal porte sur toute la carte ; la bulle d'un point indique son parc. « Choisir sur la carte » **ne montre pas** les observations (voulu par l'utilisateur). Plus tard, si beaucoup de points : les regrouper en bulles. Vérifié par `outils/test.js`.

## 6. Architecture de `index.html`
- **Routage par hash** (fonction `render()`) : `#/` (accueil, pays), `#/c/<pays>`, `#/p/<parc>`, `#/p/<parc>/a/<animal>`, `#/a/<animal>` (si l'animal n'est que dans un parc, on affiche directement la fiche du parc), `#/mine` (Mes animaux), `#/obs` (observations : pays), `#/obs/c/<pays>` (parcs du pays), `#/obs/<parc|none>` (carte), `#/news`, `#/verify` (photos gardées à vérifier).
- Fonctions clés : `viewCountries`, `viewCountry`, `viewPark`, `viewAnimal`, `viewMine`, `viewObs`, `viewObsCountry`, `viewNews`, `viewVerify`, `menuChain`/menu ☰, `photo()` + `window.saffFit` + `FOCUS` (cadrage des illustrations), `orderAnimals` (les Cinq Grands d'abord : lion, léopard, éléphant, rhinocéros blanc, rhinocéros noir, buffle ; puis ordre alphabétique), `rankOf`/`RANKS` (titres), `lastSeenLoad` (dernière observation), `parkOf` (observation → parc : rectangle `zone` puis vrai contour `shape` avec `inRing` ; si plusieurs parcs contiennent le point, le plus petit gagne).
- Textes de l'interface : objet `UI` (fr/en), lu par `T()` ; `tr()` choisit la langue d'un objet `{en, fr}`.
- Menu ☰ : bloc fixe Accueil / Observations / Mes animaux (toujours dans cet ordre), puis « Vous êtes ici » (pays > parc > animal).
- Mes animaux : 63 animaux (les 3 pages de groupe ne comptent pas), rond pour cocher « vu », filtres Tous / Vus / Pas encore vus. « Vu » stocké dans `localStorage` (`saffrica-seen`). Titres : Bébé safari (0), Petit pisteur (5), Éclaireur de la savane (15), Chasseur de traces (25), Ranger (35), Maître pisteur (45), Légende du safari (55), Gardien de l'Afrique (tous).
- Illustrations : sur la fiche, image entière pour les images presque carrées ; dans les listes, cadre plus haut centré sur l'animal (`FOCUS` = centre vertical en % par image).
- Autres clés `localStorage` : `awf-lang` (langue), `saffrica-cgu` (`"3"` = conditions acceptées), `saffrica-obsq` (observations en attente).

## 7. Données (`window.APP_DATA`)
- `meta` {version, lastChecked, nextUpdate}
- `countries[]` : `{ id, en, fr, available, soon?, cover?, outline? }` — disponibles : `za`, `tz`, `ke` (avec `cover` et `outline`, voir §5).
- `status`, `gauge` : statuts UICN (LC, NT, VU, EN, CR, + VAR pour les pages de groupe, NE).
- `sources` : `s1` … `s719` (des numéros manquent : les sources jamais citées ont été retirées en 2.10.2), chacune `{title, publisher, date:{en,fr}, url}`. Toujours ajouter les nouvelles sources à la suite (numéro max + 1).
- `parks[]` : `{id, country, name{en,fr}, region, facts[{label,value}], about, bestTime, sources[], map{lat,lng,zoom}, zone{south,north,west,east}, shape?, shapeSrc?, animals[ids]}`.
  - `shape` : vrai contour du parc, liste d'anneaux de points `[lat, lng]` (OpenStreetMap via Nominatim, simplifié à ~100 m, arrondi à 3 décimales, source `s719`). `zone` = rectangle qui englobe le contour (premier tri rapide). Mapungubwe n'a pas de `shape` (contour OSM incomplet) : on garde son rectangle. Kgalagadi : contour du seul côté sud-africain, comme la fiche. Les parcs ajoutés sont écrits une ligne JSON par parc.
- `animals[id]` : fiche (nom, nom scientifique, statut, population mondiale, régime, taille, comportement, reconnaissance, mâle/femelle, sécurité…). 66 entrées : 63 espèces + 3 pages de groupe (`pythons`, `baboons`, `gyps`, avec `group: true` et `types[]`).
- `parkAnimals[parc][animal]` : `{pop{en,fr}, asOf, conf: official|scientific|estimate|unofficial|none, src[], trend?, note{en,fr}, spot{en,fr}, spotSrc[]}`. Une ligne JSON par parc pour les parcs ajoutés.
- `ranges[id]` : pays où vit l'animal.
- `updates[]` : journal des nouveautés (le plus récent en premier).

### Parcs actuels (23)
- **Afrique du Sud (7)** : kruger, addo, pilanesberg, hluhluwe-imfolozi, kgalagadi, marakele, mapungubwe.
- **Tanzanie (8)** : serengeti, ngorongoro, tarangire, lake-manyara, ruaha, nyerere, mikumi, katavi (chiffres revérifiés une 2e fois).
- **Kenya (8)** : maasai-mara, amboseli, tsavo-east, tsavo-west, samburu, lake-nakuru, nairobi, meru.
- Règle « uniquement les animaux déjà dans l'appli ». Exclus volontairement en Afrique de l'Est : babouin chacma, porc-épic du Cap, cobe des roseaux du Sud, autruche de Somalie, oryx beisa (espèces différentes de celles des fiches). La page de groupe **« Babouins »** est dans 15 parcs du Kenya et de Tanzanie (pas Katavi : aucune source).

## 8. Services en ligne
- **Reconnaissance photo** : Worker Cloudflare `saffrica-relais` → https://saffrica-relais.michel-elouan.workers.dev/ (`?test=1` pour tester). N'accepte que l'origine `https://nauol.github.io`, donc ne marche pas en local. Modèles Gemini gratuits en cascade, clé dans le secret Cloudflare `GEMINI_KEY`.
- **Observations** : Worker `saffrica-obs` → https://saffrica-obs.michel-elouan.workers.dev, base Cloudflare D1, table `observations(id PK, animal, lat, lng, ts, park, created)`. `POST /` {id, animal, lat, lng, ts, park|null}, `GET /?park=<id|none>&animal=&limit=`, `GET /latest`. File d'attente hors ligne côté appli (`localStorage` `saffrica-obsq`).
- **Carte** : Leaflet 1.9.4 + tuiles OpenStreetMap, chargés à la demande depuis jsdelivr (usage léger seulement ; prévoir un fournisseur si usage commercial ou fort trafic).
- Pays déduit des coordonnées hors parc : Nominatim (OpenStreetMap), avec cache.
- Photos gardées pour plus tard : IndexedDB `saffrica`, magasin `pending`.

## 9. Tests (Node + Playwright)
**Lancer `node outils/test.js`** depuis la racine (≈ 1 min 30 ; `--rapide` saute les fiches parc par parc ; `--captures DIR` pour choisir le dossier des captures). Il fait tout ce qui suit et finit par « ✓ Aucun problème » ou la liste des problèmes (code de sortie 1). Il vérifie aussi que, si l'appli a changé par rapport à `origin/main`, la version et le cache ont bien été incrémentés. Compléter le script quand on ajoute une fonctionnalité.

**Règle (demandée par l'utilisateur après la 3.0.1, où « Choisir sur la carte » avait été cassé par erreur) : avant chaque publication, `node outils/test.js` complet doit finir par « ✓ Aucun problème ».** Il inclut `outils/fonctions.js`, qui rejoue ~30 fonctionnalités dans le navigateur : recherche (animal, parc, pays, pays « bientôt »), cartes pays (frontière + points), page pays, page parc (grille, recherche, sources, légende), fiche (vu, zoom, dernière observation, chiffres, sources, pays), retour, Mes animaux (cocher, titre, filtres), menu, langue, Nouveautés, conditions, Observations (pays, parcs, carte, filtre), tous les résultats photo (reconnu, hésitation, inconnu, aucun animal, panne, hors ligne), observation sur place (GPS → bon parc), photo ancienne (carte, coordonnées fausses), envoi hors ligne puis au retour du réseau, page À vérifier. **Quand on modifie un écran, mettre à jour ou ajouter la vérification correspondante ; quand on remplace un bloc de code, comparer la liste des fonctions avant/après** (`grep -oE 'function [A-Za-z0-9_]+'`).

Ce que fait le script :
- Servir le dossier en local, intercepter les relais avec des réponses simulées (`**saffrica-obs**`, `**saffrica-relais**`), forcer `localStorage.saffrica-cgu = "3"` pour sauter l'écran des conditions.
- Parcourir toutes les pages (pays, parcs, fiches de chaque parc, en fr et en) et vérifier : aucun « undefined », « NaN » ou « [object », aucune erreur JavaScript, toutes les sources citées existent dans `sources`.
- Regarder les écrans à 390 px de large (captures) pour la mise en page, et les montrer à l'utilisateur quand l'affichage change.

## 10. Ajouter un pays (méthode qui a marché)
1. Choisir les parcs principaux du pays (avec l'utilisateur).
2. Une recherche par parc (agents en parallèle), avec une consigne commune :
   - sources officielles d'abord (organismes gestionnaires, recensements nationaux, plans de gestion, études), avec la date et le périmètre de chaque chiffre ;
   - **rouvrir chaque source avant de retenir un chiffre** ;
   - utiliser seulement les ids de la liste des animaux, **pages de groupe comprises** (`pythons`, `baboons`, `gyps`) quand l'espèce exacte n'est pas celle de la fiche mais que le groupe est présent ;
   - sortie JSON : `{sources[], park{…, zone, zoneNote}, animals{id:{pop, asOf, conf, src[index], trend?, note, spot, spotSrc}}, doubts[]}`.
3. Intégrer par script : renuméroter les sources (max + 1), ajouter les parcs, les `parkAnimals`, mettre `available: true` au pays, version + nouveauté, cache +1.
4. Tester (§9), ajouter `cover` + `outline` au pays (§5), puis publier seulement si l'utilisateur le demande (§4).
5. Résumer honnêtement : chiffres anciens, chiffres d'écosystème, présences fragiles, exclusions.

L'utilisateur ajoute les pays lui-même, à son rythme (pas de tâche automatique).

## 11. Liste des pays (décidée le 26 nov. 2026)
- **10 pays principaux** : Afrique du Sud ✅, Kenya ✅, Tanzanie ✅, Botswana, Namibie, Zambie, Zimbabwe, Ouganda, Rwanda, et **Mozambique ou Malawi** (10e place à choisir).
- **Deuxième cercle** (plus tard, après vérification des conseils aux voyageurs) : Malawi, Eswatini, Éthiopie, Angola, Gabon, Congo (Odzala), Tchad (Zakouma), RDC (Virunga), Bénin (Pendjari), Sénégal (Niokolo-Koba), Ghana (Mole), Côte d'Ivoire (Comoé).
- **À enlever** : Maghreb, Sahel et Sahara, petits pays et îles sans vrai safari. Madagascar : cas à part.
- **Fait en 3.1.0** : « Autres pays · bientôt » n'affiche que les pays `soon: true` dans `countries[]` = les 6 principaux restants + Mozambique + le deuxième cercle (dont Malawi) + **Madagascar** (20 pays). Les autres restent dans les données (pour « Où vit-il » sur les fiches) mais n'apparaissent plus sur l'accueil. 10e pays principal (Mozambique ou Malawi) : encore à choisir.

## 12. Vérification mensuelle automatique
Une tâche planifiée « Vérification mensuelle saffrica » tourne le 1er de chaque mois (8 h 59, heure de Zurich). Elle lit le site publié, vérifie **un seul pays par mois** (roulement : pays ayant des parcs, triés par id ; index = (année × 12 + mois) mod nombre de pays → déc. 2026 Kenya, janv. 2027 Tanzanie, févr. 2027 Afrique du Sud…), produit un rapport et un e-mail. Elle ne modifie rien. Quand l'utilisateur demande d'appliquer un rapport : intégrer les corrections sourcées, mettre à jour `meta.lastChecked` / `nextUpdate`, version, nouveauté, cache.

## 13. À faire plus tard
1. ~~Limites des parcs~~ : fait en 2.10.2 (contours OSM pour 22 parcs). Restent : Mapungubwe (trouver un contour complet), Tsavo Ouest (contour OSM ~7 000 km² pour 9 065 officiels). Pour un nouveau parc : Nominatim `search?format=jsonv2&polygon_geojson=1&polygon_threshold=0.002`, vérifier que la surface correspond à la surface officielle, puis ajouter `shape` + `zone` englobante. Contours dessinés sur les cartes depuis la 3.3.0.
2. Prochaine mise à jour des données le **1er décembre 2026** (revérifier statuts UICN et chiffres ; vautours oricou et Gyps en particulier).
3. Sources non relues : environ 15 au Serengeti et 14 à Ruaha. Recensement national tanzanien 2024/2025 : chiffres par parc pas encore publiés.
**⚠ Avant la sortie publique — à RAPPELER à l'utilisateur :** supprimer les **observations de test** dans la base Cloudflare D1 (au moins 2 lions à Wellington, Nouvelle-Zélande, lat ≈ −41.29, lng ≈ 174.78 ; vérifier aussi les autres tests). L'appli ne sait pas supprimer : c'est à faire dans Cloudflare → D1 → `observations` (`DELETE FROM observations WHERE …`).
4. **Règles contre le braconnage** (cacher ou retarder les positions des espèces sensibles) avant la sortie publique.
5. Page « Mes observations » avec suppression par code secret : proposée, pas décidée.
6. Après les 10 pays : nouvelles fiches pour les espèces proches mais différentes (porc-épic à crête, cobe de Bohor…), avec les illustrations à fournir par l'utilisateur ; revoir les babouins de Katavi.
7. Système de récompenses : les titres sont faits, la suite est prévue tout à la fin.
8. ~~Refonte du design~~ : faite en 3.0.0 (§5).
9. Commercialisation plus tard : les illustrations appartiennent à l'utilisateur ; conditions d'utilisation des données UICN à vérifier ; fond de carte OpenStreetMap à remplacer si usage commercial.
