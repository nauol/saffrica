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
Le dépôt contient **les 7 fichiers de l'appli + ce `CLAUDE.md`**, tous à la racine, sans sous-dossier. Ne pas en ajouter d'autres sans l'accord de l'utilisateur (scripts de test, données de travail… → dossier temporaire, hors du dépôt).

| Fichier | Rôle | Taille |
|---|---|---|
| `index.html` | toute l'appli : HTML + CSS + un seul `<script>` inline, sans framework | ~126 Ko |
| `donnees.js` | `window.APP_DATA` (toutes les données) | ~1,3 Mo |
| `images.js` | `window.APP_IMAGES` (illustrations en base64, clé `animal-<id>.jpg`) | ~5,7 Mo |
| `sw.js` | service worker (cache `saffrica-vNN`) | |
| `manifest.webmanifest` | manifeste PWA | |
| `icone.png`, `icone-192.png` | icônes | |
| `CLAUDE.md` | ce fichier (pas mis en cache par `sw.js`, pas utilisé par l'appli) | |

Les relais Cloudflare (`worker.js`, `worker-obs.js`) ne sont PAS dans le dépôt : l'utilisateur les colle lui-même dans Cloudflare. Si on les modifie, donner le code complet à coller.

## 3. Faire une nouvelle version
1. `donnees.js` → `meta.version` (ex. `"2.10.1"` → `"2.10.2"`), et ajouter une entrée **en tête** de `updates: [` (date, title {en,fr}, text {en,fr}, src []).
2. `sw.js` → incrémenter `const CACHE = "saffrica-vNN"` (sinon les utilisateurs gardent l'ancienne version).
3. Vérifier la syntaxe du `<script>` de `index.html` et que `donnees.js` / `images.js` se chargent dans Node.
4. Tester (voir §8).

## 4. Publier (Git)
- Travailler sur une **branche de travail**, jamais directement sur `main`.
- **Publier sur `main` (= mettre le site à jour) seulement quand l'utilisateur le demande** (« publie », « mets en ligne »).
- Un commit normal par version, message « Saffrica X.Y.Z : résumé ». ~~Plus de commit « Vide le dépôt avant la version X »~~ : Git enregistre déjà les différences, l'historique reste lisible et on peut revenir en arrière facilement.
- Avant de publier, vérifier `git ls-files` : exactement les 8 fichiers du §2.
- Après publication : GitHub Pages met ~1 à 10 min ; ouvrir l'appli deux fois pour que le cache se mette à jour.

## 5. Architecture de `index.html`
- **Routage par hash** (fonction `render()`) : `#/` (accueil, pays), `#/c/<pays>`, `#/p/<parc>`, `#/p/<parc>/a/<animal>`, `#/a/<animal>` (si l'animal n'est que dans un parc, on affiche directement la fiche du parc), `#/mine` (Mes animaux), `#/obs` (observations : pays), `#/obs/c/<pays>` (parcs du pays), `#/obs/<parc|none>` (carte), `#/news`, `#/verify` (photos gardées à vérifier).
- Fonctions clés : `viewCountries`, `viewCountry`, `viewPark`, `viewAnimal`, `viewMine`, `viewObs`, `viewObsCountry`, `viewNews`, `viewVerify`, `menuChain`/menu ☰, `photo()` + `window.saffFit` + `FOCUS` (cadrage des illustrations), `orderAnimals` (les Cinq Grands d'abord : lion, léopard, éléphant, rhinocéros blanc, rhinocéros noir, buffle ; puis ordre alphabétique), `rankOf`/`RANKS` (titres), `lastSeenLoad` (dernière observation), `parkOf` (observation → parc par rectangle ; si plusieurs rectangles contiennent le point, le plus petit gagne).
- Textes de l'interface : objet `UI` (fr/en), lu par `T()` ; `tr()` choisit la langue d'un objet `{en, fr}`.
- Menu ☰ : bloc fixe Accueil / Observations / Mes animaux (toujours dans cet ordre), puis « Vous êtes ici » (pays > parc > animal).
- Accueil : boutons « Observations » (violet) à gauche et « Mes animaux · n/63 » (orange) à droite.
- Mes animaux : 63 animaux (les 3 pages de groupe ne comptent pas), rond pour cocher « vu », filtres Tous / Vus / Pas encore vus. « Vu » stocké dans `localStorage` (`saffrica-seen`). Titres : Bébé safari (0), Petit pisteur (5), Éclaireur de la savane (15), Chasseur de traces (25), Ranger (35), Maître pisteur (45), Légende du safari (55), Gardien de l'Afrique (tous).
- Illustrations : sur la fiche, image entière pour les images presque carrées ; dans les listes, cadre plus haut centré sur l'animal (`FOCUS` = centre vertical en % par image).
- Autres clés `localStorage` : `awf-lang` (langue), `saffrica-cgu` (`"3"` = conditions acceptées), `saffrica-obsq` (observations en attente).

## 6. Données (`window.APP_DATA`)
- `meta` {version, lastChecked, nextUpdate}
- `countries[]` : `{ id, en, fr, available }` — disponibles : `za`, `tz`, `ke`.
- `status`, `gauge` : statuts UICN (LC, NT, VU, EN, CR, + VAR pour les pages de groupe, NE).
- `sources` : `s1` … `s718`, chacune `{title, publisher, date:{en,fr}, url}`. Toujours ajouter les nouvelles sources à la suite (numéro max + 1).
- `parks[]` : `{id, country, name{en,fr}, region, facts[{label,value}], about, bestTime, sources[], map{lat,lng,zoom}, zone{south,north,west,east}, animals[ids]}`. Les parcs ajoutés sont écrits une ligne JSON par parc.
- `animals[id]` : fiche (nom, nom scientifique, statut, population mondiale, régime, taille, comportement, reconnaissance, mâle/femelle, sécurité…). 66 entrées : 63 espèces + 3 pages de groupe (`pythons`, `baboons`, `gyps`, avec `group: true` et `types[]`).
- `parkAnimals[parc][animal]` : `{pop{en,fr}, asOf, conf: official|scientific|estimate|unofficial|none, src[], trend?, note{en,fr}, spot{en,fr}, spotSrc[]}`. Une ligne JSON par parc pour les parcs ajoutés.
- `ranges[id]` : pays où vit l'animal.
- `updates[]` : journal des nouveautés (le plus récent en premier).

### Parcs actuels (23)
- **Afrique du Sud (7)** : kruger, addo, pilanesberg, hluhluwe-imfolozi, kgalagadi, marakele, mapungubwe.
- **Tanzanie (8)** : serengeti, ngorongoro, tarangire, lake-manyara, ruaha, nyerere, mikumi, katavi (chiffres revérifiés une 2e fois).
- **Kenya (8)** : maasai-mara, amboseli, tsavo-east, tsavo-west, samburu, lake-nakuru, nairobi, meru.
- Règle « uniquement les animaux déjà dans l'appli ». Exclus volontairement en Afrique de l'Est : babouin chacma, porc-épic du Cap, cobe des roseaux du Sud, autruche de Somalie, oryx beisa (espèces différentes de celles des fiches). La page de groupe **« Babouins »** est dans 15 parcs du Kenya et de Tanzanie (pas Katavi : aucune source).

## 7. Services en ligne
- **Reconnaissance photo** : Worker Cloudflare `saffrica-relais` → https://saffrica-relais.michel-elouan.workers.dev/ (`?test=1` pour tester). N'accepte que l'origine `https://nauol.github.io`, donc ne marche pas en local. Modèles Gemini gratuits en cascade, clé dans le secret Cloudflare `GEMINI_KEY`.
- **Observations** : Worker `saffrica-obs` → https://saffrica-obs.michel-elouan.workers.dev, base Cloudflare D1, table `observations(id PK, animal, lat, lng, ts, park, created)`. `POST /` {id, animal, lat, lng, ts, park|null}, `GET /?park=<id|none>&animal=&limit=`, `GET /latest`. File d'attente hors ligne côté appli (`localStorage` `saffrica-obsq`).
- **Carte** : Leaflet 1.9.4 + tuiles OpenStreetMap, chargés à la demande depuis jsdelivr (usage léger seulement ; prévoir un fournisseur si usage commercial ou fort trafic).
- Pays déduit des coordonnées hors parc : Nominatim (OpenStreetMap), avec cache.
- Photos gardées pour plus tard : IndexedDB `saffrica`, magasin `pending`.

## 8. Tests (Node + Playwright)
- Servir le dossier en local, intercepter les relais avec des réponses simulées (`**saffrica-obs**`, `**saffrica-relais**`), forcer `localStorage.saffrica-cgu = "3"` pour sauter l'écran des conditions.
- Parcourir toutes les pages (pays, parcs, fiches de chaque parc, en fr et en) et vérifier : aucun « undefined », « NaN » ou « [object », aucune erreur JavaScript, toutes les sources citées existent dans `sources`.
- Regarder les écrans à 390 px de large (captures) pour la mise en page, et les montrer à l'utilisateur quand l'affichage change.

## 9. Ajouter un pays (méthode qui a marché)
1. Choisir les parcs principaux du pays (avec l'utilisateur).
2. Une recherche par parc (agents en parallèle), avec une consigne commune :
   - sources officielles d'abord (organismes gestionnaires, recensements nationaux, plans de gestion, études), avec la date et le périmètre de chaque chiffre ;
   - **rouvrir chaque source avant de retenir un chiffre** ;
   - utiliser seulement les ids de la liste des animaux, **pages de groupe comprises** (`pythons`, `baboons`, `gyps`) quand l'espèce exacte n'est pas celle de la fiche mais que le groupe est présent ;
   - sortie JSON : `{sources[], park{…, zone, zoneNote}, animals{id:{pop, asOf, conf, src[index], trend?, note, spot, spotSrc}}, doubts[]}`.
3. Intégrer par script : renuméroter les sources (max + 1), ajouter les parcs, les `parkAnimals`, mettre `available: true` au pays, version + nouveauté, cache +1.
4. Tester (§8), puis publier seulement si l'utilisateur le demande (§4).
5. Résumer honnêtement : chiffres anciens, chiffres d'écosystème, présences fragiles, exclusions.

L'utilisateur ajoute les pays lui-même, à son rythme (pas de tâche automatique).

## 10. Liste des pays (décidée le 26 nov. 2026)
- **10 pays principaux** : Afrique du Sud ✅, Kenya ✅, Tanzanie ✅, Botswana, Namibie, Zambie, Zimbabwe, Ouganda, Rwanda, et **Mozambique ou Malawi** (10e place à choisir).
- **Deuxième cercle** (plus tard, après vérification des conseils aux voyageurs) : Malawi, Eswatini, Éthiopie, Angola, Gabon, Congo (Odzala), Tchad (Zakouma), RDC (Virunga), Bénin (Pendjari), Sénégal (Niokolo-Koba), Ghana (Mole), Côte d'Ivoire (Comoé).
- **À enlever** : Maghreb, Sahel et Sahara, petits pays et îles sans vrai safari. Madagascar : cas à part.
- À décider : cacher les pays enlevés de l'accueil (conseillé).

## 11. Vérification mensuelle automatique
Une tâche planifiée « Vérification mensuelle saffrica » tourne le 1er de chaque mois (8 h 59, heure de Zurich). Elle lit le site publié, vérifie **un seul pays par mois** (roulement : pays ayant des parcs, triés par id ; index = (année × 12 + mois) mod nombre de pays → déc. 2026 Kenya, janv. 2027 Tanzanie, févr. 2027 Afrique du Sud…), produit un rapport et un e-mail. Elle ne modifie rien. Quand l'utilisateur demande d'appliquer un rapport : intégrer les corrections sourcées, mettre à jour `meta.lastChecked` / `nextUpdate`, version, nouveauté, cache.

## 12. À faire plus tard
1. **Limites des parcs** : remplacer les rectangles approximatifs par les vrais contours OpenStreetMap (polygones plutôt que rectangles). Nominatim est accessible depuis l'environnement cloud (`polygon_geojson=1`) ; Overpass a échoué au premier essai. Les plus faux : Ruaha (trop petit), Serengeti, Tarangire, lac Manyara, Nyerere, Addo, Pilanesberg, Hluhluwe-iMfolozi, Marakele, tous ceux du Kenya. Attention au poids ajouté à `donnees.js` (simplifier les contours).
2. Prochaine mise à jour des données le **1er décembre 2026** (revérifier statuts UICN et chiffres ; vautours oricou et Gyps en particulier).
3. Sources non relues : environ 15 au Serengeti et 14 à Ruaha. Recensement national tanzanien 2024/2025 : chiffres par parc pas encore publiés.
4. **Règles contre le braconnage** (cacher ou retarder les positions des espèces sensibles) avant la sortie publique.
5. Page « Mes observations » avec suppression par code secret : proposée, pas décidée.
6. Après les 10 pays : nouvelles fiches pour les espèces proches mais différentes (porc-épic à crête, cobe de Bohor…), avec les illustrations à fournir par l'utilisateur ; revoir les babouins de Katavi.
7. Système de récompenses : les titres sont faits, la suite est prévue tout à la fin.
8. **Refonte du design**, tout à la fin.
9. Commercialisation plus tard : les illustrations appartiennent à l'utilisateur ; conditions d'utilisation des données UICN à vérifier ; fond de carte OpenStreetMap à remplacer si usage commercial.
