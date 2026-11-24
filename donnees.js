/* Africa Wildlife Finder - data file (EN/FR)
 * Every figure has a source id (see "sources") and an "asOf" date.
 * Update this file once a month (see README.md).
 * conf = "official" | "scientific" | "unofficial" | "none"
 */
window.APP_DATA = {
  meta: {
    version: "2.3.0",
    lastChecked: "2026-11-15",
    nextUpdate: "2026-12-01"
  },

  countries: [
    { id: "dz", en: "Algeria", fr: "Algérie" },
    { id: "ao", en: "Angola", fr: "Angola" },
    { id: "bj", en: "Benin", fr: "Bénin" },
    { id: "bw", en: "Botswana", fr: "Botswana" },
    { id: "bf", en: "Burkina Faso", fr: "Burkina Faso" },
    { id: "bi", en: "Burundi", fr: "Burundi" },
    { id: "cv", en: "Cabo Verde", fr: "Cap-Vert" },
    { id: "cm", en: "Cameroon", fr: "Cameroun" },
    { id: "cf", en: "Central African Republic", fr: "République centrafricaine" },
    { id: "td", en: "Chad", fr: "Tchad" },
    { id: "km", en: "Comoros", fr: "Comores" },
    { id: "cg", en: "Congo (Republic of the)", fr: "Congo (Brazzaville)" },
    { id: "cd", en: "DR Congo", fr: "RD Congo" },
    { id: "ci", en: "Côte d’Ivoire", fr: "Côte d’Ivoire" },
    { id: "dj", en: "Djibouti", fr: "Djibouti" },
    { id: "eg", en: "Egypt", fr: "Égypte" },
    { id: "gq", en: "Equatorial Guinea", fr: "Guinée équatoriale" },
    { id: "er", en: "Eritrea", fr: "Érythrée" },
    { id: "sz", en: "Eswatini", fr: "Eswatini" },
    { id: "et", en: "Ethiopia", fr: "Éthiopie" },
    { id: "ga", en: "Gabon", fr: "Gabon" },
    { id: "gm", en: "Gambia", fr: "Gambie" },
    { id: "gh", en: "Ghana", fr: "Ghana" },
    { id: "gn", en: "Guinea", fr: "Guinée" },
    { id: "gw", en: "Guinea-Bissau", fr: "Guinée-Bissau" },
    { id: "ke", en: "Kenya", fr: "Kenya" },
    { id: "ls", en: "Lesotho", fr: "Lesotho" },
    { id: "lr", en: "Liberia", fr: "Libéria" },
    { id: "ly", en: "Libya", fr: "Libye" },
    { id: "mg", en: "Madagascar", fr: "Madagascar" },
    { id: "mw", en: "Malawi", fr: "Malawi" },
    { id: "ml", en: "Mali", fr: "Mali" },
    { id: "mr", en: "Mauritania", fr: "Mauritanie" },
    { id: "mu", en: "Mauritius", fr: "Maurice" },
    { id: "ma", en: "Morocco", fr: "Maroc" },
    { id: "mz", en: "Mozambique", fr: "Mozambique" },
    { id: "na", en: "Namibia", fr: "Namibie" },
    { id: "ne", en: "Niger", fr: "Niger" },
    { id: "ng", en: "Nigeria", fr: "Nigéria" },
    { id: "rw", en: "Rwanda", fr: "Rwanda" },
    { id: "st", en: "São Tomé and Príncipe", fr: "Sao Tomé-et-Principe" },
    { id: "sn", en: "Senegal", fr: "Sénégal" },
    { id: "sc", en: "Seychelles", fr: "Seychelles" },
    { id: "sl", en: "Sierra Leone", fr: "Sierra Leone" },
    { id: "so", en: "Somalia", fr: "Somalie" },
    { id: "za", en: "South Africa", fr: "Afrique du Sud", available: true },
    { id: "ss", en: "South Sudan", fr: "Soudan du Sud" },
    { id: "sd", en: "Sudan", fr: "Soudan" },
    { id: "tz", en: "Tanzania", fr: "Tanzanie" },
    { id: "tg", en: "Togo", fr: "Togo" },
    { id: "tn", en: "Tunisia", fr: "Tunisie" },
    { id: "ug", en: "Uganda", fr: "Ouganda" },
    { id: "zm", en: "Zambia", fr: "Zambie" },
    { id: "zw", en: "Zimbabwe", fr: "Zimbabwe" }
  ],

  status: {
    LC: { en: "Least Concern", fr: "Préoccupation mineure" },
    NT: { en: "Near Threatened", fr: "Quasi menacée" },
    VU: { en: "Vulnerable", fr: "Vulnérable" },
    EN: { en: "Endangered", fr: "En danger" },
    CR: { en: "Critically Endangered", fr: "En danger critique" },
    VAR: { en: "Varies by species", fr: "Varie selon l’espèce" },
    NE: { en: "Not evaluated", fr: "Non évaluée" }
  },

  gauge: {
    LC: { text: { en: "Least Concern: many animals and no immediate risk of disappearing.", fr: "Préoccupation mineure : beaucoup d’individus et pas de risque immédiat de disparition." } },
    NT: { text: { en: "Near Threatened: not threatened yet, but could become so soon. This is LESS serious than Vulnerable.", fr: "Quasi menacée : pas encore menacée, mais pourrait le devenir bientôt. C’est MOINS grave que « Vulnérable »." } },
    VU: { text: { en: "Vulnerable: high risk of disappearing from the wild.", fr: "Vulnérable : risque élevé de disparaître à l’état sauvage." } },
    EN: { text: { en: "Endangered: very high risk of disappearing from the wild.", fr: "En danger : risque très élevé de disparaître à l’état sauvage." } },
    CR: { text: { en: "Critically Endangered: extremely high risk, on the edge of disappearing.", fr: "En danger critique : risque extrêmement élevé, au bord de la disparition." } },
    VAR: { text: { en: "This page covers several species with different statuses. See each type below.", fr: "Cette page regroupe plusieurs espèces dont le statut diffère. Voir chaque type ci-dessous." } },
    NE: { text: { en: "Not evaluated: the IUCN has not assessed this species, so it has no threat level.", fr: "Non évaluée : l’UICN n’a pas évalué cette espèce, elle n’a donc pas de niveau de menace." } }
  },

  sources: {
    s1: {
      title: "SANParks – Kruger National Park: Biodiversity Statistics",
      publisher: "SANParks (official)",
      date: { en: "figures from 2010–2011", fr: "chiffres de 2010–2011" },
      url: "https://www.sanparks.org/parks/kruger/conservation/scientific/ff/biodiversity_statistics.php"
    },
    s2: {
      title: "The 951 elephant deaths in Kruger – why the numbers demand perspective, not outrage",
      publisher: "Daily Maverick (by SANParks’ H. Hendricks and S. Ferreira)",
      date: "23 Jul 2026",
      url: "https://www.dailymaverick.co.za/article/2026-07-23-the-951-elephant-deaths-in-kruger-why-the-numbers-demand-perspective-not-outrage/"
    },
    s3: {
      title: "Big Trunks, Bigger Questions: Rethinking Elephant Numbers in Kruger",
      publisher: "SANParks (Dr Sam Ferreira)",
      date: "23 Jan 2025",
      url: "https://www.sanparks.org/conservation/scientific-services/stories/big-trunks-bigger-questions-rethinking-elephant-numbers-in-kruger"
    },
    s4: {
      title: "Kruger’s rhinos continue to face unrelenting threats and catastrophic population declines",
      publisher: "Daily Maverick (reporting SANParks 2022/23 Annual Report)",
      date: "15 Oct 2023",
      url: "https://www.dailymaverick.co.za/article/2023-10-15-krugers-rhinos-continue-to-face-unrelenting-threats-and-catastrophic-population-declines/"
    },
    s5: {
      title: "Rhino Renaissance: South Africa’s plan to restore rhino numbers",
      publisher: "Getaway",
      date: "2025",
      url: "https://www.getaway.co.za/travel-news/rhino-renaissance-south-africas-plan-to-restore-rhino-numbers/"
    },
    s6: {
      title: "Rhino poaching fell 16% in 2025 but Kruger Park saw a sharp increase",
      publisher: "Mail & Guardian",
      date: "11 Feb 2026",
      url: "https://mg.co.za/?p=686483"
    },
    s7: {
      title: "Forestry, Fisheries and the Environment on World Rhino Day",
      publisher: "South African Government (DFFE)",
      date: "22 Sep 2026",
      url: "https://www.gov.za/news/media-statements/forestry-fisheries-and-environment-world-rhino-day-22-sep-2026"
    },
    s8: {
      title: "2025 State of the Rhino",
      publisher: "International Rhino Foundation",
      date: "Sep 2025",
      url: "https://rhinos.org/about-rhinos/state-of-the-rhino/"
    },
    s9: {
      title: "African elephant species now Endangered and Critically Endangered – IUCN Red List",
      publisher: "IUCN (official)",
      date: "25 Mar 2021",
      url: "https://iucn.org/news/species/202103/african-elephant-species-now-endangered-and-critically-endangered-iucn-red-list"
    },
    s10: {
      title: "Giraffe populations now vulnerable to extinction (IUCN Red List update)",
      publisher: "Yale Environment 360",
      date: "Dec 2016",
      url: "https://e360.yale.edu/digest/giraffe_populations_now_vulnerable_to_extinction_iucn_red_list"
    },
    s11: {
      title: "Conservation Status of the African Lion (African Lion Database figures)",
      publisher: "CMS / IUCN Cat Specialist Group",
      date: "2023",
      url: "https://www.cms.int/fr/node/653"
    },
    s12: {
      title: "Ngorongoro study: why humans and Cape buffalo are coming into conflict (cites IUCN buffalo estimate)",
      publisher: "Down To Earth",
      date: { en: "IUCN assessment 2019", fr: "évaluation UICN 2019" },
      url: "https://www.downtoearth.org.in/amp/story/africa/ngorongoro-study-offers-insights-into-why-humans-cape-buffalo-are-coming-into-conflict-in-africa"
    },
    s13: {
      title: "Red List of South African Species – Cheetah (regional assessment)",
      publisher: "SANBI",
      date: "2016",
      url: "https://speciesstatus.sanbi.org/assessment/last-assessment/1931/"
    },
    s14: {
      title: "The global decline of cheetah Acinonyx jubatus and what it means for conservation",
      publisher: "PNAS (Durant et al.)",
      date: "Dec 2016",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5255576"
    },
    s15: {
      title: "Wild Dog national assessment (20-year review, African Journal of Wildlife Research 50)",
      publisher: "Endangered Wildlife Trust",
      date: "2020",
      url: "https://ewt.org.za/?p=5467"
    },
    s16: {
      title: "African Wild Dog (Lycaon pictus) – quick facts",
      publisher: "Wildlife ACT (citing IUCN Red List)",
      date: { en: "undated page, read Nov 2026", fr: "page non datée, consultée en nov. 2026" },
      url: "https://wildlifeact.com/about-wildlife-act/wildlife-species/african-wild-dog-lycaon-pictus"
    },
    s17: {
      title: "Hippopotamus – population and conservation status (IUCN 2016 assessment)",
      publisher: "San Diego Zoo Wildlife Alliance Library",
      date: { en: "IUCN assessment 2016", fr: "évaluation UICN 2016" },
      url: "https://ielc.libguides.com/sdzg/factsheets/hippopotamus/population"
    },
    s18: {
      title: "Plains Zebra – population and conservation status (IUCN 2016 assessment)",
      publisher: "San Diego Zoo Wildlife Alliance Library",
      date: { en: "IUCN assessment 2016", fr: "évaluation UICN 2016" },
      url: "https://ielc.libguides.com/sdzg/factsheets/plains_zebra/population"
    },
    s19: {
      title: "African leopard factsheet",
      publisher: "Humane World for Animals (citing IUCN Red List)",
      date: "2021",
      url: "https://humaneworld.org/sites/default/files/uploads/2021/06/African-leopard-factsheet.pdf"
    },
    s20: {
      title: "About Kruger National Park (visitor information site)",
      publisher: "kruger-nationalpark.org (UNOFFICIAL travel site)",
      date: "2026",
      url: "https://kruger-nationalpark.org/about/"
    },
    s21: {
      title: "Concerted effort to save South Africa’s dwindling rhino population",
      publisher: "Daily News (SA)",
      date: "17 Jul 2025",
      url: "https://www.magzter.com/ja/stories/newspaper/Daily-News/CONCERTED-EFFORT-TO-SAVE-SOUTH-AFRICAS-DWINDLING-RHINO-POPULATION"
    },
    s22: {
      title: "951 Elephants Died in Kruger Over 6 Years, SANParks Explains the Causes",
      publisher: "Briefly News",
      date: "26 Jul 2026",
      url: "https://briefly.co.za/south-africa/247922-951-elephants-died-kruger-6-years-sanparks-explains-causes/"
    },
    s23: {
      title: "South Africa’s free-roaming cheetahs in steep decline, first national census finds",
      publisher: "Mongabay",
      date: "Jul 2026",
      url: "https://news.mongabay.com/2026/07/south-africas-free-roaming-cheetahs-in-steep-decline-first-national-census-finds/"
    },
    s24: {
      title: "Killing without counting – South Africa’s elephant conflict debate lacks data",
      publisher: "Daily Maverick",
      date: "28 Aug 2025",
      url: "https://www.dailymaverick.co.za/article/2025-08-28-killing-without-counting-sas-elephant-conflict-debate-lacks-data"
    },
    s25: {
      title: "Lions remain listed as Vulnerable in the 2023 Red List Assessment",
      publisher: "Endangered Wildlife Trust (African Lion Database)",
      date: "2023",
      url: "https://ewt.org.za/?p=27663"
    },
    s26: {
      title: "The Dark History of Africa’s “Big Five” and Their Conservation Status",
      publisher: "A-Z Animals (secondary source)",
      date: { en: "read Nov 2026", fr: "consultée en nov. 2026" },
      url: "https://a-z-animals.com/animals/lists/the-dark-history-of-africas-big-five-and-their-conservation-status/"
    },
    s27: {
      title: "History of Kruger National Park",
      publisher: "Wikipedia",
      date: { en: "read Nov 2026", fr: "consultée en nov. 2026" },
      url: "https://en.wikipedia.org/wiki/History_of_Kruger_National_Park"
    },
    s28: {
      title: "Wildlife of the Kruger Park",
      publisher: "places.co.za (secondary source)",
      date: { en: "read Nov 2026", fr: "consultée en nov. 2026" },
      url: "https://www.places.co.za/info/game-park/kruger_wildlife.html"
    },
    s29: {
      title: "Poaching of African rhinos down; drought and other threats drive losses globally",
      publisher: "IUCN (official)",
      date: { en: "7 Aug 2025", fr: "7 août 2025" },
      url: "https://iucn.org/press-release/202508/poaching-african-rhinos-down-drought-and-other-threats-drive-losses-globally"
    },
    s30: {
      title: "Understanding Wildlife in Kruger National Park: Animal Population Trends (Part 2)",
      publisher: "SANParks (official; 2023 aerial survey)",
      date: { en: "27 Mar 2025", fr: "27 mars 2025" },
      url: "https://www.sanparks.org/conservation/scientific-services/stories/understanding-wildlife-in-kruger-national-park-animal-population-trends-part2"
    },
    s31: {
      title: "Animal numbers for Kruger: background on animal counts (infographic)",
      publisher: "SANParks Scientific Services (official)",
      date: { en: "Jan 2024", fr: "janv. 2024" },
      url: "https://www.sanparks.org/wp-content/uploads/2025/03/Infographic_Animal-numbers-for-Kruger-background-on-animal-counts_no-counts.pdf"
    },
    s32: {
      title: "Red List of South African Species – Impala",
      publisher: "SANBI",
      date: { en: "regional Red List assessment; Kruger count of 2012", fr: "évaluation régionale ; comptage du Kruger de 2012" },
      url: "https://speciesstatus.sanbi.org/assessment/last-assessment/1933/"
    },
    s33: {
      title: "Red List of South African Species – Waterbuck",
      publisher: "SANBI",
      date: { en: "regional Red List assessment; Kruger count of 2012", fr: "évaluation régionale ; comptage du Kruger de 2012" },
      url: "https://speciesstatus.sanbi.org/assessment/last-assessment/2083/"
    },
    s34: {
      title: "Red List of South African Species – Greater Kudu",
      publisher: "SANBI",
      date: { en: "regional Red List assessment; Kruger count of 2012", fr: "évaluation régionale ; comptage du Kruger de 2012" },
      url: "https://speciesstatus.sanbi.org/assessment/last-assessment/2253/"
    },
    s35: {
      title: "Red List of South African Species – Common Warthog",
      publisher: "SANBI",
      date: { en: "regional Red List assessment; Kruger count of 2012", fr: "évaluation régionale ; comptage du Kruger de 2012" },
      url: "https://speciesstatus.sanbi.org/assessment/last-assessment/1993/"
    },
    s36: {
      title: "Red List of South African Species – Blue Wildebeest",
      publisher: "SANBI",
      date: { en: "regional Red List assessment; Kruger count of 2012", fr: "évaluation régionale ; comptage du Kruger de 2012" },
      url: "https://speciesstatus.sanbi.org/assessment/last-assessment/2329/"
    },
    s37: {
      title: "Red List of South African Species – Spotted Hyaena (Kruger estimate of 2015)",
      publisher: "SANBI",
      date: { en: "regional Red List assessment; Kruger estimate of 2015", fr: "évaluation régionale ; estimation du Kruger de 2015" },
      url: "https://speciesstatus.sanbi.org/assessment/last-assessment/1999/"
    },
    s38: {
      title: "Spotted hyena – population and conservation (IUCN 2014 assessment, Bohm & Höner 2015)",
      publisher: "San Diego Zoo Wildlife Alliance Library",
      date: { en: "IUCN assessment 2014", fr: "évaluation UICN 2014" },
      url: "https://ielc.libguides.com/sdzg/factsheets/spottedhyena/population-conservation"
    },
    s39: {
      title: "Greater Kudu",
      publisher: "World Land Trust (secondary source)",
      date: { en: "read Nov 2026", fr: "consultée en nov. 2026" },
      url: "https://www.worldlandtrust.org/species/greater-kudu/"
    },
    s40: {
      title: "Common Impala",
      publisher: "Welcome to Zambia (secondary source)",
      date: { en: "read Nov 2026", fr: "consultée en nov. 2026" },
      url: "https://welcometozambia.com/wildlife/antelopes/common-impala/"
    },
    s41: {
      "title": "Panthera leo, Lion – The IUCN Red List of Threatened Species 2016 (country occurrence)",
      "publisher": "IUCN (copy hosted by the-eis.com)",
      "date": {
        "en": "assessment 2016",
        "fr": "évaluation 2016"
      },
      "url": "https://the-eis.com/elibrary/sites/default/files/downloads/literature/Panthera%20leo_The%20IUCN%20Red%20List%20of%20Threatened%20Species%202016.pdf"
    },
    s42: {
      "title": "Leopard – distribution",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Jan 2026",
        "fr": "page mise à jour le 14 janv. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/leopard/distribution"
    },
    s43: {
      "title": "Cheetah – distribution",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Jan 2026",
        "fr": "page mise à jour le 14 janv. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/cheetah/distribution"
    },
    s44: {
      "title": "Acinonyx jubatus – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://mammaldiversity.org/taxon/1005979"
    },
    s45: {
      "title": "African wild dog – IUCN Red List document (country occurrence)",
      "publisher": "IUCN, via CITES/CMS meeting document",
      "date": {
        "en": "published 2020 (assessed 2012)",
        "fr": "publié en 2020 (évalué en 2012)"
      },
      "url": "https://www.cms.int/sites/default/files/document/cites-cms_aci2_inf.11_iucn-african-wild-dog_e.pdf"
    },
    s46: {
      "title": "Spotted hyena – distribution and habitat",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Jan 2026",
        "fr": "page mise à jour le 14 janv. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/spottedhyena/distribution-habitat"
    },
    s47: {
      "title": "Common warthog – distribution",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Jan 2026",
        "fr": "page mise à jour le 14 janv. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/warthog_common/distribution"
    },
    s48: {
      "title": "Phacochoerus africanus – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://mammaldiversity.org/taxon/1006366"
    },
    s49: {
      "title": "Hippopotamus – distribution",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Jan 2026",
        "fr": "page mise à jour le 14 janv. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/hippopotamus/distribution"
    },
    s50: {
      "title": "White rhinoceros – distribution",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Jan 2026",
        "fr": "page mise à jour le 14 janv. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/whiterhino/distribution"
    },
    s51: {
      "title": "Black rhinoceros – distribution",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Jan 2026",
        "fr": "page mise à jour le 14 janv. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/blackrhino/distribution"
    },
    s52: {
      "title": "Plains zebra – distribution",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Jan 2026",
        "fr": "page mise à jour le 14 janv. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/plains_zebra/distribution"
    },
    s53: {
      "title": "State of Giraffe 2025",
      "publisher": "Giraffe Conservation Foundation",
      "date": {
        "en": "population data as of Jun 2025",
        "fr": "données de juin 2025"
      },
      "url": "https://giraffeconservation.org/wp-content/uploads/2025/06/State-of-Giraffe-2025-Report-v5.pdf"
    },
    s54: {
      "title": "African elephant – distribution",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Oct 2026",
        "fr": "page mise à jour le 14 oct. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/african_elephant/distribution"
    },
    s55: {
      "title": "Loxodonta africana – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://mammaldiversity.org/taxon/1000522"
    },
    s56: {
      "title": "Syncerus caffer – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1006274"
    },
    s57: {
      "title": "Syncerus caffer – geographic range",
      "publisher": "Animal Diversity Web (University of Michigan)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://animaldiversity.org/accounts/Syncerus_caffer/"
    },
    s58: {
      "title": "Aepyceros melampus – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://mammaldiversity.org/taxon/1006130"
    },
    s59: {
      "title": "Aepyceros melampus – geographic range",
      "publisher": "Animal Diversity Web (University of Michigan)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://animaldiversity.org/accounts/Aepyceros_melampus"
    },
    s60: {
      "title": "Tragelaphus strepsiceros – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1006283"
    },
    s61: {
      "title": "Connochaetes taurinus – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://mammaldiversity.org/taxon/1006134"
    },
    s62: {
      "title": "Kobus ellipsiprymnus – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1006245"
    },
    s63: {
      "title": "Population estimates of three vulture species in Kruger National Park, South Africa (Murn et al.)",
      "publisher": "Ostrich: Journal of African Ornithology 84(1)",
      "date": {
        "en": "surveys of Sep 2011; published 2013",
        "fr": "relevés de sept. 2011 ; publié en 2013"
      },
      "url": "https://www.hawk-conservancy.org/wp-content/uploads/2016/11/Murn-et-al-2013-Pop-estimates-of-three-vultures-in-KNP.pdf"
    },
    s64: {
      "title": "Red List of South African Species – White-backed Vulture",
      "publisher": "SANBI",
      "date": {
        "en": "regional assessment; Kruger estimate of 2011",
        "fr": "évaluation régionale ; estimation du Kruger de 2011"
      },
      "url": "https://speciesstatus.sanbi.org/assessment/last-assessment/3067/"
    },
    s65: {
      "title": "Red List of South African Species – Lappet-faced Vulture",
      "publisher": "SANBI",
      "date": {
        "en": "regional assessment; Kruger estimate of 2011",
        "fr": "évaluation régionale ; estimation du Kruger de 2011"
      },
      "url": "https://speciesstatus.sanbi.org/assessment/last-assessment/3197/"
    },
    s66: {
      "title": "Red List of South African Species – Martial Eagle",
      "publisher": "SANBI",
      "date": {
        "en": "regional assessment; Kruger nest survey of 2011",
        "fr": "évaluation régionale ; recensement des nids du Kruger de 2011"
      },
      "url": "https://speciesstatus.sanbi.org/assessment/last-assessment/3140/"
    },
    s67: {
      "title": "Martial Eagle",
      "publisher": "World Land Trust (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.worldlandtrust.org/species/martial-eagle/"
    },
    s68: {
      "title": "White-backed Vulture",
      "publisher": "World Land Trust (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.worldlandtrust.org/species/white-backed-vulture/"
    },
    s69: {
      "title": "Lappet-faced vulture",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Lappet-faced_vulture"
    },
    s70: {
      "title": "African Fish-eagle",
      "publisher": "The Peregrine Fund",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.peregrinefund.org/explore-raptors-species/eagles/african-fish-eagle"
    },
    s71: {
      "title": "Lupulella mesomelas – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://mammaldiversity.org/taxon/1005953"
    },
    s72: {
      "title": "Vervet monkey – distribution",
      "publisher": "San Diego Zoo Wildlife Alliance (Animal Fact Sheets)",
      "date": {
        "en": "page updated 14 Jan 2026",
        "fr": "page mise à jour le 14 janv. 2026"
      },
      "url": "https://ielc.libguides.com/sdzg/factsheets/vervet/distribution"
    },
    s73: {
      "title": "Vervet Monkey",
      "publisher": "World Land Trust (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.worldlandtrust.org/species/vervet-monkey/"
    },
    s74: {
      "title": "Black-backed jackal",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Black-backed_jackal"
    },
    s75: {
      "title": "Thomson's gazelle",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Thomson%27s_gazelle"
    },
    s76: {
      "title": "Grant's gazelle",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Grant%27s_gazelle"
    },
    s77: {
      "title": "Springbok",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Springbok"
    },
    s78: {
      "title": "Gemsbok",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Gemsbok"
    },
    s79: {
      "title": "Lesser kudu",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Lesser_kudu"
    },
    s80: {
      "title": "Nyala",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Nyala"
    },
    s81: {
      "title": "Common eland",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Common_eland"
    },
    s82: {
      "title": "Lechwe",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Lechwe"
    },
    s83: {
      "title": "Southern reedbuck",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Southern_reedbuck"
    },
    s84: {
      "title": "Topi",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Topi"
    },
    s85: {
      "title": "Steenbok",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Steenbok"
    },
    s86: {
      "title": "Kirk's dik-dik",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Kirk%27s_dik-dik"
    },
    s87: {
      "title": "Cape porcupine",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Cape_porcupine"
    },
    s88: {
      "title": "Madoqua kirkii – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1006160"
    },
    s89: {
      "title": "Hystrix africaeaustralis – country distribution",
      "publisher": "Mammal Diversity Database (American Society of Mammalogists)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1001283"
    },
    s90: {
      "title": "Chacma baboon",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Chacma_baboon"
    },
    s91: {
      "title": "Papio ursinus",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://mammaldiversity.org/taxon/1000633"
    },
    s92: {
      "title": "Papio ursinus",
      "publisher": "Animal Diversity Web",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://animaldiversity.org/accounts/Papio_ursinus/"
    },
    s93: {
      "title": "Chacma baboon (Kruger Park mammals)",
      "publisher": "African Sky",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.africansky.com/african-travel/south-africa/destinations/national-parks/kruger-park/mammals/chacma-baboon"
    },
    s94: {
      "title": "Meerkat",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Meerkat"
    },
    s95: {
      "title": "Suricata suricatta",
      "publisher": "Animal Diversity Web",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://animaldiversity.org/accounts/Suricata_suricatta/"
    },
    s96: {
      "title": "Suricata suricatta",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1006070"
    },
    s97: {
      "title": "Slender mongoose",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Slender_mongoose"
    },
    s98: {
      "title": "Herpestes sanguineus (Common Slender Mongoose)",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1006046"
    },
    s99: {
      "title": "Galerella sanguinea",
      "publisher": "Animal Diversity Web",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://animaldiversity.org/accounts/Galerella_sanguinea"
    },
    s100: {
      "title": "Slender mongoose (Kruger Park mammals)",
      "publisher": "African Sky",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.africansky.com/african-travel/south-africa/destinations/national-parks/kruger-park/mammals/slender-mongoose"
    },
    s101: {
      "title": "Slender Mongoose",
      "publisher": "krugerpark.co.za",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/slender_mongoose.html"
    },
    s102: {
      "title": "Mangouste rouge",
      "publisher": "Techno-Science (text from Wikipédia FR, CC-BY-SA)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.techno-science.net/fr/definitions/mangouste-rouge"
    },
    s103: {
      "title": "Honey badger",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Honey_badger"
    },
    s104: {
      "title": "Mellivora capensis",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://mammaldiversity.org/taxon/1005860"
    },
    s105: {
      "title": "Honey Badger",
      "publisher": "krugerpark.co.za",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://krugerpark.co.za/africa_honey_badger.html"
    },
    s106: {
      "title": "Ratel",
      "publisher": "Techno-Science (text from Wikipédia FR, CC-BY-SA)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.techno-science.net/fr/definitions/ratel"
    },
    s107: {
      "title": "Serval",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Serval"
    },
    s108: {
      "title": "Caracal",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Caracal"
    },
    s109: {
      "title": "Ground pangolin",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Ground_pangolin"
    },
    s110: {
      "title": "Side-striped jackal",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Side-striped_jackal"
    },
    s111: {
      "title": "Leptailurus serval",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://mammaldiversity.org/taxon/1006005"
    },
    s112: {
      "title": "Caracal caracal",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1005981"
    },
    s113: {
      "title": "Smutsia temminckii",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1005801"
    },
    s114: {
      "title": "Lupulella adusta",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1005952"
    },
    s115: {
      "title": "Leptailurus serval",
      "publisher": "Animal Diversity Web (University of Michigan)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://animaldiversity.org/accounts/leptailurus_serval/"
    },
    s116: {
      "title": "Caracal caracal",
      "publisher": "Animal Diversity Web (University of Michigan)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://animaldiversity.org/accounts/Caracal_caracal"
    },
    s117: {
      "title": "Back to the wild (published 24 Feb 2024, from the SANParks 2022/2023 Research Report)",
      "publisher": "SANParks",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.sanparks.org/conservation/scientific-services/stories/back-to-the-wild"
    },
    s118: {
      "title": "Kruger National Park mammals",
      "publisher": "African Sky (travel site)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://africansky.com/african-travel/south-africa/destinations/national-parks/kruger-park/kruger-national-park-mammals"
    },
    s119: {
      "title": "KNP Mammal Challenge - Battle of the Sexes",
      "publisher": "Africa Wild Forum (forum, Kruger mammal checklist)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.africawild-forum.com/viewtopic.php?p=234338"
    },
    s120: {
      "title": "Side-striped Jackal",
      "publisher": "krugerpark.co.za (travel site)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://krugerpark.co.za/africa_side_striped_jackal.html"
    },
    s121: {
      "title": "Other Mammals in Kruger National Park",
      "publisher": "krugerpark.co.za (travel site)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/other-mammals-kruger-national-park.html"
    },
    s122: {
      "title": "Predators and Carnivores",
      "publisher": "krugerpark.co.za (travel site)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/Kruger_National_Park_Wildlife-travel/kruger-park-wildlife-big-predators.html"
    },
    s123: {
      "title": "Nile crocodile",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Nile_crocodile"
    },
    s124: {
      "title": "Dwarf crocodile",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Dwarf_crocodile"
    },
    s125: {
      "title": "Nile monitor",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Nile_monitor"
    },
    s126: {
      "title": "Savannah monitor",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Savannah_monitor"
    },
    s127: {
      "title": "Varanus niloticus",
      "publisher": "The Reptile Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://reptile-database.reptarium.cz/species?genus=Varanus&species=niloticus"
    },
    s128: {
      "title": "Varanus exanthematicus",
      "publisher": "The Reptile Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://reptile-database.reptarium.cz/species?genus=Varanus&species=exanthematicus"
    },
    s129: {
      "title": "Osteolaemus tetraspis",
      "publisher": "The Reptile Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://reptile-database.reptarium.cz/species?genus=Osteolaemus&species=tetraspis"
    },
    s130: {
      "title": "Understanding wildlife in Kruger National Park: animal population trends (part 2)",
      "publisher": "SANParks (published 27 March 2025)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.sanparks.org/conservation/scientific-services/stories/understanding-wildlife-in-kruger-national-park-animal-population-trends-part2"
    },
    s131: {
      "title": "Infographic: Animal numbers for Kruger, background on animal counts",
      "publisher": "SANParks",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.sanparks.org/wp-content/uploads/2025/03/Infographic_Animal-numbers-for-Kruger-background-on-animal-counts_no-counts.pdf"
    },
    s132: {
      "title": "Understanding wildlife in Kruger National Park, part 1: methods used to count animals",
      "publisher": "SANParks",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.sanparks.org/conservation/scientific-services/stories/part-1-understanding-wildlife-in-kruger-national-park-methods-used-to-count-animals"
    },
    s133: {
      "title": "Crocodile Deaths Continue in the Olifants River",
      "publisher": "Kruger Park Times (krugerpark.co.za, unofficial website)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/krugerpark-times-e-2-crocodile-deaths-continue-24996.html"
    },
    s134: {
      "title": "Kruger National Park",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Kruger_National_Park"
    },
    s135: {
      "title": "Explore Kruger Park reptiles",
      "publisher": "krugerpark.co.za (unofficial website)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://krugerpark.co.za/Kruger_National_Park_Wildlife-travel/explore-kruger-park-reptiles.html"
    },
    s136: {
      "title": "Whitethroated Monitor (rock monitor)",
      "publisher": "krugerpark.co.za (unofficial website)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/africa_rock_or_whitethroated_monitor.html"
    },
    s137: {
      "title": "Black mamba",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Black_mamba"
    },
    s138: {
      "title": "Mozambique spitting cobra",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Mozambique_spitting_cobra"
    },
    s139: {
      "title": "African rock python",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/African_rock_python"
    },
    s140: {
      "title": "Flap-necked chameleon",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Flap-necked_chameleon"
    },
    s141: {
      "title": "Chamaeleo dilepis (Caméléon bilobé)",
      "publisher": "Wikipédia FR (source secondaire)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://fr.wikipedia.org/wiki/Chamaeleo_dilepis"
    },
    s142: {
      "title": "Southern African rock python",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Southern_African_rock_python"
    },
    s143: {
      "title": "Python sebae",
      "publisher": "The Reptile Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://reptile-database.reptarium.cz/species?genus=Python&species=sebae"
    },
    s144: {
      "title": "Chamaeleo dilepis",
      "publisher": "The Reptile Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://reptile-database.reptarium.cz/species?genus=Chamaeleo&species=dilepis"
    },
    s145: {
      "title": "Southern African Python",
      "publisher": "African Snakebite Institute",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.africansnakebiteinstitute.com/snake/southern-african-python/"
    },
    s146: {
      "title": "Southern African python (Animal of the week)",
      "publisher": "SANBI",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.sanbi.org/animal-of-the-week/southern-african-python/"
    },
    s147: {
      "title": "Snake bites",
      "publisher": "Fit for Travel (NHS Scotland)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://fitfortravel.nhs.uk/advice/general-travel-health-advice/snake-bites"
    },
    s148: {
      "title": "Dangerous Snakes of the Mpumalanga Province",
      "publisher": "African Reptiles & Venom",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://africanreptiles-venom.co.za/dangerous-snakes-of-the-mpumalanga-province/"
    },
    s149: {
      "title": "Explore Kruger Park reptiles",
      "publisher": "krugerpark.co.za (travel site, not official)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/Kruger-National-Park-Wildlife/explore-kruger-park-reptiles.html"
    },
    s150: {
      "title": "Reptiles of Kruger National Park",
      "publisher": "thewildebeest.co.za (travel site, not official)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://thewildebeest.co.za/02148-reptiles-of-kruger-national-park.php"
    },
    s151: {
      "title": "Kruger National Park",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Kruger_National_Park"
    },
    s152: {
      "title": "African Rock Python",
      "publisher": "krugerpark.co.za (travel site, not official)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://krugerpark.co.za/africa_african_rock_python.html"
    },
    s153: {
      "title": "Flap Neck Chameleon",
      "publisher": "krugerpark.co.za (travel site, not official)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/africa_flap-neck_chameleon.html"
    },
    s154: {
      "title": "Southern African rock python",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Southern_African_rock_python"
    },
    s155: {
      "title": "Python natalensis",
      "publisher": "The Reptile Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://reptile-database.reptarium.cz/Python/natalensis"
    },
    s156: {
      "title": "Southern African Python",
      "publisher": "African Snakebite Institute",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.africansnakebiteinstitute.com/snake/southern-african-python/"
    },
    s157: {
      "title": "Kruger National Park snakes",
      "publisher": "African Sky (travel site)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.africansky.com/african-travel/south-africa/destinations/national-parks/kruger-park/kruger-national-park-snakes"
    },
    s158: {
      "title": "Explore Kruger Park reptiles",
      "publisher": "krugerpark.co.za (travel site)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/Kruger-National-Park-Wildlife/explore-kruger-park-reptiles.html"
    },
    s159: {
      "title": "Marabou stork",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Marabou_stork"
    },
    s160: {
      "title": "Marabou Stork",
      "publisher": "krugerpark.co.za (travel site)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://krugerpark.co.za/africa_marabou_stork.html"
    },
    s161: {
      "title": "Birds of Kruger",
      "publisher": "SANParks",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.sanparks.org/parks/kruger/explore/fauna-flora/birds"
    },
    s162: {
      "title": "Sable antelope",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Sable_antelope"
    },
    s163: {
      "title": "Roan antelope",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Roan_antelope"
    },
    s164: {
      "title": "Kruger National Park (wildlife population table, 2011)",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Kruger_National_Park"
    },
    s165: {
      "title": "Understanding wildlife in Kruger National Park: animal population trends (part 2)",
      "publisher": "SANParks",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.sanparks.org/conservation/scientific-services/stories/understanding-wildlife-in-kruger-national-park-animal-population-trends-part2"
    },
    s166: {
      "title": "The Riddle Of The Rare Antelope",
      "publisher": "krugerpark.co.za (Kruger Park Times)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/krugerpark-times-3-3-rare-antelope-22090.html"
    },
    s167: {
      "title": "hippotrague noir",
      "publisher": "Office québécois de la langue française (Grand dictionnaire terminologique)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/17015639/hippotrague-noir"
    },
    s168: {
      "title": "antilope rouanne",
      "publisher": "Office québécois de la langue française (Grand dictionnaire terminologique)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/17015104/antilope-rouanne"
    },
    s169: {
      "title": "Hippotragus niger",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1006236"
    },
    s170: {
      "title": "Hippotragus equinus",
      "publisher": "Mammal Diversity Database",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.mammaldiversity.org/taxon/1006234"
    },
    s171: {
      "title": "Brown hyena",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Brown_hyena"
    },
    s172: {
      "title": "Okapi",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Okapi"
    },
    s173: {
      "title": "Red List of South African Species: Brown Hyaena",
      "publisher": "SANBI",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://speciesstatus.sanbi.org/taxa/detail/2070/"
    },
    s174: {
      "title": "Brown Hyena",
      "publisher": "krugerpark.co.za (travel site, not official)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.krugerpark.co.za/africa_hyena.html"
    },
    s175: {
      "title": "Common ostrich",
      "publisher": "Wikipedia (secondary source), mirror of the English article",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Common_ostrich"
    },
    s176: {
      "title": "Struthio camelus (ostrich)",
      "publisher": "Animal Diversity Web, University of Michigan",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://animaldiversity.org/accounts/Struthio_camelus/"
    },
    s177: {
      "title": "List of Struthioniformes by population",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/List_of_Struthioniformes_by_population"
    },
    s178: {
      "title": "Kruger National Park – Birding Checklist (undated PDF, unknown issuer)",
      "publisher": "showme.co.za (unofficial)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://showme.co.za/nelspruit/files/2011/09/Kruger-Park-Birding-Checklist.pdf"
    },
    s179: {
      "title": "Kruger bird list",
      "publisher": "Uyaphi (tourism site, unofficial)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.uyaphi.com/south-africa/kruger/bird-list"
    },
    s180: {
      "title": "Greater flamingo",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/Greater_flamingo"
    },
    s181: {
      "title": "List of Phoenicopteriformes by population",
      "publisher": "Wikipedia (secondary source)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://en.wikipedia.org/wiki/List_of_Phoenicopteriformes_by_population"
    },
    s182: {
      "title": "Phoenicopterus roseus – The Greater Flamingo",
      "publisher": "SA-Venues (tourism site)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.sa-venues.com/wildlife/birds_greater_flamingo.php"
    },
    s183: {
      "title": "Greater flamingo at Londolozi (blog post, 2 Jan 2021)",
      "publisher": "Londolozi blog",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://blog.londolozi.com/?p=122525"
    },
    s184: {
      "title": "Flamingo in Kruger (visitor sightings thread, 2023–2025)",
      "publisher": "AfricaWild forum (visitor reports)",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.africawild-forum.com/viewtopic.php?p=565719"
    },
    s185: {
      "title": "Kruger National Park – Birds",
      "publisher": "SANParks",
      "date": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "url": "https://www.sanparks.org/parks/kruger/explore/fauna-flora/birds"
    },
    s186: {"title": "Python natalensis", "publisher": "The Reptile Database", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://reptile-database.reptarium.cz/Python/natalensis"},
    s187: {"title": "Python anchietae", "publisher": "The Reptile Database", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://reptile-database.reptarium.cz/Python/anchietae"},
    s188: {"title": "Calabaria reinhardtii", "publisher": "The Reptile Database", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://reptile-database.reptarium.cz/Calabaria/reinhardtii"},
    s189: {"title": "Python regius", "publisher": "The Reptile Database", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://reptile-database.reptarium.cz/Python/regius"},
    s190: {"title": "Southern African rock python (cite l'évaluation UICN 2021)", "publisher": "Wikipedia (source secondaire)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Southern_African_rock_python"},
    s191: {"title": "Central African rock python (cite l'évaluation UICN 2021)", "publisher": "Wikipedia (source secondaire)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Central_African_rock_python"},
    s192: {"title": "Ball python (cite l'évaluation UICN 2021, amendée 2022)", "publisher": "Wikipedia (source secondaire)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Ball_python"},
    s193: {"title": "Python anchietae (cite l'évaluation UICN 2021)", "publisher": "Wikipedia (source secondaire)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Python_anchietae"},
    s194: {"title": "Calabar python (cite l'évaluation UICN 2021)", "publisher": "Wikipedia (source secondaire)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Calabar_python"},
    s195: {"title": "Red List of South African Species : Python natalensis", "publisher": "SANBI", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://speciesstatus.sanbi.org/assessment/last-assessment/2808/"},
    s196: {"title": "Southern African python (Animal of the week)", "publisher": "SANBI", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.sanbi.org/animal-of-the-week/southern-african-python/"},
    s197: {"title": "Python sebae", "publisher": "Animal Diversity Web (Univ. of Michigan)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://animaldiversity.org/accounts/Python_sebae"},
    s198: {"title": "African Rock Python", "publisher": "krugerpark.co.za", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://krugerpark.co.za/africa_african_rock_python.html"},
    s199: {"title": "Kruger Park Reptiles", "publisher": "krugerpark.co.za", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://krugerpark.co.za/Kruger_National_Park_Wildlife-travel/explore-kruger-park-reptiles.html"},
    s200: {"title": "Papio ursinus", "publisher": "Mammal Diversity Database", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://mammaldiversity.org/taxon/1000633"},
    s201: {"title": "Papio hamadryas", "publisher": "Mammal Diversity Database", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://mammaldiversity.org/taxon/1000630"},
    s202: {"title": "Papio papio", "publisher": "Mammal Diversity Database", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://mammaldiversity.org/taxon/1000632"},
    s203: {"title": "Papio kindae", "publisher": "Mammal Diversity Database", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://mammaldiversity.org/taxon/1000631"},
    s204: {"title": "Chacma baboon", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Chacma_baboon"},
    s205: {"title": "Guinea baboon", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Guinea_baboon"},
    s206: {"title": "Olive baboon", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Olive_baboon"},
    s207: {"title": "Yellow baboon", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Yellow_baboon"},
    s208: {"title": "Kinda baboon", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Kinda_baboon"},
    s209: {"title": "Papio (genus account)", "publisher": "Animal Diversity Web", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://animaldiversity.org/accounts/Papio/"},
    s210: {"title": "Papio hamadryas", "publisher": "Animal Diversity Web", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://animaldiversity.org/accounts/Papio_hamadryas"},
    s211: {"title": "Baboon", "publisher": "Wikiwand (mirror of Wikipedia, secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://wikiwand.com/en/articles/baboon"},
    s212: {"title": "Gelada", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Gelada"},
    s213: {"title": "Mandrill", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Mandrill"},
    s214: {"title": "Kruger Park primates", "publisher": "krugerpark.co.za", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://krugerpark.co.za/Kruger_National_Park_Wildlife-travel/explore-kruger-park-primates.html"},
    s215: {"title": "White-backed Vulture (Red List of South African Birds, 2025 regional assessment)", "publisher": "BirdLife South Africa", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.birdlife.org.za/red-list/white-backed-vulture/"},
    s216: {"title": "White-backed vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/White-backed_vulture"},
    s217: {"title": "Gyps coprotheres, Cape Vulture - IUCN Red List assessment (2021), PDF", "publisher": "IUCN Red List / BirdLife International (copy hosted by VulPro)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.vulpro.com/wp-content/uploads/2023/08/10.2305_IUCN.UK_.2021-3.RLTS_.T22695225A197073171.en-1.pdf"},
    s218: {"title": "Cape vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Cape_vulture"},
    s219: {"title": "Rüppell's vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/R%C3%BCppell%27s_vulture"},
    s220: {"title": "Rüppell's Vulture", "publisher": "The Peregrine Fund", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.peregrinefund.org/explore-raptors-species/vultures/ruppells-vulture"},
    s221: {"title": "Gyps rueppellii, Rüppell's griffon", "publisher": "Animal Diversity Web (University of Michigan)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://animaldiversity.org/accounts/Gyps_rueppellii"},
    s222: {"title": "Eurasian griffon vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Eurasian_griffon_vulture"},
    s223: {"title": "Griffon Vulture (Gyps fulvus)", "publisher": "Oiseaux.net", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://oiseaux.net/birds/griffon.vulture.html"},
    s224: {"title": "Maghreb vultures", "publisher": "Magornitho", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://magornitho.org/2014/08/maghreb-vultures/"},
    s225: {"title": "Cape Vulture (Gyps coprotheres)", "publisher": "Oiseaux.net", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.oiseaux.net/birds/cape.vulture.html"},
    s226: {"title": "Emperor scorpion", "publisher": "Wikipedia (source secondaire / secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Emperor_scorpion"},
    s227: {"title": "Pandinus imperator", "publisher": "Animal Diversity Web (University of Michigan)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://animaldiversity.org/accounts/Pandinus_imperator/"},
    s228: {"title": "Pandinus imperator", "publisher": "NTNU University Library, Scorpion Files", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.ntnu.no/ub/scorpion-files/p_imperator.php"},
    s229: {"title": "Emperor scorpions: what to know", "publisher": "WebMD", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.webmd.com/a-to-z-guides/emperor-scorpions-what-to-know/"},
    s230: {"title": "Gyps coprotheres, Cape Vulture - IUCN Red List assessment (2021), PDF", "publisher": "IUCN Red List / BirdLife International (copy hosted by VulPro)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.vulpro.com/wp-content/uploads/2023/08/10.2305_IUCN.UK_.2021-3.RLTS_.T22695225A197073171.en-1.pdf"},
    s231: {"title": "Cape vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Cape_vulture"},
    s232: {"title": "Cape Vulture (Gyps coprotheres)", "publisher": "Oiseaux.net", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.oiseaux.net/birds/cape.vulture.html"},
    s233: {"title": "Cape Vulture", "publisher": "CapeNature", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://capenature.co.za/fauna-and-flora/cape-vulture"},
    s234: {"title": "Gyps coprotheres, Cape Vulture - regional assessment", "publisher": "SANBI, Red List of South African Species", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://speciesstatus.sanbi.org/assessment/last-assessment/3068/"},
    s235: {"title": "White-backed Vulture (Red List of South African Birds, 2025 regional assessment)", "publisher": "BirdLife South Africa", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.birdlife.org.za/red-list/white-backed-vulture/"},
    s236: {"title": "White-backed vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/White-backed_vulture"},
    s237: {"title": "Rüppell's vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/R%C3%BCppell%27s_vulture"},
    s238: {"title": "Rüppell's Vulture", "publisher": "The Peregrine Fund", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.peregrinefund.org/explore-raptors-species/vultures/ruppells-vulture"},
    s239: {"title": "Multi-species Action Plan to Conserve African-Eurasian Vultures (Vulture MSAP), Annex 3, section 3.13 Rüppell's Vulture", "publisher": "CMS (UN Convention on Migratory Species)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.cms.int/sites/default/files/document/cms_cop12_doc.24.1.4_annex3_vulture-msap_e.pdf"},
    s240: {"title": "Rüppell's vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/R%C3%BCppell%27s_vulture"},
    s241: {"title": "Gyps rueppellii, Rüppell's griffon", "publisher": "Animal Diversity Web (University of Michigan)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://animaldiversity.org/accounts/Gyps_rueppellii"},
    s242: {"title": "Rüppell's Vulture", "publisher": "The Peregrine Fund", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.peregrinefund.org/explore-raptors-species/vultures/ruppells-vulture"},
    s243: {"title": "Rüppell's Vulture (Gyps rueppelli)", "publisher": "Oiseaux.net", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://oiseaux.net/birds/ruppell.s.vulture.html"},
    s244: {"title": "Rüppell's Vulture (Gyps rueppelli): a new vulture species for Europe? (Onrubia et al., 2024, Journal of Ornithology)", "publisher": "Springer", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://link.springer.com/article/10.1007/s10336-024-02160-5"},
    s245: {"title": "Vultures of the Old World (6 Sept 2019)", "publisher": "Africa Geographic", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://africageographic.com/stories/vultures/"},
    s246: {"title": "2021 IUCN SSC Vulture Specialist Group report", "publisher": "IUCN Species Survival Commission", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://iucn.org/sites/default/files/2022-12/2021-iucn-ssc-vulture-sg-report_publication.pdf"},
    s247: {"title": "White-backed Vulture (Red List of South African Birds, 2025 regional assessment)", "publisher": "BirdLife South Africa", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.birdlife.org.za/red-list/white-backed-vulture/"},
    s248: {"title": "Cape vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Cape_vulture"},
    s249: {"title": "White-backed vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/White-backed_vulture"},
    s250: {"title": "Eurasian griffon vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/Eurasian_griffon_vulture"},
    s251: {"title": "Griffon Vulture (Gyps fulvus)", "publisher": "Oiseaux.net", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://oiseaux.net/birds/griffon.vulture.html"},
    s252: {"title": "Maghreb vultures", "publisher": "Magornitho", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://magornitho.org/2014/08/maghreb-vultures/"},
    s253: {"title": "Griffon vulture", "publisher": "Vulture Conservation Foundation (4vultures.org)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://4vultures.org/vultures/griffon-vulture/"},
    s254: {"title": "Stratégie nationale pour la conservation des rapaces au Maroc", "publisher": "UICN (IUCN)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://iucn.org/sites/default/files/2025-10/strategie-rapaces-maroc_web.pdf"},
    s255: {"title": "Griffon Vulture (Opus)", "publisher": "BirdForum", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://birdforum.net/opus/Griffon_Vulture"},
    s256: {"title": "Griffon Vultures in the Sahel / Iberian population and Strait of Gibraltar counts (Journal of Ornithology, 2024)", "publisher": "Springer", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://link.springer.com/article/10.1007/s10336-024-02160-5"},
    s257: {"title": "Migrating Eurasian Griffon Vulture (Saudi Arabia, 21 Oct 2018)", "publisher": "Birds of Saudi Arabia (blog)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.birdsofsaudiarabia.com/2018/10/migrating-eurasian-griffon-vulture.html"},
    s258: {"title": "Priority areas for vulture conservation in the Horn of Africa largely fall outside the protected area network", "publisher": "Bird Conservation International (Cambridge University Press)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://www.cambridge.org/core/journals/bird-conservation-international/article/priority-areas-for-vulture-conservation-in-the-horn-of-africa-largely-fall-outside-the-protected-area-network/644A624D7879275496AD5698747F7149"},
    s259: {"title": "Rüppell's vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/R%C3%BCppell%27s_vulture"},
    s260: {"title": "White-backed vulture", "publisher": "Wikipedia (secondary source)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://en.wikipedia.org/wiki/White-backed_vulture"},
    s261: {"title": "A literature review of occurrence of Egyptian Vulture resident in Africa, Vulture News 77 (Nov 2019)", "publisher": "Vulture News (core.ac.uk copy)", "date": {"en": "read Nov 2026", "fr": "consultée en nov. 2026"}, "url": "https://core.ac.uk/download/478393314.pdf"}
  },

  parks: [
    {
      id: "kruger",
      country: "za",
      map: { lat: -23.95, lng: 31.55, zoom: 8 },
      zone: { south: -25.55, north: -22.30, west: 30.85, east: 32.05 },
      name: { en: "Kruger National Park", fr: "Parc national Kruger" },
      region: { en: "Limpopo & Mpumalanga provinces", fr: "Provinces du Limpopo et du Mpumalanga" },
      facts: [
        { label: { en: "Area", fr: "Superficie" }, value: { en: "about 19,600 km²", fr: "environ 19 600 km²" } },
        { label: { en: "Established", fr: "Création" }, value: { en: "1898 (Sabi Game Reserve); named Kruger National Park in 1926", fr: "1898 (réserve de gibier de Sabi) ; devient le parc national Kruger en 1926" } },
        { label: { en: "Mammals", fr: "Mammifères" }, value: { en: "148 species", fr: "148 espèces" } },
        { label: { en: "Birds", fr: "Oiseaux" }, value: { en: "505 species (SANParks)", fr: "505 espèces (SANParks)" } },
        { label: { en: "Reptiles / Amphibians", fr: "Reptiles / Amphibiens" }, value: { en: "118 / 35 species", fr: "118 / 35 espèces" } }
      ],
      about: {
        en: "One of the largest game reserves in Africa. It is home to the Big Five (lion, leopard, elephant, rhino, buffalo) plus cheetah, wild dog, hippo, giraffe, zebra and many antelope.",
        fr: "L’une des plus grandes réserves de faune d’Afrique. On y trouve les Cinq Grands (lion, léopard, éléphant, rhinocéros, buffle) ainsi que le guépard, le lycaon, l’hippopotame, la girafe, le zèbre et de nombreuses antilopes."
      },
      bestTime: {
        en: "Animals are easiest to see in the dry season (roughly May to September), when they gather at rivers and waterholes, and in the early morning and late afternoon. General guidance; check SANParks for current conditions.",
        fr: "Les animaux sont plus faciles à observer en saison sèche (environ de mai à septembre), quand ils se rassemblent près des rivières et des points d’eau, tôt le matin et en fin d’après-midi. Conseil général ; consultez SANParks pour les conditions actuelles."
      },
      sources: ["s1", "s27"],
      animals: ["lion", "elephant", "leopard", "buffalo", "whiterhino", "blackrhino", "giraffe", "hippo", "cheetah", "wilddog", "hyena", "zebra", "impala", "kudu", "wildebeest", "waterbuck", "warthog", "martialeagle", "whitebackedvulture", "lappetvulture", "fisheagle", "blackbackedjackal", "vervet", "eland", "nyala", "reedbuck", "steenbok", "porcupine", "baboon", "mongoose", "honeybadger", "serval", "caracal", "pangolin", "sidestripedjackal", "nilecrocodile", "nilemonitor", "blackmamba", "spittingcobra", "chameleon", "sebapython", "marabou", "sable", "roan", "ostrich"]
    }
  ],

  animals: {
    lion: {
      img: "animal-lion.jpg",
      name: { en: "Lion", fr: "Lion" },
      sci: "Panthera leo",
      status: "VU",
      statusAsOf: { en: "IUCN Red List, reconfirmed in 2023", fr: "Liste rouge UICN, reconfirmé en 2023" },
      statusSrc: ["s25"],
      global: {
        pop: {
          en: "About 23,000 adult and sub-adult lions in Africa (plus about 670 in India).",
          fr: "Environ 23 000 lions adultes et sub-adultes en Afrique (plus environ 670 en Inde)."
        },
        trend: { en: "Decreasing", fr: "En baisse" },
        asOf: "2023",
        src: ["s11"]
      },
      diet: {
        en: "Carnivore. Hunts zebra, wildebeest, buffalo, impala and other medium to large herbivores, often at dusk or at night.",
        fr: "Carnivore. Chasse zèbres, gnous, buffles, impalas et autres herbivores, souvent au crépuscule ou la nuit."
      },
      size: { en: "Males about 150–250 kg; females about 120–180 kg.", fr: "Mâles d’environ 150 à 250 kg ; femelles d’environ 120 à 180 kg." },
      lifespan: { en: "About 10–14 years in the wild.", fr: "Environ 10 à 14 ans à l’état sauvage." },
      behavior: {
        en: "The only truly social big cat. Lives in prides of related females and cubs, defended by a few males. Rests most of the day.",
        fr: "Le seul grand félin vraiment social. Vit en clans de femelles apparentées et de petits, défendus par quelques mâles. Se repose la plus grande partie de la journée."
      },
      recognize: { en: "Sandy-yellow to tawny coat, paler belly, round ears and a dark tuft at the end of the tail. The biggest cat in Africa.", fr: "Pelage fauve à jaune sable, ventre plus clair, oreilles rondes et touffe sombre au bout de la queue. Le plus grand félin d’Afrique." },
      male: { en: "Has a mane (from blond to almost black) and is much bigger and heavier.", fr: "Porte une crinière (du blond au presque noir) et est bien plus grand et plus lourd." },
      female: { en: "No mane, smaller and slimmer. She usually does most of the hunting.", fr: "Pas de crinière, plus petite et plus mince. C’est elle qui chasse le plus souvent." },
      safety: {
        en: "Never leave your vehicle outside permitted areas. Keep windows closed when lions are close.",
        fr: "Ne quittez jamais votre véhicule en dehors des zones autorisées. Gardez les vitres fermées quand des lions sont proches."
      }
    },

    elephant: {
      img: "animal-elephant.jpg",
      name: { en: "African savanna elephant", fr: "Éléphant de savane d’Afrique" },
      sci: "Loxodonta africana",
      status: "EN",
      statusAsOf: { en: "IUCN Red List, 25 Mar 2021", fr: "Liste rouge UICN, 25 mars 2021" },
      statusSrc: ["s9"],
      global: {
        pop: {
          en: "Roughly 415,000 African elephants of both species combined (2016 IUCN African Elephant Status Report, the latest reliable continental estimate cited in 2021). Savanna elephants declined by at least 60% over about 50 years.",
          fr: "Environ 415 000 éléphants d’Afrique, les deux espèces confondues (rapport UICN 2016, dernière estimation continentale fiable citée en 2021). Les éléphants de savane ont diminué d’au moins 60 % en 50 ans environ."
        },
        trend: { en: "Decreasing", fr: "En baisse" },
        asOf: { en: "2016 count; status 2021", fr: "comptage 2016 ; statut 2021" },
        src: ["s9"]
      },
      diet: {
        en: "Herbivore: grass, leaves, bark and fruit. Can eat up to about 150 kg of vegetation a day.",
        fr: "Herbivore : herbe, feuilles, écorce et fruits. Peut manger jusqu’à environ 150 kg de végétation par jour."
      },
      size: { en: "Bulls up to about 6 tonnes and over 3 m at the shoulder; cows are smaller.", fr: "Mâles jusqu’à environ 6 tonnes et plus de 3 m au garrot ; les femelles sont plus petites." },
      lifespan: { en: "About 60–70 years.", fr: "Environ 60 à 70 ans." },
      behavior: {
        en: "Lives in family herds led by an old female (the matriarch); bulls roam alone or in small groups. Digs waterholes, topples trees and spreads seeds, reshaping the landscape.",
        fr: "Vit en troupeaux familiaux menés par une vieille femelle (la matriarche) ; les mâles vivent seuls ou en petits groupes. Creuse des points d’eau, renverse des arbres et disperse des graines, ce qui façonne le paysage."
      },
      recognize: { en: "Huge grey animal with very large ears (a bit like the shape of Africa), a long trunk and two tusks. Much bigger than the Asian elephant.", fr: "Énorme animal gris aux très grandes oreilles (qui rappellent la forme de l’Afrique), à la longue trompe et avec deux défenses. Bien plus grand que l’éléphant d’Asie." },
      male: { en: "Much bigger and heavier, with thicker, longer tusks. Often alone or in small groups of males.", fr: "Bien plus grand et plus lourd, avec des défenses plus épaisses et plus longues. Souvent seul ou en petits groupes de mâles." },
      female: { en: "Smaller, with thinner tusks. Lives in the family herd with her calves.", fr: "Plus petite, avec des défenses plus fines. Vit dans le troupeau familial avec ses petits." },
      safety: {
        en: "Keep a respectful distance, never block their path and switch off your engine. Warning signs: ears spread wide, head shaking, mock charges. Bulls in musth are especially dangerous.",
        fr: "Gardez vos distances, ne leur barrez jamais le passage et coupez le moteur. Signes d’avertissement : oreilles déployées, secouements de tête, fausses charges. Les mâles en musth sont particulièrement dangereux."
      }
    },

    leopard: {
      img: "animal-leopard.jpg",
      name: { en: "Leopard", fr: "Léopard" },
      sci: "Panthera pardus",
      status: "VU",
      statusAsOf: { en: "IUCN Red List (2020 status quoted in 2021 factsheet)", fr: "Liste rouge UICN (statut de 2020 cité dans une fiche de 2021)" },
      statusSrc: ["s19"],
      global: {
        pop: {
          en: "No reliable range-wide estimate exists. Numbers are decreasing and Africa has lost an estimated 48–67% of the leopard’s historic range.",
          fr: "Il n’existe pas d’estimation fiable pour l’ensemble de l’aire. Les effectifs diminuent et l’Afrique a perdu environ 48 à 67 % de l’aire historique du léopard."
        },
        trend: { en: "Decreasing", fr: "En baisse" },
        asOf: { en: "2021 factsheet", fr: "fiche de 2021" },
        src: ["s19"]
      },
      diet: {
        en: "Carnivore: impala, small antelope, monkeys, birds. Often hoists its kills up a tree to keep them from lions and hyenas.",
        fr: "Carnivore : impalas, petites antilopes, singes, oiseaux. Hisse souvent ses proies dans un arbre pour les protéger des lions et des hyènes."
      },
      size: { en: "Males about 40–90 kg; females about 30–60 kg.", fr: "Mâles d’environ 40 à 90 kg ; femelles d’environ 30 à 60 kg." },
      lifespan: { en: "About 12–17 years in the wild.", fr: "Environ 12 à 17 ans à l’état sauvage." },
      behavior: {
        en: "Solitary, secretive and mostly nocturnal. Rests in trees or thick bush during the day.",
        fr: "Solitaire, discret et surtout nocturne. Se repose dans les arbres ou les fourrés pendant la journée."
      },
      recognize: { en: "Golden-yellow coat covered in rosettes (rings of spots), white belly, muscular body and a long tail. Not to be confused with the cheetah, which has solid spots and a slim body.", fr: "Pelage jaune doré couvert de rosettes (anneaux de taches), ventre blanc, corps musclé et longue queue. À ne pas confondre avec le guépard, qui a des taches pleines et un corps mince." },
      male: { en: "Bigger and heavier, with a broader head and a thicker neck.", fr: "Plus grand et plus lourd, avec une tête plus large et un cou plus épais." },
      female: { en: "Smaller and lighter, with a finer head.", fr: "Plus petite et plus légère, avec une tête plus fine." },
      safety: {
        en: "Rarely seen and shy, but very powerful. Stay in your vehicle and never approach on foot.",
        fr: "Rarement vu et craintif, mais très puissant. Restez dans votre véhicule et ne vous approchez jamais à pied."
      }
    },

    buffalo: {
      img: "animal-buffalo.jpg",
      name: { en: "African (Cape) buffalo", fr: "Buffle d’Afrique (buffle du Cap)" },
      sci: "Syncerus caffer",
      status: "NT",
      statusAsOf: { en: "IUCN Red List (species level, 2019)", fr: "Liste rouge UICN (niveau espèce, 2019)" },
      statusSrc: ["s12"],
      global: {
        pop: {
          en: "About 569,000–573,000 African buffalo (about 398,000–401,000 mature individuals). A decline of about 18% was recorded between 1999 and 2014.",
          fr: "Environ 569 000 à 573 000 buffles d’Afrique (environ 398 000 à 401 000 adultes). Un déclin d’environ 18 % a été observé entre 1999 et 2014."
        },
        trend: { en: "Decreasing overall", fr: "En baisse globalement" },
        asOf: { en: "IUCN assessment 2019", fr: "évaluation UICN 2019" },
        src: ["s12"]
      },
      diet: { en: "Grazer: mostly grass. Needs to drink daily.", fr: "Brouteur d’herbe. Doit boire tous les jours." },
      size: { en: "Bulls up to about 900 kg.", fr: "Mâles jusqu’à environ 900 kg." },
      lifespan: { en: "About 15–20 years in the wild.", fr: "Environ 15 à 20 ans à l’état sauvage." },
      behavior: {
        en: "Lives in herds that can reach around 200 animals in Kruger. Old lone bulls are often bad-tempered. A main prey of lions.",
        fr: "Vit en troupeaux pouvant atteindre environ 200 animaux au Kruger. Les vieux mâles solitaires sont souvent irascibles. Proie principale des lions."
      },
      recognize: { en: "Heavy, dark brown to black ox-like animal with big drooping ears and curved horns. Both sexes have horns.", fr: "Animal lourd, de type bovin, brun foncé à noir, avec de grandes oreilles tombantes et des cornes recourbées. Les deux sexes ont des cornes." },
      male: { en: "Larger. The horns join into a thick shield (the “boss”) across the forehead.", fr: "Plus grand. Les cornes se rejoignent en un épais bouclier (la « bosse ») sur le front." },
      female: { en: "Smaller. The horns are thinner and do not form a full shield.", fr: "Plus petite. Les cornes sont plus fines et ne forment pas de bouclier complet." },
      safety: {
        en: "Considered one of Africa’s most dangerous animals when wounded or alone. Keep your distance and stay in your vehicle.",
        fr: "Considéré comme l’un des animaux les plus dangereux d’Afrique lorsqu’il est blessé ou isolé. Gardez vos distances et restez dans votre véhicule."
      }
    },


    whiterhino: {
      img: "animal-whiterhino.jpg",
      name: { en: "White rhinoceros", fr: "Rhinocéros blanc" },
      sci: "Ceratotherium simum",
      status: "NT",
      statusAsOf: { en: "IUCN Red List, as reported by IUCN in Aug 2025", fr: "Liste rouge UICN, d’après l’UICN (août 2025)" },
      statusSrc: ["s29"],
      global: {
        pop: {
          en: "15,752 white rhinos in Africa at the end of 2024, down 11.2% in one year. South Africa held 12,531 of them at the end of 2025.",
          fr: "15 752 rhinocéros blancs en Afrique fin 2024, en baisse de 11,2 % en un an. L’Afrique du Sud en abritait 12 531 fin 2025."
        },
        trend: { en: "Decreasing", fr: "En baisse" },
        asOf: { en: "end of 2024 (Africa); end of 2025 (South Africa)", fr: "fin 2024 (Afrique) ; fin 2025 (Afrique du Sud)" },
        src: ["s29", "s7"]
      },
      diet: { en: "Grazer: eats short grass with its wide, square lip.", fr: "Brouteur d’herbe rase, grâce à sa large lèvre carrée." },
      size: { en: "About 1,800–2,300 kg.", fr: "Environ 1 800 à 2 300 kg." },
      lifespan: { en: "About 35–40 years.", fr: "Environ 35 à 40 ans." },
      behavior: {
        en: "Females and young live in small groups; males are territorial. The wide, square lip is how to tell it from the black rhino. Loves mud baths.",
        fr: "Les femelles et les jeunes vivent en petits groupes ; les mâles sont territoriaux. La large lèvre carrée permet de le distinguer du rhinocéros noir. Adore les bains de boue."
      },
      recognize: { en: "Two horns, a wide square mouth for grazing, a hump on the shoulders and a head carried low. Grey, but often looks brown from the mud.", fr: "Deux cornes, une large bouche carrée pour brouter, une bosse sur les épaules et la tête portée basse. Gris, mais paraît souvent brun à cause de la boue." },
      male: { en: "Bigger and heavier, with a thicker neck. The front horn is usually shorter and thicker.", fr: "Plus grand et plus lourd, avec un cou plus épais. La corne avant est en général plus courte et plus épaisse." },
      female: { en: "Slimmer. The front horn is often longer and thinner.", fr: "Plus fine. La corne avant est souvent plus longue et plus fine." },
      safety: {
        en: "Can charge suddenly. Keep your distance and stay in your vehicle. Never share live rhino locations on social media, it helps poachers.",
        fr: "Peut charger brusquement. Gardez vos distances et restez dans votre véhicule. Ne partagez jamais la position en direct des rhinocéros sur les réseaux sociaux : cela aide les braconniers."
      }
    },

    blackrhino: {
      img: "animal-blackrhino.jpg",
      name: { en: "Black rhinoceros", fr: "Rhinocéros noir" },
      sci: "Diceros bicornis",
      status: "CR",
      statusAsOf: { en: "IUCN Red List, as reported by IUCN in Aug 2025", fr: "Liste rouge UICN, d’après l’UICN (août 2025)" },
      statusSrc: ["s29"],
      global: {
        pop: {
          en: "6,788 black rhinos in Africa at the end of 2024, up 5.2% from 2023. South Africa held 2,565 of them at the end of 2025.",
          fr: "6 788 rhinocéros noirs en Afrique fin 2024, en hausse de 5,2 % par rapport à 2023. L’Afrique du Sud en abritait 2 565 fin 2025."
        },
        trend: { en: "Increasing, but still very rare", fr: "En hausse, mais toujours très rare" },
        asOf: { en: "end of 2024 (Africa); end of 2025 (South Africa)", fr: "fin 2024 (Afrique) ; fin 2025 (Afrique du Sud)" },
        src: ["s29", "s7"]
      },
      diet: { en: "Browser: eats leaves, twigs and shrubs with its pointed, hooked lip.", fr: "Mange feuilles, brindilles et arbustes avec sa lèvre pointue en crochet." },
      size: { en: "About 800–1,350 kg.", fr: "Environ 800 à 1 350 kg." },
      lifespan: { en: "About 35–40 years.", fr: "Environ 35 à 40 ans." },
      behavior: {
        en: "Shy and mostly solitary, more nervous and irritable than the white rhino. Its pointed, hooked lip is how to tell it from the white rhino.",
        fr: "Craintif et surtout solitaire, plus nerveux et irritable que le rhinocéros blanc. Sa lèvre pointue en crochet permet de le distinguer du rhinocéros blanc."
      },
      recognize: { en: "Two horns and a pointed, hooked upper lip used to grab leaves. Smaller than the white rhino, with no shoulder hump and the head carried higher.", fr: "Deux cornes et une lèvre supérieure pointue en crochet pour attraper les feuilles. Plus petit que le rhinocéros blanc, sans bosse sur les épaules, la tête portée plus haut." },
      male: { en: "A little heavier and stockier. The front horn is usually shorter and thicker.", fr: "Un peu plus lourd et trapu. La corne avant est en général plus courte et plus épaisse." },
      female: { en: "A little lighter. The front horn is often longer and thinner. The sexes are hard to tell apart from a distance.", fr: "Un peu plus légère. La corne avant est souvent plus longue et plus fine. Les deux sexes sont difficiles à distinguer de loin." },
      safety: {
        en: "Can charge without warning. Keep your distance and stay in your vehicle. Never share live rhino locations on social media.",
        fr: "Peut charger sans prévenir. Gardez vos distances et restez dans votre véhicule. Ne partagez jamais la position en direct des rhinocéros sur les réseaux sociaux."
      }
    },

    impala: {
      img: "animal-impala.jpg",
      name: { en: "Impala", fr: "Impala" },
      sci: "Aepyceros melampus",
      status: "LC",
      statusAsOf: { en: "IUCN Red List; also Least Concern in South Africa (SANBI)", fr: "Liste rouge UICN ; aussi préoccupation mineure en Afrique du Sud (SANBI)" },
      statusSrc: ["s40", "s32"],
      global: {
        pop: {
          en: "About 2 million impala in Africa (1999 estimate, still the figure used in South African assessments).",
          fr: "Environ 2 millions d’impalas en Afrique (estimation de 1999, encore utilisée dans les évaluations sud-africaines)."
        },
        trend: { en: "Stable in South Africa; decreasing across Africa", fr: "Stable en Afrique du Sud ; en baisse à l’échelle de l’Afrique" },
        asOf: { en: "1999 estimate", fr: "estimation de 1999" },
        src: ["s32", "s40"]
      },
      diet: { en: "Mixed feeder: grass in the wet season, leaves as the dry season goes on.", fr: "Mange de l’herbe en saison des pluies, puis des feuilles à mesure que la saison sèche avance." },
      size: { en: "About 40–76 kg.", fr: "Environ 40 à 76 kg." },
      lifespan: { en: "About 12–15 years in the wild.", fr: "Environ 12 à 15 ans à l’état sauvage." },
      behavior: {
        en: "Lives in large herds. When chased it runs in zig-zags with very high leaps. Oxpecker birds pick ticks off its coat.",
        fr: "Vit en grands troupeaux. Poursuivi, il fuit en zigzag avec de très hauts bonds. Des piqueboeufs picorent les tiques sur son pelage."
      },
      recognize: { en: "Slim reddish-brown antelope with a paler belly and black stripes on the rump and back legs, shaped like an “M” seen from behind.", fr: "Antilope svelte brun-roux au ventre plus clair, avec des rayures noires sur la croupe et les pattes arrière qui forment un « M » vu de derrière." },
      male: { en: "Has long, lyre-shaped ringed horns.", fr: "Porte de longues cornes annelées en forme de lyre." },
      female: { en: "No horns. Slightly smaller and slimmer.", fr: "Pas de cornes. Un peu plus petite et plus mince." },
      safety: {
        en: "Harmless to people, but its herds attract predators: drive slowly near them.",
        fr: "Inoffensif pour l’humain, mais ses troupeaux attirent les prédateurs : roulez doucement à proximité."
      }
    },

    kudu: {
      img: "animal-kudu.jpg",
      name: { en: "Greater kudu", fr: "Grand koudou" },
      sci: "Tragelaphus strepsiceros",
      status: "LC",
      statusAsOf: { en: "IUCN Red List; also Least Concern in South Africa (SANBI)", fr: "Liste rouge UICN ; aussi préoccupation mineure en Afrique du Sud (SANBI)" },
      statusSrc: ["s34"],
      global: {
        pop: {
          en: "About 482,000 greater kudu in Africa (1999 estimate, used in South African assessments).",
          fr: "Environ 482 000 grands koudous en Afrique (estimation de 1999, utilisée dans les évaluations sud-africaines)."
        },
        trend: { en: "Increasing in South Africa", fr: "En hausse en Afrique du Sud" },
        asOf: { en: "1999 estimate", fr: "estimation de 1999" },
        src: ["s34", "s39"]
      },
      diet: {
        en: "Browser: leaves, herbs, fruits and flowers, sometimes grass. Gets much of its water from food and drinks only when plants are dry.",
        fr: "Mange feuilles, herbes, fruits et fleurs, parfois de l’herbe. Tire beaucoup d’eau de sa nourriture et ne boit que lorsque la végétation est sèche."
      },
      size: {
        en: "Bulls up to about 250 kg and 1.4–1.55 m at the shoulder; cows up to about 165 kg. Only bulls have the long spiral horns (about 120 cm).",
        fr: "Mâles jusqu’à environ 250 kg et 1,4 à 1,55 m au garrot ; femelles jusqu’à environ 165 kg. Seuls les mâles portent les longues cornes spiralées (environ 120 cm)."
      },
      lifespan: { en: "About 7–8 years in the wild.", fr: "Environ 7 à 8 ans à l’état sauvage." },
      behavior: {
        en: "Shy. Females and young live in small groups, bulls alone or in bachelor groups. Freezes and blends into the bush when alarmed.",
        fr: "Craintif. Les femelles et les jeunes vivent en petits groupes, les mâles seuls ou en groupes de célibataires. Reste immobile et se fond dans la brousse quand il est alerté."
      },
      recognize: { en: "Grey-brown antelope with 6 to 10 thin white vertical stripes on the flanks, big rounded ears and a white band between the eyes.", fr: "Antilope gris-brun avec 6 à 10 fines rayures blanches verticales sur les flancs, de grandes oreilles rondes et une bande blanche entre les yeux." },
      male: { en: "Bigger. Very long spiral horns and a fringe of hair along the throat.", fr: "Plus grand. De très longues cornes spiralées et une frange de poils le long de la gorge." },
      female: { en: "Smaller and lighter. No horns.", fr: "Plus petite et plus légère. Pas de cornes." },
      safety: {
        en: "Harmless unless cornered. Bulls can be aggressive during the mating season.",
        fr: "Inoffensif sauf s’il est acculé. Les mâles peuvent être agressifs pendant la saison des amours."
      }
    },

    wildebeest: {
      img: "animal-wildebeest.jpg",
      name: { en: "Blue wildebeest", fr: "Gnou bleu" },
      sci: "Connochaetes taurinus",
      status: "LC",
      statusAsOf: { en: "IUCN Red List; also Least Concern in South Africa (SANBI)", fr: "Liste rouge UICN ; aussi préoccupation mineure en Afrique du Sud (SANBI)" },
      statusSrc: ["s36"],
      global: {
        pop: {
          en: "About 1,550,000 common wildebeest in Africa (all subspecies); about 130,000 of them are the blue wildebeest of southern Africa.",
          fr: "Environ 1 550 000 gnous communs en Afrique (toutes sous-espèces) ; environ 130 000 sont des gnous bleus d’Afrique australe."
        },
        trend: { en: "Stable or increasing in South Africa", fr: "Stable ou en hausse en Afrique du Sud" },
        asOf: { en: "estimate used in South African assessments", fr: "estimation utilisée dans les évaluations sud-africaines" },
        src: ["s36"]
      },
      diet: { en: "Grazer: short grass.", fr: "Brouteur d’herbe rase." },
      size: { en: "Roughly 180–250 kg.", fr: "Environ 180 à 250 kg." },
      lifespan: { en: "About 15–20 years in the wild.", fr: "Environ 15 à 20 ans à l’état sauvage." },
      behavior: {
        en: "Lives in herds, often with zebra. Calves can stand and run within minutes of birth.",
        fr: "Vit en troupeaux, souvent avec les zèbres. Les petits tiennent debout et courent quelques minutes après la naissance."
      },
      recognize: { en: "Bulky grey-blue antelope with a dark face, a beard, a dark mane and dark vertical stripes on the neck and shoulders. The back slopes down. Both sexes have curved horns.", fr: "Antilope massive gris-bleu, face sombre, barbe, crinière sombre et rayures verticales sombres sur le cou et les épaules. Le dos est incliné. Les deux sexes ont des cornes recourbées." },
      male: { en: "Larger and heavier, with thicker horns that bulge at the base.", fr: "Plus grand et plus lourd, avec des cornes plus épaisses et renflées à la base." },
      female: { en: "Lighter, with slimmer horns.", fr: "Plus légère, avec des cornes plus fines." },
      safety: {
        en: "Males can be aggressive. Stay in your vehicle.",
        fr: "Les mâles peuvent être agressifs. Restez dans votre véhicule."
      }
    },

    waterbuck: {
      img: "animal-waterbuck.jpg",
      name: { en: "Waterbuck", fr: "Cobe à croissant" },
      sci: "Kobus ellipsiprymnus",
      status: "LC",
      statusAsOf: { en: "IUCN Red List; also Least Concern in South Africa (SANBI)", fr: "Liste rouge UICN ; aussi préoccupation mineure en Afrique du Sud (SANBI)" },
      statusSrc: ["s33"],
      global: {
        pop: {
          en: "About 200,000 waterbuck in Africa (1999 estimate; no recent global figure).",
          fr: "Environ 200 000 cobes à croissant en Afrique (estimation de 1999 ; pas de chiffre mondial récent)."
        },
        trend: { en: "Slowly decreasing in Africa; stable in South Africa", fr: "En lente baisse en Afrique ; stable en Afrique du Sud" },
        asOf: { en: "1999 estimate", fr: "estimation de 1999" },
        src: ["s33"]
      },
      diet: { en: "Grazer: tall grass, always near water.", fr: "Brouteur d’herbe haute, toujours près de l’eau." },
      size: { en: "Males about 200–260 kg; females about 160–200 kg.", fr: "Mâles d’environ 200 à 260 kg ; femelles d’environ 160 à 200 kg." },
      lifespan: { en: "About 15–18 years in the wild.", fr: "Environ 15 à 18 ans à l’état sauvage." },
      behavior: {
        en: "Stays close to rivers and dams. Males have long ridged horns; both sexes have a white ring on the rump.",
        fr: "Reste près des rivières et des barrages. Les mâles ont de longues cornes annelées ; les deux sexes portent un anneau blanc sur la croupe."
      },
      recognize: { en: "Shaggy grey-brown coat with a white ring around the rump and white around the muzzle and above the eyes.", fr: "Pelage hirsute gris-brun avec un anneau blanc autour de la croupe et du blanc autour du museau et au-dessus des yeux." },
      male: { en: "Bigger. Long ridged horns curving forward.", fr: "Plus grand. De longues cornes annelées qui se courbent vers l’avant." },
      female: { en: "Smaller. No horns.", fr: "Plus petite. Pas de cornes." },
      safety: {
        en: "Males can be aggressive and are dangerous when cornered. Admire from the vehicle.",
        fr: "Les mâles peuvent être agressifs et dangereux s’ils sont acculés. Admirez-le depuis le véhicule."
      }
    },

    warthog: {
      img: "animal-warthog.jpg",
      name: { en: "Common warthog", fr: "Phacochère commun" },
      sci: "Phacochoerus africanus",
      status: "LC",
      statusAsOf: { en: "IUCN Red List; also Least Concern in South Africa (SANBI)", fr: "Liste rouge UICN ; aussi préoccupation mineure en Afrique du Sud (SANBI)" },
      statusSrc: ["s35"],
      global: {
        pop: {
          en: "No global count. About 250,000 warthogs in southern Africa (Angola, Zambia, Tanzania and south; 1999 estimate).",
          fr: "Pas de comptage mondial. Environ 250 000 phacochères en Afrique australe (Angola, Zambie, Tanzanie et au sud ; estimation de 1999)."
        },
        trend: { en: "Stable to increasing in South Africa", fr: "Stable ou en hausse en Afrique du Sud" },
        asOf: { en: "1999 estimate", fr: "estimation de 1999" },
        src: ["s35"]
      },
      diet: { en: "Grass, roots, bulbs and fruit. Often kneels to dig.", fr: "Herbe, racines, bulbes et fruits. Se met souvent à genoux pour fouiller le sol." },
      size: { en: "About 50–150 kg.", fr: "Environ 50 à 150 kg." },
      lifespan: { en: "About 12–15 years in the wild.", fr: "Environ 12 à 15 ans à l’état sauvage." },
      behavior: {
        en: "Runs with its tail straight up. Sleeps in burrows (often old aardvark holes) and enters them backwards.",
        fr: "Court la queue dressée. Dort dans des terriers (souvent d’anciens terriers d’oryctéropes) et y entre à reculons."
      },
      recognize: { en: "Grey, almost hairless body with a mane of long hair along the back, a big flat head with warts and curved tusks. Runs with its tail straight up.", fr: "Corps gris presque sans poils, avec une crinière de longs poils sur le dos, une grosse tête aplatie avec des verrues et des défenses recourbées. Court la queue dressée." },
      male: { en: "Bigger, with longer tusks and larger warts.", fr: "Plus grand, avec des défenses plus longues et de plus grosses verrues." },
      female: { en: "Smaller, with shorter tusks and smaller warts.", fr: "Plus petite, avec des défenses plus courtes et de plus petites verrues." },
      safety: {
        en: "Rarely aggressive, but the tusks can hurt. Keep away.",
        fr: "Rarement agressif, mais les défenses peuvent blesser. Gardez vos distances."
      }
    },

    hyena: {
      img: "animal-hyena.jpg",
      name: { en: "Spotted hyena", fr: "Hyène tachetée" },
      sci: "Crocuta crocuta",
      status: "LC",
      statusAsOf: { en: "IUCN Red List, 2014 assessment", fr: "Liste rouge UICN, évaluation de 2014" },
      statusSrc: ["s38"],
      global: {
        pop: {
          en: "About 27,000–47,000 spotted hyenas in Africa (tentative estimate). Declining outside protected areas.",
          fr: "Environ 27 000 à 47 000 hyènes tachetées en Afrique (estimation provisoire). En baisse hors des zones protégées."
        },
        trend: { en: "Decreasing outside protected areas", fr: "En baisse hors des zones protégées" },
        asOf: { en: "2014 IUCN assessment (published 2015)", fr: "évaluation UICN de 2014 (publiée en 2015)" },
        src: ["s38"]
      },
      diet: {
        en: "Carnivore and scavenger: hunts most of its own food (zebra, wildebeest, impala) and also eats carcasses, bones included, thanks to very strong jaws.",
        fr: "Carnivore et charognard : chasse la plus grande partie de sa nourriture (zèbres, gnous, impalas) et mange aussi des carcasses, os compris, grâce à ses mâchoires très puissantes."
      },
      size: { en: "About 40–86 kg; females are larger than males.", fr: "Environ 40 à 86 kg ; les femelles sont plus grandes que les mâles." },
      lifespan: { en: "About 12–15 years in the wild.", fr: "Environ 12 à 15 ans à l’état sauvage." },
      behavior: {
        en: "Lives in clans led by females. Known for its “laughing” and whooping calls. Mostly active at dusk and at night.",
        fr: "Vit en clans dirigés par des femelles. Connue pour ses cris « rieurs » et ses hurlements. Surtout active au crépuscule et la nuit."
      },
      recognize: { en: "Sloping back (shoulders higher than the rear), strong neck and big head, round ears, spotted sandy-grey coat and a dark muzzle.", fr: "Dos incliné (épaules plus hautes que l’arrière), cou puissant et grosse tête, oreilles rondes, pelage gris sable tacheté et museau sombre." },
      male: { en: "Slightly smaller than the female and lower in the clan.", fr: "Un peu plus petit que la femelle et de rang inférieur dans le clan." },
      female: { en: "Bigger and dominant: clans are led by females. From a distance the sexes are very hard to tell apart.", fr: "Plus grande et dominante : les clans sont dirigés par des femelles. De loin, les deux sexes sont très difficiles à distinguer." },
      safety: {
        en: "Can be dangerous at night near camps. Never feed it, never leave food out, and stay in your vehicle or inside the camp fence.",
        fr: "Peut être dangereuse la nuit près des camps. Ne la nourrissez jamais, ne laissez aucune nourriture dehors et restez dans votre véhicule ou dans l’enceinte du camp."
      }
    },

    giraffe: {
      img: "animal-giraffe.jpg",
      name: { en: "Giraffe", fr: "Girafe" },
      sci: "Giraffa camelopardalis",
      status: "VU",
      statusAsOf: { en: "IUCN Red List, since Dec 2016", fr: "Liste rouge UICN, depuis décembre 2016" },
      statusSrc: ["s10"],
      global: {
        pop: {
          en: "97,562 giraffes in 2015, down from about 151,700–163,500 in 1985 (a decline of about 36–40% in 30 years).",
          fr: "97 562 girafes en 2015, contre environ 151 700 à 163 500 en 1985 (un déclin d’environ 36 à 40 % en 30 ans)."
        },
        trend: { en: "Decreasing", fr: "En baisse" },
        asOf: { en: "2015 count (IUCN, Dec 2016)", fr: "comptage 2015 (UICN, déc. 2016)" },
        note: {
          en: "This figure is old. Giraffe assessments are being revised, so newer data may exist; it will be checked in the next monthly update.",
          fr: "Ce chiffre est ancien. Les évaluations des girafes sont en cours de révision : des données plus récentes peuvent exister ; elles seront vérifiées lors de la prochaine mise à jour mensuelle."
        },
        src: ["s10"]
      },
      diet: { en: "Browser: leaves of acacia and other trees.", fr: "Mange le feuillage des acacias et d’autres arbres." },
      size: { en: "Up to about 5–5.5 m tall; about 800–1,900 kg.", fr: "Jusqu’à environ 5 à 5,5 m de haut ; environ 800 à 1 900 kg." },
      lifespan: { en: "About 20–25 years in the wild.", fr: "Environ 20 à 25 ans à l’état sauvage." },
      behavior: {
        en: "Lives in loose, changing groups. Sleeps only a few minutes at a time. Spreads its legs awkwardly to drink.",
        fr: "Vit en groupes lâches et changeants. Ne dort que quelques minutes à la fois. Écarte maladroitement les pattes pour boire."
      },
      recognize: { en: "Very tall, with a long neck, brown patches separated by pale lines, and two short horn-like bumps (ossicones) on the head.", fr: "Très grande, au long cou, avec des taches brunes séparées par des lignes claires et deux petites bosses en forme de cornes (les ossicônes) sur la tête." },
      male: { en: "Taller and heavier. The ossicones are thick and often bald on top, worn by fights between males.", fr: "Plus grand et plus lourd. Les ossicônes sont épais et souvent dégarnis au sommet, usés par les combats entre mâles." },
      female: { en: "Shorter and lighter. The ossicones are thinner and topped with tufts of hair.", fr: "Plus petite et plus légère. Les ossicônes sont plus fins et surmontés d’une touffe de poils." },
      safety: {
        en: "Usually calm, but a kick can be deadly. Slow down when giraffes cross the road.",
        fr: "Généralement calme, mais un coup de patte peut être mortel. Ralentissez quand des girafes traversent la route."
      }
    },

    hippo: {
      img: "animal-hippo.jpg",
      name: { en: "Hippopotamus", fr: "Hippopotame" },
      sci: "Hippopotamus amphibius",
      status: "VU",
      statusAsOf: { en: "IUCN Red List, 2016 assessment", fr: "Liste rouge UICN, évaluation de 2016" },
      statusSrc: ["s17"],
      global: {
        pop: {
          en: "About 115,000–130,000 hippos in Africa; overall considered stable but poorly counted.",
          fr: "Environ 115 000 à 130 000 hippopotames en Afrique ; globalement jugés stables mais mal recensés."
        },
        trend: { en: "Stable overall, data gaps", fr: "Stable globalement, données lacunaires" },
        asOf: { en: "IUCN assessment 2016", fr: "évaluation UICN 2016" },
        src: ["s17"]
      },
      diet: {
        en: "Grazer. Leaves the water at night to eat grass, travelling several kilometres.",
        fr: "Brouteur d’herbe. Quitte l’eau la nuit pour manger de l’herbe, sur plusieurs kilomètres."
      },
      size: { en: "About 1,300–1,800 kg (big males can be heavier).", fr: "Environ 1 300 à 1 800 kg (les gros mâles peuvent être plus lourds)." },
      lifespan: { en: "About 40–50 years.", fr: "Environ 40 à 50 ans." },
      behavior: {
        en: "Spends the day in water or mud to protect its skin from the sun. Territorial and aggressive, especially males.",
        fr: "Passe la journée dans l’eau ou la boue pour protéger sa peau du soleil. Territorial et agressif, surtout les mâles."
      },
      recognize: { en: "Huge barrel-shaped grey-pink body, a very wide mouth and short legs. The eyes, ears and nostrils sit on top of the head, so it can see while almost fully under water.", fr: "Énorme corps en forme de tonneau gris-rose, bouche très large et pattes courtes. Les yeux, les oreilles et les narines sont au sommet de la tête : il voit presque entièrement sous l’eau." },
      male: { en: "Bigger and bulkier, with larger tusks (canine teeth). Often scarred from fights.", fr: "Plus grand et plus massif, avec de plus grandes défenses (les canines). Souvent marqué de cicatrices de combats." },
      female: { en: "Smaller and lighter, with smaller tusks.", fr: "Plus petite et plus légère, avec des défenses plus petites." },
      safety: {
        en: "Often called one of Africa’s most dangerous animals. Never walk near river banks, never stand between a hippo and the water, and take extra care at dusk and at night.",
        fr: "Souvent cité parmi les animaux les plus dangereux d’Afrique. Ne marchez jamais près des berges, ne vous placez jamais entre un hippopotame et l’eau, et soyez très prudent au crépuscule et la nuit."
      }
    },

    cheetah: {
      img: "animal-cheetah.jpg",
      name: { en: "Cheetah", fr: "Guépard" },
      sci: "Acinonyx jubatus",
      status: "VU",
      statusAsOf: { en: "IUCN Red List (global); scientists have asked for an upgrade to Endangered", fr: "Liste rouge UICN (mondial) ; des scientifiques demandent un classement « En danger »" },
      statusSrc: ["s14"],
      global: {
        pop: {
          en: "About 7,100 adult and adolescent cheetahs worldwide, in 33 populations, living in only about 9% of their historic range.",
          fr: "Environ 7 100 guépards adultes et adolescents dans le monde, répartis en 33 populations, sur environ 9 % de leur aire historique."
        },
        trend: { en: "Decreasing", fr: "En baisse" },
        asOf: { en: "Dec 2016 (PNAS study)", fr: "déc. 2016 (étude PNAS)" },
        src: ["s14"]
      },
      diet: {
        en: "Carnivore: small to medium antelope such as impala, plus hares and birds. Hunts by day, by sight.",
        fr: "Carnivore : petites et moyennes antilopes comme l’impala, ainsi que lièvres et oiseaux. Chasse de jour, à vue."
      },
      size: { en: "About 35–65 kg. Fastest land animal, around 100 km/h in short sprints.", fr: "Environ 35 à 65 kg. Animal terrestre le plus rapide, environ 100 km/h sur de courtes distances." },
      lifespan: { en: "About 8–12 years in the wild.", fr: "Environ 8 à 12 ans à l’état sauvage." },
      behavior: {
        en: "Females live alone with their cubs; males often form small coalitions. Prefers open grassland and is often bullied by lions and hyenas.",
        fr: "Les femelles vivent seules avec leurs petits ; les mâles forment souvent de petites coalitions. Préfère les plaines ouvertes et est souvent chassé par les lions et les hyènes."
      },
      recognize: { en: "Slim, long-legged, with a small round head, solid black spots and black “tear lines” running from the eyes to the mouth.", fr: "Fin et haut sur pattes, avec une petite tête ronde, des taches noires pleines et des « traits de larmes » noirs allant des yeux à la bouche." },
      male: { en: "Slightly bigger, with a broader head. Often seen with his brothers in a small group.", fr: "Un peu plus grand, avec une tête plus large. Souvent vu avec ses frères en petit groupe." },
      female: { en: "Slimmer and lighter. Usually alone or with her cubs.", fr: "Plus mince et plus légère. Généralement seule ou avec ses petits." },
      safety: {
        en: "Shy and not dangerous in normal conditions, but stay in your vehicle and keep quiet so you do not disturb a hunt.",
        fr: "Craintif et peu dangereux en temps normal, mais restez dans votre véhicule et en silence pour ne pas perturber une chasse."
      }
    },

    wilddog: {
      img: "animal-wilddog.jpg",
      name: { en: "African wild dog (painted dog)", fr: "Lycaon (chien sauvage d’Afrique)" },
      sci: "Lycaon pictus",
      status: "EN",
      statusAsOf: { en: "IUCN Red List", fr: "Liste rouge UICN" },
      statusSrc: ["s16"],
      global: {
        pop: {
          en: "About 6,600 individuals remain in the wild (figure quoted by Wildlife ACT from IUCN data).",
          fr: "Environ 6 600 individus subsistent à l’état sauvage (chiffre cité par Wildlife ACT à partir de données de l’UICN)."
        },
        trend: { en: "Decreasing", fr: "En baisse" },
        asOf: { en: "latest figure quoted by Wildlife ACT", fr: "dernier chiffre cité par Wildlife ACT" },
        src: ["s16"]
      },
      diet: {
        en: "Carnivore: hunts antelope in coordinated packs. Hunting success can reach about 80%, one of the highest among large African predators.",
        fr: "Carnivore : chasse les antilopes en meute coordonnée. Le taux de réussite peut atteindre environ 80 %, l’un des plus élevés parmi les grands prédateurs africains."
      },
      size: { en: "About 18–36 kg.", fr: "Environ 18 à 36 kg." },
      lifespan: { en: "About 10 years in the wild.", fr: "Environ 10 ans à l’état sauvage." },
      behavior: {
        en: "Lives in tight-knit packs where the whole pack helps raise the pups. Packs “vote” by sneezing before they go hunting.",
        fr: "Vit en meutes très soudées où toute la meute aide à élever les petits. Les meutes « votent » en éternuant avant de partir chasser."
      },
      recognize: { en: "Dog-like, with large round ears, a coat patched in black, yellow-brown and white (every dog has its own pattern) and a white tip on the tail.", fr: "Silhouette de chien, grandes oreilles rondes, pelage tacheté de noir, brun-jaune et blanc (chaque lycaon a son propre motif) et bout de la queue blanc." },
      noDiff: { en: "No visible difference between males and females.", fr: "Aucune différence visible entre mâle et femelle." },
      safety: {
        en: "Very rarely a danger to people, but keep your distance and stay in your vehicle.",
        fr: "Très rarement dangereux pour l’humain, mais gardez vos distances et restez dans votre véhicule."
      }
    },

    zebra: {
      img: "animal-zebra.jpg",
      name: { en: "Plains zebra", fr: "Zèbre de plaine" },
      sci: "Equus quagga",
      status: "NT",
      statusAsOf: { en: "IUCN Red List, 2016 assessment", fr: "Liste rouge UICN, évaluation de 2016" },
      statusSrc: ["s18"],
      global: {
        pop: {
          en: "More than 500,000 individuals, including 150,000–250,000 mature animals. Common, but declining in many countries.",
          fr: "Plus de 500 000 individus, dont 150 000 à 250 000 adultes. Commun, mais en déclin dans de nombreux pays."
        },
        trend: { en: "Decreasing in many countries", fr: "En baisse dans de nombreux pays" },
        asOf: { en: "IUCN assessment 2016", fr: "évaluation UICN 2016" },
        src: ["s18"]
      },
      diet: { en: "Grazer: mostly grass, often the tall coarse grass others avoid.", fr: "Brouteur d’herbe, souvent la grande herbe grossière que les autres évitent." },
      size: { en: "About 290–340 kg; roughly 1.3 m at the shoulder.", fr: "Environ 290 à 340 kg ; environ 1,3 m au garrot." },
      lifespan: { en: "About 20–25 years in the wild.", fr: "Environ 20 à 25 ans à l’état sauvage." },
      behavior: {
        en: "Lives in family groups led by a stallion. Each zebra’s stripe pattern is unique. Often seen with wildebeest.",
        fr: "Vit en groupes familiaux menés par un étalon. Le motif de rayures de chaque zèbre est unique. Souvent vu avec les gnous."
      },
      recognize: { en: "Black and white stripes (every zebra has its own pattern), an upright mane and a tufted tail.", fr: "Rayures noires et blanches (chaque zèbre a son propre motif), crinière dressée et queue à houppe." },
      noDiff: { en: "No obvious visual difference between male and female (the stallion is only slightly stockier).", fr: "Pas de différence visible entre mâle et femelle (l’étalon est à peine plus massif)." },
      safety: {
        en: "Can kick and bite if cornered. Admire from the vehicle.",
        fr: "Peut ruer et mordre s’il est acculé. Admirez-le depuis le véhicule."
      }
    },

    martialeagle: {
      "img": "animal-martialeagle.jpg",
      "name": {
        "en": "Martial eagle",
        "fr": "Aigle martial"
      },
      "sci": "Polemaetus bellicosus",
      "status": "EN",
      "statusAsOf": {
        "en": "IUCN Red List as reported by World Land Trust (assessment year not stated there); South Africa regional status: Endangered",
        "fr": "Liste rouge UICN d’après World Land Trust (année de l’évaluation non précisée) ; statut régional en Afrique du Sud : en danger"
      },
      "statusSrc": [
        "s67",
        "s66"
      ],
      "global": {
        "pop": {
          "en": "Unknown today; probably in the tens of thousands in 2001. Declining sharply across much of its range since 1987, especially outside protected areas.",
          "fr": "Inconnu aujourd’hui ; probablement des dizaines de milliers en 2001. En fort déclin dans une grande partie de son aire depuis 1987, surtout hors des zones protégées."
        },
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "asOf": {
          "en": "estimate of 2001",
          "fr": "estimation de 2001"
        },
        "src": [
          "s67"
        ]
      },
      "diet": {
        "en": "Carnivore. Hunts mostly on the ground: reptiles and mammals such as hares, hyraxes, mongooses, small antelopes and jackals, and also birds such as young ostriches, geese and bustards.",
        "fr": "Carnivore. Chasse surtout au sol : reptiles et mammifères comme lièvres, damans, mangoustes, petites antilopes et chacals, ainsi que des oiseaux comme jeunes autruches, oies et outardes."
      },
      "size": {
        "en": "About 78–86 cm long; wingspan over 2 m.",
        "fr": "Environ 78 à 86 cm de long ; envergure de plus de 2 m."
      },
      "lifespan": {
        "en": "Not given in the sources used here.",
        "fr": "Non précisé dans les sources utilisées."
      },
      "behavior": {
        "en": "A powerful hunter, usually seen alone or in pairs, patrolling a large territory and nesting in tall trees.",
        "fr": "Un chasseur puissant, souvent seul ou en couple, qui surveille un grand territoire et niche dans de grands arbres."
      },
      "recognize": {
        "en": "A very large eagle: dark brown head, throat and upperparts, white underparts with dark spots, and a short crest.",
        "fr": "Un très grand aigle : tête, gorge et dessus brun foncé, dessous blanc moucheté de sombre, et une courte huppe."
      },
      "male": {
        "en": "Slightly smaller (about 10%) than the female and usually less spotted underneath.",
        "fr": "Un peu plus petit (environ 10 %) que la femelle et en général moins moucheté dessous."
      },
      "female": {
        "en": "About 10% bigger and usually more heavily spotted on the underparts.",
        "fr": "Environ 10 % plus grande et en général plus fortement mouchetée sur le dessous."
      },
      "safety": {
        "en": "Not dangerous to visitors. Never approach a nest: disturbance can make the pair abandon it.",
        "fr": "Pas dangereux pour les visiteurs. Ne vous approchez jamais d’un nid : le dérangement peut pousser le couple à l’abandonner."
      }
    },

    whitebackedvulture: {
      "img": "animal-whitebackedvulture.jpg",
      "see": "gyps",
      "name": {
        "en": "White-backed vulture",
        "fr": "Vautour africain"
      },
      "sci": "Gyps africanus",
      "status": "CR",
      "statusAsOf": {
        "en": "IUCN Red List as reported by World Land Trust (assessment year not stated there); South Africa regional status: Critically Endangered",
        "fr": "Liste rouge UICN d’après World Land Trust (année de l’évaluation non précisée) ; statut régional en Afrique du Sud : en danger critique"
      },
      "statusSrc": [
        "s68",
        "s64"
      ],
      "global": {
        "pop": {
          "en": "About 270,000 individuals in 1992, followed by a decline of 81% over the next 40 years, and further declines are likely. Main causes: poisoning and power lines.",
          "fr": "Environ 270 000 individus en 1992, puis un déclin de 81 % en 40 ans ; de nouveaux déclins sont probables. Causes principales : empoisonnement et lignes électriques."
        },
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "asOf": {
          "en": "1992 estimate; decline over 40 years",
          "fr": "estimation de 1992 ; déclin sur 40 ans"
        },
        "src": [
          "s68"
        ]
      },
      "diet": {
        "en": "Scavenger: feeds on the carcasses of large dead mammals. Finds them by soaring for long distances and watching other scavengers and predators.",
        "fr": "Charognard : se nourrit des carcasses de grands mammifères morts. Les repère en planant sur de longues distances et en observant les autres charognards et prédateurs."
      },
      "size": {
        "en": "About 94 cm long; wingspan about 218 cm.",
        "fr": "Environ 94 cm de long ; envergure d’environ 218 cm."
      },
      "lifespan": {
        "en": "Not given in the sources used here.",
        "fr": "Non précisé dans les sources utilisées."
      },
      "behavior": {
        "en": "Social: many birds gather at a carcass and nest in tall trees, often in loose colonies.",
        "fr": "Sociable : de nombreux oiseaux se rassemblent autour d’une carcasse et nichent dans de grands arbres, souvent en colonies lâches."
      },
      "recognize": {
        "en": "Mostly brown to buff (older birds paler), with a white rump, blackish flight feathers and white underwing patches seen in flight. Bald black head and neck with a short white ruff. Young birds are darker and streaked.",
        "fr": "Surtout brun à beige (les vieux oiseaux sont plus pâles), avec un croupion blanc, des plumes de vol noirâtres et des taches blanches sous les ailes visibles en vol. Tête et cou nus et noirs avec une courte collerette blanche. Les jeunes sont plus sombres et striés."
      },
      "noDiff": {
        "en": "Adult males and females look alike in size and plumage.",
        "fr": "Mâle et femelle adultes se ressemblent par la taille et le plumage."
      },
      "safety": {
        "en": "Not dangerous. Keep your distance from vultures feeding at a carcass and never leave your vehicle.",
        "fr": "Pas dangereux. Gardez vos distances avec les vautours qui se nourrissent à une carcasse et ne quittez jamais votre véhicule."
      }
    },

    lappetvulture: {
      "img": "animal-lappetvulture.jpg",
      "name": {
        "en": "Lappet-faced vulture",
        "fr": "Vautour oricou"
      },
      "sci": "Torgos tracheliotos",
      "status": "EN",
      "statusAsOf": {
        "en": "IUCN Red List: Endangered (as stated by Wikipedia, whose text is inconsistent on the year); South Africa regional status: Endangered",
        "fr": "Liste rouge UICN : en danger (d’après Wikipédia, dont le texte est incohérent sur l’année) ; statut régional en Afrique du Sud : en danger"
      },
      "statusSrc": [
        "s69",
        "s65"
      ],
      "global": {
        "pop": {
          "en": "About 5,700 mature individuals worldwide, suspected to be declining at a moderately rapid rate (other sources say under 9,000 individuals).",
          "fr": "Environ 5 700 individus matures dans le monde, avec un déclin supposé assez rapide (d’autres sources parlent de moins de 9 000 individus)."
        },
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "asOf": {
          "en": "regional assessment, global context",
          "fr": "évaluation régionale, contexte mondial"
        },
        "src": [
          "s65",
          "s69"
        ]
      },
      "diet": {
        "en": "Scavenger. Tears into the tough hides of carcasses that other vultures cannot open, and often feeds on the remains after others have finished. Also takes small mammals, birds and reptiles.",
        "fr": "Charognard. Déchire les peaux épaisses des carcasses que les autres vautours ne peuvent pas ouvrir, et mange souvent les restes après les autres. Prend aussi de petits mammifères, des oiseaux et des reptiles."
      },
      "size": {
        "en": "95–115 cm long; wingspan 2.5–2.9 m. The largest vulture in its range.",
        "fr": "95 à 115 cm de long ; envergure de 2,5 à 2,9 m. Le plus grand vautour de son aire."
      },
      "lifespan": {
        "en": "Not given in the sources used here.",
        "fr": "Non précisé dans les sources utilisées."
      },
      "behavior": {
        "en": "Usually the dominant vulture at a carcass. Nests alone in a tree, unlike colonial species.",
        "fr": "Souvent le vautour dominant à une carcasse. Niche seul dans un arbre, contrairement aux espèces coloniales."
      },
      "recognize": {
        "en": "A huge vulture with a bare pink-red head, large folds of skin (lappets) on the sides of the head, dark brown plumage and a pale streaked belly.",
        "fr": "Un énorme vautour à la tête nue rose-rouge, avec de grands replis de peau (les caroncules) sur les côtés de la tête, un plumage brun foncé et un ventre pâle strié."
      },
      "noDiff": {
        "en": "Males and females look alike; our sources do not describe a visible difference.",
        "fr": "Mâle et femelle se ressemblent ; nos sources ne décrivent aucune différence visible."
      },
      "safety": {
        "en": "Not dangerous. Keep your distance from vultures at a carcass and never leave your vehicle.",
        "fr": "Pas dangereux. Gardez vos distances avec les vautours à une carcasse et ne quittez jamais votre véhicule."
      }
    },

    fisheagle: {
      "img": "animal-fisheagle.jpg",
      "name": {
        "en": "African fish eagle",
        "fr": "Aigle pêcheur d’Afrique"
      },
      "sci": "Haliaeetus vocifer",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (as reported by The Peregrine Fund; year not stated)",
        "fr": "Liste rouge UICN : préoccupation mineure (d’après The Peregrine Fund ; année non précisée)"
      },
      "statusSrc": [
        "s70"
      ],
      "global": {
        "pop": {
          "en": "No global figure in the source used. Still common throughout its range, although numbers have dropped at some sites (for example Lake Baringo, Kenya).",
          "fr": "Aucun chiffre mondial dans la source utilisée. Toujours commun dans toute son aire, même si les effectifs ont baissé à certains endroits (par exemple le lac Baringo, au Kenya)."
        },
        "trend": {
          "en": "Not stated for the whole species",
          "fr": "Non précisée pour l’ensemble de l’espèce"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s70"
        ]
      },
      "diet": {
        "en": "Mainly fish, caught at the water surface. When food is scarce it also eats small birds, insects (especially termites) and carrion, and sometimes steals fish from other birds.",
        "fr": "Surtout du poisson, attrapé à la surface de l’eau. Quand la nourriture manque, il mange aussi de petits oiseaux, des insectes (surtout des termites) et des charognes, et vole parfois le poisson d’autres oiseaux."
      },
      "size": {
        "en": "63–76 cm long; wingspan 1.8–2.4 m; weight 1.8–3.6 kg.",
        "fr": "63 à 76 cm de long ; envergure de 1,8 à 2,4 m ; poids de 1,8 à 3,6 kg."
      },
      "lifespan": {
        "en": "Not given in the sources used here.",
        "fr": "Non précisé dans les sources utilisées."
      },
      "behavior": {
        "en": "Always near water. Pairs call to each other with a far-carrying cry, often heard before the bird is seen. The female incubates the eggs; the male finds food for the family.",
        "fr": "Toujours près de l’eau. Les couples s’appellent par un cri qui porte très loin, souvent entendu avant que l’oiseau soit vu. La femelle couve les œufs ; le mâle trouve la nourriture de la famille."
      },
      "recognize": {
        "en": "White head, chest and tail, a chestnut belly and shoulders, and black wings. Young birds are mostly brown and streaked.",
        "fr": "Tête, poitrine et queue blanches, ventre et épaules marron, ailes noires. Les jeunes sont surtout bruns et striés."
      },
      "male": {
        "en": "Same plumage as the female, a little smaller.",
        "fr": "Même plumage que la femelle, un peu plus petit."
      },
      "female": {
        "en": "Same plumage as the male, a little larger.",
        "fr": "Même plumage que le mâle, un peu plus grande."
      },
      "safety": {
        "en": "Not dangerous. Do not disturb nests along rivers and dams.",
        "fr": "Pas dangereux. Ne dérangez pas les nids le long des rivières et des barrages."
      }
    },

    blackbackedjackal: {
      "img": "animal-blackbackedjackal.jpg",
      "name": {
        "en": "Black-backed jackal",
        "fr": "Chacal à chabraque (à dos noir)"
      },
      "sci": "Lupulella mesomelas",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2014 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2014, citée par Wikipédia)"
      },
      "statusSrc": [
        "s74"
      ],
      "global": {
        "pop": {
          "en": "No global figure in the source used. Widespread in two separate parts of Africa, about 900 km apart.",
          "fr": "Aucun chiffre mondial dans la source utilisée. Répandu dans deux zones séparées d’Afrique, à environ 900 km l’une de l’autre."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s74"
        ]
      },
      "diet": {
        "en": "Omnivore. Eats insects, rodents, hares, young antelopes, carrion, birds, eggs, lizards and snakes, and sometimes fruit and berries.",
        "fr": "Omnivore. Mange des insectes, des rongeurs, des lièvres, de jeunes antilopes, des charognes, des oiseaux, des œufs, des lézards et des serpents, et parfois des fruits et des baies."
      },
      "size": {
        "en": "6–13 kg; 38–48 cm at the shoulder; body 67–81 cm long.",
        "fr": "6 à 13 kg ; 38 à 48 cm au garrot ; corps de 67 à 81 cm de long."
      },
      "lifespan": {
        "en": "About 7 years in the wild (about twice as long in captivity).",
        "fr": "Environ 7 ans à l’état sauvage (environ deux fois plus en captivité)."
      },
      "behavior": {
        "en": "Lives in a monogamous territorial pair; older offspring often stay to help raise the new pups.",
        "fr": "Vit en couple monogame et territorial ; les jeunes plus âgés restent souvent pour aider à élever les nouveaux petits."
      },
      "recognize": {
        "en": "A small, slim wild dog with a reddish-brown to tan coat and a black “saddle” mixed with silvery hair, from the shoulders to the base of the tail. A black stripe along each flank separates it from the lighter body. The bushy tail has a black tip, and the lips, throat and chest are white.",
        "fr": "Un petit canidé fin au pelage brun-roux à fauve, avec une « selle » noire mêlée de poils argentés, des épaules à la base de la queue. Une bande noire sur chaque flanc la sépare du reste du corps, plus clair. La queue touffue a le bout noir, et les lèvres, la gorge et la poitrine sont blanches."
      },
      "noDiff": {
        "en": "Males and females look alike; our sources do not describe a visible difference.",
        "fr": "Mâle et femelle se ressemblent ; nos sources ne décrivent aucune différence visible."
      },
      "safety": {
        "en": "Not dangerous to people in a vehicle. Never feed it or leave your car.",
        "fr": "Pas dangereux pour les personnes dans un véhicule. Ne le nourrissez jamais et ne quittez pas votre voiture."
      }
    },

    vervet: {
      "img": "animal-vervet.jpg",
      "name": {
        "en": "Vervet monkey",
        "fr": "Singe vervet"
      },
      "sci": "Chlorocebus pygerythrus",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (as reported by World Land Trust; year not stated)",
        "fr": "Liste rouge UICN : préoccupation mineure (d’après World Land Trust ; année non précisée)"
      },
      "statusSrc": [
        "s73"
      ],
      "global": {
        "pop": {
          "en": "No global figure in the source used. Described as widespread and abundant.",
          "fr": "Aucun chiffre mondial dans la source utilisée. Décrit comme répandu et abondant."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s73"
        ]
      },
      "diet": {
        "en": "Mostly leaves, young shoots, seeds, roots, flowers, bark and fruit. Sometimes insects, eggs, baby birds and rodents.",
        "fr": "Surtout des feuilles, jeunes pousses, graines, racines, fleurs, écorce et fruits. Parfois des insectes, des œufs, des oisillons et des rongeurs."
      },
      "size": {
        "en": "Body 40–60 cm, tail about 30–50 cm; weight 3–5 kg.",
        "fr": "Corps de 40 à 60 cm, queue d’environ 30 à 50 cm ; poids de 3 à 5 kg."
      },
      "lifespan": {
        "en": "Not given in the sources used here.",
        "fr": "Non précisé dans les sources utilisées."
      },
      "behavior": {
        "en": "Lives in mixed troops of up to about 38 animals with a strong social hierarchy. Prefers savanna and woodland near rivers and lakes.",
        "fr": "Vit en troupes mixtes pouvant atteindre une quarantaine d’individus, avec une forte hiérarchie. Préfère la savane et les bois près des rivières et des lacs."
      },
      "recognize": {
        "en": "Greenish-olive or silvery-grey fur, with a black face, ears, hands and feet and a darker tip to the tail.",
        "fr": "Fourrure vert olive ou gris argenté, avec le visage, les oreilles, les mains et les pieds noirs, et le bout de la queue plus sombre."
      },
      "male": {
        "en": "Slightly larger than the female. Adult males are known for a bright blue scrotum (general knowledge, not in our sources).",
        "fr": "Un peu plus grand que la femelle. Les mâles adultes sont connus pour leur scrotum bleu vif (connaissance générale, absente de nos sources)."
      },
      "female": {
        "en": "Slightly smaller than the male, with no blue colouring.",
        "fr": "Un peu plus petite que le mâle, sans coloration bleue."
      },
      "safety": {
        "en": "Never feed vervets: they can become bold, snatch food and bite. Keep food out of sight and windows closed near rest camps and picnic sites. (General guidance.)",
        "fr": "Ne nourrissez jamais les vervets : ils deviennent hardis, volent la nourriture et peuvent mordre. Gardez la nourriture hors de vue et les vitres fermées près des camps et des aires de pique-nique. (Conseil général.)"
      }
    },

    thomson: {
      "img": "animal-thomson.jpg",
      "name": {
        "en": "Thomson's gazelle",
        "fr": "Gazelle de Thomson"
      },
      "sci": "Eudorcas thomsonii",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2018 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2018, citée par Wikipédia)"
      },
      "statusSrc": [
        "s75"
      ],
      "global": {
        "pop": {
          "en": "About 550,000, down 60% between 1978 and 2005. Several areas, including the Serengeti and the Masai Mara, lost 60–70% in about 20 years.",
          "fr": "Environ 550 000, en baisse de 60 % entre 1978 et 2005. Plusieurs zones, dont le Serengeti et le Masai Mara, ont perdu 60 à 70 % en une vingtaine d’années."
        },
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s75"
        ]
      },
      "diet": {
        "en": "Mixed feeder: fresh grass in the wet season, leaves and seeds of acacias and other woody plants in the dry season.",
        "fr": "Mange un peu de tout : de l’herbe fraîche en saison des pluies, des feuilles et graines d’acacias et d’autres plantes ligneuses en saison sèche."
      },
      "size": {
        "en": "60–70 cm at the shoulder. Males 20–35 kg, females 15–25 kg.",
        "fr": "60 à 70 cm au garrot. Mâles de 20 à 35 kg, femelles de 15 à 25 kg."
      },
      "lifespan": {
        "en": "10–15 years in the wild.",
        "fr": "10 à 15 ans à l’état sauvage."
      },
      "behavior": {
        "en": "Fast (up to 80 km/h). Often leaps stiff-legged (“stotting”) to warn predators. Males hold territories in the wet season; young males form bachelor groups.",
        "fr": "Très rapide (jusqu’à 80 km/h). Fait souvent des bonds raides (« stotting ») pour avertir les prédateurs. Les mâles tiennent un territoire en saison des pluies ; les jeunes mâles forment des groupes de célibataires."
      },
      "recognize": {
        "en": "Sandy-brown to reddish coat with a black band along the flank and a buff band above it, white belly, black stripes from the eyes to the nose, and a white rump with black streaks. Grant’s gazelle is larger, with a white rump patch that extends over the tail.",
        "fr": "Pelage brun sable à roux avec une bande noire sur le flanc et une bande beige au-dessus, ventre blanc, rayures noires des yeux au nez, et croupe blanche rayée de noir. La gazelle de Grant est plus grande, avec une tache blanche qui remonte sur la queue."
      },
      "male": {
        "en": "Larger, with ringed horns 25–43 cm long.",
        "fr": "Plus grand, avec des cornes annelées de 25 à 43 cm."
      },
      "female": {
        "en": "Smaller, with shorter, more fragile horns (7–15 cm); some have none.",
        "fr": "Plus petite, avec des cornes plus courtes et plus fragiles (7 à 15 cm) ; certaines n’en ont pas."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    grant: {
      "img": "animal-grant.jpg",
      "name": {
        "en": "Grant's gazelle",
        "fr": "Gazelle de Grant"
      },
      "sci": "Nanger granti",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s76"
      ],
      "global": {
        "pop": {
          "en": "Estimated at 140,000 to 350,000. Some areas are stable but the overall trend is downward.",
          "fr": "Estimée entre 140 000 et 350 000. Certaines zones sont stables mais la tendance générale est à la baisse."
        },
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s76"
        ]
      },
      "diet": {
        "en": "Mixed feeder: about two thirds browse and one third grass in one study. Gets most of its water from plants.",
        "fr": "Mange de tout : environ deux tiers de feuillage et un tiers d’herbe dans une étude. Tire l’essentiel de son eau des plantes."
      },
      "size": {
        "en": "75–95 cm at the shoulder. Females 35–50 kg, males 50–80 kg.",
        "fr": "75 à 95 cm au garrot. Femelles de 35 à 50 kg, mâles de 50 à 80 kg."
      },
      "lifespan": {
        "en": "Not given in the sources used here.",
        "fr": "Non précisé dans les sources utilisées."
      },
      "behavior": {
        "en": "Gregarious: females and young in herds, loose bachelor groups. Often joins Thomson’s gazelle groups for protection.",
        "fr": "Sociable : femelles et jeunes en troupeaux, groupes de célibataires lâches. Rejoint souvent les groupes de gazelles de Thomson pour se protéger."
      },
      "recognize": {
        "en": "Much larger than Thomson’s gazelle, with a beige-orange back, white belly, and stout, clearly ringed lyre-shaped horns of 45–81 cm. The white rump extends over the top of the tail.",
        "fr": "Beaucoup plus grande que la gazelle de Thomson, avec un dos beige-orangé, un ventre blanc et de grosses cornes annelées en forme de lyre de 45 à 81 cm. La croupe blanche remonte sur le dessus de la queue."
      },
      "male": {
        "en": "Considerably heavier, with thick horns on older dominant males. Males are the territorial sex.",
        "fr": "Nettement plus lourd, avec de grosses cornes chez les vieux mâles dominants. Ce sont les mâles qui tiennent un territoire."
      },
      "female": {
        "en": "Lighter (35–50 kg). Our source does not describe her horns.",
        "fr": "Plus légère (35 à 50 kg). Notre source ne décrit pas ses cornes."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    springbok: {
      "img": "animal-springbok.jpg",
      "name": {
        "en": "Springbok",
        "fr": "Springbok"
      },
      "sci": "Antidorcas marsupialis",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s77"
      ],
      "global": {
        "pop": {
          "en": "Over 670,000 in South Africa (1999 estimate, probably too low); roughly 2–2.5 million in southern Africa. One of few antelopes whose numbers are growing.",
          "fr": "Plus de 670 000 en Afrique du Sud (estimation de 1999, probablement trop basse) ; environ 2 à 2,5 millions en Afrique australe. L’une des rares antilopes dont les effectifs augmentent."
        },
        "trend": {
          "en": "Increasing",
          "fr": "En hausse"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s77"
        ]
      },
      "diet": {
        "en": "Mainly browses shrubs and succulents, sometimes grazes. Gets water from its food and can go for years without drinking.",
        "fr": "Broute surtout des arbustes et des plantes grasses, parfois de l’herbe. Tire son eau de sa nourriture et peut rester des années sans boire."
      },
      "size": {
        "en": "71–86 cm at the shoulder; 27–42 kg; horns 35–50 cm.",
        "fr": "71 à 86 cm au garrot ; 27 à 42 kg ; cornes de 35 à 50 cm."
      },
      "lifespan": {
        "en": "Up to about 10 years in the wild.",
        "fr": "Jusqu’à environ 10 ans à l’état sauvage."
      },
      "behavior": {
        "en": "Lives in mixed herds and bachelor herds. Famous for “pronking”: a series of stiff-legged leaps up to 2 m high with the white rump flap raised.",
        "fr": "Vit en troupeaux mixtes et en groupes de célibataires. Célèbre pour le « pronking » : une série de bonds raides jusqu’à 2 m de haut avec le rabat blanc de la croupe dressé."
      },
      "recognize": {
        "en": "A white face with dark stripes, a dark forehead patch, a reddish-brown band along the flanks and a white flap of skin along the rump. Black, backward-curving horns on both sexes.",
        "fr": "Visage blanc rayé de sombre, tache foncée sur le front, bande brun-roux sur les flancs et rabat de peau blanc sur la croupe. Cornes noires recourbées vers l’arrière chez les deux sexes."
      },
      "male": {
        "en": "Heavier in some subspecies, with longer horns. Holds a territory during the rut.",
        "fr": "Plus lourd chez certaines sous-espèces, avec des cornes plus longues. Tient un territoire pendant le rut."
      },
      "female": {
        "en": "Horns only 60–70% as long as the male’s. Roams between male territories.",
        "fr": "Cornes de 60 à 70 % seulement de celles du mâle. Se déplace d’un territoire de mâle à l’autre."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    gemsbok: {
      "img": "animal-gemsbok.jpg",
      "name": {
        "en": "Gemsbok (oryx)",
        "fr": "Oryx (gemsbok)"
      },
      "sci": "Oryx gazella",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2020 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2020, citée par Wikipédia)"
      },
      "statusSrc": [
        "s78"
      ],
      "global": {
        "pop": {
          "en": "About 373,000 in Namibia. No global figure in the source used, and no overall trend stated.",
          "fr": "Environ 373 000 en Namibie. Aucun chiffre mondial dans la source utilisée, et aucune tendance générale indiquée."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s78"
        ]
      },
      "diet": {
        "en": "Mainly grazes, browses in the dry season or when grass is scarce. Digs for roots and tubers and gets water from wild melons and cucumbers; it does not need to drink.",
        "fr": "Broute surtout l’herbe, puis le feuillage en saison sèche ou quand l’herbe manque. Déterre racines et tubercules et tire son eau de melons et concombres sauvages ; il n’a pas besoin de boire."
      },
      "size": {
        "en": "About 1.2 m at the shoulder; body 190–240 cm. Males 180–240 kg, females 100–210 kg. Horns about 85 cm.",
        "fr": "Environ 1,2 m au garrot ; corps de 190 à 240 cm. Mâles de 180 à 240 kg, femelles de 100 à 210 kg. Cornes d’environ 85 cm."
      },
      "lifespan": {
        "en": "Not given in the sources used here.",
        "fr": "Non précisé dans les sources utilisées."
      },
      "behavior": {
        "en": "Herds of about 10–40 led by a dominant male. Mostly active at dawn and dusk. Can run up to 60 km/h.",
        "fr": "Troupeaux d’une dizaine à une quarantaine d’animaux, menés par un mâle dominant. Surtout actif à l’aube et au crépuscule. Peut courir jusqu’à 60 km/h."
      },
      "recognize": {
        "en": "Light taupe-to-tan coat with a black tail, a blackish stripe along the neck and flank, white “socks” and a black patch on the front of the forelegs. Both sexes carry long, straight horns.",
        "fr": "Pelage taupe clair à beige avec une queue noire, une bande noirâtre sur le cou et le flanc, des « chaussettes » blanches et une tache noire à l’avant des pattes. Les deux sexes portent de longues cornes droites."
      },
      "male": {
        "en": "Heavier, with thicker horns and larger horn bases.",
        "fr": "Plus lourd, avec des cornes plus épaisses et des bases plus larges."
      },
      "female": {
        "en": "Lighter, with slightly longer, thinner horns.",
        "fr": "Plus légère, avec des cornes un peu plus longues et plus fines."
      },
      "safety": {
        "en": "Can be dangerous if cornered: the horns are long and sharp. Keep your distance.",
        "fr": "Peut être dangereux s’il est acculé : les cornes sont longues et pointues. Gardez vos distances."
      }
    },

    lesserkudu: {
      "img": "animal-lesserkudu.jpg",
      "name": {
        "en": "Lesser kudu",
        "fr": "Petit koudou"
      },
      "sci": "Tragelaphus imberbis",
      "status": "NT",
      "statusAsOf": {
        "en": "IUCN Red List: Near Threatened (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : quasi menacée (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s79"
      ],
      "global": {
        "pop": {
          "en": "About 118,000 and decreasing; the rate of decline is reported to have reached 20% over two decades.",
          "fr": "Environ 118 000 et en baisse ; le déclin aurait atteint 20 % en deux décennies."
        },
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s79"
        ]
      },
      "diet": {
        "en": "A browser: trees and shrubs make up 60–80% of its diet, plus vines, fruit and a little grass. Gets moisture from succulents.",
        "fr": "Un brouteur : les arbres et arbustes forment 60 à 80 % de son régime, avec des lianes, des fruits et un peu d’herbe. Tire son humidité de plantes grasses."
      },
      "size": {
        "en": "Males 95–105 cm at the shoulder, 92–108 kg; females 90–100 cm, 56–70 kg.",
        "fr": "Mâles de 95 à 105 cm au garrot, 92 à 108 kg ; femelles de 90 à 100 cm, 56 à 70 kg."
      },
      "lifespan": {
        "en": "About 10 years in the wild, 15 in captivity.",
        "fr": "Environ 10 ans à l’état sauvage, 15 en captivité."
      },
      "behavior": {
        "en": "Gregarious, mainly females, in groups of one to three with their young. Not territorial; adult males tend to live alone.",
        "fr": "Sociable, surtout les femelles, en groupes d’une à trois avec leurs petits. Pas territorial ; les mâles adultes vivent plutôt seuls."
      },
      "recognize": {
        "en": "A slender, spiral-horned antelope with one long white stripe along the back and 11–14 white side stripes, a central black stripe on the chest, no throat beard, large rounded ears and a bushy tail white underneath with a black tip.",
        "fr": "Une antilope élancée aux cornes spiralées avec une longue ligne blanche sur le dos et 11 à 14 rayures blanches sur les flancs, une bande noire au centre de la poitrine, pas de barbe à la gorge, de grandes oreilles rondes et une queue touffue blanche dessous avec le bout noir."
      },
      "male": {
        "en": "Much larger, the only sex with horns (spiral, 50–70 cm). Black neck crest and black face mask; the coat turns yellowish-grey after about two years.",
        "fr": "Beaucoup plus grand, seul à porter des cornes (spiralées, 50 à 70 cm). Crête noire sur le cou et masque noir sur le visage ; le pelage devient gris-jaune après environ deux ans."
      },
      "female": {
        "en": "Smaller, no horns, and keeps a reddish coat.",
        "fr": "Plus petite, sans cornes, et garde un pelage roux."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    nyala: {
      "img": "animal-nyala.jpg",
      "name": {
        "en": "Nyala",
        "fr": "Nyala"
      },
      "sci": "Tragelaphus angasii",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s80"
      ],
      "global": {
        "pop": {
          "en": "About 32,000 in 1999; at least 30,000 in South Africa today (25,000 in KwaZulu-Natal). Considered stable.",
          "fr": "Environ 32 000 en 1999 ; au moins 30 000 en Afrique du Sud aujourd’hui (25 000 au KwaZulu-Natal). Considéré comme stable."
        },
        "trend": {
          "en": "Stable",
          "fr": "Stable"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s80"
        ]
      },
      "diet": {
        "en": "Herbivore: eats foliage, fruit, flowers and twigs, plus fresh grass in the rainy season. Needs to drink regularly.",
        "fr": "Herbivore : mange du feuillage, des fruits, des fleurs et des brindilles, et de l’herbe fraîche en saison des pluies. Doit boire régulièrement."
      },
      "size": {
        "en": "Males up to 110 cm at the shoulder, 98–125 kg; females up to 90 cm, 55–68 kg.",
        "fr": "Mâles jusqu’à 110 cm au garrot, 98 à 125 kg ; femelles jusqu’à 90 cm, 55 à 68 kg."
      },
      "lifespan": {
        "en": "About 19 years.",
        "fr": "Environ 19 ans."
      },
      "behavior": {
        "en": "Shy and cautious, in single-sex or mixed groups of two to ten; adult males often live alone. Not territorial. Active in early morning and late afternoon.",
        "fr": "Craintif et prudent, en groupes d’un seul sexe ou mixtes de deux à dix ; les mâles adultes vivent souvent seuls. Pas territorial. Actif tôt le matin et en fin d’après-midi."
      },
      "recognize": {
        "en": "A spiral-horned antelope with ten or more white vertical stripes on the sides (females and young males), a white chevron between the eyes, a crest of hair along the back and a bushy white-underside tail.",
        "fr": "Une antilope aux cornes spiralées avec dix rayures blanches verticales ou plus sur les flancs (femelles et jeunes mâles), un chevron blanc entre les yeux, une crête de poils sur le dos et une queue touffue blanche dessous."
      },
      "male": {
        "en": "Much larger, dark brown or slate-grey (often bluish), with horns of 60–83 cm. Stripes fade in older males.",
        "fr": "Beaucoup plus grand, brun foncé ou gris ardoise (souvent bleuté), avec des cornes de 60 à 83 cm. Les rayures s’estompent chez les vieux mâles."
      },
      "female": {
        "en": "Smaller, rusty or reddish-brown with clear white stripes, and no horns.",
        "fr": "Plus petite, brun roux avec des rayures blanches bien visibles, et sans cornes."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    eland: {
      "img": "animal-eland.jpg",
      "name": {
        "en": "Common eland",
        "fr": "Éland du Cap"
      },
      "sci": "Taurotragus oryx",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s81"
      ],
      "global": {
        "pop": {
          "en": "90,000–110,000 mature individuals (2016 assessment). Gradually decreasing overall, but stable or increasing in Namibia, Botswana, Zimbabwe, South Africa, Malawi, Kenya and Tanzania.",
          "fr": "90 000 à 110 000 individus matures (évaluation de 2016). En baisse progressive dans l’ensemble, mais stable ou en hausse en Namibie, au Botswana, au Zimbabwe, en Afrique du Sud, au Malawi, au Kenya et en Tanzanie."
        },
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s81"
        ]
      },
      "diet": {
        "en": "Mostly herbivorous: browses leaves and shrubs in the dry winter and grazes grasses in the rainy season.",
        "fr": "Surtout herbivore : broute feuilles et arbustes en hiver sec et paît l’herbe en saison des pluies."
      },
      "size": {
        "en": "The largest antelope. Males 150–183 cm at the shoulder, typically 500–600 kg (up to about 942 kg); females 125–153 cm, 300–600 kg.",
        "fr": "La plus grande antilope. Mâles de 150 à 183 cm au garrot, en général 500 à 600 kg (jusqu’à 942 kg environ) ; femelles de 125 à 153 cm, 300 à 600 kg."
      },
      "lifespan": {
        "en": "Usually 15–20 years in the wild, up to 25 in captivity.",
        "fr": "En général 15 à 20 ans à l’état sauvage, jusqu’à 25 en captivité."
      },
      "behavior": {
        "en": "Herds of up to 500, not territorial, nomadic. Males, females and young form separate groups. A herd on the move makes a loud clicking sound with its hooves.",
        "fr": "Troupeaux pouvant atteindre 500 individus, pas territoriaux, nomades. Mâles, femelles et jeunes forment des groupes séparés. Un troupeau en marche produit un fort claquement des sabots."
      },
      "recognize": {
        "en": "A very large, smooth-coated tan antelope with a rough mane and a spiral-ridged horn on both sexes.",
        "fr": "Une très grande antilope beige au pelage lisse avec une crinière rêche et une corne marquée d’une spirale chez les deux sexes."
      },
      "male": {
        "en": "Larger, darker bluish-grey coat that greys with age, big dewlap under the throat, dense forehead fur, thicker and shorter horns (43–66 cm).",
        "fr": "Plus grand, pelage gris-bleu plus sombre qui grisonne avec l’âge, grand fanon sous la gorge, fourrure dense sur le front, cornes plus épaisses et plus courtes (43 à 66 cm)."
      },
      "female": {
        "en": "Tan coat, smaller, with longer, thinner horns (51–69 cm).",
        "fr": "Pelage beige, plus petite, avec des cornes plus longues et plus fines (51 à 69 cm)."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    lechwe: {
      "img": "animal-lechwe.jpg",
      "name": {
        "en": "Lechwe",
        "fr": "Cobe de Lechwe"
      },
      "sci": "Kobus leche",
      "status": "NT",
      "statusAsOf": {
        "en": "IUCN Red List: Near Threatened (2017 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : quasi menacée (évaluation de 2017, citée par Wikipédia)"
      },
      "statusSrc": [
        "s82"
      ],
      "global": {
        "pop": {
          "en": "No population figure in the source used.",
          "fr": "Aucun chiffre de population dans la source utilisée."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s82"
        ]
      },
      "diet": {
        "en": "Aquatic plants and grasses of flooded meadows.",
        "fr": "Plantes aquatiques et herbes des prairies inondées."
      },
      "size": {
        "en": "90–100 cm at the shoulder; 50–120 kg.",
        "fr": "90 à 100 cm au garrot ; 50 à 120 kg."
      },
      "lifespan": {
        "en": "Not given in the sources used here.",
        "fr": "Non précisé dans les sources utilisées."
      },
      "behavior": {
        "en": "Lives in floodplains and flees predators into knee-deep water, where its water-repellent legs let it run fast. Diurnal; herds can reach many thousands.",
        "fr": "Vit dans les plaines inondables et fuit les prédateurs dans l’eau jusqu’aux genoux, où ses pattes imperméables lui permettent de courir vite. Actif le jour ; les troupeaux peuvent compter des milliers d’animaux."
      },
      "recognize": {
        "en": "Golden-brown antelope with a white belly, long hind legs and, on males, long spiral lyre-shaped horns. Three forms exist (Kafue, red and black lechwe).",
        "fr": "Antilope brun doré au ventre blanc, aux longues pattes arrière et, chez les mâles, aux longues cornes spiralées en forme de lyre. Il existe trois formes (de Kafue, rouge et noire)."
      },
      "male": {
        "en": "Larger and darker, and the only sex with horns.",
        "fr": "Plus grand et plus sombre, seul à porter des cornes."
      },
      "female": {
        "en": "Smaller, lighter and without horns.",
        "fr": "Plus petite, plus claire et sans cornes."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    reedbuck: {
      "img": "animal-reedbuck.jpg",
      "name": {
        "en": "Southern reedbuck",
        "fr": "Cobe des roseaux"
      },
      "sci": "Redunca arundinum",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s83"
      ],
      "global": {
        "pop": {
          "en": "No total estimate in the source used. About 60% live in protected areas and 13% on private land. Rare in most of South Africa and critically low in West and Central Africa.",
          "fr": "Aucune estimation totale dans la source utilisée. Environ 60 % vivent dans des aires protégées et 13 % sur des terres privées. Rare dans la plus grande partie de l’Afrique du Sud et en nombre critique en Afrique de l’Ouest et centrale."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s83"
        ]
      },
      "diet": {
        "en": "Mainly grasses, with some herbs and reeds. Drinks regularly but does not enter water.",
        "fr": "Surtout des herbes, avec quelques plantes et roseaux. Boit régulièrement mais n’entre pas dans l’eau."
      },
      "size": {
        "en": "80–90 cm at the shoulder; average about 58 kg.",
        "fr": "80 à 90 cm au garrot ; environ 58 kg en moyenne."
      },
      "lifespan": {
        "en": "About 10 years.",
        "fr": "Environ 10 ans."
      },
      "behavior": {
        "en": "Lives alone, in pairs or small groups. Older males defend territories. Warns others with a shrill whistle and clicks.",
        "fr": "Vit seul, en couple ou en petits groupes. Les vieux mâles défendent un territoire. Avertit les autres par un sifflement aigu et des claquements."
      },
      "recognize": {
        "en": "Grey-brown silky coat, dark stripes down the front of the forelegs and lower hind legs, whitish rings around the eyes, a small bare black patch at the base of each ear, white underparts and a short bushy tail white underneath.",
        "fr": "Pelage gris-brun soyeux, bandes sombres sur l’avant des pattes avant et le bas des pattes arrière, anneaux blanchâtres autour des yeux, petite tache noire nue à la base de chaque oreille, ventre blanc et queue courte et touffue blanche dessous."
      },
      "male": {
        "en": "Larger (about 60–95 kg), the only sex with horns: 35–45 cm, curving forward, with a pale rubbery band at the base.",
        "fr": "Plus grand (environ 60 à 95 kg), seul à porter des cornes : 35 à 45 cm, courbées vers l’avant, avec une bande pâle et caoutchouteuse à la base."
      },
      "female": {
        "en": "Smaller (about 50–85 kg), without horns.",
        "fr": "Plus petite (environ 50 à 85 kg), sans cornes."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    topi: {
      "img": "animal-topi.jpg",
      "name": {
        "en": "Topi",
        "fr": "Topi"
      },
      "sci": "Damaliscus lunatus jimela",
      "status": "VU",
      "statusAsOf": {
        "en": "IUCN Red List: Vulnerable (2017 assessment, as cited by Wikipedia) This is the topi subspecies; the species as a whole is assessed separately.",
        "fr": "Liste rouge UICN : vulnérable (évaluation de 2017, citée par Wikipédia) This is the topi subspecies; the species as a whole is assessed separately."
      },
      "statusSrc": [
        "s84"
      ],
      "global": {
        "pop": {
          "en": "50,000–70,000 mature individuals (2016 estimate), decreasing. Tanzania: 35,000–46,500 (2014). Kenya: about 22,000 (2011–2013 average).",
          "fr": "50 000 à 70 000 individus matures (estimation de 2016), en baisse. Tanzanie : 35 000 à 46 500 (2014). Kenya : environ 22 000 (moyenne 2011–2013)."
        },
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s84"
        ]
      },
      "diet": {
        "en": "A grazer: prefers green grass of medium height, eaten in fast small bites.",
        "fr": "Brouteur d’herbe : préfère l’herbe verte de hauteur moyenne, mangée à petites bouchées rapides."
      },
      "size": {
        "en": "Not given in the source used.",
        "fr": "Non précisé dans la source utilisée."
      },
      "lifespan": {
        "en": "Not given in the sources used here.",
        "fr": "Non précisé dans les sources utilisées."
      },
      "behavior": {
        "en": "Highly social and fast. Its social life is one of the most varied among antelopes, from territorial harems to leks. Often stands on termite mounds to watch the plain.",
        "fr": "Très sociable et rapide. Sa vie sociale est l’une des plus variées chez les antilopes, des harems territoriaux aux leks. Se tient souvent sur des termitières pour surveiller la plaine."
      },
      "recognize": {
        "en": "A reddish-brown antelope with a darker, glossy look and lyre-shaped horns. The southern subspecies (tsessebe, the one in Kruger) has horns that look crescent-shaped.",
        "fr": "Une antilope brun-roux à l’aspect plus sombre et brillant, avec des cornes en forme de lyre. La sous-espèce du sud (le tsessebe, celui du Kruger) a des cornes plus en croissant."
      },
      "noDiff": {
        "en": "Our source does not describe a visible difference between males and females.",
        "fr": "Notre source ne décrit aucune différence visible entre mâle et femelle."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    steenbok: {
      "img": "animal-steenbok.jpg",
      "name": {
        "en": "Steenbok",
        "fr": "Steenbok"
      },
      "sci": "Raphicerus campestris",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s85"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used. Typical density 0.3–1 animal per km², up to about 4 per km² in the best habitat.",
          "fr": "Aucune estimation mondiale dans la source utilisée. Densité habituelle de 0,3 à 1 animal par km², jusqu’à 4 par km² dans le meilleur habitat."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s85"
        ]
      },
      "diet": {
        "en": "Browses low vegetation (cannot reach above 0.9 m) and digs up roots and tubers. Prefers forbs, then woody plants, rarely eats grass. Gets most of its water from its food.",
        "fr": "Broute la végétation basse (ne peut pas atteindre au-dessus de 0,9 m) et déterre racines et tubercules. Préfère les plantes herbacées puis ligneuses, mange rarement de l’herbe. Tire l’essentiel de son eau de sa nourriture."
      },
      "size": {
        "en": "45–60 cm at the shoulder; 7–16 kg.",
        "fr": "45 à 60 cm au garrot ; 7 à 16 kg."
      },
      "lifespan": {
        "en": "7 years or more.",
        "fr": "7 ans ou plus."
      },
      "behavior": {
        "en": "Usually alone; pairs form to mate. When threatened it lies low, then flees in a zigzag.",
        "fr": "Généralement seul ; des couples se forment pour s’accoupler. Menacé, il se couche puis s’enfuit en zigzag."
      },
      "recognize": {
        "en": "A small antelope with an orange-tinted fawn to reddish coat, white underside, throat and eye ring, large ears with “finger-marks” inside, a black crescent between the ears, a black nose bridge and a black scent gland in front of each eye.",
        "fr": "Une petite antilope au pelage fauve orangé à roux, au ventre, à la gorge et au tour des yeux blancs, avec de grandes oreilles marquées de « traces de doigts » à l’intérieur, un croissant noir entre les oreilles, le museau noir et une glande noire devant chaque œil."
      },
      "male": {
        "en": "Has straight, smooth, parallel horns 7–19 cm long.",
        "fr": "Porte des cornes droites, lisses et parallèles de 7 à 19 cm."
      },
      "female": {
        "en": "Our source does not describe her horns; females are generally hornless (general knowledge).",
        "fr": "Notre source ne décrit pas ses cornes ; les femelles n’en ont généralement pas (connaissance générale)."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    dikdik: {
      "img": "animal-dikdik.jpg",
      "name": {
        "en": "Kirk's dik-dik",
        "fr": "Dik-dik de Kirk"
      },
      "sci": "Madoqua kirkii",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s86"
      ],
      "global": {
        "pop": {
          "en": "No population figure or trend in the source used.",
          "fr": "Aucun chiffre ni tendance de population dans la source utilisée."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s86"
        ]
      },
      "diet": {
        "en": "Herbivore: foliage, fruit, shoots and berries, choosing plants rich in water and nutrients. Gets its water from vegetation.",
        "fr": "Herbivore : feuillage, fruits, pousses et baies, en choisissant des plantes riches en eau et en nutriments. Tire son eau de la végétation."
      },
      "size": {
        "en": "35–45 cm tall; 3.8–7.2 kg.",
        "fr": "35 à 45 cm de haut ; 3,8 à 7,2 kg."
      },
      "lifespan": {
        "en": "About 5 years in the wild, sometimes over 10; up to 16–18 years in captivity.",
        "fr": "Environ 5 ans à l’état sauvage, parfois plus de 10 ; jusqu’à 16–18 ans en captivité."
      },
      "behavior": {
        "en": "Lives in monogamous pairs on territories marked with dung and urine. Flees in a zigzag with a “zik-zik” alarm call (hence its name).",
        "fr": "Vit en couples monogames sur des territoires marqués avec des crottes et de l’urine. Fuit en zigzag avec un cri d’alarme « zik-zik » (d’où son nom)."
      },
      "recognize": {
        "en": "A tiny antelope with a grey to grey-brown coat, tan flanks and limbs, an erectile head crest, whitish eye rings and a pointed, mobile snout. Its hind legs are longer than its forelegs, like a hare’s.",
        "fr": "Une minuscule antilope au pelage gris à gris-brun, aux flancs et pattes fauves, avec une huppe érectile, des anneaux blanchâtres autour des yeux et un museau pointu et mobile. Ses pattes arrière sont plus longues que les avant, comme chez un lièvre."
      },
      "male": {
        "en": "Has short, backward-slanting horns (about 7.5 cm), a longer crest, a more developed muzzle and lighter colouring.",
        "fr": "Porte de petites cornes inclinées vers l’arrière (environ 7,5 cm), une huppe plus longue, un museau plus développé et une couleur plus claire."
      },
      "female": {
        "en": "Slightly larger (by 0.4–1 kg) and without horns.",
        "fr": "Un peu plus grande (de 0,4 à 1 kg) et sans cornes."
      },
      "safety": {
        "en": "Not dangerous seen from a vehicle. Keep your distance and never approach on foot.",
        "fr": "Pas dangereux vu depuis un véhicule. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    porcupine: {
      "img": "animal-porcupine.jpg",
      "name": {
        "en": "Cape porcupine",
        "fr": "Porc-épic du Cap"
      },
      "sci": "Hystrix africaeaustralis",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s87"
      ],
      "global": {
        "pop": {
          "en": "No population figure or trend in the source used.",
          "fr": "Aucun chiffre ni tendance de population dans la source utilisée."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s87"
        ]
      },
      "diet": {
        "en": "Mostly plants: fruit, roots, tubers, bulbs and bark. Has also been reported eating carrion and bones.",
        "fr": "Surtout des végétaux : fruits, racines, tubercules, bulbes et écorce. Il a aussi été vu en train de manger des charognes et des os."
      },
      "size": {
        "en": "Body 63–81 cm plus a short tail; usually 10–24 kg (up to 30 kg).",
        "fr": "Corps de 63 à 81 cm plus une courte queue ; en général 10 à 24 kg (jusqu’à 30 kg)."
      },
      "lifespan": {
        "en": "About 10 years in the wild, up to 20 in captivity.",
        "fr": "Environ 10 ans à l’état sauvage, jusqu’à 20 en captivité."
      },
      "behavior": {
        "en": "Nocturnal. Lives in monogamous pairs in burrows. Rattles its hollow tail quills as a warning; if cornered it charges and stabs with its quills.",
        "fr": "Nocturne. Vit en couples monogames dans des terriers. Fait vibrer les piquants creux de sa queue en guise d’avertissement ; acculé, il charge et plante ses piquants."
      },
      "recognize": {
        "en": "A big rodent covered in black-and-white banded quills, with an erectile crest from head to shoulders and a band of short white spines along the middle of the rump.",
        "fr": "Un gros rongeur couvert de piquants annelés noir et blanc, avec une crête érectile de la tête aux épaules et une bande de courts piquants blancs au milieu de la croupe."
      },
      "noDiff": {
        "en": "Males and females are not significantly different in size or appearance.",
        "fr": "Mâles et femelles ne diffèrent pas de façon importante par la taille ou l’apparence."
      },
      "safety": {
        "en": "Do not approach: cornered, it charges backwards and its quills can cause serious wounds. Usually seen at night.",
        "fr": "Ne vous approchez pas : acculé, il charge à reculons et ses piquants peuvent causer de graves blessures. On le voit surtout la nuit."
      }
    },

    baboon: {
      "img": "animal-baboon.jpg",
      "see": "baboons",
      "name": {
        "en": "Chacma baboon",
        "fr": "Babouin chacma"
      },
      "sci": "Papio ursinus",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2019 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2019, citée par Wikipédia)"
      },
      "statusSrc": [
        "s90"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the sources used. Wikipedia says assessors see no major threat of a range-wide decline.",
          "fr": "Aucune estimation mondiale dans les sources utilisées. Wikipédia indique que les évaluateurs ne voient pas de menace majeure de déclin sur l’ensemble de l’aire."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s90"
        ]
      },
      "diet": {
        "en": "Omnivore and very opportunistic: fruits, seeds, grass, flowers, bulbs, bark, fungi, insects, spiders, worms, rodents, birds and sometimes small antelope.",
        "fr": "Omnivore très opportuniste : fruits, graines, herbe, fleurs, bulbes, écorce, champignons, insectes, araignées, vers, rongeurs, oiseaux et parfois de petites antilopes."
      },
      "size": {
        "en": "Body 50–115 cm plus a tail of 45–84 cm. Males 21–45 kg (average 31.8 kg); females 12–25 kg (average 15.4 kg). It appears to be the largest living monkey.",
        "fr": "Corps de 50 à 115 cm plus une queue de 45 à 84 cm. Mâles : 21 à 45 kg (moyenne 31,8 kg) ; femelles : 12 à 25 kg (moyenne 15,4 kg). Il semble être le plus grand singe actuel."
      },
      "lifespan": {
        "en": "No wild figure in the sources used. Up to 45 years in captivity (record); few wild animals live that long.",
        "fr": "Aucun chiffre à l’état sauvage dans les sources utilisées. Jusqu’à 45 ans en captivité (record) ; peu d’individus sauvages vivent aussi longtemps."
      },
      "behavior": {
        "en": "Lives by day in troops of typically 20–80 animals, with several adult males, many females and young. Females stay in their birth troop; males leave. There is a rank order, and close male–female friendships can protect young. Troops sleep on cliffs, high rocks or in tall trees.",
        "fr": "Vit le jour en troupes de 20 à 80 animaux en général, avec plusieurs mâles adultes, de nombreuses femelles et des jeunes. Les femelles restent dans leur troupe de naissance ; les mâles la quittent. Il existe une hiérarchie, et des amitiés étroites entre mâle et femelle peuvent protéger les petits. Les troupes dorment sur des falaises, des rochers élevés ou dans de grands arbres."
      },
      "recognize": {
        "en": "A large monkey with a dark brown to grey coat, a long dog-like face sloping downward, dark skin on the face, black hands and feet, a patch of rough hair on the nape and no mane. Males have big canine teeth.",
        "fr": "Un grand singe au pelage brun foncé à gris, au long museau de chien incliné vers le bas, à la peau du visage sombre, aux mains et pieds noirs, avec une touffe de poils rudes sur la nuque et sans crinière. Les mâles ont de grandes canines."
      },
      "male": {
        "en": "Up to about twice as long and three times as heavy as a female, with much larger canine teeth.",
        "fr": "Jusqu’à environ deux fois plus long et trois fois plus lourd qu’une femelle, avec des canines bien plus grandes."
      },
      "female": {
        "en": "Smaller and slimmer (about 12–25 kg). She stays in her birth troop for life.",
        "fr": "Plus petite et plus fine (environ 12 à 25 kg). Elle reste toute sa vie dans sa troupe de naissance."
      },
      "safety": {
        "en": "Do not feed baboons and keep food, windows and car doors closed: they raid for food in busy tourist areas and rest camps. Males can bite hard with their large canines and may attack if cornered or if you get between them and their young. Stay in your vehicle and keep your distance.",
        "fr": "Ne nourrissez pas les babouins et gardez nourriture, vitres et portières fermées : ils chapardent dans les zones touristiques très fréquentées et les camps. Les mâles peuvent mordre fort avec leurs grandes canines et attaquer s’ils sont acculés ou si l’on s’interpose entre eux et leurs petits. Restez dans votre véhicule et gardez vos distances."
      }
    },

    suricate: {
      "img": "animal-suricate.jpg",
      "name": {
        "en": "Meerkat",
        "fr": "Suricate"
      },
      "sci": "Suricata suricatta",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern, stable trend (assessment cited by Wikipedia, apparently 2015)",
        "fr": "Liste rouge UICN : préoccupation mineure, tendance stable (évaluation citée par Wikipédia, apparemment de 2015)"
      },
      "statusSrc": [
        "s94"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the sources used. Density varies by site; in one study it fell from 0.95 to 0.32 animals per km² after a 10% drop in rainfall.",
          "fr": "Aucune estimation mondiale dans les sources utilisées. La densité varie selon les sites ; dans une étude, elle est passée de 0,95 à 0,32 animal par km² après une baisse de 10 % des précipitations."
        },
        "trend": {
          "en": "Stable",
          "fr": "Stable"
        },
        "asOf": {
          "en": "IUCN assessment as cited by Wikipedia, read Nov 2026",
          "fr": "évaluation UICN citée par Wikipédia, consultée en nov. 2026"
        },
        "src": [
          "s94"
        ]
      },
      "diet": {
        "en": "Mostly insects, especially beetles and caterpillars. Also other arthropods, scorpions (it is immune to their venom), amphibians, reptiles, eggs, small birds, plants and seeds. Digs up roots and tubers for water.",
        "fr": "Surtout des insectes, notamment des coléoptères et des chenilles. Aussi d’autres arthropodes, des scorpions (il est immunisé contre leur venin), des amphibiens, des reptiles, des œufs, de petits oiseaux, des plantes et des graines. Déterre racines et tubercules pour s’hydrater."
      },
      "size": {
        "en": "Head and body 24–35 cm, tail 17–25 cm; about 0.62–0.97 kg.",
        "fr": "Tête et corps de 24 à 35 cm, queue de 17 à 25 cm ; environ 0,62 à 0,97 kg."
      },
      "lifespan": {
        "en": "Estimated 5–15 years in the wild; record of 20.6 years in captivity.",
        "fr": "Estimée à 5 à 15 ans à l’état sauvage ; record de 20,6 ans en captivité."
      },
      "behavior": {
        "en": "Lives in cooperative packs of 2–30 in burrows or rock crevices. Dominant animals breed and the others help raise the pups. Members take turns as sentinels, standing guard while the rest forage.",
        "fr": "Vit en bandes coopératives de 2 à 30 individus dans des terriers ou des fissures rocheuses. Les dominants se reproduisent et les autres aident à élever les petits. Les membres font le guet à tour de rôle pendant que les autres cherchent à manger."
      },
      "recognize": {
        "en": "A small, slim mongoose with a soft light grey to yellowish-brown coat with faint bands on the back, a mostly white head, large eyes, and a slim yellowish tail with a black tip. Often seen standing upright on its hind legs. (The upright pose is general knowledge.)",
        "fr": "Une petite mangouste élancée au pelage doux gris clair à brun jaunâtre, avec de faibles bandes sur le dos, la tête surtout blanche, de grands yeux et une queue fine jaunâtre à bout noir. Souvent vue debout sur ses pattes arrière. (La posture debout est une connaissance générale.)"
      },
      "male": {
        "en": "Similar in size to the female. Subordinate males often leave to join other packs.",
        "fr": "De taille semblable à celle de la femelle. Les mâles subordonnés quittent souvent la bande pour en rejoindre une autre."
      },
      "female": {
        "en": "Similar in size to the male, though some dominant females are heavier. Dominant females often kill the litters of subordinate females.",
        "fr": "De taille semblable à celle du mâle, mais certaines femelles dominantes sont plus lourdes. Les femelles dominantes tuent souvent les portées des femelles subordonnées."
      },
      "safety": {
        "en": "Small and not a danger from a vehicle. Do not touch or feed wild meerkats: they can be aggressive and can pass on rabies and tick-borne diseases (rabies is more often carried by yellow mongooses).",
        "fr": "Petit et sans danger depuis un véhicule. Ne touchez pas et ne nourrissez pas les suricates sauvages : ils peuvent être agressifs et transmettre la rage et des maladies à tiques (la rage est plus souvent portée par les mangoustes jaunes)."
      }
    },

    mongoose: {
      "img": "animal-mongoose.jpg",
      "name": {
        "en": "Slender mongoose",
        "fr": "Mangouste rouge (ou mangouste svelte)"
      },
      "sci": "Galerella sanguinea",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s97"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the sources used. Wikipedia says it is in no immediate danger of extinction, though some subspecies may be threatened.",
          "fr": "Aucune estimation mondiale dans les sources utilisées. Wikipédia indique qu’elle n’est pas en danger d’extinction immédiat, bien que certaines sous-espèces puissent être menacées."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s97"
        ]
      },
      "diet": {
        "en": "Mostly meat but opportunistic: insects (most of the diet in the wet season), lizards, rodents, snakes, birds, frogs, eggs, carrion and occasional fruit. It can kill venomous snakes, though they are a small part of its diet.",
        "fr": "Surtout carnée mais opportuniste : insectes (l’essentiel en saison humide), lézards, rongeurs, serpents, oiseaux, grenouilles, œufs, charognes et un peu de fruits. Elle peut tuer des serpents venimeux, mais ils représentent une petite part de son régime."
      },
      "size": {
        "en": "Body 27.5–40 cm, tail 23–33 cm. Males about 640–715 g; females about 460–575 g. (Another source gives a wider adult range of 490–1,250 g.)",
        "fr": "Corps de 27,5 à 40 cm, queue de 23 à 33 cm. Mâles : environ 640 à 715 g ; femelles : environ 460 à 575 g. (Une autre source donne une fourchette adulte plus large, de 490 à 1 250 g.)"
      },
      "lifespan": {
        "en": "Up to about 8 years in the wild; up to 12.6 years in captivity.",
        "fr": "Jusqu’à environ 8 ans à l’état sauvage ; jusqu’à 12,6 ans en captivité."
      },
      "behavior": {
        "en": "Mostly alone and active by day. Not territorial but keeps a stable home range. Shelters in rock crevices, hollow logs or termite mounds. The best tree climber among the African mongooses; often hunts birds there. Often seen dashing across roads.",
        "fr": "Surtout solitaire et active le jour. Non territoriale, mais elle garde un domaine vital stable. S’abrite dans des fissures de rochers, des troncs creux ou des termitières. La meilleure grimpeuse parmi les mangoustes africaines ; elle y chasse souvent des oiseaux. Souvent vue traversant les routes en courant."
      },
      "recognize": {
        "en": "A slim, long-bodied mongoose with a fur colour that varies by region from dark reddish-brown or orange-red to grey or golden yellow, a lighter belly, and a long tail ending in a distinctive black tip (held high when it runs).",
        "fr": "Une mangouste mince au corps allongé dont la couleur varie selon la région du brun-roux foncé ou roux orangé au gris ou jaune doré, au ventre plus clair, avec une longue queue terminée par un bout noir bien visible (tenue haute quand elle court)."
      },
      "male": {
        "en": "Larger and heavier than the female (about 9% larger in one source). His home range covers those of several females.",
        "fr": "Plus grand et plus lourd que la femelle (environ 9 % de plus selon une source). Son domaine vital recouvre ceux de plusieurs femelles."
      },
      "female": {
        "en": "Smaller than the male. Gives birth to 1–3 young after a gestation thought to last 60–70 days; the male does not help raise them.",
        "fr": "Plus petite que le mâle. Met bas 1 à 3 petits après une gestation estimée à 60 à 70 jours ; le mâle ne participe pas à leur éducation."
      },
      "safety": {
        "en": "Shy and not dangerous from a vehicle. Do not try to touch or feed it: like other wild mammals it can carry rabies, and a cornered animal will bite.",
        "fr": "Timide et sans danger depuis un véhicule. N’essayez ni de la toucher ni de la nourrir : comme d’autres mammifères sauvages, elle peut porter la rage, et un animal acculé mord."
      }
    },

    honeybadger: {
      "img": "animal-honeybadger.jpg",
      "name": {
        "en": "Honey badger",
        "fr": "Ratel"
      },
      "sci": "Mellivora capensis",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2016 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2016, citée par Wikipédia)"
      },
      "statusSrc": [
        "s103"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the sources used. Rated Least Concern because of its very wide range.",
          "fr": "Aucune estimation mondiale dans les sources utilisées. Classé préoccupation mineure en raison de son aire très vaste."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s103"
        ]
      },
      "diet": {
        "en": "Very varied: insects, frogs, tortoises, lizards, rodents, snakes, birds, eggs, berries, roots and bulbs. Digs prey out of burrows and often raids beehives for larvae and honey. In the Kgalagadi, geckos and skinks were about 48% of prey and gerbils and mice about 40%.",
        "fr": "Très varié : insectes, grenouilles, tortues, lézards, rongeurs, serpents, oiseaux, œufs, baies, racines et bulbes. Déterre ses proies des terriers et pille souvent les ruches pour les larves et le miel. Dans le Kgalagadi, geckos et scinques représentaient environ 48 % des proies, gerbilles et souris environ 40 %."
      },
      "size": {
        "en": "Body 55–77 cm plus a 12–30 cm tail; 23–28 cm at the shoulder. In Africa, males 9–16 kg and females 5–10 kg. The largest land mustelid in Africa.",
        "fr": "Corps de 55 à 77 cm plus une queue de 12 à 30 cm ; 23 à 28 cm au garrot. En Afrique, mâles de 9 à 16 kg et femelles de 5 à 10 kg. Le plus grand mustélidé terrestre d’Afrique."
      },
      "lifespan": {
        "en": "Wild lifespan unknown. Captive animals have lived about 24 years.",
        "fr": "Durée de vie à l’état sauvage inconnue. Des individus captifs ont vécu environ 24 ans."
      },
      "behavior": {
        "en": "Mostly solitary, and can be active at any time of day depending on place and season. A fast, skilled digger that scent-marks a large home range. When threatened it rattles, raises its tail and fur, charges, and may spray a smelly fluid from its anal glands.",
        "fr": "Surtout solitaire, et peut être actif à toute heure selon le lieu et la saison. Fouisseur rapide et habile qui marque de son odeur un grand domaine vital. Menacé, il émet des grondements, dresse queue et poils, charge, et peut projeter un liquide malodorant de ses glandes anales."
      },
      "recognize": {
        "en": "A low, thick-set animal with a broad back, a wide whitish-grey band across the upper body and black sides and underparts, small eyes, ears reduced to skin ridges and long front claws. One subspecies (cottoni) is all black.",
        "fr": "Un animal bas et trapu, au dos large, avec une large bande blanchâtre à grisâtre sur le haut du corps et les flancs et le dessous noirs, de petits yeux, des oreilles réduites à des replis de peau et de longues griffes aux pattes avant. Une sous-espèce (cottoni) est entièrement noire."
      },
      "male": {
        "en": "Larger and heavier than the female (9–16 kg). Average home range about 548 km².",
        "fr": "Plus grand et plus lourd que la femelle (9 à 16 kg). Domaine vital moyen d’environ 548 km²."
      },
      "female": {
        "en": "Smaller (5–10 kg), with a much smaller average home range of about 138 km².",
        "fr": "Plus petite (5 à 10 kg), avec un domaine vital moyen bien plus petit, d’environ 138 km²."
      },
      "safety": {
        "en": "Treat it as dangerous. It is known for fearless ferocity: when it cannot escape it will attack almost anything, including much larger animals, and its loose, thick skin lets it twist free when seized. Bee stings and most bites barely penetrate it. It can carry rabies (a rabid one attacked a dog and several people in South Africa in 2021). Never approach, never feed, stay in your vehicle, and keep children and pets well away. Sightings are best enjoyed from a distance.",
        "fr": "Considérez-le comme dangereux. Il est réputé pour sa férocité sans peur : s’il ne peut fuir, il attaque presque n’importe quoi, y compris de bien plus gros animaux, et sa peau épaisse et lâche lui permet de se dégager quand on l’attrape. Piqûres d’abeilles et la plupart des morsures le pénètrent à peine. Il peut porter la rage (un individu enragé a attaqué un chien et plusieurs personnes en Afrique du Sud en 2021). Ne vous approchez jamais, ne le nourrissez jamais, restez dans votre véhicule et tenez enfants et animaux de compagnie très loin. Mieux vaut l’observer à distance."
      }
    },

    serval: {
      "img": "animal-serval.jpg",
      "name": {
        "en": "Serval",
        "fr": "Serval"
      },
      "sci": "Leptailurus serval",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (amended 2019 version of a 2015 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (version amendée en 2019 d’une évaluation de 2015, citée par Wikipédia)"
      },
      "statusSrc": [
        "s107",
        "s111"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the sources used. Local density example: about 0.1 animal per km² in Luambe National Park, Zambia (2011).",
          "fr": "Aucune estimation mondiale dans les sources utilisées. Exemple de densité locale : environ 0,1 animal par km² dans le parc national de Luambe, en Zambie (2011)."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s107"
        ]
      },
      "diet": {
        "en": "Mostly rodents (an estimated 80–97% of its diet), plus shrews, small birds, hares, frogs, insects and reptiles. Occasionally takes larger prey such as duikers or young antelopes.",
        "fr": "Surtout des rongeurs (environ 80 à 97 % de son régime), avec des musaraignes, de petits oiseaux, des lièvres, des grenouilles, des insectes et des reptiles. Prend parfois des proies plus grosses comme des céphalophes ou de jeunes antilopes."
      },
      "size": {
        "en": "54–62 cm at the shoulder; 8–18 kg; body 67–100 cm plus a tail of about 30 cm.",
        "fr": "54 à 62 cm au garrot ; 8 à 18 kg ; corps de 67 à 100 cm, plus une queue d’environ 30 cm."
      },
      "lifespan": {
        "en": "About 10 years in the wild; up to about 20 years in captivity.",
        "fr": "Environ 10 ans à l’état sauvage ; jusqu’à environ 20 ans en captivité."
      },
      "behavior": {
        "en": "Solitary and active by day and by night. Walks 2–4 km a night in a home range of 10–32 km². A good climber and a high jumper; servals mostly avoid each other rather than fight.",
        "fr": "Solitaire, actif de jour comme de nuit. Parcourt 2 à 4 km par nuit dans un domaine vital de 10 à 32 km². Bon grimpeur ; les servals s’évitent le plus souvent plutôt que de se battre."
      },
      "recognize": {
        "en": "A slim, long-legged cat with a golden-yellow coat marked with black spots and stripes, a small head, very large ears and a short black-tipped tail. It has the longest legs of any cat for its body size.",
        "fr": "Un félin svelte aux longues pattes, au pelage jaune doré marqué de taches et de rayures noires, avec une petite tête, de très grandes oreilles et une courte queue à bout noir. C’est le félin aux pattes les plus longues par rapport à son corps."
      },
      "male": {
        "en": "Sturdier and heavier than the female (about 9–18 kg).",
        "fr": "Plus robuste et plus lourd que la femelle (environ 9 à 18 kg)."
      },
      "female": {
        "en": "Lighter than the male (about 9–13 kg according to Animal Diversity Web).",
        "fr": "Plus légère que le mâle (environ 9 à 13 kg selon Animal Diversity Web)."
      },
      "safety": {
        "en": "Not a danger seen from a vehicle. It is a wild cat: keep your distance and never approach on foot.",
        "fr": "Sans danger vu depuis un véhicule. C’est un félin sauvage : gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    caracal: {
      "img": "animal-caracal.jpg",
      "name": {
        "en": "Caracal",
        "fr": "Caracal"
      },
      "sci": "Caracal caracal",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (as cited by Wikipedia and Animal Diversity Web; Wikipedia says listed as such since 2002)",
        "fr": "Liste rouge UICN : préoccupation mineure (citée par Wikipédia et Animal Diversity Web ; Wikipédia indique ce statut depuis 2002)"
      },
      "statusSrc": [
        "s108",
        "s116",
        "s112"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the sources used. Described as stable in central and southern Africa; close to extinction in North Africa; the Indian population may be under 100.",
          "fr": "Aucune estimation mondiale dans les sources utilisées. Décrit comme stable en Afrique centrale et australe ; proche de l’extinction en Afrique du Nord ; la population de l’Inde serait peut-être inférieure à 100."
        },
        "trend": {
          "en": "Stable in central and southern Africa; declining in North Africa and Asia",
          "fr": "Stable en Afrique centrale et australe ; en baisse en Afrique du Nord et en Asie"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s108",
          "s116"
        ]
      },
      "diet": {
        "en": "Strict meat-eater. Small mammals make up at least 80% of its diet (hyraxes, hares, rodents, young antelopes, small monkeys), plus birds, lizards and snakes. Can leap over 3 m to catch birds in flight.",
        "fr": "Strictement carnivore. Les petits mammifères forment au moins 80 % de son régime (damans, lièvres, rongeurs, jeunes antilopes, petits singes), avec des oiseaux, des lézards et des serpents. Peut bondir à plus de 3 m pour attraper des oiseaux en vol."
      },
      "size": {
        "en": "About 40–50 cm at the shoulder; 7–19 kg; body 71–108 cm plus a tail of 18–34 cm.",
        "fr": "Environ 40 à 50 cm au garrot ; 7 à 19 kg ; corps de 71 à 108 cm, plus une queue de 18 à 34 cm."
      },
      "lifespan": {
        "en": "Wild lifespan not well known (an average of about 12 years is cited by Animal Diversity Web). Nearly 16 years in captivity (Wikipedia); up to about 20 years (Animal Diversity Web).",
        "fr": "Durée de vie sauvage mal connue (une moyenne d’environ 12 ans est citée par Animal Diversity Web). Près de 16 ans en captivité (Wikipédia) ; jusqu’à environ 20 ans (Animal Diversity Web)."
      },
      "behavior": {
        "en": "Mostly active at night and very secretive. Lives alone or in pairs; groups are only mothers with young. Territorial: marks with urine and claw scratches. A skilled climber.",
        "fr": "Surtout actif la nuit et très discret. Vit seul ou en couple ; les seuls groupes sont des mères avec leurs petits. Territorial : marque avec l’urine et des griffades. Excellent grimpeur."
      },
      "recognize": {
        "en": "A robust, long-legged cat with a short face, a plain reddish-tan or sandy coat, paler underparts and long black-tipped ear tufts (about 4.5 cm). Black individuals are known.",
        "fr": "Un félin robuste aux longues pattes, à la face courte, au pelage uni roux-brun ou sable, au ventre plus clair et aux longs pinceaux noirs sur les oreilles (environ 4,5 cm). Des individus noirs existent."
      },
      "male": {
        "en": "Larger: 7.2–19 kg, body 78–108 cm. Its home range is about twice the size of a female’s.",
        "fr": "Plus grand : 7,2 à 19 kg, corps de 78 à 108 cm. Son domaine vital est environ deux fois plus grand que celui d’une femelle."
      },
      "female": {
        "en": "Smaller: 7–15.9 kg, body 71–103 cm. Typically a lighter coat colour.",
        "fr": "Plus petite : 7 à 15,9 kg, corps de 71 à 103 cm. Pelage généralement plus clair."
      },
      "safety": {
        "en": "Not a danger seen from a vehicle, and shy. Keep your distance and never approach on foot.",
        "fr": "Sans danger vu depuis un véhicule, et craintif. Gardez vos distances et ne vous approchez jamais à pied."
      }
    },

    pangolin: {
      "img": "animal-pangolin.jpg",
      "name": {
        "en": "Temminck’s ground pangolin",
        "fr": "Pangolin de Temminck (pangolin terrestre)"
      },
      "sci": "Smutsia temminckii",
      "status": "VU",
      "statusAsOf": {
        "en": "IUCN Red List: Vulnerable (2019 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : vulnérable (évaluation de 2019, citée par Wikipédia)"
      },
      "statusSrc": [
        "s109",
        "s113"
      ],
      "global": {
        "pop": {
          "en": "No global estimate: “How many are left in the wild is unknown” (Wikipedia). Threats named: habitat loss, and illegal trafficking and poaching for traditional medicine and bushmeat, with growing trade to Asia. SANParks calls pangolins “one of the most trafficked species in the world”.",
          "fr": "Aucune estimation mondiale : « le nombre d’individus restant à l’état sauvage est inconnu » (Wikipédia). Menaces citées : perte d’habitat, trafic illégal et braconnage pour la médecine traditionnelle et la viande de brousse, avec un commerce croissant vers l’Asie. SANParks décrit les pangolins comme « l’une des espèces les plus trafiquées au monde »."
        },
        "trend": {
          "en": "Decreasing (inferred reduction of 30–40% over 27 years)",
          "fr": "En baisse (réduction déduite de 30 à 40 % sur 27 ans)"
        },
        "asOf": {
          "en": "IUCN 2019 assessment, as cited by Wikipedia",
          "fr": "évaluation UICN 2019, citée par Wikipédia"
        },
        "src": [
          "s109",
          "s117"
        ]
      },
      "diet": {
        "en": "Eats only ants and termites, and is selective about which species. In Kruger, a rehabilitated pangolin’s diet was about 95% Natal droptail ants.",
        "fr": "Mange uniquement des fourmis et des termites, en choisissant certaines espèces. Au Kruger, le régime d’un pangolin réhabilité était d’environ 95 % de fourmis Crematogaster (Natal droptail)."
      },
      "size": {
        "en": "30–90 cm long, not counting the tail; 5–27 kg.",
        "fr": "30 à 90 cm de long, queue non comprise ; 5 à 27 kg."
      },
      "lifespan": {
        "en": "Unknown in the wild; 20 years recorded in captivity.",
        "fr": "Inconnue à l’état sauvage ; 20 ans relevés en captivité."
      },
      "behavior": {
        "en": "Solitary and nocturnal; meets others only to mate. Shelters in deep burrows, often old warthog or aardvark holes. When threatened it curls into a ball, can lash with its tail and release a foul-smelling acid.",
        "fr": "Solitaire et nocturne ; ne rencontre ses congénères que pour s’accoupler. S’abrite dans de profonds terriers, souvent d’anciens trous de phacochère ou d’oryctérope. Menacé, il se roule en boule, peut fouetter de la queue et émettre un acide nauséabond."
      },
      "recognize": {
        "en": "Covered in overlapping brown, olive or dark-brown keratin scales (about 20% of its body weight), with sparse fur on the belly. Young are pale brown or pink.",
        "fr": "Couvert d’écailles de kératine qui se chevauchent, brunes, olive ou brun foncé (environ 20 % de son poids), avec un ventre peu poilu. Les jeunes sont brun pâle ou roses."
      },
      "male": {
        "en": "Heavier: males are 10–50% heavier than females.",
        "fr": "Plus lourd : les mâles pèsent 10 à 50 % de plus que les femelles."
      },
      "female": {
        "en": "Lighter than the male by 10–50%.",
        "fr": "Plus légère que le mâle de 10 à 50 %."
      },
      "safety": {
        "en": "Harmless to people, and very rarely seen. If you are lucky enough to see one, stay in your vehicle, keep quiet and do not touch it. Tell a ranger or the camp reception about the sighting (general advice).",
        "fr": "Inoffensif pour l’humain, et très rarement vu. Si vous avez la chance d’en voir un, restez dans votre véhicule, soyez silencieux et ne le touchez pas. Signalez l’observation à un ranger ou à la réception du camp (conseil général)."
      }
    },

    sidestripedjackal: {
      "img": "animal-sidestripedjackal.jpg",
      "name": {
        "en": "Side-striped jackal",
        "fr": "Chacal à flancs rayés"
      },
      "sci": "Lupulella adusta",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2014 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2014, citée par Wikipédia)"
      },
      "statusSrc": [
        "s110"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used. Wikipedia notes that large parts of its range have no information on population status.",
          "fr": "Aucune estimation mondiale dans la source utilisée. Wikipédia note que de vastes parties de son aire n’ont aucune information sur l’état des populations."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s110"
        ]
      },
      "diet": {
        "en": "A flexible omnivore. Eats mostly invertebrates in the wet season and small mammals such as springhares in the dry season. Scavenges at campsites and kills, and eats fruit in season (up to 30% of its intake in rural areas). Rarely takes prey larger than a newborn antelope.",
        "fr": "Omnivore souple. Mange surtout des invertébrés en saison des pluies et de petits mammifères comme les lièvres sauteurs en saison sèche. Fouille les campements et les restes de proies, et mange des fruits en saison (jusqu’à 30 % de son alimentation en zone rurale). S’attaque rarement à une proie plus grande qu’un nouveau-né d’antilope."
      },
      "size": {
        "en": "35–50 cm at the shoulder; 6.5–14 kg; body 69–81 cm plus a tail of 30–41 cm.",
        "fr": "35 à 50 cm au garrot ; 6,5 à 14 kg ; corps de 69 à 81 cm, plus une queue de 30 à 41 cm."
      },
      "lifespan": {
        "en": "Not stated in the sources used.",
        "fr": "Non précisée dans les sources utilisées."
      },
      "behavior": {
        "en": "Forages mostly alone, but lives alone or in family groups of up to seven led by a breeding pair. Mostly active at night; shy and rarely seen by day. Breeds June to November in Southern Africa, with 3–6 pups.",
        "fr": "Cherche sa nourriture surtout seul, mais vit seul ou en groupes familiaux d’un maximum de sept individus menés par un couple reproducteur. Surtout actif la nuit ; craintif et rarement vu de jour. Se reproduit de juin à novembre en Afrique australe, avec 3 à 6 petits."
      },
      "recognize": {
        "en": "A buff-grey, dog-like jackal, darker on the back than underneath, with faint white stripes along each flank from elbow to hip and a black tail with a grey, nearly silver tip. Slightly larger than the black-backed jackal.",
        "fr": "Un chacal grisâtre à fauve, au corps de chien, plus sombre sur le dos que dessous, avec de fines rayures blanches sur chaque flanc du coude à la hanche et une queue noire à bout gris presque argenté. Un peu plus grand que le chacal à chabraque."
      },
      "noDiff": {
        "en": "Our source lists no difference in size or looks between male and female (only that females have four teats).",
        "fr": "Notre source ne signale aucune différence de taille ou d’aspect entre mâle et femelle (seulement que la femelle a quatre mamelles)."
      },
      "safety": {
        "en": "Not a danger to people seen from a vehicle. Never feed it, and keep food secured at camp, because it scavenges around campsites.",
        "fr": "Pas dangereux pour l’humain vu depuis un véhicule. Ne le nourrissez jamais et gardez la nourriture à l’abri au camp, car il fouille les campements."
      }
    },

    nilecrocodile: {
      "img": "animal-nilecrocodile.jpg",
      "name": {
        "en": "Nile crocodile",
        "fr": "Crocodile du Nil"
      },
      "sci": "Crocodylus niloticus",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2019 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2019, citée par Wikipédia)"
      },
      "statusSrc": [
        "s123"
      ],
      "global": {
        "pop": {
          "en": "Estimated 250,000 to 500,000 individuals in the wild.",
          "fr": "Estimation de 250 000 à 500 000 individus à l’état sauvage."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s123"
        ]
      },
      "diet": {
        "en": "Generalist ambush predator: mainly fish, reptiles, birds and mammals. Also eats carrion. Young crocodiles hunt more actively than adults.",
        "fr": "Prédateur généraliste à l’affût : surtout des poissons, reptiles, oiseaux et mammifères. Mange aussi des charognes. Les jeunes chassent plus activement que les adultes."
      },
      "size": {
        "en": "Adult males typically 3.5–5 m and 225–750 kg; females typically 2.2–3.8 m and 40–250 kg. Adults from Kruger average 3.65 m.",
        "fr": "Mâles adultes : généralement 3,5 à 5 m et 225 à 750 kg ; femelles : généralement 2,2 à 3,8 m et 40 à 250 kg. Les adultes du Kruger mesurent en moyenne 3,65 m."
      },
      "lifespan": {
        "en": "Potential maximum of 70–100 years; no crocodilian commonly exceeds 50–60 years in captivity.",
        "fr": "Maximum potentiel de 70 à 100 ans ; aucun crocodilien ne dépasse couramment 50 à 60 ans en captivité."
      },
      "behavior": {
        "en": "Spends long hours basking, mostly motionless, and can wait hours or even weeks for prey. Strict size-based hierarchy: large males eat first. Both parents guard the eggs. Swims up to 30–35 km/h and can briefly run about 14 km/h on land. Hunts mostly at night.",
        "fr": "Passe de longues heures à se prélasser, le plus souvent immobile, et peut attendre des heures voire des semaines une proie. Hiérarchie stricte selon la taille : les grands mâles mangent en premier. Les deux parents gardent les œufs. Nage jusqu’à 30–35 km/h et peut courir brièvement à environ 14 km/h sur terre. Chasse surtout la nuit."
      },
      "recognize": {
        "en": "A huge reptile with thick, armoured skin: dark bronze above with faded blackish spots and stripes, off-yellow belly and green eyes. Young ones are grey, multicoloured or brown with dark cross-bands that fade with age.",
        "fr": "Un énorme reptile à la peau épaisse et cuirassée : dessus bronze foncé avec des taches et rayures noirâtres estompées, ventre jaunâtre et yeux verts. Les jeunes sont gris, multicolores ou bruns avec des bandes sombres qui s’estompent avec l’âge."
      },
      "male": {
        "en": "Up to about 30% larger than the female (about 30–50 cm longer at maturity). Keeps growing in bulk after 4 m.",
        "fr": "Jusqu’à environ 30 % plus grand que la femelle (environ 30 à 50 cm de plus à maturité). Continue de prendre de la masse au-delà de 4 m."
      },
      "female": {
        "en": "Smaller: mature females average about 2.2–3 m.",
        "fr": "Plus petite : les femelles matures mesurent en moyenne environ 2,2 à 3 m."
      },
      "safety": {
        "en": "One of the most dangerous animals in Africa. Most attacks happen near water. Never get out of your vehicle except at fenced, official spots. Never go near the water’s edge, riverbanks or sandbanks, even if the crocodile looks asleep. A crocodile can surge out of the water very fast. Never feed, tease or throw things at it.",
        "fr": "L’un des animaux les plus dangereux d’Afrique. La plupart des attaques ont lieu près de l’eau. Ne descendez jamais de votre véhicule, sauf aux endroits officiels et clôturés. Ne vous approchez jamais du bord de l’eau, des berges ou des bancs de sable, même si le crocodile semble dormir. Il peut surgir de l’eau très vite. Ne le nourrissez pas, ne le provoquez pas, ne lui jetez rien."
      }
    },

    dwarfcrocodile: {
      "img": "animal-dwarfcrocodile.jpg",
      "name": {
        "en": "Dwarf crocodile",
        "fr": "Crocodile nain"
      },
      "sci": "Osteolaemus tetraspis",
      "status": "VU",
      "statusAsOf": {
        "en": "IUCN Red List: Vulnerable (1996 entry, as cited by Wikipedia; also Vulnerable per the Reptile Database)",
        "fr": "Liste rouge UICN : vulnérable (entrée de 1996, citée par Wikipédia ; également vulnérable selon la Reptile Database)"
      },
      "statusSrc": [
        "s124",
        "s129"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used. Described as “widely spread, and presumably numerous overall”, but seriously declined in Gambia and Liberia.",
          "fr": "Aucune estimation mondiale dans la source utilisée. Décrit comme « largement répandu et vraisemblablement nombreux dans l’ensemble », mais en net déclin en Gambie et au Liberia."
        },
        "trend": {
          "en": "Decreasing in places (bushmeat hunting, habitat loss)",
          "fr": "En baisse par endroits (chasse pour la viande de brousse, perte d’habitat)"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s124"
        ]
      },
      "diet": {
        "en": "Generalist: fish, crabs, shrimp, frogs, snails, insects, small water birds and bats. Fish dominate in one Congo study; snails and crabs in one Nigeria study. Plants are probably swallowed by accident.",
        "fr": "Généraliste : poissons, crabes, crevettes, grenouilles, escargots, insectes, petits oiseaux d’eau et chauves-souris. Les poissons dominent dans une étude au Congo ; les escargots et les crabes dans une étude au Nigeria. Les végétaux sont probablement avalés par accident."
      },
      "size": {
        "en": "Adults 1.7–1.9 m and 18–32 kg. The smallest living crocodile species. If O. osborni is treated as a separate species, it would be under 1.2 m.",
        "fr": "Adultes de 1,7 à 1,9 m et 18 à 32 kg. La plus petite espèce de crocodile actuelle. Si O. osborni est considéré comme une espèce distincte, il mesurerait moins de 1,2 m."
      },
      "lifespan": {
        "en": "Not stated in the source used.",
        "fr": "Non précisée dans la source utilisée."
      },
      "behavior": {
        "en": "Timid, mostly nocturnal and solitary. Hides by day in pools or burrows and rarely basks. Hunts in or near water, with land trips especially after rain. Can go long without food. Females build a nest mound and guard it.",
        "fr": "Timide, surtout nocturne et solitaire. Se cache le jour dans des mares ou des terriers et se prélasse rarement. Chasse dans l’eau ou près de l’eau, avec des sorties à terre surtout après la pluie. Peut rester longtemps sans manger. Les femelles construisent un monticule de nid et le gardent."
      },
      "recognize": {
        "en": "A small, heavily armoured crocodile with a short, blunt snout. Adults are dark above and on the sides with a yellowish belly marked with black patches. Young ones have lighter brown bands and yellow head patterns.",
        "fr": "Un petit crocodile très cuirassé, au museau court et obtus. Les adultes sont sombres sur le dessus et les flancs, avec un ventre jaunâtre marqué de taches noires. Les jeunes ont des bandes brun clair et des motifs jaunes sur la tête."
      },
      "noDiff": {
        "en": "Our source does not describe any difference in size or looks between male and female.",
        "fr": "Notre source ne décrit aucune différence de taille ou d’aspect entre mâle et femelle."
      },
      "safety": {
        "en": "Not found in Kruger or southern Africa, so you will not meet it there. In its home forests of West and Central Africa, treat it as any wild crocodile: stay away from the water’s edge. Our source does not discuss danger to people.",
        "fr": "Absent du Kruger et de l’Afrique australe : vous ne le croiserez pas là-bas. Dans ses forêts d’Afrique de l’Ouest et centrale, traitez-le comme n’importe quel crocodile sauvage : restez loin du bord de l’eau. Notre source ne traite pas du danger pour les humains."
      }
    },

    nilemonitor: {
      "img": "animal-nilemonitor.jpg",
      "name": {
        "en": "Nile monitor",
        "fr": "Varan du Nil"
      },
      "sci": "Varanus niloticus",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2021 assessment, as cited by Wikipedia; also Least Concern per the Reptile Database)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2021, citée par Wikipédia ; également préoccupation mineure selon la Reptile Database)"
      },
      "statusSrc": [
        "s125",
        "s127"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used. Not considered threatened in the wild thanks to its large range, though overhunted for skins in some areas.",
          "fr": "Aucune estimation mondiale dans la source utilisée. Non menacé à l’état sauvage grâce à sa vaste aire, mais chassé à l’excès pour sa peau dans certaines régions."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s125",
          "s127"
        ]
      },
      "diet": {
        "en": "Broad generalist: fish, frogs and toads, small reptiles (including young crocodiles), birds, rodents, small mammals, eggs, invertebrates and carrion.",
        "fr": "Grand généraliste : poissons, grenouilles et crapauds, petits reptiles (dont de jeunes crocodiles), oiseaux, rongeurs, petits mammifères, œufs, invertébrés et charognes."
      },
      "size": {
        "en": "Typically 120–220 cm long, up to 244 cm. Reported weights vary from under 2 kg to about 20 kg in exceptional animals.",
        "fr": "Généralement 120 à 220 cm de long, jusqu’à 244 cm. Les poids rapportés varient de moins de 2 kg à environ 20 kg pour des spécimens exceptionnels."
      },
      "lifespan": {
        "en": "Not stated in the source used.",
        "fr": "Non précisée dans la source utilisée."
      },
      "behavior": {
        "en": "Strong climber and quick runner on land, well adapted to water. Young ones whip their tail to defend themselves. Adults are described as very aggressive.",
        "fr": "Bon grimpeur et coureur rapide sur terre, bien adapté à l’eau. Les jeunes fouettent de la queue pour se défendre. Les adultes sont décrits comme très agressifs."
      },
      "recognize": {
        "en": "A big, muscular lizard with strong legs and jaws and a forked tongue. Greyish-brown above with greenish-yellow tail bars and large greenish-yellow rosette spots, each with a small dark centre. Throat and belly ochre to creamy-yellow.",
        "fr": "Un grand lézard musclé aux pattes et aux mâchoires puissantes, à la langue fourchue. Dessus gris-brun avec des barres jaune-vert sur la queue et de grandes taches en rosette jaune-vert, chacune avec un petit centre sombre. Gorge et ventre ocre à jaune crème."
      },
      "noDiff": {
        "en": "Our source does not describe any difference between male and female.",
        "fr": "Notre source ne décrit aucune différence entre mâle et femelle."
      },
      "safety": {
        "en": "Not a threat from a vehicle. It can inflict moderate to serious wounds with bites and scratches if handled or cornered, so never approach or try to catch it. It is often near water: keep away from the water’s edge, where crocodiles also live.",
        "fr": "Aucune menace depuis un véhicule. Il peut infliger des blessures modérées à graves avec ses morsures et ses griffes s’il est manipulé ou acculé : ne vous en approchez jamais et n’essayez pas de l’attraper. Il vit souvent près de l’eau : restez à distance des berges, où vivent aussi les crocodiles."
      }
    },

    savannamonitor: {
      "img": "animal-savannamonitor.jpg",
      "name": {
        "en": "Savanna monitor",
        "fr": "Varan des savanes"
      },
      "sci": "Varanus exanthematicus",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2021 assessment, as cited by Wikipedia; also Least Concern per the Reptile Database)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2021, citée par Wikipédia ; également préoccupation mineure selon la Reptile Database)"
      },
      "statusSrc": [
        "s126",
        "s128"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used. The wild-caught pet trade is not seen as a global conservation concern because of the species’ vast range.",
          "fr": "Aucune estimation mondiale dans la source utilisée. Le commerce d’animaux de compagnie capturés dans la nature n’est pas jugé préoccupant à l’échelle mondiale en raison de la vaste aire de l’espèce."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s126"
        ]
      },
      "diet": {
        "en": "Mostly invertebrates: snails, crabs, scorpions, millipedes, crickets and other insects, plus frogs. Adults also eat carrion and occasionally lizard eggs.",
        "fr": "Surtout des invertébrés : escargots, crabes, scorpions, mille-pattes, grillons et autres insectes, ainsi que des grenouilles. Les adultes mangent aussi des charognes et parfois des œufs de lézards."
      },
      "size": {
        "en": "Rarely more than 100 cm long. Weight not stated.",
        "fr": "Rarement plus de 100 cm de long. Poids non précisé."
      },
      "lifespan": {
        "en": "Not stated in the source used.",
        "fr": "Non précisée dans la source utilisée."
      },
      "behavior": {
        "en": "Lives mainly on the ground and shelters in burrows, sometimes in bushes or low trees. Females dig a deep hole and lay up to 40 or more eggs, which hatch after about 156–160 days.",
        "fr": "Vit surtout au sol et s’abrite dans des terriers, parfois dans des buissons ou de petits arbres. Les femelles creusent un trou profond et pondent jusqu’à 40 œufs ou plus, qui éclosent après environ 156 à 160 jours."
      },
      "recognize": {
        "en": "A stoutly built lizard with short limbs and toes, strong jaws with blunt, peg-like teeth and large body scales. The tail is partly flattened from side to side with a double ridge on top. Its colour varies with the local soil.",
        "fr": "Un lézard trapu aux membres et aux doigts courts, aux mâchoires puissantes à dents émoussées en forme de chevilles et aux grandes écailles. La queue est en partie aplatie sur les côtés, avec une double crête dessus. Sa couleur varie selon le sol local."
      },
      "noDiff": {
        "en": "Our source does not describe any difference between male and female.",
        "fr": "Notre source ne décrit aucune différence entre mâle et femelle."
      },
      "safety": {
        "en": "Not found in Kruger or South Africa, so you will not see it there. Like any large monitor, it can bite and scratch if handled: do not pick up wild monitors. Our source does not discuss danger to people.",
        "fr": "Absent du Kruger et de l’Afrique du Sud : vous ne le verrez pas là-bas. Comme tout grand varan, il peut mordre et griffer si on le manipule : ne ramassez pas de varans sauvages. Notre source ne traite pas du danger pour les humains."
      }
    },

    blackmamba: {
      "img": "animal-blackmamba.jpg",
      "name": {
        "en": "Black mamba",
        "fr": "Mamba noir"
      },
      "sci": "Dendroaspis polylepis",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2021 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2021, citée par Wikipédia)"
      },
      "statusSrc": [
        "s137"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used. Wikipedia only notes a wide range and no documented decline.",
          "fr": "Aucune estimation mondiale dans la source utilisée. Wikipédia note seulement une vaste aire de répartition et aucun déclin documenté."
        },
        "trend": {
          "en": "Not stated (no documented decline)",
          "fr": "Non précisée (aucun déclin documenté)"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s137"
        ]
      },
      "diet": {
        "en": "Small warm-blooded prey: young birds and small mammals such as rodents, squirrels, hyraxes and small antelope. Also eats other snakes. After biting, it lets the prey go and waits for it to die before swallowing.",
        "fr": "Petites proies à sang chaud : jeunes oiseaux et petits mammifères (rongeurs, écureuils, damans, petites antilopes). Mange aussi d’autres serpents. Après la morsure, il lâche sa proie et attend qu’elle meure avant de l’avaler."
      },
      "size": {
        "en": "Usually 2–3 m long, sometimes up to about 4.5 m; the longest venomous snake in Africa. Weight about 1–1.6 kg.",
        "fr": "Généralement 2 à 3 m de long, parfois jusqu’à environ 4,5 m ; le plus long serpent venimeux d’Afrique. Poids d’environ 1 à 1,6 kg."
      },
      "lifespan": {
        "en": "Up to 11 years in the wild, possibly longer.",
        "fr": "Jusqu’à 11 ans à l’état sauvage, peut-être davantage."
      },
      "behavior": {
        "en": "Active by day, on the ground and in trees; shelters in termite mounds, burrows and crevices. Shy: it usually avoids people from about 40 m away. If cornered it opens its black mouth, hisses and spreads a narrow hood, and may bite.",
        "fr": "Actif de jour, au sol et dans les arbres ; s’abrite dans les termitières, terriers et crevasses. Craintif : il évite généralement les humains dès environ 40 m. Acculé, il ouvre sa gueule noire, siffle, étale un capuchon étroit et peut mordre."
      },
      "recognize": {
        "en": "A long, slender snake, grey, olive or brown (rarely black), with a coffin-shaped head. The “black” of its name is the dark inside of its mouth. Young snakes are paler and darken with age.",
        "fr": "Un long serpent mince, gris, olive ou brun (rarement noir), à la tête en forme de cercueil. Le « noir » de son nom est l’intérieur sombre de sa gueule. Les jeunes sont plus pâles et foncent avec l’âge."
      },
      "noDiff": {
        "en": "Our source does not describe differences between males and females.",
        "fr": "Notre source ne décrit pas de différences entre mâles et femelles."
      },
      "safety": {
        "en": "Highly venomous (mainly neurotoxic venom, which can paralyse). Never approach, corner or try to handle it; stay in your vehicle or on the path and leave it plenty of space. A bite is a medical emergency: keep the person calm and still, immobilise the bitten limb and get them to a hospital immediately, where antivenom is the main treatment. Do not cut the wound or suck out the venom. Sources disagree on pressure bandages and tourniquets, so follow medical advice.",
        "fr": "Très venimeux (venin surtout neurotoxique, qui peut paralyser). Ne vous en approchez jamais, ne l’acculez pas et n’essayez pas de le manipuler ; restez dans votre véhicule ou sur le chemin et laissez-lui beaucoup d’espace. Une morsure est une urgence médicale : gardez la personne calme et immobile, immobilisez le membre mordu et conduisez-la immédiatement à l’hôpital, où le sérum antivenimeux est le principal traitement. Ne coupez pas la plaie et n’essayez pas d’aspirer le venin. Les sources divergent sur les bandages compressifs et les garrots : suivez l’avis des médecins."
      }
    },

    spittingcobra: {
      "img": "animal-spittingcobra.jpg",
      "name": {
        "en": "Mozambique spitting cobra",
        "fr": "Cobra cracheur du Mozambique"
      },
      "sci": "Naja mossambica",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2020 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2020, citée par Wikipédia)"
      },
      "statusSrc": [
        "s138"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used.",
          "fr": "Aucune estimation mondiale dans la source utilisée."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s138"
        ]
      },
      "diet": {
        "en": "Frogs and toads, other snakes (even venomous ones such as black mambas, to which it is immune), birds, eggs and small mammals; sometimes insects. It also scavenges rotting carcasses.",
        "fr": "Grenouilles et crapauds, autres serpents (même venimeux comme les mambas noirs, dont il est immunisé), oiseaux, œufs et petits mammifères ; parfois des insectes. Il se nourrit aussi de charognes en décomposition."
      },
      "size": {
        "en": "Adults average about 90–105 cm; the largest recorded was 154 cm.",
        "fr": "Les adultes mesurent en moyenne environ 90 à 105 cm ; le plus grand enregistré faisait 154 cm."
      },
      "lifespan": {
        "en": "Not stated in the source used.",
        "fr": "Non précisée dans la source utilisée."
      },
      "behavior": {
        "en": "Nervous and quick to react, and prefers areas near water. Threatened, it rears up, spreads its hood and spits venom, accurately up to 2–3 m. It can also spit without rearing, bite, or play dead.",
        "fr": "Nerveux et vif, il préfère les zones proches de l’eau. Menacé, il se dresse, étale son capuchon et crache son venin avec précision jusqu’à 2 à 3 m. Il peut aussi cracher sans se dresser, mordre ou faire le mort."
      },
      "recognize": {
        "en": "Slate, blue-olive or tawny-black upper body, some scales edged in black. Underside salmon pink to purplish yellow, with black bars across the neck. Young ones can have pink or yellow throat bars.",
        "fr": "Dessus gris ardoise, bleu-olive ou noir fauve, certaines écailles bordées de noir. Dessous rose saumon à jaune violacé, avec des barres noires en travers du cou. Les jeunes peuvent avoir des barres roses ou jaunes sous la gorge."
      },
      "noDiff": {
        "en": "Our source does not describe differences between males and females (it only notes that the largest recorded specimen was a male).",
        "fr": "Notre source ne décrit pas de différences entre mâles et femelles (elle note seulement que le plus grand spécimen enregistré était un mâle)."
      },
      "safety": {
        "en": "Keep at least 3 m away and never approach. Venom in the eyes can cause pain and loss of vision. If it happens, do not rub: flush the eye at once with lots of clean water for a long time (if no water, a non-irritant liquid such as milk), keep the lids open, then cover the eye and get medical help quickly (NHS Fit for Travel advice). Bites cause severe local tissue damage and need hospital care at once: keep the person still and do not cut the wound or suck out the venom.",
        "fr": "Restez à au moins 3 m et ne vous approchez jamais. Du venin dans les yeux peut provoquer douleur et perte de vision. Dans ce cas, ne frottez pas : rincez l’œil immédiatement, longuement, à grande eau propre (à défaut, avec un liquide non irritant comme du lait), paupières ouvertes, puis couvrez l’œil et consultez vite un médecin (conseils NHS Fit for Travel). Les morsures provoquent de graves destructions locales des tissus et exigent l’hôpital sans délai : gardez la personne immobile, ne coupez pas la plaie et n’aspirez pas le venin."
      }
    },

    sebapython: {
      "img": "animal-sebapython.jpg",
      "see": "pythons",
      "name": {
        "en": "African rock python (Seba’s python)",
        "fr": "Python de Seba (python de roche d’Afrique)"
      },
      "sci": "Python sebae (inclut Python natalensis)",
      "status": "NT",
      "statusAsOf": {
        "en": "IUCN Red List: Near Threatened for Python sebae (2021 assessment, as cited by Wikipedia and The Reptile Database). The southern species, Python natalensis, which lives in the Kruger, is listed as Least Concern (2021).",
        "fr": "Liste rouge UICN : quasi menacé pour Python sebae (évaluation de 2021, citée par Wikipédia et The Reptile Database). L’espèce du sud, Python natalensis, qui vit au Kruger, est classée en préoccupation mineure (2021)."
      },
      "statusSrc": [
        "s139",
        "s143",
        "s154",
        "s155"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used. Wikipedia says both subspecies have declined, and West African populations by more than 60% over three generations. No global estimate for the southern species either.",
          "fr": "Aucune estimation mondiale dans la source utilisée. Wikipédia indique un déclin des deux sous-espèces, et de plus de 60 % sur trois générations pour les populations d’Afrique de l’Ouest. Aucune estimation mondiale non plus pour l’espèce du sud."
        },
        "trend": {
          "en": "Decreasing (West African populations)",
          "fr": "En baisse (populations d’Afrique de l’Ouest)"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s139",
          "s154",
          "s155"
        ]
      },
      "diet": {
        "en": "Mainly small antelopes, hyraxes and monkeys; sometimes waterbirds, monitor lizards and crocodiles. A python can swallow prey as heavy as a 59 kg impala. Kills by constriction.",
        "fr": "Surtout de petites antilopes, des damans et des singes ; parfois des oiseaux d’eau, des varans et des crocodiles. Un python peut avaler une proie aussi lourde qu’un impala de 59 kg. Tue par constriction."
      },
      "size": {
        "en": "Typically 3–3.5 m and about 55–65 kg or more; very large individuals exist. Hatchlings 45–60 cm. In southern Africa the rock python is usually 2.8–4 m, over 4.6 m being rare (longest female measured in South Africa: 4.34 m, 53.4 kg).",
        "fr": "Généralement 3 à 3,5 m et environ 55 à 65 kg ou plus ; de très gros individus existent. Nouveau-nés : 45 à 60 cm. En Afrique australe, le python de roche mesure en général 2,8 à 4 m, plus de 4,6 m étant rare (plus longue femelle mesurée en Afrique du Sud : 4,34 m, 53,4 kg)."
      },
      "lifespan": {
        "en": "Over 12 years in captivity; no wild figure in the source.",
        "fr": "Plus de 12 ans en captivité ; aucun chiffre pour la nature dans la source."
      },
      "behavior": {
        "en": "Usually lives near permanent water (swamps, lakes, rivers) and adapts to disturbed areas. Dormant in the dry season. The female lays 20–100 eggs, coils around them for about 90 days and guards the hatchlings for up to two weeks. In the south it is mostly active at night but basks by day.",
        "fr": "Vit généralement près de l’eau permanente (marais, lacs, rivières) et s’adapte aux zones perturbées. Inactif en saison sèche. La femelle pond 20 à 100 œufs, s’enroule autour pendant environ 90 jours et garde les petits jusqu’à deux semaines. Dans le sud, il est surtout actif la nuit mais se prélasse le jour."
      },
      "recognize": {
        "en": "A thick-bodied snake with brown, olive, chestnut and yellow blotches that often join into an irregular stripe, a triangular head with a dark spear-head mark and a triangular mark under the eye, and heat-sensing pits along the lips. Compared with the southern species (P. natalensis), it is more colourful and has larger head scales and brighter face lines.",
        "fr": "Un serpent massif aux taches brunes, olive, châtain et jaunes qui forment souvent une bande irrégulière, à la tête triangulaire avec une marque sombre en fer de lance et une marque triangulaire sous l’œil, et des fossettes thermosensibles le long des lèvres. Comparé à l’espèce australe (P. natalensis), il est plus coloré, avec de plus grandes écailles sur la tête et des lignes faciales plus vives."
      },
      "male": {
        "en": "Typically smaller than the female.",
        "fr": "Généralement plus petit que la femelle."
      },
      "female": {
        "en": "Typically larger than the male; incubates the eggs.",
        "fr": "Généralement plus grande que le mâle ; couve les œufs."
      },
      "safety": {
        "en": "Not venomous. Attacks on people are very rare, but a big python can bite and constrict: never approach or handle one. Keep your distance and watch from a vehicle.",
        "fr": "Non venimeux. Les attaques sur des humains sont très rares, mais un gros python peut mordre et étouffer : ne vous approchez jamais et ne le manipulez pas. Gardez vos distances et observez depuis un véhicule."
      }
    },

    chameleon: {
      "img": "animal-chameleon.jpg",
      "name": {
        "en": "Flap-necked chameleon",
        "fr": "Caméléon bilobé"
      },
      "sci": "Chamaeleo dilepis",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2014 assessment, as cited by Wikipedia; also shown by The Reptile Database)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2014, citée par Wikipédia ; également indiquée par The Reptile Database)"
      },
      "statusSrc": [
        "s140",
        "s144"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used. Wikipedia: no detrimental effect on the total population has been observed so far. Over 111,000 were exported for the pet trade from 1977 to 2011.",
          "fr": "Aucune estimation mondiale dans la source utilisée. Wikipédia : aucun effet néfaste sur la population totale n’a été observé jusqu’ici. Plus de 111 000 individus ont été exportés pour le commerce d’animaux de compagnie de 1977 à 2011."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s140"
        ]
      },
      "diet": {
        "en": "Mainly insects, especially grasshoppers and beetles. Large individuals may also eat geckos and other chameleons.",
        "fr": "Surtout des insectes, notamment des sauterelles et des coléoptères. Les grands individus peuvent aussi manger des geckos et d’autres caméléons."
      },
      "size": {
        "en": "Up to about 35 cm in total length, tail included; large for a chameleon.",
        "fr": "Jusqu’à environ 35 cm de longueur totale, queue comprise ; grand pour un caméléon."
      },
      "lifespan": {
        "en": "Not stated in the sources used.",
        "fr": "Non précisée dans les sources utilisées."
      },
      "behavior": {
        "en": "Lives in trees and moves very slowly, so it is often seen crossing roads. Stressed, it puffs up its body and shows orange and black markings. Females lay 10–40 eggs in a hole in the soil; eggs take 10–12 months to hatch. Snakes such as the boomslang and twig snake eat it.",
        "fr": "Vit dans les arbres et se déplace très lentement : on le voit souvent traverser les routes. Stressé, il gonfle son corps et montre des marques orange et noires. Les femelles pondent 10 à 40 œufs dans un trou du sol ; les œufs mettent 10 à 12 mois à éclore. Des serpents comme le boomslang et le serpent-liane s’en nourrissent."
      },
      "recognize": {
        "en": "A large chameleon coloured green, yellow or brown, usually with a pale stripe on the lower flanks and one to three pale patches higher up, and a row of small white tubercles along the throat and belly.",
        "fr": "Un grand caméléon vert, jaune ou brun, avec le plus souvent une bande pâle sur le bas des flancs et une à trois taches pâles plus haut, et une rangée de petits tubercules blancs le long de la gorge et du ventre."
      },
      "male": {
        "en": "Has a broadened base of the tail and a spur on each hind foot.",
        "fr": "A la base de la queue élargie et un éperon sur chaque patte arrière."
      },
      "female": {
        "en": "Lacks the tail swelling and foot spurs of the male; lays the eggs.",
        "fr": "N’a ni le renflement de la queue ni les éperons du mâle ; pond les œufs."
      },
      "safety": {
        "en": "Harmless to people. If one crosses the road, slow down and let it pass. Do not touch or handle it: stress can harm it.",
        "fr": "Inoffensif pour l’humain. S’il traverse la route, ralentissez et laissez-le passer. Ne le touchez pas et ne le manipulez pas : le stress peut lui nuire."
      }
    },

    marabou: {
      "img": "animal-marabou.jpg",
      "name": {
        "en": "Marabou stork",
        "fr": "Marabout d’Afrique"
      },
      "sci": "Leptoptilos crumenifer",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (BirdLife International assessment, 2025, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de BirdLife International, 2025, citée par Wikipédia)"
      },
      "statusSrc": [
        "s159"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the sources used.",
          "fr": "Aucune estimation mondiale dans les sources utilisées."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s159"
        ]
      },
      "diet": {
        "en": "Mostly carrion, food scraps and dung. Eats almost any animal it can swallow, including birds, fish, frogs, insects, eggs, small mammals and reptiles. Often feeds with vultures and sometimes steals their food.",
        "fr": "Surtout charognes, restes de nourriture et excréments. Mange presque tout animal qu’il peut avaler : oiseaux, poissons, grenouilles, insectes, œufs, petits mammifères et reptiles. Se nourrit souvent avec les vautours et leur vole parfois leur nourriture."
      },
      "size": {
        "en": "Height up to about 152 cm; wingspan typically 225–287 cm (up to 3.2 m recorded); length 120–130 cm; weight typically 4.5–8 kg, up to about 9 kg.",
        "fr": "Hauteur jusqu’à environ 152 cm ; envergure généralement de 225 à 287 cm (jusqu’à 3,2 m relevés) ; longueur de 120 à 130 cm ; poids habituel de 4,5 à 8 kg, jusqu’à environ 9 kg."
      },
      "lifespan": {
        "en": "About 25 years in the wild; 43 years in captivity.",
        "fr": "Environ 25 ans à l’état sauvage ; 43 ans en captivité."
      },
      "behavior": {
        "en": "Gregarious and a colonial breeder, nesting in trees in the dry season (2–3 eggs). Flies with its neck pulled in, like a heron. Quite ill-tempered. Often gathers at grass fires, waterholes and rubbish dumps.",
        "fr": "Grégaire et nicheur colonial, il construit son nid dans un arbre en saison sèche (2 ou 3 œufs). Vole le cou rentré, comme un héron. Plutôt irascible. Se rassemble souvent près des feux de brousse, des points d’eau et des décharges."
      },
      "recognize": {
        "en": "A huge stork with a bare head and neck, black back and wings, white underparts and legs, a massive bill, a pink throat sac and a neck ruff. Young birds are browner with smaller bills.",
        "fr": "Une énorme cigogne à la tête et au cou nus, au dos et aux ailes noirs, au dessous et aux pattes blancs, avec un bec massif, un sac gulaire rose et une collerette. Les jeunes sont plus bruns, avec un bec plus petit."
      },
      "male": {
        "en": "Larger than the female; plumage is alike in both sexes.",
        "fr": "Plus grand que la femelle ; le plumage est identique chez les deux sexes."
      },
      "female": {
        "en": "Smaller than the male; plumage is alike in both sexes.",
        "fr": "Plus petite que le mâle ; le plumage est identique chez les deux sexes."
      },
      "safety": {
        "en": "Birds used to human food can lash out when refused. Never feed it and keep your distance; watch from the vehicle or a hide.",
        "fr": "Les oiseaux habitués à la nourriture humaine peuvent attaquer s’ils sont éconduits. Ne le nourrissez jamais et gardez vos distances ; observez depuis le véhicule ou un affût."
      }
    },

    sable: {
      "img": "animal-sable.jpg",
      "name": {
        "en": "Sable antelope",
        "fr": "Antilope noire (hippotrague noir)"
      },
      "sci": "Hippotragus niger",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2017 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2017, citée par Wikipédia)"
      },
      "statusSrc": [
        "s162",
        "s169"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used. Regional figures only: about 7,000 in South Africa; in Zimbabwe’s Matetsi area, 450 animals, down from 24,000 in 1994.",
          "fr": "Aucune estimation mondiale dans la source utilisée. Seulement des chiffres régionaux : environ 7 000 en Afrique du Sud ; dans la région de Matetsi (Zimbabwe), 450 animaux, contre 24 000 en 1994."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s162"
        ]
      },
      "diet": {
        "en": "A specialised browser: foliage, mid-length grasses and herbs, often on termite mounds. Tree leaves make up about 90% of its diet. It also visits salt licks and chews bones for minerals.",
        "fr": "Brouteur spécialisé de feuillage : feuilles, herbes de hauteur moyenne, souvent sur les termitières. Les feuilles d’arbres forment environ 90 % de son régime. Il fréquente aussi les salines et ronge des os pour les minéraux."
      },
      "size": {
        "en": "Males: 117–140 cm at the shoulder, about 235 kg. Females are slightly shorter, about 220 kg. Head and body 190–255 cm; tail 40–75 cm.",
        "fr": "Mâles : 117 à 140 cm au garrot, environ 235 kg. Les femelles sont un peu plus petites, environ 220 kg. Tête et corps : 190 à 255 cm ; queue : 40 à 75 cm."
      },
      "lifespan": {
        "en": "About 19 years in the wild and 22 in captivity.",
        "fr": "Environ 19 ans à l’état sauvage et 22 en captivité."
      },
      "behavior": {
        "en": "Active by day, less in the heat. Herds of 10–30 females and calves led by one adult male. Young males are driven out at about 3 years and form bachelor groups of up to 12. When threatened, even by lions, it turns and fights and can impale attackers with its horns.",
        "fr": "Actif de jour, moins aux heures chaudes. Troupeaux de 10 à 30 femelles et jeunes menés par un mâle adulte. Les jeunes mâles sont chassés vers 3 ans et forment des groupes de célibataires allant jusqu’à 12. Menacé, même par des lions, il fait face et peut empaler ses agresseurs avec ses cornes."
      },
      "recognize": {
        "en": "A compact, robust antelope with a thick neck and an upright neck mane. White underparts, cheek and chin contrast with the dark back and flanks. Long white hairs below the eyes and a broad black stripe over the nose. Both sexes have long, ringed horns arching backwards.",
        "fr": "Une antilope compacte et robuste, au cou épais et à la crinière dressée. Le ventre, la joue et le menton blancs contrastent avec le dos et les flancs sombres. De longs poils blancs sous les yeux et une large bande noire sur le nez. Les deux sexes portent de longues cornes annelées recourbées vers l’arrière."
      },
      "male": {
        "en": "Heavier and about one-fifth taller. Turns black after about 3 years. Horns 81–165 cm.",
        "fr": "Plus lourd et environ un cinquième plus grand. Devient noir après environ 3 ans. Cornes de 81 à 165 cm."
      },
      "female": {
        "en": "Chestnut to dark brown (southern females brown to black). Horns 61–102 cm.",
        "fr": "Châtain à brun foncé (les femelles du sud : brun à noir). Cornes de 61 à 102 cm."
      },
      "safety": {
        "en": "Dangerous if cornered or wounded: its horns can kill predators. Watch from the vehicle and never approach on foot (general knowledge, based on its fighting behaviour above).",
        "fr": "Dangereux s’il est acculé ou blessé : ses cornes peuvent tuer des prédateurs. Observez-le depuis le véhicule et ne vous approchez jamais à pied (connaissance générale, d’après son comportement de combat décrit ci-dessus)."
      }
    },

    roan: {
      "img": "animal-roan.jpg",
      "name": {
        "en": "Roan antelope",
        "fr": "Antilope rouanne (hippotrague rouan)"
      },
      "sci": "Hippotragus equinus",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2017 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2017, citée par Wikipédia)"
      },
      "statusSrc": [
        "s163",
        "s170"
      ],
      "global": {
        "pop": {
          "en": "No global estimate in the source used.",
          "fr": "Aucune estimation mondiale dans la source utilisée."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s163"
        ]
      },
      "diet": {
        "en": "Grazer of mid-length grasses in savanna and grassland.",
        "fr": "Brouteur d’herbes de hauteur moyenne dans la savane et les prairies."
      },
      "size": {
        "en": "About 130–160 cm at the shoulder and 223–320 kg (Wikipedia gives two slightly different sets of figures).",
        "fr": "Environ 130 à 160 cm au garrot et 223 à 320 kg (Wikipédia donne deux séries de chiffres légèrement différentes)."
      },
      "lifespan": {
        "en": "Not stated in the source used.",
        "fr": "Non précisée dans la source utilisée."
      },
      "behavior": {
        "en": "Lives in small harem groups of 5–15 animals led by one dominant male. It can hybridise with sable antelope where their ranges overlap.",
        "fr": "Vit en petits groupes de 5 à 15 animaux menés par un mâle dominant. Il peut s’hybrider avec l’antilope noire là où leurs aires se recoupent."
      },
      "recognize": {
        "en": "A large antelope with a reddish, sandy-brown coat and lighter underbelly. Mostly white face with a black mask around the eyes and nose, a short erect mane, long donkey-like ears, and ringed horns arching backwards.",
        "fr": "Une grande antilope au pelage brun sableux rougeâtre et au ventre plus clair. Face surtout blanche avec un masque noir autour des yeux et du nez, crinière courte dressée, longues oreilles d’âne et cornes annelées recourbées vers l’arrière."
      },
      "male": {
        "en": "Larger, with longer horns (up to 100 cm), a more marked mane and neck beard.",
        "fr": "Plus grand, avec des cornes plus longues (jusqu’à 100 cm), une crinière et une barbe plus marquées."
      },
      "female": {
        "en": "Smaller; her facial mask is somewhat lighter.",
        "fr": "Plus petite ; son masque facial est un peu plus clair."
      },
      "safety": {
        "en": "Large, horned and can be aggressive when cornered or wounded (general knowledge). Watch from the vehicle and never approach on foot.",
        "fr": "Grande et cornue, elle peut être agressive si elle est acculée ou blessée (connaissance générale). Observez-la depuis le véhicule et ne vous approchez jamais à pied."
      }
    },

    brownhyena: {
      "img": "animal-brownhyena.jpg",
      "name": {
        "en": "Brown hyena",
        "fr": "Hyène brune"
      },
      "sci": "Parahyaena brunnea",
      "status": "NT",
      "statusAsOf": {
        "en": "IUCN Red List: Near Threatened (2015 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : quasi menacée (évaluation de 2015, citée par Wikipédia)"
      },
      "statusSrc": [
        "s171"
      ],
      "global": {
        "pop": {
          "en": "Estimated at 4,000 to 10,000 individuals worldwide.",
          "fr": "Estimée entre 4 000 et 10 000 individus dans le monde."
        },
        "trend": {
          "en": "Not stated",
          "fr": "Non précisée"
        },
        "asOf": {
          "en": "Wikipedia, read Nov 2026 (IUCN 2015 assessment)",
          "fr": "Wikipédia, consultée en nov. 2026 (évaluation UICN 2015)"
        },
        "src": [
          "s171"
        ]
      },
      "diet": {
        "en": "Mainly a scavenger: eats carcasses left by bigger predators. Also rodents, small birds, insects, eggs and wild melons. Often steals kills from jackals, cheetahs and leopards.",
        "fr": "Surtout charognard : mange les carcasses laissées par de plus grands prédateurs. Aussi des rongeurs, de petits oiseaux, des insectes, des œufs et des melons sauvages. Vole souvent les proies des chacals, guépards et léopards."
      },
      "size": {
        "en": "70–80 cm at the shoulder; body about 130–160 cm; males about 40–44 kg, females about 38–40 kg.",
        "fr": "70 à 80 cm au garrot ; corps d’environ 130 à 160 cm ; mâles d’environ 40 à 44 kg, femelles d’environ 38 à 40 kg."
      },
      "lifespan": {
        "en": "Not stated in the source used.",
        "fr": "Non précisée dans la source utilisée."
      },
      "behavior": {
        "en": "Lives in stable clans of four to six related animals led by a mated pair. Mostly active at night. Marks its territory with a black-and-white paste on plants and rocks. Hides spare food and comes back for it within 24 hours.",
        "fr": "Vit en clans stables de quatre à six animaux apparentés, menés par un couple. Surtout actif la nuit. Marque son territoire avec une pâte noire et blanche sur les plantes et les rochers. Cache l’excédent de nourriture et revient le chercher en moins de 24 heures."
      },
      "recognize": {
        "en": "A hyena with a long, shaggy dark brown coat, pointed ears and a short tail. Its legs are striped brown and white, and adults have a cream-coloured ruff around the neck.",
        "fr": "Une hyène au long pelage hirsute brun foncé, aux oreilles pointues et à la queue courte. Ses pattes sont rayées de brun et de blanc, et l’adulte porte une collerette crème autour du cou."
      },
      "noDiff": {
        "en": "No big difference between the sexes; males may be slightly larger.",
        "fr": "Pas de grande différence entre les sexes ; les mâles sont peut-être un peu plus grands."
      },
      "safety": {
        "en": "Shy and mostly nocturnal, so a sighting is unlikely. Always stay in your vehicle, never feed or approach wild animals. (General guidance, not official.)",
        "fr": "Timide et surtout nocturne : l’observer est peu probable. Restez toujours dans votre véhicule, ne nourrissez ni n’approchez jamais les animaux sauvages. (Conseil général, non officiel.)"
      }
    },

    okapi: {
      "img": "animal-okapi.jpg",
      "name": {
        "en": "Okapi",
        "fr": "Okapi"
      },
      "sci": "Okapia johnstoni",
      "status": "EN",
      "statusAsOf": {
        "en": "IUCN Red List: Endangered (2015 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : en danger (évaluation de 2015, citée par Wikipédia)"
      },
      "statusSrc": [
        "s172"
      ],
      "global": {
        "pop": {
          "en": "No total population figure in the source used. Typical density about 0.6 animals per km².",
          "fr": "Aucun chiffre de population totale dans la source utilisée. Densité habituelle d’environ 0,6 animal par km²."
        },
        "trend": {
          "en": "Decreasing (a steady decline, due to habitat loss, bushmeat and skin hunting, and illegal mining)",
          "fr": "En baisse (déclin continu, dû à la perte d’habitat, à la chasse pour la viande et la peau, et à l’exploitation minière illégale)"
        },
        "asOf": {
          "en": "Wikipedia, read Nov 2026 (IUCN 2015 assessment)",
          "fr": "Wikipédia, consultée en nov. 2026 (évaluation UICN 2015)"
        },
        "src": [
          "s172"
        ]
      },
      "diet": {
        "en": "Herbivore: browses leaves, buds, branches, grasses, ferns, fruit and fungi. Eats over 100 plant species, mostly woody plants, shrubs and lianas.",
        "fr": "Herbivore : broute feuilles, bourgeons, branches, herbes, fougères, fruits et champignons. Mange plus de 100 espèces de plantes, surtout des plantes ligneuses, arbustes et lianes."
      },
      "size": {
        "en": "About 1.5 m at the shoulder; body about 2.5 m long; 200–350 kg.",
        "fr": "Environ 1,5 m au garrot ; corps d’environ 2,5 m de long ; 200 à 350 kg."
      },
      "lifespan": {
        "en": "Typically 20–30 years.",
        "fr": "Généralement 20 à 30 ans."
      },
      "behavior": {
        "en": "Essentially solitary, meeting only to breed. Mostly active by day. Males defend a territory and mark bushes with urine. The leopard is its main natural predator.",
        "fr": "Essentiellement solitaire, ne se rencontre que pour se reproduire. Surtout actif de jour. Les mâles défendent un territoire et marquent les buissons avec leur urine. Le léopard est son principal prédateur naturel."
      },
      "recognize": {
        "en": "A giraffe relative with a chocolate-to-reddish-brown coat, white horizontal stripes on the legs, white ankles, a greyish-white face, a long neck, large ears and a long black tongue.",
        "fr": "Un cousin de la girafe au pelage brun chocolat à roux, aux rayures blanches horizontales sur les pattes, aux paturons blancs, au visage blanc grisâtre, au long cou, aux grandes oreilles et à la longue langue noire."
      },
      "male": {
        "en": "Has short, hair-covered ossicones (horn-like knobs), under 15 cm. Roams widely (home range about 13 km²).",
        "fr": "Porte de courts ossicônes recouverts de poils (excroissances en forme de cornes), de moins de 15 cm. Se déplace beaucoup (domaine vital d’environ 13 km²)."
      },
      "female": {
        "en": "Has no ossicones, only hair whorls. About 4 cm taller on average and slightly redder. Stays in a small range (about 3–5 km²).",
        "fr": "N’a pas d’ossicônes, seulement des épis de poils. Environ 4 cm plus grande en moyenne et un peu plus rousse. Reste dans un petit domaine (environ 3 à 5 km²)."
      },
      "safety": {
        "en": "Not found in Kruger or anywhere near it. Generally calm, but can kick and head-butt if it feels threatened.",
        "fr": "Absent du Kruger et de sa région. Généralement calme, mais peut donner des coups de pied et de tête s’il se sent menacé."
      }
    },

    ostrich: {
      "img": "animal-ostrich.jpg",
      "name": {
        "en": "Common ostrich",
        "fr": "Autruche d’Afrique"
      },
      "sci": "Struthio camelus",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2018 assessment, as cited by Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2018, citée par Wikipédia)"
      },
      "statusSrc": [
        "s175",
        "s177"
      ],
      "global": {
        "pop": {
          "en": "About 300,000 to 900,000 individuals (estimate quoted by Wikipedia). Wikipedia also says the wild population has fallen sharply over the last 200 years and that most survivors live in reserves or on farms.",
          "fr": "Environ 300 000 à 900 000 individus (estimation citée par Wikipédia). Wikipédia ajoute que la population sauvage a fortement baissé ces 200 dernières années et que la plupart des survivants vivent en réserve ou en élevage."
        },
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s175",
          "s177"
        ]
      },
      "diet": {
        "en": "Mostly plants: seeds, shrubs, grass, fruit and flowers, plus occasional insects such as locusts. Swallows pebbles to grind its food and can go several days without drinking.",
        "fr": "Surtout des végétaux : graines, arbustes, herbe, fruits et fleurs, plus parfois des insectes comme les criquets. Avale des cailloux pour broyer sa nourriture et peut rester plusieurs jours sans boire."
      },
      "size": {
        "en": "Males 2.1–2.8 m tall, females 1.7–2.0 m; typically 63–145 kg. The largest living bird. Wingspan: not stated in our sources (it cannot fly).",
        "fr": "Mâles de 2,1 à 2,8 m, femelles de 1,7 à 2,0 m ; en général 63 à 145 kg. Le plus grand oiseau vivant. Envergure : non précisée dans nos sources (il ne vole pas)."
      },
      "lifespan": {
        "en": "Up to 40–45 years in the wild; a captive bird lived 62 years (Wikipedia). Animal Diversity Web gives about 50 years in captivity.",
        "fr": "Jusqu’à 40 à 45 ans à l’état sauvage ; un oiseau captif a vécu 62 ans (Wikipédia). Animal Diversity Web indique environ 50 ans en captivité."
      },
      "behavior": {
        "en": "Lives in flocks of 5 to 50 and often mixes with antelope and zebras. Runs about 55 km/h for a long time, with bursts near 70 km/h. Flees or lies flat when threatened; kicks if cornered. Males defend territories and groups of hens.",
        "fr": "Vit en groupes de 5 à 50 et se mêle souvent aux antilopes et aux zèbres. Court à environ 55 km/h longtemps, avec des pointes vers 70 km/h. Fuit ou s’aplatit au sol face à une menace ; rue s’il est acculé. Les mâles défendent un territoire et un groupe de femelles."
      },
      "recognize": {
        "en": "A huge flightless bird with a long bare neck, long bare legs, only two toes per foot, very large eyes and a small head.",
        "fr": "Un énorme oiseau qui ne vole pas, au long cou nu, aux longues pattes nues, avec seulement deux doigts par pied, de très grands yeux et une petite tête."
      },
      "male": {
        "en": "Mostly black with white wing feathers and a white tail (one subspecies has a buff tail); taller; legs red in some, per Wikipedia.",
        "fr": "Surtout noir avec des plumes d’aile blanches et une queue blanche (une sous-espèce a la queue beige) ; plus grand ; pattes rouges selon Wikipédia."
      },
      "female": {
        "en": "Greyish-brown and white; smaller; pinkish-grey neck skin and black legs, per Wikipedia. Young males look like females.",
        "fr": "Brun grisâtre et blanc ; plus petite ; peau du cou gris rosé et pattes noires, selon Wikipédia. Les jeunes mâles ressemblent aux femelles."
      },
      "safety": {
        "en": "Can be dangerous: a cornered or nesting ostrich kicks hard with clawed feet and can kill (a study estimated 2–3 serious or fatal attacks a year near Oudtshoorn, South Africa). Stay in your vehicle and never approach on foot.",
        "fr": "Peut être dangereuse : une autruche acculée ou qui protège son nid rue avec force avec ses griffes et peut tuer (une étude estime 2 à 3 attaques graves ou mortelles par an près d’Oudtshoorn, Afrique du Sud). Restez dans votre véhicule et ne vous approchez jamais à pied."
      }
    },

    flamingo: {
      "img": "animal-flamingo.jpg",
      "name": {
        "en": "Greater flamingo",
        "fr": "Flamant rose"
      },
      "sci": "Phoenicopterus roseus",
      "status": "LC",
      "statusAsOf": {
        "en": "IUCN Red List: Least Concern (2019 assessment cited on Wikipedia)",
        "fr": "Liste rouge UICN : préoccupation mineure (évaluation de 2019 citée sur Wikipédia)"
      },
      "statusSrc": [
        "s180",
        "s181"
      ],
      "global": {
        "pop": {
          "en": "About 550,000–680,000 individuals (Wikipedia list; this is a total for the species, not an African-only figure; no separate African estimate in the sources used).",
          "fr": "Environ 550 000 à 680 000 individus (liste Wikipédia ; total pour l’espèce, pas un chiffre propre à l’Afrique ; pas d’estimation africaine distincte dans les sources utilisées)."
        },
        "trend": {
          "en": "Increasing",
          "fr": "En hausse"
        },
        "asOf": {
          "en": "read Nov 2026",
          "fr": "consultée en nov. 2026"
        },
        "src": [
          "s181"
        ]
      },
      "diet": {
        "en": "Stirs up mud with its feet and filters food through its bill, head down: small shrimps, brine shrimp and other crustaceans, seeds, blue-green algae, diatoms, insect larvae and molluscs.",
        "fr": "Remue la vase avec ses pattes et filtre sa nourriture avec le bec, la tête en bas : petites crevettes, artémias et autres crustacés, graines, algues bleu-vert, diatomées, larves d’insectes et mollusques."
      },
      "size": {
        "en": "110–150 cm tall; 2–4 kg (Wikipedia). Another site gives a wingspan of about 152 cm (SA-Venues, not verified elsewhere).",
        "fr": "110 à 150 cm de haut ; 2 à 4 kg (Wikipédia). Un autre site indique une envergure d’environ 152 cm (SA-Venues, non recoupé)."
      },
      "lifespan": {
        "en": "Wikipedia: 30–40 years on average in the wild; over 60 years in captivity.",
        "fr": "Wikipédia : 30 à 40 ans en moyenne à l’état sauvage ; plus de 60 ans en captivité."
      },
      "behavior": {
        "en": "Lives on mudflats and shallow saltwater lagoons. Courtship displays take place in large mixed groups. Lays a single egg on a mud mound. Has a goose-like honking call.",
        "fr": "Vit sur les vasières et dans les lagunes salées peu profondes. Les parades nuptiales se font en grands groupes mixtes. Pond un seul œuf sur un monticule de boue. Son cri ressemble à un cacardement d’oie."
      },
      "recognize": {
        "en": "Mostly pinkish-white, with red wing patches, black flight feathers, a pink bill with a black tip and entirely pink legs. It is the largest flamingo. Young birds are greyish.",
        "fr": "Surtout blanc rosé, avec des taches rouges sur les ailes, des plumes de vol noires, un bec rose à pointe noire et des pattes entièrement roses. C’est le plus grand des flamants. Les jeunes sont grisâtres."
      },
      "noDiff": {
        "en": "Our source does not describe visible differences between male and female.",
        "fr": "Notre source ne décrit pas de différence visible entre mâle et femelle."
      },
      "safety": {
        "en": "Harmless to visitors. Do not disturb flocks or walk toward them; in Kruger, stay in your vehicle.",
        "fr": "Sans danger pour les visiteurs. Ne dérangez pas les groupes et n’avancez pas vers eux ; au Kruger, restez dans votre véhicule."
      }
    },
    pythons: {"img": "animal-sebapython.jpg", "name": {"en": "Pythons of Africa (and look-alikes)", "fr": "Pythons d'Afrique (et assimilés)"}, "sci": "Python spp. (Pythonidae) + Calabaria reinhardtii (Boidae)", "statusAsOf": {"en": "Python sebae: NT (2021); Python natalensis: LC (2021); Python regius: NT (2021, amended 2022); Python anchietae: LC (2021); Calabaria reinhardtii: LC (2021). Years are those cited by Wikipedia from the IUCN Red List; the Reptile Database lists P. sebae-group status differently for some species (see note).", "fr": "Python sebae : NT (2021) ; Python natalensis : LC (2021) ; Python regius : NT (2021, amendée en 2022) ; Python anchietae : LC (2021) ; Calabaria reinhardtii : LC (2021). Les années sont celles citées par Wikipédia d'après la Liste rouge UICN ; la Reptile Database indique LC pour P. regius (écart signalé)."}, "statusSrc": ["s190", "s191", "s192", "s193", "s194", "s189"], "global": {"pop": {"en": "Not found in the sources used", "fr": "Non trouvé dans les sources utilisées"}, "trend": {"en": "Declining for the ball python in most of West Africa, and West African Python sebae populations reportedly fell by more than 60% over three generations (Wikipedia, secondary source). Trend not found for the other types.", "fr": "En déclin pour le python royal dans la majeure partie de l'Afrique de l'Ouest, et les populations ouest-africaines de Python sebae auraient chuté de plus de 60 % sur trois générations (Wikipédia, source secondaire). Tendance non trouvée pour les autres types."}, "asOf": {"en": "IUCN assessments 2021 (ball python amended 2022)", "fr": "Évaluations UICN 2021 (python royal amendée en 2022)"}, "src": ["s191", "s192"]}, "diet": {"en": "Carnivores. Large species take mammals up to antelope-size, and occasionally crocodiles or fish (P. sebae, per Animal Diversity Web); small species eat small mammals and birds (P. anchietae).", "fr": "Carnivores. Les grandes espèces prennent des mammifères jusqu'à la taille d'une antilope, parfois des crocodiles ou des poissons (P. sebae, d'après Animal Diversity Web) ; les petites mangent de petits mammifères et des oiseaux (P. anchietae)."}, "size": {"en": "From about 1 m (Calabar python) and 1.8 m (ball python, Angolan python) to 3-5 m or more (African rock pythons).", "fr": "De 1 m environ (python de Calabar) et 1,8 m (python royal, python d'Angola) à 3-5 m ou plus (pythons de roche africains)."}, "lifespan": {"en": "Up to 30 years in captivity for P. sebae (Animal Diversity Web). Not found for the other types.", "fr": "Jusqu'à 30 ans en captivité pour P. sebae (Animal Diversity Web). Non trouvé pour les autres types."}, "behavior": {"en": "Mostly nocturnal ambush hunters; rock pythons climb well and like water. The ball python coils into a tight ball when threatened rather than biting; the Calabar python burrows in loose forest soil.", "fr": "Surtout nocturnes et chasseurs à l'affût ; les pythons de roche grimpent bien et aiment l'eau. Le python royal s'enroule en boule quand il est menacé plutôt que de mordre ; le python de Calabar s'enfouit dans le sol meuble de la forêt."}, "recognize": {"en": "Heavy-bodied, non-venomous constrictors with small smooth scales, a triangular head and heat-sensitive pits along the lips (all except the Calabar python, which has no labial pits). Blotched brown patterns on a pale belly.", "fr": "Constricteurs trapus, non venimeux, aux petites écailles lisses, à tête triangulaire et à fossettes thermosensibles le long des lèvres (sauf le python de Calabar, qui n'en a pas). Motifs bruns en taches sur un ventre clair."}, "howto": {"en": "Start with size and location. Over 3 m with a spear-head mark on the head = an African rock python: Python sebae in West, Central and East Africa, Python natalensis in southern Africa (Kruger, Zimbabwe, Mozambique...). These two are hard to separate on a photo alone: natalensis is on average smaller, drabber, with duller head stripes and smaller head scales, but the reliable clue is where the animal was seen. Under about 1.8 m: a stocky dark snake with light blotches that balls up is the ball python (West/Central Africa); a rocky-outcrop snake of southern Angola/northern Namibia with white-cream bands is Python anchietae; a roughly 1 m, dark, blunt-headed and blunt-tailed snake speckled red/yellow, found in rainforest, is the Calabar python (not a true python).", "fr": "Commencez par la taille et le lieu. Plus de 3 m avec une marque en fer de lance sur la tête = python de roche africain : Python sebae en Afrique de l'Ouest, centrale et de l'Est, Python natalensis en Afrique australe (Kruger, Zimbabwe, Mozambique...). Ces deux-là sont difficiles à séparer sur une simple photo : natalensis est en moyenne plus petit, plus terne, avec des bandes de tête plus ternes et des écailles de tête plus petites, mais l'indice fiable reste le lieu d'observation. Sous 1,8 m environ : un serpent trapu, sombre à taches claires, qui s'enroule en boule est le python royal (Afrique de l'Ouest/centrale) ; un serpent d'affleurements rocheux du sud de l'Angola/nord de la Namibie, à bandes blanc crème, est Python anchietae ; un serpent d'environ 1 m, sombre, à tête et queue émoussées, moucheté de rouge/jaune, de forêt tropicale, est le python de Calabar (pas un vrai python)."}, "safety": {"en": "None is venomous. Large rock pythons can bite hard and constrict; keep distance and never handle them. Ball pythons are docile.", "fr": "Aucun n'est venimeux. Les grands pythons de roche peuvent mordre fort et constricter : gardez vos distances, ne les manipulez jamais. Les pythons royaux sont dociles."}, "types": [{"name": {"en": "African rock python (Central/Northern)", "fr": "Python de Seba"}, "fiche": "sebapython", "sci": "Python sebae", "status": "NT", "statusYear": "2021", "where": {"en": "Tropical sub-Saharan Africa: from Senegal east to Ethiopia and Somalia, south to northern Angola and northern Tanzania (also Gambia, Sierra Leone, Nigeria, Côte d'Ivoire, Kenya).", "fr": "Afrique subsaharienne tropicale : du Sénégal à l'Éthiopie et la Somalie, au sud jusqu'au nord de l'Angola et de la Tanzanie (aussi Gambie, Sierra Leone, Nigeria, Côte d'Ivoire, Kenya)."}, "size": {"en": "Typically 3-3.5 m, rarely over 4.8 m; reports over 6 m considered reliable. Typically 55-65 kg.", "fr": "Typiquement 3-3,5 m, rarement plus de 4,8 m ; des mentions de plus de 6 m sont jugées fiables. Typiquement 55-65 kg."}, "tell": {"en": "Spear-head mark outlined in yellow; two prominent light lines from nose over the eye to the back of the head; considerably larger head scales and a yellow stripe at eye level, compared with P. natalensis.", "fr": "Marque en fer de lance bordée de jaune ; deux lignes claires bien nettes du nez à l'arrière de la tête en passant par l'œil ; écailles de tête nettement plus grandes et bande jaune au niveau de l'œil, comparé à P. natalensis."}, "inKruger": false, "src": ["s191", "s197"]}, {"name": {"en": "Southern African rock python", "fr": "Python de roche d'Afrique australe"}, "fiche": "sebapython", "sci": "Python natalensis", "status": "LC", "statusYear": "2021", "where": {"en": "Botswana, southern Angola, SE/E DR Congo, Zambia, Malawi, Burundi, Tanzania, central Kenya, northern Namibia, South Africa, Mozambique, Zimbabwe, Eswatini. In South Africa mainly the Lowveld, KZN south coast and Limpopo valley; considered extinct in the Eastern Cape since 1927.", "fr": "Botswana, sud de l'Angola, sud-est/est de la RD Congo, Zambie, Malawi, Burundi, Tanzanie, centre du Kenya, nord de la Namibie, Afrique du Sud, Mozambique, Zimbabwe, Eswatini. En Afrique du Sud surtout le Lowveld, la côte sud du KwaZulu-Natal et la vallée du Limpopo ; considéré éteint dans l'Eastern Cape depuis 1927."}, "size": {"en": "Average 2.8-4 m; females to about 5 m and 55 kg, males to 4.25 m and 44 kg; largest snake in southern Africa.", "fr": "Moyenne de 2,8-4 m ; femelles jusqu'à environ 5 m et 55 kg, mâles jusqu'à 4,25 m et 44 kg ; plus grand serpent d'Afrique australe."}, "tell": {"en": "Drabber than P. sebae; narrower, paler dark patch beside the eye (looks like a dark stripe); duller light head lines; smaller head scales; usually smaller. Arrow-shaped mark on the crown. Identification on a photo is difficult; location is the main clue.", "fr": "Plus terne que P. sebae ; tache sombre près de l'œil plus étroite et plus pâle (ressemble à une bande sombre) ; lignes claires de la tête plus ternes ; écailles de tête plus petites ; en général plus petit. Marque en flèche sur le dessus de la tête. L'identification sur photo est difficile ; le lieu est l'indice principal."}, "inKruger": true, "src": ["s186", "s190", "s196", "s198", "s199"]}, {"name": {"en": "Ball python / Royal python", "fr": "Python royal"}, "sci": "Python regius", "status": "NT", "statusYear": "2021", "where": {"en": "West and Central Africa, from Senegal through Cameroon to Sudan/Uganda (Reptile Database also lists Gambia, Guinea-Bissau, Guinea, Sierra Leone, Côte d'Ivoire, Ghana, Togo, Benin, Burkina Faso, Mali, Nigeria, CAR, DR Congo, South Sudan).", "fr": "Afrique de l'Ouest et centrale, du Sénégal au Cameroun jusqu'au Soudan/Ouganda (la Reptile Database cite aussi Gambie, Guinée-Bissau, Guinée, Sierra Leone, Côte d'Ivoire, Ghana, Togo, Bénin, Burkina Faso, Mali, Nigeria, RCA, RD Congo, Soudan du Sud)."}, "size": {"en": "Maximum 182 cm; smallest of the African pythons. Females average 116 cm snout-to-vent.", "fr": "Maximum 182 cm ; le plus petit des pythons africains. Les femelles font en moyenne 116 cm (museau-cloaque)."}, "tell": {"en": "Stocky, dark brown with light brown blotches on back and sides; white/cream belly with black marks; small head; coils into a tight ball when threatened. Small size.", "fr": "Trapu, brun foncé à taches brun clair sur le dos et les flancs ; ventre blanc/crème marqué de noir ; petite tête ; s'enroule en boule serrée quand il est menacé. Petite taille."}, "inKruger": false, "src": ["s189", "s192"]}, {"name": {"en": "Angolan python / Anchieta's dwarf python", "fr": "Python d'Angola"}, "sci": "Python anchietae", "status": "LC", "statusYear": "2021", "where": {"en": "Southern Angola and northern Namibia, on rocky outcrops in open brush or grassland.", "fr": "Sud de l'Angola et nord de la Namibie, sur des affleurements rocheux en brousse ouverte ou prairie."}, "size": {"en": "Up to about 183 cm total length.", "fr": "Jusqu'à environ 183 cm de longueur totale."}, "tell": {"en": "Reddish-brown to almost black with irregular white/cream bands and spots; yellowish belly; the only python with bead-like head scales; diurnal, hides in crevices.", "fr": "Brun-rouge à presque noir avec des bandes et taches irrégulières blanches ou crème ; ventre jaunâtre ; seul python aux écailles de tête en perles ; diurne, se cache dans les crevasses."}, "inKruger": false, "src": ["s187", "s193"]}, {"name": {"en": "Calabar python / Calabar ground boa", "fr": "Python de Calabar (boa de Calabar)"}, "sci": "Calabaria reinhardtii", "status": "LC", "statusYear": "2021", "where": {"en": "West and Central African rainforest: Liberia, Sierra Leone, Cameroon (incl. Bioko), CAR, Gabon, Congo, DR Congo, Angola (Cabinda only); Reptile Database also lists Ivory Coast, Ghana, Togo, Nigeria, Guinea, Benin, Equatorial Guinea.", "fr": "Forêt tropicale d'Afrique de l'Ouest et centrale : Liberia, Sierra Leone, Cameroun (dont Bioko), RCA, Gabon, Congo, RD Congo, Angola (Cabinda seulement) ; la Reptile Database cite aussi Côte d'Ivoire, Ghana, Togo, Nigeria, Guinée, Bénin, Guinée équatoriale."}, "size": {"en": "Up to about 1 m total length.", "fr": "Jusqu'à environ 1 m de longueur totale."}, "tell": {"en": "Not a true python (family Boidae, not Pythonidae). Cylindrical body, dark brown/black speckled red, yellow or grey; blunt head and blunt tail that look alike; no labial heat pits; small dark eyes; burrows in forest litter.", "fr": "Pas un vrai python (famille des Boidae, non des Pythonidae). Corps cylindrique, brun foncé/noir moucheté de rouge, jaune ou gris ; tête et queue émoussées et semblables ; pas de fossettes thermosensibles labiales ; petits yeux sombres ; vit enfoui dans la litière forestière."}, "inKruger": false, "src": ["s188", "s194"]}], "group": true, "status": "VAR"},
    baboons: {"img": "animal-baboon.jpg", "name": {"en": "Baboons", "fr": "Babouins"}, "sci": "Papio (6 species)", "statusAsOf": {"en": "Guinea baboon NT (2008); hamadryas LC (year not found); olive LC (2020); yellow LC (2020); kinda LC (2021); chacma LC (2019). Years are those of the IUCN assessments cited by Wikipedia.", "fr": "Babouin de Guinée NT (2008) ; hamadryas LC (année non trouvée) ; olive LC (2020) ; jaune LC (2020) ; kinda LC (2021) ; chacma LC (2019). Les années sont celles des évaluations UICN citées par Wikipédia."}, "statusSrc": ["s200", "s201", "s202", "s203", "s205", "s206", "s207", "s208"], "global": {"pop": {"en": "Not found in the sources used", "fr": "Non trouvé dans les sources utilisées"}, "trend": {"en": "Per Wikiwand: guinea declining, hamadryas increasing, olive stable, yellow stable, kinda stable, chacma declining.", "fr": "Selon Wikiwand : Guinée en déclin, hamadryas en augmentation, olive stable, jaune stable, kinda stable, chacma en déclin."}, "asOf": {"en": "Wikiwand page, read Nov 2026 (no date given for the trends)", "fr": "Page Wikiwand consultée en nov. 2026 (pas de date pour les tendances)"}, "src": ["s211"]}, "diet": {"en": "Not found in the sources used", "fr": "Non trouvé dans les sources utilisées"}, "lifespan": {"en": "Not found in the sources used", "fr": "Non trouvé dans les sources utilisées"}, "size": {"en": "Females of all species about 10–15 kg, males much larger; overall weights about 10–31 kg (ADW). Size difference between sexes is greatest in hamadryas and chacma.", "fr": "Femelles de toutes les espèces d'environ 10–15 kg, mâles bien plus grands ; poids global d'environ 10–31 kg (ADW). Le dimorphisme est le plus marqué chez l'hamadryas et le chacma."}, "behavior": {"en": "Hamadryas males keep stable one-male units; anubis males herd females mainly in estrus (ADW).", "fr": "Les mâles hamadryas gardent des harems stables ; les mâles anubis rassemblent les femelles surtout en œstrus (ADW)."}, "recognize": {"en": "Large ground-living monkeys with a long dog-like muzzle, a hairless face, close-set eyes, fused ischial callosities in males, and a conspicuous red swelling on the female rump. Genus Papio. The gelada (Theropithecus) and the mandrill (Mandrillus) are not Papio: the mandrill was once classed as a baboon but is now closer to the mangabeys (Cercocebus), and the gelada has its own genus.", "fr": "Grands singes terrestres au long museau de chien, face glabre, yeux rapprochés, callosités ischiatiques soudées chez les mâles et grosse tuméfaction rouge de la croupe des femelles. Genre Papio. Le gélada (Theropithecus) et le mandrill (Mandrillus) ne sont pas des Papio : le mandrill fut classé parmi les babouins mais est plus proche des mangabeys (Cercocebus), et le gélada a son propre genre."}, "howto": {"en": "Location is the best clue, since the six species mostly occupy separate regions: guinea in West Africa, hamadryas in the Horn of Africa and Arabia, olive across a belt from Mali to Ethiopia and Tanzania, yellow in East Africa, kinda in the Angola/DR Congo/Zambia woodlands, chacma in southern Africa (including Kruger). Then check looks: hamadryas males have a silvery mane, guinea is reddish, kinda is small and golden, yellow is yellowish-brown with white sideburns, olive is green-grey, chacma is dark with a long sloping face and no mane. Where ranges meet they hybridize (olive x hamadryas along the Awash River in Ethiopia, olive x yellow, kinda x chacma in Kafue National Park, kinda x yellow in northeastern Zambia), so animals there can look intermediate.", "fr": "La localisation est le meilleur indice, car les six espèces occupent surtout des régions distinctes : Guinée en Afrique de l'Ouest, hamadryas dans la Corne de l'Afrique et en Arabie, olive sur une bande du Mali à l'Éthiopie et la Tanzanie, jaune en Afrique de l'Est, kinda dans les forêts claires d'Angola, RD Congo et Zambie, chacma en Afrique australe (dont le Kruger). Ensuite, observez l'aspect : le mâle hamadryas a une crinière argentée, le Guinée est roussâtre, le kinda est petit et doré, le jaune est brun jaunâtre à favoris blancs, l'olive est vert-gris, le chacma est sombre, à longue face inclinée et sans crinière. Là où les aires se touchent, ils s'hybrident (olive x hamadryas le long de l'Awash en Éthiopie, olive x jaune, kinda x chacma dans le parc national de Kafue, kinda x jaune dans le nord-est de la Zambie) : les individus peuvent alors paraître intermédiaires."}, "safety": {"en": "Not found in the sources used", "fr": "Non trouvé dans les sources utilisées"}, "types": [{"name": {"en": "Guinea baboon", "fr": "Babouin de Guinée"}, "sci": "Papio papio", "status": "NT", "statusYear": "2008", "where": {"en": "West Africa: Senegal, Gambia, Guinea, Guinea-Bissau, Sierra Leone, Mali, Mauritania.", "fr": "Afrique de l'Ouest : Sénégal, Gambie, Guinée, Guinée-Bissau, Sierra Leone, Mali, Mauritanie."}, "size": {"en": "About 13–26 kg; one of the smallest baboons.", "fr": "Environ 13–26 kg ; l'un des plus petits babouins."}, "tell": {"en": "Reddish-brown coat (hence 'red baboon'), hairless dark violet to black face, small mane around head and shoulders, yellow-brown sideburns, tail carried in a round arc. Females have a pink rump.", "fr": "Pelage brun-roux (d'où « babouin rouge »), face glabre violet sombre à noire, petite crinière autour de la tête et des épaules, favoris brun-jaune, queue portée en arc arrondi. Les femelles ont la croupe rose."}, "inKruger": false, "src": ["s202", "s205"]}, {"name": {"en": "Hamadryas baboon", "fr": "Babouin hamadryas"}, "sci": "Papio hamadryas", "status": "LC", "statusYear": "", "where": {"en": "Horn of Africa and southwestern Arabian Peninsula: Djibouti, Eritrea, Ethiopia, Kenya, Somalia, Sudan, Saudi Arabia, Yemen.", "fr": "Corne de l'Afrique et sud-ouest de la péninsule Arabique : Djibouti, Érythrée, Éthiopie, Kenya, Somalie, Soudan, Arabie saoudite, Yémen."}, "size": {"en": "Males about 21.5 kg, females about 9.4 kg; head-body 610–762 mm, tail 382–610 mm.", "fr": "Mâles d'environ 21,5 kg, femelles d'environ 9,4 kg ; tête-corps 610–762 mm, queue 382–610 mm."}, "tell": {"en": "Males have grayish-brown fur with a bushy silver-white mane and cheek whiskers; females are plain olive-brown with a muted grayish-brown face. Both sexes have pink to bright red skin around the rump pads. Only baboon with a conspicuous silvery mane cape in males, and the only one living in Arabia.", "fr": "Les mâles ont un pelage gris-brun avec une crinière touffue argentée à blanche et des favoris ; les femelles sont brun olive uni avec une face gris-brun terne. Les deux sexes ont la peau rose à rouge vif autour des callosités. Seul babouin dont le mâle porte une ample crinière argentée, et seul vivant en Arabie."}, "inKruger": false, "src": ["s201", "s210", "s211"]}, {"name": {"en": "Olive baboon (anubis)", "fr": "Babouin olive (anubis)"}, "sci": "Papio anubis", "status": "LC", "statusYear": "2020", "where": {"en": "Native to 25 African countries, from Mali east to Ethiopia and Tanzania, with isolated populations in mountainous parts of the Sahara.", "fr": "Présent dans 25 pays africains, du Mali jusqu'à l'Éthiopie et la Tanzanie, avec des populations isolées dans des massifs du Sahara."}, "size": {"en": "Head-body 50–114 cm (average about 85 cm), tail 38–58 cm; males average 24 kg, females 14.7 kg.", "fr": "Tête-corps 50–114 cm (moyenne d'environ 85 cm), queue 38–58 cm ; mâles 24 kg en moyenne, femelles 14,7 kg."}, "tell": {"en": "Coat looks green-grey from afar (hairs ringed yellow-brown and black); face dark grey to black with coarser facial hair; males have a longer mane tapering along the back. Tail erect for its first quarter, then drops sharply.", "fr": "Pelage vert-gris de loin (poils annelés de brun-jaune et de noir) ; face gris foncé à noire avec des poils plus rudes ; mâles à crinière plus longue qui s'effile le long du dos. Queue dressée sur le premier quart puis retombant brusquement."}, "inKruger": false, "src": ["s206", "s209"]}, {"name": {"en": "Yellow baboon", "fr": "Babouin jaune"}, "sci": "Papio cynocephalus", "status": "LC", "statusYear": "2020", "where": {"en": "Eastern Africa, from Kenya and Tanzania to Zimbabwe and Botswana (the only countries named by the source).", "fr": "Afrique de l'Est, du Kenya et de la Tanzanie jusqu'au Zimbabwe et au Botswana (seuls pays cités par la source)."}, "size": {"en": "Males up to about 84 cm, females about 60 cm (body length); tail nearly as long as the body. Weight not given.", "fr": "Mâles jusqu'à environ 84 cm, femelles environ 60 cm (longueur du corps) ; queue presque aussi longue que le corps. Poids non donné."}, "tell": {"en": "Yellowish-brown coat on a slim body with long limbs; hairless black face framed by white sideburns.", "fr": "Pelage brun jaunâtre sur un corps svelte aux membres longs ; face glabre noire encadrée de favoris blancs."}, "inKruger": false, "src": ["s207"]}, {"name": {"en": "Kinda baboon", "fr": "Babouin kinda"}, "sci": "Papio kindae", "status": "LC", "statusYear": "2021", "where": {"en": "Angola, DR Congo, Zambia and Tanzania (western Tanzania possible per Wikipedia); lives in miombo woodland.", "fr": "Angola, RD Congo, Zambie et Tanzanie (ouest de la Tanzanie seulement possible selon Wikipédia) ; vit dans la forêt claire de miombo."}, "size": {"en": "Smallest of all baboons: adult males are about the size of females of other species. No length or weight figures found.", "fr": "Le plus petit des babouins : les mâles adultes sont à peu près de la taille des femelles des autres espèces. Pas de longueur ni de poids trouvés."}, "tell": {"en": "Golden coat, light lanky build, softer and slightly longer fur, shorter snout, pink circles around the eyes; infants are often born white rather than black.", "fr": "Pelage doré, silhouette légère et dégingandée, fourrure plus douce et un peu plus longue, museau plus court, cercles roses autour des yeux ; les petits naissent souvent blancs plutôt que noirs."}, "inKruger": false, "src": ["s203", "s208"]}, {"name": {"en": "Chacma baboon", "fr": "Babouin chacma"}, "fiche": "baboon", "sci": "Papio ursinus", "status": "LC", "statusYear": "2019", "where": {"en": "Southern Africa: South Africa, Botswana, Zimbabwe, Mozambique, Zambia, Namibia, Angola, plus Eswatini and Lesotho per MDD.", "fr": "Afrique australe : Afrique du Sud, Botswana, Zimbabwe, Mozambique, Zambie, Namibie, Angola, plus Eswatini et Lesotho selon la MDD."}, "size": {"en": "Head-body about 50–115 cm, tail 45–84 cm; males 21–45 kg (average 31.8 kg), females 12–25 kg (15.4 kg). Possibly the largest living monkey.", "fr": "Tête-corps d'environ 50–115 cm, queue 45–84 cm ; mâles 21–45 kg (moyenne 31,8 kg), femelles 12–25 kg (15,4 kg). Peut-être le plus grand singe actuel."}, "tell": {"en": "Dark brown to grey coat with rough hair on the nape; no mane in males; very long, downward-sloping face. Cape form is large and dark with black feet, gray-footed form lighter with grey feet.", "fr": "Pelage brun foncé à gris avec des poils rudes sur la nuque ; pas de crinière chez les mâles ; face très longue et inclinée vers le bas. La forme du Cap est grande et sombre aux pieds noirs, la forme à pieds gris est plus claire aux pieds gris."}, "inKruger": true, "src": ["s200", "s204", "s214"]}], "group": true, "status": "VAR"},
    gyps: {"img": "animal-whitebackedvulture.jpg", "name": {"en": "Gyps Vultures", "fr": "Vautours Gyps"}, "sci": "Gyps spp.", "statusAsOf": {"en": "Red List status of the Gyps vultures covered here: White-backed Vulture CR (2021), Rüppell's Vulture CR (2015 reassessment, per the sources read), Cape Vulture VU (2021, down from EN in 2015), Eurasian Griffon Vulture LC (2021).", "fr": "Statuts de la Liste rouge des vautours Gyps traités ici : vautour africain CR (2021), vautour de Rüppell CR (réévaluation de 2015, d'après les sources lues), vautour du Cap VU (2021, après EN en 2015), vautour fauve LC (2021)."}, "statusSrc": ["s216", "s217", "s218", "s219", "s222"], "global": {"pop": {"en": "White-backed Vulture: about 67,800 mature individuals globally (range about 43,000-117,000). Cape Vulture: 9,600-12,800 mature individuals. Rüppell's Vulture: about 22,000 individuals. Griffon Vulture: Spain alone about 30,946 breeding pairs (2018).", "fr": "Vautour africain : environ 67 800 individus matures dans le monde (fourchette d'environ 43 000 à 117 000). Vautour du Cap : 9 600 à 12 800 individus matures. Vautour de Rüppell : environ 22 000 individus. Vautour fauve : Espagne seule, environ 30 946 couples nicheurs (2018)."}, "trend": {"en": "Decreasing for the three African Gyps (mainly poisoning); the Griffon Vulture is Least Concern. A 2024 study reported an 86% fall for the White-backed Vulture.", "fr": "En déclin pour les trois Gyps africains (surtout à cause de l'empoisonnement) ; le vautour fauve est de préoccupation mineure. Une étude de 2024 rapporte un recul de 86 % pour le vautour africain."}, "asOf": {"en": "Figures from sources dated 2018 to 2025, read Nov 2026", "fr": "Chiffres de sources datées de 2018 à 2025, consultées en nov. 2026"}, "src": ["s215", "s216", "s217", "s219", "s222"]}, "diet": {"en": "Carrion feeders (strict scavengers), often gathering in groups at carcasses.", "fr": "Charognards stricts, souvent rassemblés en groupes sur les carcasses."}, "size": {"en": "Large to very large: 78-122 cm long, wingspan about 2 to 2.8 m depending on the species.", "fr": "Grands à très grands : 78 à 122 cm de long, envergure d'environ 2 à 2,8 m selon l'espèce."}, "lifespan": {"en": "Not found in the sources used", "fr": "Non trouvé dans les sources utilisées"}, "behavior": {"en": "Sociable; the Cape Vulture breeds and roosts in colonies on cliffs. The White-backed Vulture is not migratory but makes long sub-continental movements.", "fr": "Sociables ; le vautour du Cap niche et dort en colonies sur des falaises. Le vautour africain n'est pas migrateur mais effectue de longs déplacements à l'échelle du sous-continent."}, "recognize": {"en": "Large vultures with a nearly bare head and neck and a white ruff (fluffy collar) at the base of the neck, flying with broad wings and dark flight feathers. The sources read do not describe the Gyps genus as a whole; these four are the Gyps species the sources place in Africa. No other Gyps species present in Africa was found in the sources used.", "fr": "Grands vautours à la tête et au cou presque nus, avec une collerette blanche duveteuse à la base du cou, au vol large aux rémiges sombres. Les sources lues ne décrivent pas le genre Gyps dans son ensemble ; ces quatre espèces sont les Gyps que les sources situent en Afrique. Aucune autre espèce de Gyps présente en Afrique n'a été trouvée dans les sources utilisées."}, "howto": {"en": "On a photo, check (1) a white lower back/rump visible in flight: White-backed Vulture, which also has a black bill and dark eyes; (2) a pale/white bill with yellow-amber eyes and mottled dark body: Rüppell's Vulture (Sahel/East Africa); (3) a very large, creamy-buff bird with a black bill and yellowish eyes in southern Africa (Botswana, Lesotho, Mozambique, South Africa): Cape Vulture; (4) a buff bird with a white head and yellow bill in the Atlas/Maghreb: Griffon Vulture. Location helps a lot: in Kruger, the realistic candidates are the White-backed Vulture and, less often, the Cape Vulture. These are bare-headed 'Gyps' scavengers, not to be mistaken for the Lappet-faced/Cinereous-type vultures; the Maghreb list also includes the Bearded, Egyptian, Hooded, Lappet-faced and Cinereous vultures. Beware: Cape and White-backed are easily confused in flight at a distance.", "fr": "Sur une photo, vérifier (1) un bas du dos/croupion blanc visible en vol : vautour africain, qui a aussi le bec noir et les yeux sombres ; (2) un bec pâle/blanc, des yeux jaune-ambre et un corps sombre tacheté : vautour de Rüppell (Sahel/Afrique de l'Est) ; (3) un oiseau très grand, crème-beige, au bec noir et aux yeux jaunâtres en Afrique australe (Botswana, Lesotho, Mozambique, Afrique du Sud) : vautour du Cap ; (4) un oiseau beige à tête blanche et bec jaune dans l'Atlas/Maghreb : vautour fauve. La localisation aide beaucoup : au Kruger, les candidats réalistes sont le vautour africain et, plus rarement, le vautour du Cap. Ce sont des vautours charognards « Gyps » à tête nue, à ne pas confondre avec les autres vautours d'Afrique ; la liste du Maghreb comprend aussi le gypaète, le percnoptère, le vautour charognard, le vautour oricou et le vautour moine. Attention : vautour du Cap et vautour africain se confondent facilement en vol, à distance."}, "safety": {"en": "Not dangerous to people. Threats to them: poisoning (including poisoned carcasses set for pests), electrocution and power-line collisions, hunting for traditional medicine.", "fr": "Non dangereux pour l'humain. Menaces qui pèsent sur eux : empoisonnement (dont les carcasses empoisonnées destinées aux nuisibles), électrocution et collisions avec les lignes électriques, chasse pour la médecine traditionnelle."}, "types": [{"name": {"en": "White-backed Vulture", "fr": "Vautour africain (vautour à dos blanc)"}, "fiche": "whitebackedvulture", "sci": "Gyps africanus", "status": "CR", "statusYear": "2021", "where": {"en": "Africa south of the Sahara, from Senegal, Gambia and Mali east to Ethiopia and Somalia and south to South Africa; absent from the forested equatorial belt of West and Central Africa. In South Africa: north and east, and eastern Eswatini. Kruger National Park is its historical regional stronghold (about 542 breeding pairs in 2020-2023, down from 904 in 2011-2013).", "fr": "Afrique au sud du Sahara, du Sénégal, de la Gambie et du Mali jusqu'à l'Éthiopie et la Somalie, et vers le sud jusqu'à l'Afrique du Sud ; absent de la ceinture forestière équatoriale d'Afrique de l'Ouest et centrale. En Afrique du Sud : nord et est du pays, ainsi que l'est de l'Eswatini. Le parc national Kruger est son bastion régional historique (environ 542 couples nicheurs en 2020-2023, contre 904 en 2011-2013)."}, "size": {"en": "Length 90-100 cm, weight 4.6-6.6 kg (BirdLife South Africa); wingspan 1.96-2.25 m (Wikipedia).", "fr": "Longueur 90-100 cm, poids 4,6-6,6 kg (BirdLife Afrique du Sud) ; envergure 1,96-2,25 m (Wikipédia)."}, "tell": {"en": "Smallest of the group in this page. Lower back and rump white, most visible when the wings are spread; white neck ruff; dark head with whitish down, dark blue-grey neck; dark brown eyes; black bill. From below, dark flight feathers contrast sharply with buffy-white underwing coverts. Juveniles darker and streaked.", "fr": "Le plus petit du groupe sur cette page. Bas du dos et croupion blancs, surtout visibles ailes déployées ; collerette blanche ; tête sombre à duvet blanchâtre, cou gris-bleu sombre ; yeux brun foncé ; bec noir. Vu de dessous, les rémiges sombres contrastent nettement avec les couvertures sous-alaires blanc crème. Jeunes plus sombres et striés."}, "inKruger": true, "src": ["s215", "s216", "s221"]}, {"name": {"en": "Cape Vulture", "fr": "Vautour du Cap"}, "fiche": "capevulture", "sci": "Gyps coprotheres", "status": "VU", "statusYear": "2021", "where": {"en": "Southern Africa. Resident and breeding in Botswana, Lesotho, Mozambique and South Africa; non-breeding visitor to Angola, Eswatini, Namibia and Zimbabwe (Namibia's breeding population is considered extinct). About 9,600-12,800 mature individuals in 2021, decreasing.", "fr": "Afrique australe. Résident et nicheur au Botswana, au Lesotho, au Mozambique et en Afrique du Sud ; visiteur non nicheur en Angola, en Eswatini, en Namibie et au Zimbabwe (la population nicheuse de Namibie est considérée comme éteinte). Environ 9 600 à 12 800 individus matures en 2021, en déclin."}, "size": {"en": "Length 96-115 cm, wingspan 2.26-2.6 m, weight 7-11 kg (Wikipedia); the IUCN assessment gives 100-115 cm. Larger than the White-backed Vulture.", "fr": "Longueur 96-115 cm, envergure 2,26-2,6 m, poids 7-11 kg (Wikipédia) ; l'évaluation UICN indique 100-115 cm. Plus grand que le vautour africain."}, "tell": {"en": "Very large; adults creamy-buff overall with dark flight and tail feathers; near-bare head and neck; yellowish eyes in adults; black bill. Juveniles darker and streaked, with a reddish neck. Often shows a row of dark spots along the upperwing coverts (BirdLife South Africa). Easily confused with the White-backed Vulture in flight at a distance.", "fr": "Très grand ; adulte crème-beige avec rémiges et queue sombres ; tête et cou presque nus ; yeux jaunâtres chez l'adulte ; bec noir. Jeunes plus sombres et striés, au cou rougeâtre. Montre souvent une rangée de taches sombres sur les couvertures sus-alaires (BirdLife Afrique du Sud). Facile à confondre avec le vautour africain en vol et à distance."}, "inKruger": null, "src": ["s217", "s218", "s215", "s225"]}, {"name": {"en": "Rüppell's Vulture", "fr": "Vautour de Rüppell"}, "fiche": "ruppellvulture", "sci": "Gyps rueppelli", "status": "CR", "statusYear": "2015", "where": {"en": "Mainly the Sahel and East Africa, a belt from Senegambia to Ethiopia and down to Tanzania (Animal Diversity Web). Total population estimated at about 22,000 individuals (Wikipedia). The Peregrine Fund also lists Zimbabwe, South Africa and Mozambique among range countries.", "fr": "Surtout le Sahel et l'Afrique de l'Est, une ceinture de la Sénégambie à l'Éthiopie jusqu'en Tanzanie (Animal Diversity Web). Population totale estimée à environ 22 000 individus (Wikipédia). The Peregrine Fund cite aussi le Zimbabwe, l'Afrique du Sud et le Mozambique parmi les pays de l'aire."}, "size": {"en": "Length 85-103 cm, wingspan 2.26-2.6 m, weight 6.4-9 kg (Wikipedia, Peregrine Fund).", "fr": "Longueur 85-103 cm, envergure 2,26-2,6 m, poids 6,4-9 kg (Wikipédia, Peregrine Fund)."}, "tell": {"en": "Mottled dark brown/black body with pale feather edges, whitish-brown belly; sparse dirty-white down on a bare head and neck; white collar at the base of the neck; yellow-amber eyes; pale (white) bill, which is the easiest way to separate it from the black-billed White-backed Vulture. White stripes under the wings. No white back.", "fr": "Corps brun sombre/noir tacheté, ventre blanc-brun ; tête et cou nus avec un fin duvet blanc sale ; collerette blanche à la base du cou ; yeux jaune-ambre ; bec pâle (blanc), ce qui est le moyen le plus simple de le séparer du vautour africain au bec noir. Bandes blanches sous les ailes. Pas de dos blanc."}, "inKruger": null, "src": ["s219", "s220", "s221"]}, {"name": {"en": "Eurasian Griffon Vulture", "fr": "Vautour fauve"}, "fiche": "griffonvulture", "sci": "Gyps fulvus", "status": "LC", "statusYear": "2021", "where": {"en": "Southern Europe, western and central Asia, and the Atlas Mountains of North Africa (resident in the eastern Atlas). In the Maghreb it is Least Concern globally but regionally Critically Endangered: very rare or extinct as a breeder in Morocco and Tunisia, apparently doing well at some sites in Algeria; thousands cross the Strait of Gibraltar on migration.", "fr": "Europe du Sud, Asie occidentale et centrale, et massif de l'Atlas en Afrique du Nord (résident dans l'est de l'Atlas). Au Maghreb, il est de préoccupation mineure à l'échelle mondiale mais en danger critique à l'échelle régionale : très rare ou disparu comme nicheur au Maroc et en Tunisie, apparemment prospère sur certains sites en Algérie ; des milliers traversent le détroit de Gibraltar en migration."}, "size": {"en": "Length 93-122 cm, wingspan 2.3-2.8 m, weight about 6.2-10.5 kg (Wikipedia).", "fr": "Longueur 93-122 cm, envergure 2,3-2,8 m, poids d'environ 6,2-10,5 kg (Wikipédia)."}, "tell": {"en": "Buff body and wing coverts contrasting with dark flight feathers; white head and white neck ruff; yellow bill. Largest of these four in wingspan; found in North Africa, not in the savannas of eastern or southern Africa.", "fr": "Corps et couvertures alaires beige contrastant avec les rémiges sombres ; tête blanche et collerette blanche ; bec jaune. Le plus grand des quatre par l'envergure ; présent en Afrique du Nord, pas dans les savanes d'Afrique de l'Est ou australe."}, "inKruger": null, "src": ["s222", "s223", "s224"]}], "group": true, "status": "VAR"},
    emperorscorpion: {"img": "animal-emperorscorpion.jpg", "name": {"en": "Emperor scorpion", "fr": "Scorpion empereur"}, "sci": "Pandinus imperator", "status": "NE", "statusAsOf": {"en": "Not evaluated by the IUCN Red List (Animal Diversity Web, read Nov 2026). Listed in CITES Appendix II, which limits trade to prevent over-collecting; Animal Diversity Web notes these species are not considered threatened.", "fr": "Non évalué par la Liste rouge de l'UICN (Animal Diversity Web, consulté en nov. 2026). Inscrit à l'Annexe II de la CITES, qui limite le commerce pour éviter la surcollecte ; Animal Diversity Web précise que ces espèces ne sont pas considérées comme menacées."}, "statusSrc": ["s227", "s226", "s228"], "global": {"pop": {"en": "No world population estimate is known. The sources give no number; Animal Diversity Web only says the species is found in large numbers in regions of human habitation.", "fr": "Il n'existe pas d'estimation connue de la population mondiale. Les sources ne donnent aucun chiffre ; Animal Diversity Web indique seulement que l'espèce est présente en grand nombre dans les régions habitées par l'humain."}, "trend": {"en": "Not found in the sources used (no trend assessed, since the species is not evaluated by the IUCN).", "fr": "Non trouvé dans les sources utilisées (aucune tendance évaluée, l'espèce n'étant pas évaluée par l'UICN)."}, "asOf": {"en": "Sources read Nov 2026", "fr": "Sources consultées en nov. 2026"}, "src": ["s227"]}, "diet": {"en": "Mainly insects and other ground-dwelling invertebrates, with termites making up a large share. Occasionally larger prey such as rodents and lizards. Juveniles paralyse prey with their sting; adults usually tear prey apart with their claws.", "fr": "Surtout des insectes et d'autres invertébrés terrestres, les termites représentant une grande part du régime. Parfois des proies plus grosses comme des rongeurs et des lézards. Les jeunes paralysent leurs proies avec leur dard ; les adultes les déchiquettent le plus souvent avec leurs pinces."}, "size": {"en": "Adults average about 20 cm (7.9 in) and about 30 g; pregnant females can exceed 28 g (Animal Diversity Web) or 50 g (NTNU). Among the largest scorpions.", "fr": "Les adultes mesurent en moyenne environ 20 cm et pèsent environ 30 g ; les femelles gestantes peuvent dépasser 28 g (Animal Diversity Web) ou 50 g (NTNU). Parmi les plus grands scorpions."}, "lifespan": {"en": "About 5 to 8 years in captivity; likely shorter in the wild (Animal Diversity Web, WebMD). Wikipedia gives 6 to 8 years in the wild, so the wild figure is uncertain.", "fr": "Environ 5 à 8 ans en captivité ; probablement moins en milieu sauvage (Animal Diversity Web, WebMD). Wikipédia indique 6 à 8 ans à l'état sauvage : la valeur en nature reste incertaine."}, "behavior": {"en": "Nocturnal, rarely active before nightfall. Lives in burrows, under leaf litter, debris and stones, and in termite mounds. Timid: it usually flees but adopts a defensive posture when cornered. Glows blue-green under ultraviolet light. Young are carried on the mother's back until they can live independently. Colonies of up to 15 individuals have been observed.", "fr": "Nocturne, rarement actif avant la tombée de la nuit. Vit dans des terriers, sous la litière, les débris et les pierres, et dans des termitières. Timide : il fuit le plus souvent, mais prend une posture défensive s'il est acculé. Fluoresce en bleu-vert sous lumière ultraviolette. Les petits sont portés sur le dos de la mère jusqu'à leur indépendance. Des colonies allant jusqu'à 15 individus ont été observées."}, "recognize": {"en": "A very large scorpion with a black to metallic greenish-black body, massive blackish-red granular pincers and a comparatively slender tail ending in the stinger. Under UV light it glows blue-green.", "fr": "Un très grand scorpion au corps noir à noir verdâtre métallique, aux pinces massives rouge-noir à surface granuleuse, et à la queue comparativement fine terminée par le dard. Sous lumière UV, il brille en bleu-vert."}, "male": {"en": "Males have longer comb-like pectines (sensory organs under the body) than females.", "fr": "Les mâles ont des peignes (pectines, organes sensoriels sous le corps) plus longs que les femelles."}, "female": {"en": "Females are larger. A gravid female's body swells, showing whitish membranes between segments. Females with young are more likely to sting.", "fr": "Les femelles sont plus grandes. Chez une femelle gestante, le corps gonfle et laisse voir des membranes blanchâtres entre les segments. Les femelles avec des petits piquent plus facilement."}, "safety": {"en": "The venom is mild; the sting is painful but generally not dangerous, and harmless to healthy adults (NTNU). Symptoms are local: redness, pain and burning, swelling. The pinch from the pincers can hurt more than the sting. People allergic to scorpion stings may react more strongly. Do not handle it, and avoid pincers and stinger if you must move one (use protective equipment). Take extra care around a mother with young. If stung: wash with soap and water and take over-the-counter pain relief. Seek medical care if you are unsure of the species or if symptoms spread beyond the sting site (WebMD). Wear closed shoes and check shoes, bedding and wood piles where scorpions hide.", "fr": "Le venin est faible ; la piqûre est douloureuse mais généralement pas dangereuse, et sans risque pour un adulte en bonne santé (NTNU). Les symptômes sont locaux : rougeur, douleur et brûlure, gonflement. Le pincement des pinces peut faire plus mal que la piqûre. Les personnes allergiques aux piqûres de scorpion peuvent réagir plus fort. Ne le manipulez pas ; évitez pinces et dard si vous devez en déplacer un (équipement de protection). Redoublez de prudence près d'une mère et de ses petits. En cas de piqûre : laver à l'eau et au savon et prendre un antidouleur en vente libre. Consultez un médecin si vous ne connaissez pas l'espèce ou si les symptômes dépassent le site de la piqûre (WebMD). Portez des chaussures fermées et vérifiez chaussures, literie et tas de bois où les scorpions se cachent (conseil général, non tiré des sources)."}},
    capevulture: {"img": "animal-capevulture.jpg", "name": {"en": "Cape Vulture", "fr": "Vautour du Cap"}, "fiche": "capevulture", "sci": "Gyps coprotheres", "status": "VU", "statusYear": "2021", "statusAsOf": {"en": "Vulnerable (VU) on the IUCN Red List, assessed in 2021 (Endangered in 2015-2017). South Africa's regional assessment (SANBI) lists it as Endangered (EN); the assessment year is not stated on the page read.", "fr": "Vulnérable (VU) sur la Liste rouge de l'UICN, évalué en 2021 (en danger EN en 2015-2017). L'évaluation régionale sud-africaine (SANBI) le classe En danger (EN) ; l'année de l'évaluation n'est pas indiquée sur la page lue."}, "statusSrc": ["s230", "s234"], "global": {"pop": {"en": "9,600-12,800 mature individuals worldwide (IUCN 2021, one subpopulation). South Africa's regional population: about 8,800 mature individuals (about 4,400 breeding pairs; SANBI, assessment year not stated). A 2019 estimate counted 3,560 breeding pairs in the north-east of South Africa, the species' strongest population.", "fr": "9 600 à 12 800 individus matures dans le monde (UICN 2021, une seule sous-population). Population régionale d'Afrique du Sud : environ 8 800 individus matures (environ 4 400 couples nicheurs ; SANBI, année non précisée). Une estimation de 2019 comptait 3 560 couples nicheurs dans le nord-est de l'Afrique du Sud, la population la plus forte de l'espèce."}, "trend": {"en": "Decreasing according to the IUCN (2021), with a suspected decline of 30-49%, though recent data show increases at some northern colonies. Wikipedia reports a 60-70% drop in South Africa between 1992 and 2007 and numbers stable since about 2016. Known breeding colonies in South Africa fell from 64 in the 1960s to 12 (SANBI).", "fr": "En déclin selon l'UICN (2021), avec un recul soupçonné de 30 à 49 %, bien que des données récentes montrent des hausses sur certaines colonies du nord. Wikipédia rapporte une baisse de 60 à 70 % en Afrique du Sud entre 1992 et 2007 et des effectifs stables depuis environ 2016. Les colonies nicheuses connues en Afrique du Sud sont passées de 64 dans les années 1960 à 12 (SANBI)."}, "asOf": {"en": "IUCN assessment 2021; other sources read Nov 2026", "fr": "Évaluation UICN 2021 ; autres sources consultées en nov. 2026"}, "src": ["s230", "s231", "s234"]}, "diet": {"en": "Obligate scavenger: carrion, mainly soft muscle and organ tissue plus some bone fragments, especially from large carcasses. It forages in groups and spots carcasses from far away; it feeds mostly on freshly dead animals.", "fr": "Charognard strict : charogne, surtout des muscles mous et des organes, avec quelques fragments d'os, notamment sur de grandes carcasses. Il cherche sa nourriture en groupe et repère les carcasses de loin ; il se nourrit surtout d'animaux fraîchement morts."}, "size": {"en": "Length 96-115 cm (Wikipedia; IUCN: 100-115 cm), wingspan 2.26-2.6 m, weight 7-11 kg (mean about 8.9-9.2 kg). One of the largest and lightest-coloured vultures of southern Africa (CapeNature).", "fr": "Longueur 96-115 cm (Wikipédia ; UICN : 100-115 cm), envergure 2,26-2,6 m, poids 7-11 kg (moyenne d'environ 8,9 à 9,2 kg). L'un des plus grands vautours d'Afrique australe et le plus clair (CapeNature)."}, "lifespan": {"en": "Average of 12.9 years (Oiseaux.net); the maximum shown on that page is garbled and unusable. Generation length 13.9 years (IUCN).", "fr": "Moyenne de 12,9 ans (Oiseaux.net) ; le maximum indiqué sur cette page est illisible et inutilisable. Durée d'une génération : 13,9 ans (UICN)."}, "behavior": {"en": "Colonial: breeds and roosts on cliff ledges, usually in or near mountains (up to 3,100 m), in colonies of at least six pairs. One egg per breeding attempt, once a year, incubated by both parents for about 52-58 days; nestling period about 112-171 days (sources differ); young depend on the adults for up to about 221 days. First breeding at about 6 years (Oiseaux.net). No fixed breeding season (mainly March to January). Away from colonies it may roost on trees and pylons and gathers in large groups at carcasses.", "fr": "Colonial : niche et dort sur des vires de falaises, en général dans ou près des montagnes (jusqu'à 3 100 m), en colonies d'au moins six couples. Un œuf par tentative, une fois par an, couvé par les deux parents pendant environ 52 à 58 jours ; séjour au nid d'environ 112 à 171 jours (les sources divergent) ; les jeunes dépendent des adultes jusqu'à environ 221 jours. Première reproduction vers 6 ans (Oiseaux.net). Pas de saison de reproduction fixe (surtout de mars à janvier). Loin des colonies, il peut dormir sur des arbres et des pylônes et se rassemble en grand nombre sur les carcasses."}, "recognize": {"en": "A very large vulture, pale creamy-buff to whitish-grey above flecked with brown, with black outer flight feathers and dark tail contrasting with the paler body. Head and neck nearly bare, blue-grey with sparse white down, and a grey-buff collar of long feathers at the base of the neck. Adults have yellowish eyes and a black bill. Juveniles are darker and more streaked, with brown to orange eyes and a red neck. Only 12 tail feathers, against 14 in other Gyps (CapeNature).", "fr": "Très grand vautour, crème-beige à gris-blanc pâle dessus et moucheté de brun, aux rémiges externes noires et à la queue sombre contrastant avec le corps plus clair. Tête et cou presque nus, gris-bleu à duvet blanc clairsemé, avec une collerette de longues plumes gris-beige à la base du cou. Les adultes ont les yeux jaunâtres et le bec noir. Les jeunes sont plus sombres et striés, aux yeux bruns à orange et au cou rouge. Seulement 12 plumes de queue, contre 14 chez les autres Gyps (CapeNature)."}, "howto": {"en": "Versus the White-backed Vulture (Gyps africanus): the Cape Vulture is larger and has yellow eyes (the White-backed has dark brown eyes) and lacks the white lower back and rump that shows on the White-backed when its wings are spread; the Cape Vulture is overall paler, creamy-buff, while the White-backed is darker, with a sharp contrast between dark flight feathers and whitish underwing coverts. The two are easily confused in flight at a distance. Versus Rüppell's Vulture (Gyps rueppelli): Rüppell's has a pale/white bill, a dark mottled body with pale feather edges and yellow-amber eyes, whereas the Cape Vulture has a black bill and is paler overall; Rüppell's is mainly a bird of the Sahel and East Africa. Wikipedia notes that the Cape and White-backed vultures both have two bare skin patches at the base of the neck.", "fr": "Face au vautour africain (Gyps africanus) : le vautour du Cap est plus grand et a les yeux jaunes (le vautour africain a les yeux brun foncé) ; il n'a pas le bas du dos et le croupion blancs qu'on voit chez le vautour africain ailes déployées ; il est globalement plus pâle, crème-beige, alors que le vautour africain est plus sombre, avec un net contraste entre rémiges sombres et couvertures sous-alaires blanchâtres. Les deux se confondent facilement en vol, à distance. Face au vautour de Rüppell (Gyps rueppelli) : celui-ci a le bec pâle/blanc, un corps sombre tacheté aux plumes bordées de clair et les yeux jaune-ambre, alors que le vautour du Cap a le bec noir et est plus pâle dans l'ensemble ; le vautour de Rüppell vit surtout au Sahel et en Afrique de l'Est. Wikipédia note que les vautours du Cap et africain ont tous deux deux plages de peau nue à la base du cou."}, "noDiff": {"en": "The sexes look very similar; females are slightly larger, but this makes males and females hard to tell apart in the field (CapeNature). No reliable field method for sexing was found.", "fr": "Les sexes sont très semblables ; les femelles sont un peu plus grandes, mais cela ne permet pas de distinguer facilement mâles et femelles sur le terrain (CapeNature). Aucune méthode fiable de sexage sur le terrain n'a été trouvée."}, "safety": {"en": "Not dangerous to people. Observation tip: watch from a distance, near feeding sites, roosts or colonies; breeding sites should be approached carefully, as human disturbance (including by aircraft) at colonies is a recognised threat (SANBI, CapeNature). Main threats to the species: poisoning (including poisoned carcasses set for predators, and diclofenac), electrocution and collisions with power lines, harvesting for traditional medicine, and food shortage.", "fr": "Non dangereux pour l'humain. Conseil d'observation : observer à distance, près des sites de nourrissage, des dortoirs ou des colonies ; il faut s'approcher des sites de nidification avec précaution, car le dérangement humain (dont celui des aéronefs) dans les colonies est une menace reconnue (SANBI, CapeNature). Principales menaces pour l'espèce : empoisonnement (dont les carcasses empoisonnées destinées aux prédateurs, et le diclofénac), électrocution et collisions avec les lignes électriques, prélèvements pour la médecine traditionnelle et manque de nourriture."}, "inKruger": null},
    ruppellvulture: {"img": "animal-ruppellvulture.jpg", "name": {"en": "Rüppell's Vulture", "fr": "Vautour de Rüppell"}, "fiche": "ruppellvulture", "sci": "Gyps rueppelli", "status": "CR", "statusYear": "2015", "statusAsOf": {"en": "Critically Endangered (CR). The Vulture MSAP gives the category history: LC in 1994, NT in 2007, EN in 2012, CR in 2015. Africa Geographic (2019), Wikipedia and the 2024 Journal of Ornithology paper still describe it as Critically Endangered. I could not open the IUCN Red List page itself, so a more recent reassessment cannot be excluded.", "fr": "Danger critique (CR). Le plan d'action CMS pour les vautours donne l'historique : LC en 1994, NT en 2007, EN en 2012, CR en 2015. Africa Geographic (2019), Wikipédia et l'article de 2024 du Journal of Ornithology le décrivent toujours comme en danger critique. Je n'ai pas pu ouvrir la page de la Liste rouge de l'UICN elle-même ; une réévaluation plus récente ne peut donc pas être exclue."}, "statusSrc": ["s239", "s245", "s240", "s244"], "global": {"pop": {"en": "About 22,000 individuals worldwide, an estimate from the early 1990s (Mundy et al. 1992) that the Vulture MSAP says is 'certainly much lower' today given recent declines. (Africa Geographic, 2019, quotes the same 22,000 as mature individuals; the MSAP and Wikipedia say individuals.) Roughly 30,000 birds in the early 1990s according to the 2024 paper. Wikipedia also lists undated regional estimates in pairs: Tanzania 3,000, Kenya 2,000, Ethiopia 2,000, Sudan 2,000, West Africa 2,000.", "fr": "Environ 22 000 individus dans le monde, estimation du début des années 1990 (Mundy et al. 1992) que le plan d'action CMS juge « certainement très inférieure » aujourd'hui vu les déclins récents. (Africa Geographic, 2019, reprend les mêmes 22 000 en individus matures ; le plan CMS et Wikipédia parlent d'individus.) Environ 30 000 oiseaux au début des années 1990 selon l'article de 2024. Wikipédia donne aussi des estimations régionales non datées en couples : Tanzanie 3 000, Kenya 2 000, Éthiopie 2 000, Soudan 2 000, Afrique de l'Ouest 2 000."}, "trend": {"en": "Decreasing. Africa-wide declines of at least a third over about 30 years; on West African savanna transects, 61.3 birds per 100 km (1969-1973) fell to 2.5 birds per 100 km (2003-2004) (Onrubia et al. 2024). Main causes: poisoning, fewer wild ungulates, nest harvesting and hunting for belief-based use.", "fr": "En déclin. Baisse d'au moins un tiers à l'échelle de l'Afrique en une trentaine d'années ; sur des transects de savane ouest-africaine, 61,3 oiseaux pour 100 km (1969-1973) sont tombés à 2,5 oiseaux pour 100 km (2003-2004) (Onrubia et al. 2024). Causes principales : empoisonnement, raréfaction des ongulés sauvages, collecte des nids et chasse à usage lié aux croyances."}, "asOf": {"en": "Population figure dates from the early 1990s (Mundy et al. 1992), cited in a document read Nov 2026; trend data 1969-2004, paper published 2024", "fr": "Chiffre de population datant du début des années 1990 (Mundy et al. 1992), cité dans un document consulté en nov. 2026 ; données de tendance 1969-2004, article publié en 2024"}, "src": ["s239", "s240", "s244", "s245"]}, "diet": {"en": "Strict scavenger: eats carrion only, found by sight from the air. Prefers fresh carcasses but also takes old ones; feeds mostly on soft tissue of large mammals (blue wildebeest, plains zebra and Thomson's gazelle are cited) and, once the soft parts are gone, hide and bones. Backward-pointing spikes on the tongue help strip meat. Also feeds on livestock carcasses near villages.", "fr": "Charognard strict : ne mange que des cadavres, repérés à vue depuis les airs. Préfère les carcasses fraîches mais accepte les vieilles ; mange surtout les tissus mous de grands mammifères (gnou bleu, zèbre de Burchell et gazelle de Thomson sont cités) puis, une fois les parties molles parties, la peau et les os. Des picots dirigés vers l'arrière sur la langue aident à arracher la viande. Se nourrit aussi de cadavres de bétail près des villages."}, "size": {"en": "Length 85-103 cm, wingspan 2.26-2.6 m, weight 6.4-9 kg (Wikipedia, Peregrine Fund). Animal Diversity Web gives 85-107 cm, 2.2-2.55 m and 5.5-9 kg. The race erlangeri is slightly smaller.", "fr": "Longueur 85-103 cm, envergure 2,26-2,6 m, poids 6,4-9 kg (Wikipédia, Peregrine Fund). Animal Diversity Web donne 85-107 cm, 2,2-2,55 m et 5,5-9 kg. La race erlangeri est un peu plus petite."}, "lifespan": {"en": "Wild lifespan not reported by Animal Diversity Web. Estimated at 40-50 years (Animal Diversity Web for captivity; Peregrine Fund 'thought to live'). Oiseaux.net gives a much lower average age of 13.2 years and a recorded maximum of about 24 years, so sources disagree.", "fr": "Durée de vie en nature non indiquée par Animal Diversity Web. Estimée à 40-50 ans (Animal Diversity Web pour la captivité ; The Peregrine Fund « pense qu'il vit »). Oiseaux.net donne un âge moyen bien plus bas, 13,2 ans, et un maximum enregistré d'environ 24 ans : les sources divergent."}, "behavior": {"en": "Social and diurnal; feeds in large groups at carcasses, with hisses and squeals to assert dominance. Non-migratory but travels far for food and returns to its nest site; can stay aloft 7 hours or more on thermals. Highest-flying bird on record: a Rüppell's Vulture was sucked into an aircraft engine at 11,300 m over Abidjan (Ivory Coast) on 29 Nov 1973 (the Peregrine Fund calls this likely an anomaly; it commonly flies up to about 6,000 m). Nests mostly on cliffs, sometimes in trees, in colonies of 10 to 1,000 pairs (oiseaux.net), hundreds of pairs at key sites. Monogamous; both parents build the stick nest and incubate a single egg for about 55 days; chick fledges at about 150 days and stays dependent until the next breeding season; cycle about 13 months, breeding year-round (ADW). Adult plumage at 5-6 years.", "fr": "Social et diurne ; se nourrit en grands groupes sur les carcasses, avec sifflements et cris pour affirmer sa dominance. Non migrateur mais parcourt de longues distances pour se nourrir et revient à son site de nid ; peut rester en l'air 7 heures ou plus en utilisant les thermiques. Oiseau volant le plus haut jamais enregistré : un vautour de Rüppell a été aspiré par le moteur d'un avion à 11 300 m au-dessus d'Abidjan (Côte d'Ivoire) le 29 nov. 1973 (The Peregrine Fund y voit probablement une anomalie ; il vole couramment jusqu'à environ 6 000 m). Niche surtout sur des falaises, parfois dans des arbres, en colonies de 10 à 1 000 couples (oiseaux.net), des centaines de couples sur les sites clés. Monogame ; les deux parents construisent le nid de branches et couvent un seul œuf pendant environ 55 jours ; le poussin s'envole vers 150 jours et reste dépendant jusqu'à la saison de reproduction suivante ; cycle d'environ 13 mois, reproduction toute l'année (ADW). Plumage adulte à 5-6 ans."}, "recognize": {"en": "Large vulture with a mottled dark brown-black body, each feather edged pale cream (scaly look), a whitish-brown belly and white stripes under the wings. Head and neck bare apart from thin dirty-white down, with a white ruff at the base of the neck. Eyes yellow to golden amber; bill pale (horn-coloured, grey cere). Juveniles are darker and plainer, with a black bill and pinkish neck. Versus the White-backed Vulture: Rüppell's is larger with a longer neck, has a pale bill and amber eyes and no white rump, whereas the White-backed has a black bill, dark brown eyes and a white lower back. Versus the Cape Vulture: the Cape is a very large, plain creamy-buff bird with dark flight feathers, a black bill and yellowish eyes, and it lives in southern Africa (Botswana, Lesotho, Mozambique, South Africa), while Rüppell's is dark and scaly and found mainly in the Sahel and East Africa.", "fr": "Grand vautour au corps brun sombre à noir tacheté, chaque plume bordée de crème pâle (aspect écailleux), au ventre blanc-brun et aux bandes blanches sous les ailes. Tête et cou nus avec un fin duvet blanc sale, et une collerette blanche à la base du cou. Yeux jaunes à ambre doré ; bec pâle (couleur corne, cire grise). Les jeunes sont plus sombres et plus unis, au bec noir et au cou rosé. Face au vautour africain : le Rüppell est plus grand, au cou plus long, avec un bec pâle, des yeux ambrés et pas de croupion blanc, alors que le vautour africain a le bec noir, les yeux brun foncé et le bas du dos blanc. Face au vautour du Cap : le Cap est un oiseau très grand, uniformément crème-beige aux rémiges sombres, au bec noir et aux yeux jaunâtres, d'Afrique australe (Botswana, Lesotho, Mozambique, Afrique du Sud), alors que le Rüppell est sombre et écailleux et vit surtout au Sahel et en Afrique de l'Est."}, "noDiff": {"en": "Males and females look alike (ADW, Peregrine Fund, oiseaux.net); oiseaux.net adds that the female is slightly larger. Juveniles differ from adults.", "fr": "Mâles et femelles se ressemblent (ADW, Peregrine Fund, oiseaux.net) ; oiseaux.net ajoute que la femelle est un peu plus grande. Les jeunes diffèrent des adultes."}, "safety": {"en": "Not dangerous to people; it eats carrion only and has no known attacks on humans in the sources read. It can be aggressive toward rivals at carcasses and makes harsh calls at the nest. Do not approach nesting colonies: disturbance harms the birds. The species itself is threatened, mainly by poisoned carcasses (carbofuran put out against predators, or by poachers to hide kills), as well as nest harvesting, killing for traditional medicine, power-line collisions and land conversion.", "fr": "Pas dangereux pour l'humain ; il ne mange que des charognes et les sources lues ne mentionnent aucune attaque contre des personnes. Il peut être agressif envers ses rivaux sur une carcasse et pousse des cris rauques près du nid. Ne pas s'approcher des colonies de nidification : le dérangement nuit aux oiseaux. L'espèce elle-même est menacée, surtout par les carcasses empoisonnées (carbofuran déposé contre les prédateurs, ou par des braconniers pour cacher leurs prises), ainsi que par la collecte des nids, la chasse pour la médecine traditionnelle, les collisions avec les lignes électriques et la conversion des terres."}},
    griffonvulture: {"img": "animal-griffonvulture.jpg", "name": {"en": "Eurasian Griffon Vulture", "fr": "Vautour fauve"}, "fiche": "griffonvulture", "sci": "Gyps fulvus", "status": "LC", "statusYear": "2021", "statusAsOf": {"en": "Least Concern (LC) globally, BirdLife International assessment of 2021 (as cited by Wikipedia, the Vulture Conservation Foundation and IUCN Morocco). Regionally in North Africa it is rated Vulnerable (Garrido et al., 2021, cited by IUCN Morocco); a 2014 Magornitho page calls it critically endangered regionally, especially in Morocco and Tunisia.", "fr": "Préoccupation mineure (LC) à l'échelle mondiale, évaluation de BirdLife International de 2021 (d'après Wikipédia, la Vulture Conservation Foundation et l'UICN Maroc). En Afrique du Nord, il est classé Vulnérable (Garrido et al., 2021, cité par l'UICN Maroc) ; une page de Magornitho de 2014 le dit en danger critique à l'échelle régionale, surtout au Maroc et en Tunisie."}, "statusSrc": ["s250", "s253", "s254", "s252"], "global": {"pop": {"en": "80,000 to 900,000 mature individuals in the wild (BirdLife International, 2021, as given by the Vulture Conservation Foundation; a very wide range). Europe: 35,438 to 41,984 breeding pairs (Vulture Conservation Foundation, 2022). Spain alone: 30,946 breeding pairs in 2018, over 90% of Europe's total. The sources read give no population figure for Africa as a whole.", "fr": "80 000 à 900 000 individus matures à l'état sauvage (BirdLife International, 2021, d'après la Vulture Conservation Foundation ; une fourchette très large). Europe : 35 438 à 41 984 couples nicheurs (Vulture Conservation Foundation, 2022). Espagne seule : 30 946 couples nicheurs en 2018, plus de 90 % du total européen. Les sources lues ne donnent aucun chiffre pour l'ensemble de l'Afrique."}, "trend": {"en": "Declined through the 20th century (poisoning, hunting, less food), then increased strongly in Spain, France and Portugal. Iberian breeding pairs: 2,283 (1979), 7,519 (1989), 17,337 (1999), 24,609 (2008), 30,946 (2018). Gibraltar autumn crossings to Africa: about 1,000-2,000 (1979), 2,600 (1999), 8,218 (2008), 12,057 (2019). In North Africa, however, it is much rarer: Morocco lost its breeding population after 1984 and Tunisia is considered extinct as a breeder.", "fr": "Déclin au XXe siècle (empoisonnement, chasse, moins de nourriture), puis forte hausse en Espagne, en France et au Portugal. Couples nicheurs ibériques : 2 283 (1979), 7 519 (1989), 17 337 (1999), 24 609 (2008), 30 946 (2018). Passages d'automne au détroit de Gibraltar vers l'Afrique : environ 1 000 à 2 000 (1979), 2 600 (1999), 8 218 (2008), 12 057 (2019). En Afrique du Nord, en revanche, l'espèce est bien plus rare : le Maroc a perdu sa population nicheuse après 1984 et la Tunisie la considère éteinte comme nicheuse."}, "asOf": {"en": "Global figure 2021, European figure 2022, Spain 2018, Gibraltar counts to 2019; sources read Nov 2026", "fr": "Chiffre mondial 2021, chiffre européen 2022, Espagne 2018, comptages de Gibraltar jusqu'en 2019 ; sources consultées en nov. 2026"}, "src": ["s253", "s250", "s256", "s254", "s252"]}, "diet": {"en": "Strict scavenger: carrion of large domestic and wild herbivores, mostly soft tissue (muscle, organs), reached deep into carcasses thanks to its long neck. It finds carcasses by soaring over open country, often in flocks. Where carrion is scarce, birds in Spain have been reported killing weak or sick live animals.", "fr": "Charognard strict : cadavres de grands herbivores domestiques et sauvages, surtout les tissus mous (muscles, organes), atteints en profondeur grâce à son long cou. Il repère les carcasses en planant au-dessus des terrains ouverts, souvent en groupe. Quand la charogne manque, des oiseaux d'Espagne ont été signalés tuant des animaux vivants faibles ou malades."}, "size": {"en": "Length 93-122 cm; wingspan 2.3-2.8 m; weight about 6-11 kg (nominate race males 6.2-10.5 kg, females 6.5-10.5 kg). Sources differ slightly (Oiseaux.net: 95-110 cm, wingspan 2.55-2.80 m; BirdForum: wingspan 2.30-2.65 m).", "fr": "Longueur 93 à 122 cm ; envergure 2,3 à 2,8 m ; poids d'environ 6 à 11 kg (race nominale : mâles 6,2 à 10,5 kg, femelles 6,5 à 10,5 kg). Les sources divergent légèrement (Oiseaux.net : 95-110 cm, envergure 2,55 à 2,80 m ; BirdForum : envergure 2,30 à 2,65 m)."}, "lifespan": {"en": "Maximum recorded 41.4 years (a captive bird); average 17.0 years (Oiseaux.net). The Vulture Conservation Foundation gives up to 37 years in captivity. No wild-bird figure found.", "fr": "Maximum enregistré : 41,4 ans (individu captif) ; moyenne de 17,0 ans (Oiseaux.net). La Vulture Conservation Foundation indique jusqu'à 37 ans en captivité. Aucun chiffre pour les oiseaux sauvages n'a été trouvé."}, "behavior": {"en": "Soars on thermals, which costs little energy (about 1.43 times basal metabolic rate). Nests colonially on cliff ledges; one egg a year, incubation 52-58 days, fledging at about 112-115 days; first breeding at about 5.7 years on average. Breeding pairs are monogamous. Most adults are resident; immatures wander or move south in autumn. Thousands cross the Strait of Gibraltar each year to Morocco and beyond; ringed birds have been recovered in the Maghreb and the western Sahel, mainly Senegal (also Mali, Mauritania, Gambia, Niger). Grunts and hisses at roosts and carcasses.", "fr": "Plane sur les ascendances thermiques, ce qui coûte peu d'énergie (environ 1,43 fois le métabolisme de base). Niche en colonies sur les corniches de falaises ; un œuf par an, incubation de 52 à 58 jours, envol vers 112 à 115 jours ; première reproduction à environ 5,7 ans en moyenne. Les couples sont monogames. La plupart des adultes sont sédentaires ; les immatures errent ou migrent vers le sud à l'automne. Des milliers d'oiseaux traversent chaque année le détroit de Gibraltar vers le Maroc et au-delà ; des oiseaux bagués ont été retrouvés au Maghreb et dans le Sahel occidental, surtout au Sénégal (aussi au Mali, en Mauritanie, en Gambie et au Niger). Grogne et siffle aux dortoirs et sur les carcasses."}, "recognize": {"en": "A very large, buff-brown vulture with dark flight and tail feathers, a white head and a white neck ruff (fluffy collar), and a yellow bill, with very broad wings with long 'fingers' and a short tail. Juveniles are darker with a brown ruff. In Africa it overlaps mainly with Rüppell's Vulture (mottled dark brown or black, yellow-amber eye, white collar, mainly Sahel and East Africa) and the White-backed Vulture (white rump, black bill, sub-Saharan). The sources read give no direct field-mark comparison with the other Gyps; Oiseaux.net notes that it can be confused with the Himalayan, White-backed, Rüppell's, Indian and White-rumped Vultures.", "fr": "Un très grand vautour brun-beige aux rémiges et à la queue sombres, à la tête blanche, à la collerette blanche duveteuse et au bec jaune, aux ailes très larges à longs « doigts » et à la queue courte. Les jeunes sont plus sombres, avec une collerette brune. En Afrique, il se superpose surtout au vautour de Rüppell (corps tacheté brun foncé ou noir, œil jaune-ambre, collerette blanche, surtout Sahel et Afrique de l'Est) et au vautour africain (croupion blanc, bec noir, Afrique subsaharienne). Les sources lues ne comparent pas directement les critères de terrain avec les autres Gyps ; Oiseaux.net note qu'il peut être confondu avec les vautours de l'Himalaya, africain, de Rüppell, indien et à croupion blanc."}, "noDiff": {"en": "The sources read describe no visible difference between the sexes, and male and female weights overlap (Wikipedia). Treat the sexes as indistinguishable in the field.", "fr": "Les sources lues ne décrivent aucune différence visible entre les sexes, et les poids des mâles et des femelles se recouvrent (Wikipédia). On les considère comme indiscernables sur le terrain."}, "safety": {"en": "Not dangerous to people; it feeds only on carrion. Threats to the species: poisoned baits (the main cause of decline according to Wikipedia), reduced food supply from the ban on leaving carcasses in fields in Europe, wind farms (a potential threat flagged in northern Morocco), electrocution and power-line collisions, food scarcity, and capture for sale in traditional medicine shops. Do not approach feeding groups closely, and never leave poisoned carcasses.", "fr": "Non dangereux pour l'humain : il ne mange que de la charogne. Menaces pour l'espèce : appâts empoisonnés (principale cause du déclin selon Wikipédia), baisse de nourriture liée à l'interdiction de laisser des carcasses sur le terrain en Europe, parcs éoliens (menace potentielle signalée dans le nord du Maroc), électrocution et collisions avec les lignes électriques, pénurie de nourriture, et capture pour la vente en médecine traditionnelle. Ne pas s'approcher des groupes en train de se nourrir, et ne jamais laisser de carcasses empoisonnées."}}
  },

  /* Park-specific facts. Key = park id, then animal id. */
  parkAnimals: {
    kruger: {
      lion: {
        pop: { en: "1,620 – 1,750 lions", fr: "1 620 à 1 750 lions" },
        asOf: "2010–2011",
        conf: "official",
        src: ["s1"],
        note: {
          en: "This is the latest lion figure SANParks shows on its website, and it is about 15 years old. Some travel sites quote about 1,500 lions without a clear source, so today’s true number may differ.",
          fr: "C’est le dernier chiffre de lions affiché par SANParks sur son site, et il date d’environ 15 ans. Certains sites de voyage citent environ 1 500 lions sans source claire : le chiffre actuel peut donc différer."
        },
        spot: {
          en: "Southern and central grasslands, especially around Satara and Lower Sabie and along the Skukuza–Lower Sabie road. Best at dawn and dusk. (Traveller tips, not official.)",
          fr: "Prairies du sud et du centre, surtout autour de Satara et Lower Sabie et le long de la route Skukuza–Lower Sabie. Meilleur moment : aube et crépuscule. (Conseils de voyageurs, non officiels.)"
        },
        spotSrc: ["s20", "s28"]
      },
      elephant: {
        pop: {
          en: "28,000 – 39,000 elephants (range during 2020–2025); over 31,000 in 2020",
          fr: "28 000 à 39 000 éléphants (fourchette 2020–2025) ; plus de 31 000 en 2020"
        },
        asOf: "2020–2025",
        conf: "official",
        src: ["s2", "s3", "s30"],
        trend: { en: "Increasing since the 1990s (slower recently)", fr: "En hausse depuis les années 1990 (plus lente récemment)" },
        note: {
          en: "Official SANParks scientists give a range because the count changes from year to year. Older figures still online are outdated: SANParks’ website page shows 13,750 (2010–2011) and travel sites often say about 17,000. Growth has slowed from about 6% to about 2% a year after artificial waterholes were closed.",
          fr: "Les scientifiques de SANParks donnent une fourchette car l’effectif varie d’une année à l’autre. Les anciens chiffres encore en ligne sont dépassés : la page du site de SANParks indique 13 750 (2010–2011) et les sites de voyage disent souvent environ 17 000. La croissance a ralenti d’environ 6 % à environ 2 % par an après la fermeture de points d’eau artificiels."
        },
        extra: {
          en: "951 elephants died in Kruger between 2020 and 2025: 535 from natural causes, 179 linked to snares, 207 from management actions (about 0.4% of the population per year).",
          fr: "951 éléphants sont morts au Kruger entre 2020 et 2025 : 535 de causes naturelles, 179 liés aux collets, 207 lors d’interventions de gestion (environ 0,4 % de la population par an)."
        },
        extraSrc: ["s22"],
        growthSrc: ["s24"],
        spot: {
          en: "Throughout the park, especially along rivers and near waterholes. The Letaba Elephant Hall museum shows the tusks of Kruger’s famous “Magnificent Seven” tuskers. (Traveller tips, not official.)",
          fr: "Partout dans le parc, surtout le long des rivières et près des points d’eau. Le musée Letaba Elephant Hall expose les défenses des célèbres « Sept Magnifiques » du Kruger. (Conseils de voyageurs, non officiels.)"
        },
        spotSrc: ["s20", "s28"]
      },
      leopard: {
        pop: { en: "about 1,000 leopards (unofficial)", fr: "environ 1 000 léopards (non officiel)" },
        asOf: { en: "2026 (travel website)", fr: "2026 (site de voyage)" },
        conf: "unofficial",
        src: ["s20"],
        note: {
          en: "No recent official leopard count was found. The figure of about 1,000 comes from a travel site that attributes it to SANParks, so treat it as approximate. Leopards are secretive and very hard to count.",
          fr: "Aucun recensement officiel récent du léopard n’a été trouvé. Le chiffre d’environ 1 000 vient d’un site de voyage qui l’attribue à SANParks : considérez-le comme approximatif. Les léopards sont discrets et très difficiles à compter."
        },
        spot: {
          en: "Shy and nocturnal. Your best chance is at dawn along the Skukuza–Lower Sabie road (H4-1) and the Sabie River, where they rest in trees. (Traveller tips, not official.)",
          fr: "Craintif et nocturne. Meilleures chances à l’aube le long de la route Skukuza–Lower Sabie (H4-1) et de la rivière Sabie, où il se repose dans les arbres. (Conseils de voyageurs, non officiels.)"
        },
        spotSrc: ["s20"]
      },
      buffalo: {
        pop: { en: "about 37,130 buffalo", fr: "environ 37 130 buffles" },
        asOf: "2010–2011",
        conf: "official",
        src: ["s1", "s30"],
        trend: { en: "Increasing overall; dropped in the 2015/2016 drought, then recovered", fr: "En hausse globalement ; en baisse pendant la sécheresse de 2015/2016, puis reprise" },
        note: {
          en: "Latest figure on the SANParks website, about 15 years old. Some travel sites say about 48,000 without a clear source; treat that as unverified.",
          fr: "Dernier chiffre affiché sur le site de SANParks, vieux d’environ 15 ans. Certains sites de voyage parlent d’environ 48 000 sans source claire : à considérer comme non vérifié."
        },
        spot: {
          en: "Southern and central Kruger, in large herds near water. (Traveller tips, not official.)",
          fr: "Sud et centre du Kruger, en grands troupeaux près de l’eau. (Conseils de voyageurs, non officiels.)"
        },
        spotSrc: ["s20", "s28"]
      },

      whiterhino: {
        pop: { en: "about 1,851 white rhinos (median estimate, end of 2022)", fr: "environ 1 851 rhinocéros blancs (estimation médiane, fin 2022)" },
        asOf: { en: "end of 2022 (report published 2023)", fr: "fin 2022 (rapport publié en 2023)" },
        conf: "official",
        src: ["s4", "s5", "s30"],
        trend: { en: "Decreasing because of poaching", fr: "En baisse à cause du braconnage" },
        note: {
          en: "Both rhino species together: just over 2,000 in 2025 according to SANParks officials. Kruger once held over 12,000 rhinos. The “Rhino Renaissance” campaign aims to rebuild the white rhino population from just over 2,000 to 12,000 within a decade.",
          fr: "Les deux espèces de rhinocéros ensemble : un peu plus de 2 000 en 2025 selon des responsables de SANParks. Le Kruger a abrité plus de 12 000 rhinocéros. La campagne « Rhino Renaissance » vise à reconstituer la population de rhinocéros blancs, de un peu plus de 2 000 à 12 000 en dix ans."
        },
        extra: {
          en: "174 rhinos (both species) were killed in Kruger in 2025, up from 88 in 2024, even though poaching fell 16% nationwide.",
          fr: "174 rhinocéros (les deux espèces) ont été tués au Kruger en 2025, contre 88 en 2024, alors que le braconnage a baissé de 16 % au niveau national."
        },
        extraSrc: ["s6", "s21"],
        spot: {
          en: "Mostly southern Kruger, but sightings take patience and luck. Exact rhino locations are usually not shared publicly, to protect them from poachers. (Traveller tips, not official.)",
          fr: "Surtout le sud du Kruger, mais les observations demandent patience et chance. Les positions exactes des rhinocéros ne sont généralement pas rendues publiques, pour les protéger des braconniers. (Conseils de voyageurs, non officiels.)"
        },
        spotSrc: ["s20"]
      },

      blackrhino: {
        pop: { en: "about 210 black rhinos (median estimate, end of 2022)", fr: "environ 210 rhinocéros noirs (estimation médiane, fin 2022)" },
        asOf: { en: "end of 2022 (report published 2023)", fr: "fin 2022 (rapport publié en 2023)" },
        conf: "official",
        src: ["s4", "s31", "s30"],
        trend: { en: "Decreasing because of poaching", fr: "En baisse à cause du braconnage" },
        note: {
          en: "SANParks recognises black rhinos one by one from census photos, using notches in their ears. Both rhino species together: just over 2,000 in 2025 according to SANParks officials.",
          fr: "SANParks reconnaît les rhinocéros noirs un par un grâce aux photos des recensements, à partir des encoches de leurs oreilles. Les deux espèces ensemble : un peu plus de 2 000 en 2025 selon des responsables de SANParks."
        },
        extra: {
          en: "174 rhinos (both species) were killed in Kruger in 2025, up from 88 in 2024.",
          fr: "174 rhinocéros (les deux espèces) ont été tués au Kruger en 2025, contre 88 en 2024."
        },
        extraSrc: ["s6"],
        spot: {
          en: "Rare and shy. A sighting is a real bonus. Exact rhino locations are usually not shared publicly, to protect them from poachers.",
          fr: "Rare et craintif. Une observation est un vrai bonus. Les positions exactes des rhinocéros ne sont généralement pas rendues publiques, pour les protéger des braconniers."
        },
        spotSrc: []
      },

      giraffe: {
        pop: { en: "No recent figure published", fr: "Aucun chiffre récent publié" },
        asOf: { en: "2023 aerial survey (trend only)", fr: "recensement aérien de 2023 (tendance seulement)" },
        conf: "none",
        src: ["s30", "s31"],
        trend: { en: "Increasing since the 1990s", fr: "En hausse depuis les années 1990" },
        note: {
          en: "SANParks counts giraffe by aircraft about every two years, but its public article gives only the trend, not the number. Giraffe numbers have grown since the 1990s and were not hit much by the 2015/2016 drought (SANParks, 27 Mar 2025).",
          fr: "SANParks compte les girafes par avion environ tous les deux ans, mais son article public ne donne que la tendance, pas le nombre. Les girafes sont plus nombreuses depuis les années 1990 et ont peu souffert de la sécheresse de 2015/2016 (SANParks, 27 mars 2025)."
        },
        spot: {
          en: "Widespread in open woodland and savanna with acacia trees.",
          fr: "Répandue dans les bois clairs et la savane avec des acacias."
        },
        spotSrc: []
      },

      hippo: {
        pop: { en: "No recent figure published", fr: "Aucun chiffre récent publié" },
        asOf: { en: "2023 aerial survey (trend only)", fr: "recensement aérien de 2023 (tendance seulement)" },
        conf: "none",
        src: ["s30", "s31"],
        trend: { en: "Strongly increased since the late 1990s", fr: "En forte hausse depuis la fin des années 1990" },
        note: {
          en: "SANParks counts hippos every year by flying along the rivers, but its public article gives only the trend: a strong rise since the late 1990s, with a temporary drop during the 2015/2016 drought (SANParks, 27 Mar 2025).",
          fr: "SANParks compte les hippopotames chaque année en survolant les rivières, mais son article public ne donne que la tendance : une forte hausse depuis la fin des années 1990, avec une baisse temporaire pendant la sécheresse de 2015/2016 (SANParks, 27 mars 2025)."
        },
        spot: {
          en: "Rivers and dams such as the Sabie, Crocodile, Olifants and Letaba. Watch from safe river viewpoints and camps.",
          fr: "Rivières et barrages comme la Sabie, la Crocodile, l’Olifants et la Letaba. Observez depuis les points de vue sécurisés et les camps."
        },
        spotSrc: []
      },

      zebra: {
        pop: { en: "No recent figure published", fr: "Aucun chiffre récent publié" },
        asOf: { en: "2023 aerial survey (trend only)", fr: "recensement aérien de 2023 (tendance seulement)" },
        conf: "none",
        src: ["s30", "s31"],
        trend: { en: "Increasing", fr: "En hausse" },
        note: {
          en: "SANParks counts zebra by aircraft about every two years and reports that numbers are increasing, but its public article does not give the total (SANParks, 27 Mar 2025).",
          fr: "SANParks compte les zèbres par avion environ tous les deux ans et indique que leur nombre augmente, mais son article public ne donne pas le total (SANParks, 27 mars 2025)."
        },
        spot: {
          en: "Open grasslands, often mixed with wildebeest. Very common.",
          fr: "Prairies ouvertes, souvent mêlés aux gnous. Très commun."
        },
        spotSrc: ["s28"]
      },

      impala: {
        pop: { en: "158,220 – 228,012 impala", fr: "158 220 à 228 012 impalas" },
        asOf: { en: "2012 count", fr: "comptage de 2012" },
        conf: "scientific",
        src: ["s32", "s30"],
        trend: { en: "Stable over the last 10 years", fr: "Stable sur les 10 dernières années" },
        note: {
          en: "From a South African Red List assessment based on a 2012 count. SANParks says impala numbers have been stable for 10 years in its 2023 aerial survey (article of 27 Mar 2025) but has not published a new total. Impala are by far Kruger’s most numerous large herbivore.",
          fr: "Issu d’une évaluation de la Liste rouge sud-africaine fondée sur un comptage de 2012. SANParks indique que l’effectif est stable depuis 10 ans d’après son recensement aérien de 2023 (article du 27 mars 2025) mais n’a pas publié de nouveau total. L’impala est de loin le grand herbivore le plus nombreux du Kruger."
        },
        spot: {
          en: "Everywhere in the park, in large herds, often near rivers and in open woodland.",
          fr: "Partout dans le parc, en grands troupeaux, souvent près des rivières et dans les bois clairs."
        },
        spotSrc: []
      },

      kudu: {
        pop: { en: "8,239 – 13,490 greater kudu", fr: "8 239 à 13 490 grands koudous" },
        asOf: { en: "2012 count", fr: "comptage de 2012" },
        conf: "scientific",
        src: ["s34", "s30"],
        trend: { en: "Stable over the last 10 years", fr: "Stable sur les 10 dernières années" },
        note: {
          en: "From a South African Red List assessment based on a 2012 count. SANParks says kudu numbers have been stable for 10 years (2023 aerial survey) but has not published a new total.",
          fr: "Issu d’une évaluation de la Liste rouge sud-africaine fondée sur un comptage de 2012. SANParks indique que l’effectif est stable depuis 10 ans (recensement aérien de 2023) mais n’a pas publié de nouveau total."
        },
        spot: {
          en: "Dense bush and thickets, often near dry riverbeds. Look for the bulls’ spiral horns and stay quiet, they are shy.",
          fr: "Brousse dense et fourrés, souvent près des lits de rivière à sec. Cherchez les cornes spiralées des mâles et restez silencieux : ils sont craintifs."
        },
        spotSrc: []
      },

      wildebeest: {
        pop: { en: "6,058 – 10,896 blue wildebeest", fr: "6 058 à 10 896 gnous bleus" },
        asOf: { en: "2012 count", fr: "comptage de 2012" },
        conf: "scientific",
        src: ["s36", "s30"],
        trend: { en: "Increasing", fr: "En hausse" },
        note: {
          en: "From a South African Red List assessment based on a 2012 count. Kruger holds the largest protected blue wildebeest population in South Africa. SANParks says numbers are increasing (2023 aerial survey) but has not published a new total.",
          fr: "Issu d’une évaluation de la Liste rouge sud-africaine fondée sur un comptage de 2012. Le Kruger abrite la plus grande population protégée de gnous bleus d’Afrique du Sud. SANParks indique que l’effectif augmente (recensement aérien de 2023) mais n’a pas publié de nouveau total."
        },
        spot: {
          en: "Open grasslands, mostly in the central part of the park, often together with zebra.",
          fr: "Prairies ouvertes, surtout dans le centre du parc, souvent avec des zèbres."
        },
        spotSrc: []
      },

      waterbuck: {
        pop: { en: "3,763 – 8,907 waterbuck", fr: "3 763 à 8 907 cobes à croissant" },
        asOf: { en: "2012 count", fr: "comptage de 2012" },
        conf: "scientific",
        src: ["s33", "s30"],
        trend: { en: "Stable over the last 10 years", fr: "Stable sur les 10 dernières années" },
        note: {
          en: "From a South African Red List assessment based on a 2012 count. SANParks says waterbuck numbers have been stable for 10 years (2023 aerial survey) but has not published a new total.",
          fr: "Issu d’une évaluation de la Liste rouge sud-africaine fondée sur un comptage de 2012. SANParks indique que l’effectif est stable depuis 10 ans (recensement aérien de 2023) mais n’a pas publié de nouveau total."
        },
        spot: {
          en: "Always close to water: river banks and dams.",
          fr: "Toujours près de l’eau : berges des rivières et barrages."
        },
        spotSrc: []
      },

      warthog: {
        pop: { en: "2,000 – 5,000 warthogs (about 0.25 per km²)", fr: "2 000 à 5 000 phacochères (environ 0,25 par km²)" },
        asOf: { en: "2012 estimate", fr: "estimation de 2012" },
        conf: "scientific",
        src: ["s35", "s31"],
        trend: { en: "Stable to increasing (South Africa)", fr: "Stable ou en hausse (Afrique du Sud)" },
        note: {
          en: "From a South African Red List assessment. SANParks includes warthog in its plains-game aerial survey but has not published a recent total online.",
          fr: "Issu d’une évaluation de la Liste rouge sud-africaine. SANParks inclut le phacochère dans son recensement aérien du gibier des plaines mais n’a pas publié de total récent en ligne."
        },
        spot: {
          en: "Common in open grassland and near camps. Often seen kneeling to feed.",
          fr: "Commun dans les prairies ouvertes et près des camps. Souvent vu à genoux en train de se nourrir."
        },
        spotSrc: []
      },

      hyena: {
        pop: { en: "about 7,339 spotted hyenas (range 6,998 – 7,680)", fr: "environ 7 339 hyènes tachetées (fourchette 6 998 à 7 680)" },
        asOf: { en: "2015", fr: "2015" },
        conf: "scientific",
        src: ["s37", "s31"],
        trend: { en: "Increased between 2005 and 2015", fr: "En hausse entre 2005 et 2015" },
        note: {
          en: "From a scientific estimate of 2015, reported by the South African Red List. The increase between 2005 and 2015 is considered real, linked to more prey, and the park population is not threatened. SANParks re-estimates lions and hyenas about every five years with a night-time call-up survey, but no newer figure was found online.",
          fr: "Issu d’une estimation scientifique de 2015, rapportée par la Liste rouge sud-africaine. La hausse entre 2005 et 2015 est jugée réelle, liée à davantage de proies, et la population du parc n’est pas menacée. SANParks refait une estimation des lions et des hyènes environ tous les cinq ans par appel nocturne, mais aucun chiffre plus récent n’a été trouvé en ligne."
        },
        spot: {
          en: "At dusk, at night and at dawn, near waterholes, kills and camp fences. Listen for the whooping calls.",
          fr: "Au crépuscule, la nuit et à l’aube, près des points d’eau, des carcasses et des clôtures des camps. Écoutez leurs hurlements."
        },
        spotSrc: []
      },


      cheetah: {
        pop: {
          en: "about 412 cheetahs (high-confidence estimate); 295–330 mature adults",
          fr: "environ 412 guépards (estimation à haut niveau de confiance) ; 295 à 330 adultes"
        },
        asOf: { en: "2016 (South African Red List assessment)", fr: "2016 (évaluation de la Liste rouge sud-africaine)" },
        conf: "scientific",
        src: ["s13"],
        note: {
          en: "From a scientific regional Red List assessment, so it is about 10 years old. Kruger holds the largest protected cheetah population in South Africa. A first national census of free-roaming cheetahs in 2026 found a steep decline outside protected parks.",
          fr: "Issu d’une évaluation scientifique régionale de la Liste rouge : il date donc d’environ 10 ans. Le Kruger abrite la plus grande population protégée de guépards d’Afrique du Sud. Un premier recensement national des guépards en liberté, en 2026, a révélé un déclin marqué hors des parcs protégés."
        },
        extraSrc: ["s23"],
        spot: {
          en: "Open grassy plains, mostly in the central part of the park. Sightings are uncommon; ask at camp reception.",
          fr: "Plaines herbeuses ouvertes, surtout dans le centre du parc. Observations peu fréquentes ; renseignez-vous à la réception du camp."
        },
        spotSrc: []
      },
      wilddog: {
        pop: {
          en: "about 163 adults and yearlings (average over the study period)",
          fr: "environ 163 adultes et jeunes d’un an (moyenne sur la période d’étude)"
        },
        asOf: { en: "published 2020", fr: "publié en 2020" },
        conf: "scientific",
        src: ["s15"],
        note: {
          en: "From a 20-year national review by the Endangered Wildlife Trust. Kruger holds the largest share of South Africa’s wild dogs, which are the country’s most endangered carnivore. Numbers were stable but have declined slightly over time.",
          fr: "Issu d’un bilan national sur 20 ans de l’Endangered Wildlife Trust. Le Kruger abrite la plus grande part des lycaons d’Afrique du Sud, le carnivore le plus menacé du pays. Les effectifs étaient stables mais ont légèrement diminué avec le temps."
        },
        spot: {
          en: "Rare. Sightings are mostly luck. Check the sightings boards at camps and ask rangers.",
          fr: "Rare. Les observations relèvent surtout de la chance. Consultez les tableaux d’observations des camps et demandez aux rangers."
        },
        spotSrc: []
      },

      martialeagle: {
        "pop": {
          "en": "About 110 breeding adults (2011 aerial nest survey), a decrease of at least 50%",
          "fr": "Environ 110 adultes reproducteurs (recensement aérien des nids de 2011), soit une baisse d’au moins 50 %"
        },
        "asOf": {
          "en": "2011",
          "fr": "2011"
        },
        "conf": "scientific",
        "src": [
          "s66"
        ],
        "trend": {
          "en": "Decreasing",
          "fr": "En baisse"
        },
        "note": {
          "en": "Figure from the South African regional Red List (SANBI), based on Murn et al. 2012. It is a scientific estimate, not an official SANParks count, and it is old.",
          "fr": "Chiffre de la Liste rouge régionale sud-africaine (SANBI), d’après Murn et al. 2012. C’est une estimation scientifique, pas un comptage officiel de SANParks, et elle est ancienne."
        },
        "spot": {
          "en": "Look for a very large dark eagle perched in a tall tree or soaring over open country. Sightings are never guaranteed. (General guidance, not official.)",
          "fr": "Cherchez un très grand aigle sombre perché dans un grand arbre ou planant au-dessus des zones ouvertes. Une observation n’est jamais garantie. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      whitebackedvulture: {
        "pop": {
          "en": "About 904 breeding pairs (±162)",
          "fr": "Environ 904 couples reproducteurs (±162)"
        },
        "asOf": {
          "en": "Sep 2011",
          "fr": "sept. 2011"
        },
        "conf": "scientific",
        "src": [
          "s63",
          "s64"
        ],
        "trend": {
          "en": "Likely declined by up to 50% since the early 1980s; broadly stable since the mid-1990s",
          "fr": "Probablement en baisse d’au plus 50 % depuis le début des années 1980 ; plutôt stable depuis le milieu des années 1990"
        },
        "note": {
          "en": "From an aerial survey in 2011 (Murn et al., published 2013). It is the most recent Kruger estimate we found; an earlier analysis of the same data gave about 624 pairs. Not an official SANParks figure.",
          "fr": "Issu d’un relevé aérien de 2011 (Murn et al., publié en 2013). C’est l’estimation la plus récente du Kruger que nous ayons trouvée ; une autre analyse des mêmes données donnait environ 624 couples. Pas un chiffre officiel de SANParks."
        },
        "spot": {
          "en": "Look for vultures circling high above, around carcasses, and in tall trees along rivers where they nest. (General guidance, not official.)",
          "fr": "Cherchez des vautours qui tournent haut dans le ciel, autour des carcasses, et dans les grands arbres le long des rivières où ils nichent. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      lappetvulture: {
        "pop": {
          "en": "About 78 breeding pairs (±18)",
          "fr": "Environ 78 couples reproducteurs (±18)"
        },
        "asOf": {
          "en": "Sep 2011",
          "fr": "sept. 2011"
        },
        "conf": "scientific",
        "src": [
          "s63",
          "s65"
        ],
        "trend": {
          "en": "Not thought to have changed significantly in recent times (down from up to 100 pairs in 1982–1993)",
          "fr": "Pas de changement important récent (contre jusqu’à 100 couples en 1982–1993)"
        },
        "note": {
          "en": "From an aerial survey in 2011 (Murn et al., published 2013). Not an official SANParks figure.",
          "fr": "Issu d’un relevé aérien de 2011 (Murn et al., publié en 2013). Pas un chiffre officiel de SANParks."
        },
        "spot": {
          "en": "Usually seen at carcasses, where it is the biggest and most dominant vulture. (General guidance, not official.)",
          "fr": "On le voit surtout aux carcasses, où c’est le plus grand et le plus dominant des vautours. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      fisheagle: {
        "pop": {
          "en": "No recent figure found",
          "fr": "Aucun chiffre récent trouvé"
        },
        "asOf": {
          "en": "—",
          "fr": "—"
        },
        "conf": "none",
        "src": [],
        "note": {
          "en": "We did not find a published count for Kruger. This eagle is tied to water, so rivers and dams are the places to look.",
          "fr": "Nous n’avons pas trouvé de comptage publié pour le Kruger. Cet aigle vit près de l’eau : cherchez-le le long des rivières et des barrages."
        },
        "spot": {
          "en": "Along rivers and dams, perched on a branch above the water; its far-carrying call often gives it away. (General guidance, not official.)",
          "fr": "Le long des rivières et des barrages, perché sur une branche au-dessus de l’eau ; son cri qui porte loin le trahit souvent. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      blackbackedjackal: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": {
          "en": "—",
          "fr": "—"
        },
        "conf": "none",
        "src": [],
        "note": {
          "en": "We did not find a figure for this park in the sources we could read.",
          "fr": "Nous n’avons pas trouvé de chiffre pour ce parc dans les sources consultées."
        },
        "spot": {
          "en": "Often seen trotting alone or in pairs along roads and open ground, especially at dawn and dusk. (General guidance, not official.)",
          "fr": "Souvent vu trottant seul ou en couple le long des routes et en terrain ouvert, surtout à l’aube et au crépuscule. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      vervet: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": {
          "en": "—",
          "fr": "—"
        },
        "conf": "none",
        "src": [],
        "note": {
          "en": "We did not find a figure for this park in the sources we could read.",
          "fr": "Nous n’avons pas trouvé de chiffre pour ce parc dans les sources consultées."
        },
        "spot": {
          "en": "Look for troops near rest camps, rivers and picnic sites, usually in trees. (General guidance, not official.)",
          "fr": "Cherchez des troupes près des camps, des rivières et des aires de pique-nique, souvent dans les arbres. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      eland: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": {
          "en": "—",
          "fr": "—"
        },
        "conf": "none",
        "src": [],
        "note": {
          "en": "We did not find a figure for this park in the sources we could read.",
          "fr": "Nous n’avons pas trouvé de chiffre pour ce parc dans les sources consultées."
        },
        "spot": {
          "en": "Look for a very large tan antelope in open bush, often in herds and shy of vehicles. (General guidance, not official.)",
          "fr": "Cherchez une très grande antilope beige en brousse ouverte, souvent en troupeau et méfiante envers les véhicules. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      nyala: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": {
          "en": "—",
          "fr": "—"
        },
        "conf": "none",
        "src": [],
        "note": {
          "en": "We did not find a figure for this park in the sources we could read.",
          "fr": "Nous n’avons pas trouvé de chiffre pour ce parc dans les sources consultées."
        },
        "spot": {
          "en": "Mostly in dense riverine bush in the north-east of the park, often at dawn and dusk. The Kruger is listed as a major population area in South Africa. (General guidance, not official.)",
          "fr": "Surtout dans la brousse dense en bordure de rivière dans le nord-est du parc, souvent à l’aube et au crépuscule. Le Kruger est cité comme zone de population majeure en Afrique du Sud. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      reedbuck: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": {
          "en": "—",
          "fr": "—"
        },
        "conf": "none",
        "src": [],
        "note": {
          "en": "We did not find a figure for this park in the sources we could read.",
          "fr": "Nous n’avons pas trouvé de chiffre pour ce parc dans les sources consultées."
        },
        "spot": {
          "en": "Look near rivers and wet grassland, alone or in pairs. Kruger is listed as a major population area in South Africa. (General guidance, not official.)",
          "fr": "Cherchez-le près des rivières et des prairies humides, seul ou en couple. Le Kruger est cité comme zone de population majeure en Afrique du Sud. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      steenbok: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": {
          "en": "—",
          "fr": "—"
        },
        "conf": "none",
        "src": [],
        "note": {
          "en": "We did not find a figure for this park in the sources we could read.",
          "fr": "Nous n’avons pas trouvé de chiffre pour ce parc dans les sources consultées."
        },
        "spot": {
          "en": "A small, solitary antelope often seen in short grass near roads. (General guidance, not official.)",
          "fr": "Une petite antilope solitaire souvent vue dans l’herbe courte près des routes. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      porcupine: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": {
          "en": "—",
          "fr": "—"
        },
        "conf": "none",
        "src": [],
        "note": {
          "en": "We did not find a figure for this park in the sources we could read.",
          "fr": "Nous n’avons pas trouvé de chiffre pour ce parc dans les sources consultées."
        },
        "spot": {
          "en": "Nocturnal: sightings are rare and mostly on night drives. (General guidance, not official.)",
          "fr": "Nocturne : les observations sont rares et surtout lors des safaris de nuit. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      baboon: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s93"
        ],
        "note": {
          "en": "A travel guide says chacma baboons are very common throughout the park, with troops of about 20–80. We did not find a park-wide count. The MDD page also shows a photo of baboons taken in Kruger.",
          "fr": "Un guide de voyage indique que les babouins chacma sont très communs dans tout le parc, avec des troupes d’environ 20 à 80 individus. Nous n’avons pas trouvé de comptage pour l’ensemble du parc. La page du MDD montre aussi une photo de babouins prise au Kruger."
        },
        "spot": {
          "en": "Along the river roads, especially the Sabie River road between Skukuza and Lower Sabie, and around rest camps. Best in the early morning and late afternoon. Keep food secured. (Traveller tips, not official.)",
          "fr": "Le long des routes de rivière, surtout la route de la rivière Sabie entre Skukuza et Lower Sabie, et autour des camps. Meilleur moment : tôt le matin et en fin d’après-midi. Gardez la nourriture à l’abri. (Conseils de voyageurs, non officiels.)"
        },
        "spotSrc": [
          "s93"
        ]
      },

      mongoose: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s100"
        ],
        "note": {
          "en": "A travel guide says the slender mongoose is found throughout the park. The MDD page also shows a photo of one taken in Kruger (1976). We did not find a count.",
          "fr": "Un guide de voyage indique que la mangouste rouge se trouve dans tout le parc. La page du MDD montre aussi une photo de l’espèce prise au Kruger (1976). Nous n’avons pas trouvé de comptage."
        },
        "spot": {
          "en": "Look along roadsides where the grass grows up to the edge: it is shy, usually alone, and often seen dashing across the road with its black tail tip held high. (Traveller tips, not official.)",
          "fr": "Cherchez-la le long des routes où l’herbe pousse jusqu’au bord : elle est timide, généralement seule, et souvent vue traversant la route en courant, le bout noir de la queue dressé. (Conseils de voyageurs, non officiels.)"
        },
        "spotSrc": [
          "s100"
        ]
      },

      honeybadger: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s103"
        ],
        "note": {
          "en": "Wikipedia lists Kruger National Park among the protected areas where the honey badger occurs. We did not find a count or an official SANParks page for it.",
          "fr": "Wikipédia cite le parc national Kruger parmi les aires protégées où vit le ratel. Nous n’avons trouvé ni comptage ni page officielle de SANParks."
        },
        "spot": {
          "en": "Rarely seen and active at any time of day, so sightings are mostly luck. Scan road verges and dry riverbeds, and ask at the camp reception for recent sightings. (General guidance, not official.)",
          "fr": "Rarement vu et actif à toute heure, les observations relèvent surtout de la chance. Parcourez des yeux les bords de route et les lits de rivière à sec, et renseignez-vous à la réception du camp sur les observations récentes. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      serval: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s118",
          "s119"
        ],
        "note": {
          "en": "We found no official SANParks page confirming the serval; its mammal checklist page could not be read in full. A travel site lists it among Kruger predators (“seldom encountered during ordinary game drives”) and a Kruger mammal checklist on a forum includes it. No count found.",
          "fr": "Nous n’avons trouvé aucune page officielle SANParks confirmant le serval ; la page de la liste des mammifères n’a pas pu être lue en entier. Un site de voyage le range parmi les prédateurs du Kruger (« rarement rencontré lors des safaris ordinaires ») et une liste de mammifères du Kruger sur un forum l’inclut. Aucun chiffre trouvé."
        },
        "spot": {
          "en": "Seldom seen on ordinary game drives. It hunts rodents in grassland, so look in tall grass near water at dawn or dusk. (General guidance, not official.)",
          "fr": "Rarement vu lors des safaris ordinaires. Il chasse les rongeurs dans les prairies : cherchez dans les hautes herbes près de l’eau, à l’aube ou au crépuscule. (Conseil général, non officiel.)"
        },
        "spotSrc": [
          "s118"
        ]
      },

      caracal: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s118",
          "s119"
        ],
        "note": {
          "en": "We found no official SANParks page confirming the caracal; its mammal checklist page could not be read in full. A travel site lists it among Kruger predators and a Kruger mammal checklist on a forum includes it. No count found.",
          "fr": "Nous n’avons trouvé aucune page officielle SANParks confirmant le caracal ; la page de la liste des mammifères n’a pas pu être lue en entier. Un site de voyage le range parmi les prédateurs du Kruger et une liste de mammifères du Kruger sur un forum l’inclut. Aucun chiffre trouvé."
        },
        "spot": {
          "en": "Shy and mostly nocturnal, so sightings are rare. Hunts alone, mostly in cooler hours and after dark; night drives with a ranger give the best chance. (General guidance, not official.)",
          "fr": "Craintif et surtout nocturne : les observations sont rares. Chasse seul, surtout aux heures fraîches et la nuit ; les safaris de nuit avec un ranger offrent la meilleure chance. (Conseil général, non officiel.)"
        },
        "spotSrc": [
          "s118",
          "s108"
        ]
      },

      pangolin: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s117"
        ],
        "note": {
          "en": "SANParks confirms Temminck’s pangolins in Kruger through the story of “Harry”, taken from poachers near Numbi Gate in September 2022, rehabilitated and released back into the park (last tracked in June 2023). The article gives no population figure and no poaching statistics.",
          "fr": "SANParks confirme la présence de pangolins de Temminck au Kruger avec l’histoire de « Harry », saisi à des braconniers près de la porte Numbi en septembre 2022, réhabilité puis relâché dans le parc (dernier suivi en juin 2023). L’article ne donne ni chiffre de population ni statistiques de braconnage."
        },
        "spot": {
          "en": "Very rarely seen by visitors: it is nocturnal and shy. A ranger-led night drive or walk gives the only realistic chance. (General guidance, not official.)",
          "fr": "Très rarement vu par les visiteurs : il est nocturne et craintif. Un safari de nuit ou une marche avec un ranger offre la seule chance réaliste. (Conseil général, non officiel.)"
        },
        "spotSrc": [
          "s121",
          "s109"
        ]
      },

      sidestripedjackal: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s118",
          "s119",
          "s120"
        ],
        "note": {
          "en": "We found no official SANParks page confirming it; its mammal checklist page could not be read in full. Travel sites and a Kruger mammal checklist on a forum include it. It is described as timid and rarely seen, and less common than the black-backed jackal. No count found.",
          "fr": "Nous n’avons trouvé aucune page officielle SANParks le confirmant ; la page de la liste des mammifères n’a pas pu être lue en entier. Des sites de voyage et une liste de mammifères du Kruger sur un forum l’incluent. Il est décrit comme craintif et rarement vu, et moins commun que le chacal à chabraque. Aucun chiffre trouvé."
        },
        "spot": {
          "en": "Nocturnal, so night drives give the best chance. Look on open plains and wooded savanna, and where fruit is ripe. Daytime sightings are uncommon. (Traveller tips, not official.)",
          "fr": "Nocturne : les safaris de nuit offrent la meilleure chance. Cherchez dans les plaines ouvertes et la savane boisée, et là où les fruits sont mûrs. Les observations de jour sont peu fréquentes. (Conseils de voyageurs, non officiels.)"
        },
        "spotSrc": [
          "s120",
          "s118"
        ]
      },

      nilecrocodile: {
        "pop": {
          "en": "About 3,000 Nile crocodiles (Wikipedia text); its table gives 4,420 for 2010 and 2011",
          "fr": "Environ 3 000 crocodiles du Nil (texte de Wikipédia) ; son tableau indique 4 420 en 2010 et 2011"
        },
        "asOf": "2010–2011",
        "conf": "estimate",
        "src": [
          "s134",
          "s130",
          "s132",
          "s133"
        ],
        "note": {
          "en": "SANParks counts crocodiles from a helicopter along eight large rivers and some dams, in four size classes, but we found no SANParks total. SANParks says crocodile numbers have decreased since a high at the end of the 1990s (page of 27 March 2025). The Wikipedia figures disagree (3,000 vs 4,420) and are not an official SANParks count. For comparison, a helicopter survey found 385 crocodiles in the Olifants Gorge and lower Letaba River in late 2009 (unofficial website, surveyor not named). The Olifants River has seen many crocodile deaths, linked to pollution.",
          "fr": "SANParks compte les crocodiles en hélicoptère le long de huit grandes rivières et de quelques barrages, en quatre classes de taille, mais nous n’avons trouvé aucun total SANParks. SANParks indique que le nombre de crocodiles a diminué depuis un pic à la fin des années 1990 (page du 27 mars 2025). Les chiffres de Wikipédia se contredisent (3 000 contre 4 420) et ne sont pas un comptage officiel de SANParks. À titre de comparaison, un survol en hélicoptère a recensé 385 crocodiles dans les gorges de l’Olifants et le bas Letaba fin 2009 (site non officiel, observateur non nommé). L’Olifants a connu de nombreuses morts de crocodiles, liées à la pollution."
        },
        "spot": {
          "en": "Look for them on sandbanks and at the water’s edge along the big rivers, such as the Olifants (gorge), Letaba, Sabie and Crocodile rivers, and near dams. Best seen from bridges, lookouts and fenced rest-camp viewpoints. Never get out of your vehicle outside permitted spots. (General guidance, not official.)",
          "fr": "Cherchez-les sur les bancs de sable et au bord de l’eau le long des grandes rivières, comme l’Olifants (gorges), la Letaba, la Sabie et la Crocodile, et près des barrages. Idéal depuis les ponts, les belvédères et les points de vue clôturés des camps. Ne descendez jamais du véhicule hors des endroits autorisés. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      nilemonitor: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s135"
        ],
        "note": {
          "en": "An unofficial Kruger website lists a “water leguaan” (the local name for the Nile monitor, general knowledge, to verify) as found at permanent water sources, up to 2 m long. We found no SANParks species list for Kruger that names it (the SANParks reptile list we found is for Addo, not Kruger). Wikipedia’s Nile monitor page does not mention Kruger.",
          "fr": "Un site non officiel sur le Kruger cite un « water leguaan » (nom local du varan du Nil, connaissance générale, à vérifier) présent près des points d’eau permanents, jusqu’à 2 m de long. Nous n’avons pas trouvé de liste d’espèces SANParks pour le Kruger qui le nomme (la liste de reptiles SANParks trouvée concerne Addo, pas le Kruger). La page Wikipédia du varan du Nil ne mentionne pas le Kruger."
        },
        "spot": {
          "en": "Look near rivers, dams and other permanent water, often on banks or in trees over water. Keep clear of the water’s edge. (General guidance, not official; habitat from an unofficial website.)",
          "fr": "Cherchez-le près des rivières, des barrages et autres points d’eau permanents, souvent sur les berges ou dans des arbres au-dessus de l’eau. Restez loin du bord de l’eau. (Conseil général, non officiel ; habitat tiré d’un site non officiel.)"
        },
        "spotSrc": [
          "s135"
        ]
      },

      blackmamba: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s148",
          "s151",
          "s149"
        ],
        "note": {
          "en": "Present in Kruger according to the sources read: an article on dangerous snakes of Mpumalanga names Kruger National Park as an example of its range, and Wikipedia’s Kruger page mentions the black mamba. Kruger has 54 snake species, nine of them deadly venomous, according to a travel site (not official). No count found.",
          "fr": "Présent au Kruger d’après les sources lues : un article sur les serpents dangereux du Mpumalanga cite le parc national Kruger comme exemple de son aire, et la page Wikipédia du Kruger mentionne le mamba noir. Le Kruger compte 54 espèces de serpents, dont neuf mortellement venimeuses, selon un site de voyage (non officiel). Aucun comptage trouvé."
        },
        "spot": {
          "en": "Rarely seen: it is shy and fast, and lives in the Lowveld and warmer bushveld, often near termite mounds and burrows. Never look for it on foot; if you spot one from the car, stay inside. (General guidance, not official.)",
          "fr": "Rarement vu : il est craintif et rapide, et vit dans le Lowveld et le bushveld chaud, souvent près des termitières et des terriers. Ne le cherchez jamais à pied ; si vous en voyez un depuis la voiture, restez à l’intérieur. (Conseil général, non officiel.)"
        },
        "spotSrc": [
          "s148"
        ]
      },

      spittingcobra: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s148",
          "s149",
          "s150"
        ],
        "note": {
          "en": "Present in Kruger according to the sources read: described as common throughout the Lowveld, with a photo caption placing one near Mopani in Kruger (D12), and listed among Kruger reptiles by two travel sites (not official). No count found.",
          "fr": "Présent au Kruger d’après les sources lues : décrit comme commun dans tout le Lowveld, avec une légende de photo en plaçant un près de Mopani dans le Kruger (D12), et cité parmi les reptiles du Kruger par deux sites de voyage (non officiels). Aucun comptage trouvé."
        },
        "spot": {
          "en": "Mostly active at dusk and night and often found near water; it may turn up around camps and buildings. Never approach it, and keep your face away from a snake that rears up. (General guidance, not official.)",
          "fr": "Surtout actif au crépuscule et la nuit, souvent près de l’eau ; il peut apparaître autour des camps et des bâtiments. Ne vous en approchez jamais et éloignez le visage d’un serpent qui se dresse. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      chameleon: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s150",
          "s140"
        ],
        "note": {
          "en": "A travel site (not official) lists the “Common Flap-neck Chameleon” among Kruger reptiles. Wikipedia only says the range reaches northern South Africa. We did not find an official SANParks list.",
          "fr": "Un site de voyage (non officiel) cite le « Common Flap-neck Chameleon » parmi les reptiles du Kruger. Wikipédia dit seulement que l’aire atteint le nord de l’Afrique du Sud. Nous n’avons pas trouvé de liste officielle de SANParks."
        },
        "spot": {
          "en": "Slow and well camouflaged, it is usually found in trees and bushes, and is sometimes seen crossing roads. Look carefully at roadside branches and drive slowly. (General guidance, not official.)",
          "fr": "Lent et bien camouflé, on le trouve surtout dans les arbres et buissons, et parfois en train de traverser les routes. Regardez attentivement les branches au bord des routes et roulez doucement. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      sebapython: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s157",
          "s158"
        ],
        "note": {
          "en": "Two travel sites say pythons occur in Kruger; one names Python natalensis (the southern rock python, treated here with Seba’s python) and calls it the largest snake in the park, another says pythons are fairly common but difficult to see. We found no official SANParks list or count.",
          "fr": "Deux sites de voyage indiquent que des pythons vivent au Kruger ; l’un nomme Python natalensis (le python de roche du sud, regroupé ici avec le python de Seba) et en fait le plus grand serpent du parc, l’autre dit qu’ils sont assez communs mais difficiles à voir. Nous n’avons trouvé ni liste officielle SANParks ni comptage."
        },
        "spot": {
          "en": "Mixed woodland near water; mostly nocturnal but sometimes seen by day, crossing roads or draped over branches. (Travel-site tips, not official.)",
          "fr": "Bois mixtes près de l’eau ; surtout nocturne mais parfois vu de jour, traversant les routes ou posé sur des branches. (Conseils de sites de voyage, non officiels.)"
        },
        "spotSrc": [
          "s157",
          "s158"
        ]
      },

      marabou: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s161"
        ],
        "note": {
          "en": "SANParks’ bird page names the marabou stork among Kruger’s birds, but gives no count.",
          "fr": "La page des oiseaux de SANParks cite le marabout parmi les oiseaux du Kruger, sans donner de chiffre."
        },
        "spot": {
          "en": "Sometimes seen with other storks near Sunset Dam (Lower Sabie), and regularly at the waterhole outside Orpen Camp.",
          "fr": "Parfois vu avec d’autres cigognes près de Sunset Dam (Lower Sabie), et régulièrement au point d’eau devant le camp d’Orpen."
        },
        "spotSrc": [
          "s161"
        ]
      },

      sable: {
        "pop": {
          "en": "About 290 (2011 table); SANParks-related article says roughly 300, down from 2,240 in 1986",
          "fr": "Environ 290 (tableau de 2011) ; un article indique environ 300, contre 2 240 en 1986"
        },
        "asOf": "2011 (table); undated article",
        "conf": "estimate",
        "src": [
          "s164",
          "s166",
          "s165"
        ],
        "note": {
          "en": "Wikipedia’s Kruger table (“as of 2011”) shows 290 sable (nominate ssp.). An article on krugerpark.co.za (undated) says numbers fell from 2,240 in 1986 to about 300 and that census methods are too imprecise for such a small population. SANParks (read Nov 2026) says rare antelope, including roan and sable, are slowly increasing, confirmed by the 2023 aerial survey, but gives no count. Not an official current figure.",
          "fr": "Le tableau de Wikipédia sur le Kruger (« en 2011 ») indique 290 hippotragues noirs (sous-espèce nominale). Un article de krugerpark.co.za (non daté) dit que les effectifs sont passés de 2 240 en 1986 à environ 300 et que les méthodes de recensement sont trop imprécises pour une si petite population. SANParks (consulté en nov. 2026) indique que les antilopes rares, dont l’antilope noire et l’antilope rouanne, augmentent lentement, ce que confirme le recensement aérien de 2023, mais sans chiffre. Ce n’est pas un chiffre officiel actuel."
        },
        "spot": {
          "en": "Rare and hard to find. Our sources say it has a fairly wide distribution in the park but give no specific spots. (General guidance, not official.)",
          "fr": "Rare et difficile à trouver. Nos sources indiquent une répartition assez large dans le parc, sans lieux précis. (Conseil général, non officiel.)"
        },
        "spotSrc": [
          "s166"
        ]
      },

      roan: {
        "pop": {
          "en": "About 90 (2011 table)",
          "fr": "Environ 90 (tableau de 2011)"
        },
        "asOf": "2011",
        "conf": "estimate",
        "src": [
          "s164",
          "s166",
          "s165"
        ],
        "note": {
          "en": "Wikipedia’s Kruger table (“as of 2011”) shows 90 roan (nominate ssp.). Roan and sable fell sharply from the late 1980s and, unlike most species, did not recover when rains improved in the late 1990s; some roan were protected in a 300-hectare enclosure (krugerpark.co.za article, undated). SANParks says rare antelope are slowly increasing again, confirmed by the 2023 aerial survey, with no count given. Not an official current figure.",
          "fr": "Le tableau de Wikipédia sur le Kruger (« en 2011 ») indique 90 antilopes rouannes (sous-espèce nominale). Les effectifs de l’antilope rouanne et de l’antilope noire ont chuté dès la fin des années 1980 et, contrairement à la plupart des espèces, n’ont pas rebondi avec le retour des pluies fin des années 1990 ; des rouannes ont été protégées dans un enclos de 300 hectares (article de krugerpark.co.za, non daté). SANParks indique que les antilopes rares augmentent à nouveau lentement, ce que confirme le recensement aérien de 2023, sans chiffre. Ce n’est pas un chiffre officiel actuel."
        },
        "spot": {
          "en": "Very rare; no specific viewing spot found in our sources. (General guidance, not official.)",
          "fr": "Très rare ; aucun lieu d’observation précis trouvé dans nos sources. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      },

      ostrich: {
        "pop": {
          "en": "No published count found for Kruger",
          "fr": "Aucun comptage publié trouvé pour le Kruger"
        },
        "asOf": "—",
        "conf": "none",
        "src": [
          "s178",
          "s179"
        ],
        "note": {
          "en": "Listed as “Common Ostrich” / “Ostrich” in two unofficial, undated Kruger bird checklists, with no abundance information. The SANParks birds page we read does not mention it. We found no count.",
          "fr": "Figure comme « Common Ostrich » / « Ostrich » dans deux listes d’oiseaux du Kruger non officielles et non datées, sans information d’abondance. La page oiseaux de SANParks consultée n’en parle pas. Aucun comptage trouvé."
        },
        "spot": {
          "en": "Often seen in open grassland and savanna, alone or in small groups, sometimes alongside zebras and antelope. (General guidance, not official.)",
          "fr": "Souvent vue dans les prairies ouvertes et la savane, seule ou en petits groupes, parfois avec des zèbres et des antilopes. (Conseil général, non officiel.)"
        },
        "spotSrc": []
      }
    }
  },

  /* Countries where each animal lives. present / back (reintroduced) / gone (extinct or uncertain). */
  ranges: {
    lion: {
      "present": [
        "ao",
        "bf",
        "bj",
        "bw",
        "cd",
        "cf",
        "cm",
        "et",
        "ke",
        "mw",
        "mz",
        "na",
        "ne",
        "ng",
        "sd",
        "sn",
        "so",
        "ss",
        "td",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "back": [
        "sz",
        "rw"
      ],
      "gone": [
        "ci",
        "gh",
        "gn",
        "gw",
        "ml",
        "tg"
      ],
      "asOf": {
        "en": "IUCN Red List assessment 2016",
        "fr": "évaluation de la Liste rouge UICN 2016"
      },
      "src": [
        "s41"
      ],
      "note": {
        "en": "“Back” = reintroduced (Eswatini, Rwanda). “Gone or uncertain” = IUCN lists the lion as possibly extinct there. Some national populations are tiny (for example in West Africa).",
        "fr": "« Réintroduit » = Eswatini, Rwanda. « Disparu ou incertain » = l’UICN indique que le lion y a peut-être disparu. Certaines populations nationales sont minuscules (par exemple en Afrique de l’Ouest)."
      }
    },
    elephant: {
      "present": [
        "ao",
        "bf",
        "bj",
        "bw",
        "cd",
        "cf",
        "ci",
        "cm",
        "er",
        "et",
        "gh",
        "gn",
        "gw",
        "ke",
        "lr",
        "ml",
        "mw",
        "mz",
        "na",
        "ne",
        "ng",
        "rw",
        "sl",
        "sn",
        "so",
        "ss",
        "sz",
        "td",
        "tg",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "mr",
        "bi"
      ],
      "asOf": {
        "en": "Mammal Diversity Database and SDZWA, read Nov 2026",
        "fr": "Mammal Diversity Database et SDZWA, consultées en nov. 2026"
      },
      "src": [
        "s55",
        "s54"
      ],
      "note": {
        "en": "This list covers the African elephant in general. The savanna elephant (the one in Kruger) lives mostly in East, Central and Southern Africa; the forest elephant, a separate species, lives mainly in Central Africa. In West Africa, only small remnant populations survive. Eswatini’s elephants were reintroduced.",
        "fr": "Cette liste couvre l’éléphant d’Afrique en général. L’éléphant de savane (celui du Kruger) vit surtout en Afrique de l’Est, centrale et australe ; l’éléphant de forêt, une autre espèce, vit surtout en Afrique centrale. En Afrique de l’Ouest, il ne reste que de petites populations. Les éléphants d’Eswatini ont été réintroduits."
      }
    },
    leopard: {
      "present": [
        "ao",
        "bf",
        "bi",
        "bj",
        "bw",
        "cd",
        "cf",
        "cg",
        "ci",
        "cm",
        "dj",
        "dz",
        "er",
        "et",
        "ga",
        "gh",
        "gm",
        "gn",
        "gq",
        "gw",
        "ke",
        "lr",
        "ma",
        "ml",
        "mw",
        "mz",
        "na",
        "ne",
        "ng",
        "rw",
        "sd",
        "sl",
        "sn",
        "so",
        "sz",
        "td",
        "tg",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "eg"
      ],
      "asOf": {
        "en": "page updated Jan 2026",
        "fr": "page mise à jour en janv. 2026"
      },
      "src": [
        "s42"
      ],
      "note": {
        "en": "In North Africa only small remnant populations remain (Atlas mountains in Morocco, Ahaggar in Algeria). In Egypt the leopard is probably extinct.",
        "fr": "En Afrique du Nord, il ne reste que de petites populations (Atlas au Maroc, Ahaggar en Algérie). En Égypte, le léopard a probablement disparu."
      }
    },
    buffalo: {
      "present": [
        "ao",
        "bf",
        "bi",
        "bj",
        "bw",
        "cd",
        "cf",
        "cg",
        "ci",
        "cm",
        "et",
        "ga",
        "gh",
        "gn",
        "gq",
        "gw",
        "ke",
        "lr",
        "ml",
        "mw",
        "mz",
        "na",
        "ne",
        "ng",
        "rw",
        "sd",
        "sl",
        "sn",
        "so",
        "ss",
        "sz",
        "td",
        "tg",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "gm"
      ],
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s56",
        "s57"
      ],
      "note": {
        "en": "Forest, West African and savanna buffalo are counted together. The buffalo is gone from Gambia, and in Equatorial Guinea only on the mainland. Most populations now live mainly in reserves.",
        "fr": "Les buffles de forêt, d’Afrique de l’Ouest et de savane sont comptés ensemble. Le buffle a disparu de Gambie, et de Guinée équatoriale il ne reste que sur le continent. La plupart des populations vivent aujourd’hui surtout dans des réserves."
      }
    },
    whiterhino: {
      "present": [
        "za"
      ],
      "back": [
        "sz",
        "zw",
        "na",
        "bw",
        "ke",
        "zm"
      ],
      "gone": [
        "mz",
        "cd"
      ],
      "asOf": {
        "en": "page updated Jan 2026",
        "fr": "page mise à jour en janv. 2026"
      },
      "src": [
        "s50"
      ],
      "note": {
        "en": "Southern white rhino: South Africa holds most of them (about half in Kruger). Other countries received reintroduced or introduced animals. In Mozambique the reintroduced population was reportedly wiped out by poachers. The northern white rhino is possibly extinct in the wild (DR Congo, last seen in 2008).",
        "fr": "Rhinocéros blanc du Sud : l’Afrique du Sud en abrite la plus grande part (environ la moitié au Kruger). Les autres pays ont reçu des animaux réintroduits ou introduits. Au Mozambique, la population réintroduite aurait été décimée par les braconniers. Le rhinocéros blanc du Nord a peut-être disparu à l’état sauvage (RD Congo, dernière observation en 2008)."
      }
    },
    blackrhino: {
      "present": [
        "ke",
        "mz",
        "na",
        "rw",
        "sz",
        "tz",
        "za",
        "zw"
      ],
      "gone": [
        "ao",
        "cm"
      ],
      "asOf": {
        "en": "page updated Jan 2026",
        "fr": "page mise à jour en janv. 2026"
      },
      "src": [
        "s51"
      ],
      "note": {
        "en": "Angola: possibly a few animals. Cameroon: the western black rhino was declared extinct in 2006, its last record. Namibia holds most black rhinos.",
        "fr": "Angola : peut-être quelques animaux. Cameroun : le rhinocéros noir de l’Ouest est considéré comme éteint depuis 2006, c’est là qu’il a été vu pour la dernière fois. La Namibie abrite la plupart des rhinocéros noirs."
      }
    },
    giraffe: {
      "present": [
        "ao",
        "bw",
        "cd",
        "cf",
        "cm",
        "et",
        "ke",
        "na",
        "ne",
        "so",
        "ss",
        "td",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "back": [
        "sz",
        "mw",
        "mz",
        "rw"
      ],
      "asOf": {
        "en": "Giraffe Conservation Foundation, June 2025",
        "fr": "Giraffe Conservation Foundation, juin 2025"
      },
      "src": [
        "s53"
      ],
      "note": {
        "en": "Four giraffe species are counted together here (southern, Masai, northern, reticulated). The Kruger giraffe is the southern giraffe. A few giraffes also live outside their natural range (for example in DR Congo, Mali, Nigeria and Senegal), not counted here.",
        "fr": "Les quatre espèces de girafes sont comptées ensemble ici (du Sud, masaï, du Nord, réticulée). La girafe du Kruger est la girafe du Sud. Quelques girafes vivent aussi hors de leur aire naturelle (par exemple en RD Congo, au Mali, au Nigeria et au Sénégal), non comptées ici."
      }
    },
    hippo: {
      "present": [
        "ao",
        "bf",
        "bi",
        "bj",
        "bw",
        "cd",
        "cf",
        "cg",
        "ci",
        "cm",
        "et",
        "ga",
        "gh",
        "gm",
        "gn",
        "gq",
        "gw",
        "ke",
        "ml",
        "mw",
        "mz",
        "na",
        "ne",
        "ng",
        "rw",
        "sd",
        "sl",
        "sn",
        "so",
        "sz",
        "td",
        "tg",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "dz",
        "eg",
        "mr",
        "lr"
      ],
      "asOf": {
        "en": "page updated Jan 2026",
        "fr": "page mise à jour en janv. 2026"
      },
      "src": [
        "s49"
      ],
      "note": {
        "en": "Gone from Algeria, Egypt and Mauritania. Liberia: the source lists it both as native and as locally extinct, so the situation is unclear. The pygmy hippo is a different species, found only in West Africa.",
        "fr": "Disparu d’Algérie, d’Égypte et de Mauritanie. Libéria : la source l’indique à la fois comme pays d’origine et comme disparu localement, la situation est donc floue. L’hippopotame pygmée est une autre espèce, présente seulement en Afrique de l’Ouest."
      }
    },
    cheetah: {
      "present": [
        "ao",
        "bf",
        "bj",
        "bw",
        "cf",
        "dz",
        "et",
        "ke",
        "ml",
        "mz",
        "na",
        "ne",
        "sd",
        "ss",
        "sz",
        "td",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "er",
        "dj",
        "eg",
        "ly",
        "so",
        "tg"
      ],
      "asOf": {
        "en": "SDZWA (Jan 2026) and Mammal Diversity Database, read Nov 2026",
        "fr": "SDZWA (janv. 2026) et Mammal Diversity Database, consultée en nov. 2026"
      },
      "src": [
        "s43",
        "s44"
      ],
      "note": {
        "en": "Gone or uncertain: the Mammal Diversity Database marks these countries with a question mark; Egypt: believed extinct. A tiny Asiatic cheetah population survives in Iran (outside Africa).",
        "fr": "Disparu ou incertain : la Mammal Diversity Database marque ces pays d’un point d’interrogation ; Égypte : probablement éteint. Une toute petite population de guépards d’Asie survit en Iran (hors d’Afrique)."
      }
    },
    wilddog: {
      "present": [
        "ao",
        "bf",
        "bj",
        "bw",
        "cf",
        "et",
        "ke",
        "mw",
        "mz",
        "na",
        "ne",
        "sd",
        "sn",
        "ss",
        "td",
        "tz",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "cd",
        "ci",
        "gw",
        "ml",
        "ng",
        "tg",
        "ug",
        "bi",
        "cm",
        "eg",
        "er",
        "sz",
        "ga",
        "gm",
        "gh",
        "mr",
        "rw",
        "sl"
      ],
      "asOf": {
        "en": "IUCN Red List (assessed 2012, published 2020)",
        "fr": "Liste rouge UICN (évalué en 2012, publié en 2020)"
      },
      "src": [
        "s45"
      ],
      "note": {
        "en": "Gone or uncertain: possibly extinct in DR Congo, Côte d’Ivoire, Guinea-Bissau, Mali, Nigeria, Togo and Uganda; extinct in the others listed. Populations are small and scattered even in the countries where it is present.",
        "fr": "Disparu ou incertain : peut-être disparu en RD Congo, Côte d’Ivoire, Guinée-Bissau, Mali, Nigéria, Togo et Ouganda ; disparu dans les autres pays listés. Les populations sont petites et dispersées, même là où l’espèce est présente."
      }
    },
    hyena: {
      "present": [
        "ao",
        "bf",
        "bi",
        "bj",
        "bw",
        "cd",
        "cf",
        "cg",
        "ci",
        "cm",
        "dj",
        "et",
        "ga",
        "gh",
        "gm",
        "gn",
        "gq",
        "gw",
        "ke",
        "ml",
        "mr",
        "mw",
        "mz",
        "na",
        "ne",
        "ng",
        "rw",
        "sd",
        "sl",
        "sn",
        "so",
        "sz",
        "td",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "dz",
        "er",
        "tg"
      ],
      "asOf": {
        "en": "page updated Jan 2026",
        "fr": "page mise à jour en janv. 2026"
      },
      "src": [
        "s46"
      ],
      "note": {
        "en": "Gone or uncertain: possible regional extinctions in Algeria, Eritrea and Togo. In West Africa the distribution is patchy.",
        "fr": "Disparu ou incertain : disparitions régionales possibles en Algérie, Érythrée et Togo. En Afrique de l’Ouest, la répartition est inégale."
      }
    },
    zebra: {
      "present": [
        "ao",
        "bw",
        "cd",
        "et",
        "ke",
        "mw",
        "mz",
        "na",
        "sd",
        "so",
        "sz",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "bi",
        "ls"
      ],
      "asOf": {
        "en": "page updated Jan 2026",
        "fr": "page mise à jour en janv. 2026"
      },
      "src": [
        "s52"
      ],
      "note": {
        "en": "Gone from Burundi and Lesotho. In Angola it is listed both as present and as possibly extinct. This is the plains zebra; the quagga subspecies went extinct in South Africa around 1883.",
        "fr": "Disparu du Burundi et du Lesotho. En Angola, il est indiqué à la fois comme présent et comme peut-être disparu. Il s’agit du zèbre des plaines ; la sous-espèce quagga s’est éteinte en Afrique du Sud vers 1883."
      }
    },
    impala: {
      "present": [
        "ao",
        "bw",
        "cd",
        "ke",
        "mw",
        "mz",
        "na",
        "rw",
        "sz",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "bi"
      ],
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s58",
        "s59"
      ],
      "note": {
        "en": "Burundi: marked “extinct?” in the source. In DR Congo it lives only in the south-east.",
        "fr": "Burundi : marqué « éteint ? » dans la source. En RD Congo, il ne vit que dans le sud-est."
      }
    },
    kudu: {
      "present": [
        "ao",
        "bw",
        "cd",
        "cf",
        "er",
        "et",
        "ke",
        "mw",
        "mz",
        "na",
        "sd",
        "ss",
        "sz",
        "td",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "dj",
        "so"
      ],
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s60"
      ],
      "note": {
        "en": "Gone or uncertain: Djibouti is marked with a question mark and Somalia as “extinct?” in the source.",
        "fr": "Disparu ou incertain : Djibouti est marqué d’un point d’interrogation et la Somalie « éteint ? » dans la source."
      }
    },
    wildebeest: {
      "present": [
        "ao",
        "bw",
        "ke",
        "mz",
        "na",
        "sz",
        "tz",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "mw"
      ],
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s61"
      ],
      "note": {
        "en": "This is the blue wildebeest. The source marks Malawi as extinct.",
        "fr": "Il s’agit du gnou bleu. La source indique le Malawi comme éteint."
      }
    },
    waterbuck: {
      "present": [
        "ao",
        "bf",
        "bi",
        "bj",
        "bw",
        "cd",
        "cf",
        "ci",
        "cm",
        "er",
        "et",
        "gh",
        "gn",
        "gw",
        "ke",
        "ml",
        "mw",
        "mz",
        "na",
        "ne",
        "ng",
        "rw",
        "sd",
        "sl",
        "sn",
        "so",
        "ss",
        "sz",
        "td",
        "tg",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "gm"
      ],
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s62"
      ],
      "note": {
        "en": "Both waterbuck groups (common and defassa) are counted together. Gone from Gambia.",
        "fr": "Les deux groupes de cobes (à croissant et defassa) sont comptés ensemble. Disparu de Gambie."
      }
    },
    warthog: {
      "present": [
        "ao",
        "bf",
        "bi",
        "bj",
        "bw",
        "cd",
        "cf",
        "ci",
        "cm",
        "dj",
        "er",
        "et",
        "gh",
        "gm",
        "gn",
        "gw",
        "ke",
        "lr",
        "ls",
        "mr",
        "mw",
        "mz",
        "na",
        "ng",
        "rw",
        "sd",
        "sl",
        "sn",
        "so",
        "ss",
        "sz",
        "td",
        "tg",
        "tz",
        "ug",
        "za",
        "zm",
        "zw"
      ],
      "gone": [
        "ml",
        "ne"
      ],
      "asOf": {
        "en": "SDZWA (Jan 2026) and Mammal Diversity Database, read Nov 2026",
        "fr": "SDZWA (janv. 2026) et Mammal Diversity Database, consultée en nov. 2026"
      },
      "src": [
        "s47",
        "s48"
      ],
      "note": {
        "en": "Mali and Niger: probably extinct according to SDZWA. The list comes from a general database and may include countries where the warthog is now rare.",
        "fr": "Mali et Niger : probablement disparu selon SDZWA. La liste vient d’une base de données générale et peut inclure des pays où le phacochère est aujourd’hui rare."
      }
    },
    martialeagle: {
      "text": {
        "en": "Sub-Saharan Africa, from Senegal and The Gambia in the west to Ethiopia in the east, and south through East Africa to South Africa. Declining outside protected areas.",
        "fr": "Afrique subsaharienne, du Sénégal et de la Gambie à l’ouest jusqu’à l’Éthiopie à l’est, puis vers le sud à travers l’Afrique de l’Est jusqu’en Afrique du Sud. En déclin hors des zones protégées."
      },
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s67"
      ]
    },
    whitebackedvulture: {
      "text": {
        "en": "From Senegal in the west to western Somalia in the east, then south through East Africa to northern South Africa and Namibia. Absent from the Congo basin.",
        "fr": "Du Sénégal à l’ouest jusqu’à l’ouest de la Somalie à l’est, puis vers le sud à travers l’Afrique de l’Est jusqu’au nord de l’Afrique du Sud et à la Namibie. Absent du bassin du Congo."
      },
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s68"
      ]
    },
    lappetvulture: {
      "text": {
        "en": "Patchy across much of Africa (absent from much of central and western Africa). Breeds in about two dozen African countries, including Kenya, South Africa and Sudan, and also in the Arabian Peninsula.",
        "fr": "Répartition inégale dans une grande partie de l’Afrique (absent d’une grande partie de l’Afrique centrale et de l’Ouest). Se reproduit dans environ deux douzaines de pays africains, dont le Kenya, l’Afrique du Sud et le Soudan, ainsi que dans la péninsule arabique."
      },
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s69"
      ]
    },
    fisheagle: {
      "text": {
        "en": "Widespread across Africa, mainly south of the Sahara, always near water: lakes, rivers, estuaries and coasts.",
        "fr": "Répandu dans toute l’Afrique, surtout au sud du Sahara, toujours près de l’eau : lacs, rivières, estuaires et côtes."
      },
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s70"
      ]
    },
    blackbackedjackal: {
      "present": [
        "sd",
        "er",
        "dj",
        "et",
        "so",
        "ss",
        "ug",
        "ke",
        "tz",
        "ao",
        "na",
        "bw",
        "zw",
        "mz",
        "za",
        "ls",
        "sz"
      ],
      "asOf": {
        "en": "Mammal Diversity Database and Wikipedia, read Nov 2026",
        "fr": "Mammal Diversity Database et Wikipédia, consultées en nov. 2026"
      },
      "src": [
        "s71",
        "s74"
      ],
      "note": {
        "en": "The black-backed jackal lives in two separate areas about 900 km apart: southern Africa, and eastern Africa. The side-striped jackal, found in the Kruger too, is another species.",
        "fr": "Le chacal à chabraque vit dans deux zones séparées d’environ 900 km : l’Afrique australe et l’Afrique de l’Est. Le chacal à flancs rayés, présent aussi au Kruger, est une autre espèce."
      }
    },
    vervet: {
      "present": [
        "bw",
        "bi",
        "et",
        "ke",
        "mw",
        "mz",
        "rw",
        "so",
        "za",
        "sz",
        "tz",
        "ug",
        "zm",
        "zw"
      ],
      "asOf": {
        "en": "SDZWA (Jan 2026) and World Land Trust, read Nov 2026",
        "fr": "SDZWA (janv. 2026) et World Land Trust, consultées en nov. 2026"
      },
      "src": [
        "s72",
        "s73"
      ],
      "note": {
        "en": "Zimbabwe comes from World Land Trust; the SDZWA list does not name it. Other vervet species live in West and Central Africa and are not counted here.",
        "fr": "Le Zimbabwe vient de World Land Trust ; la liste de SDZWA ne le cite pas. D’autres espèces de singes vervets vivent en Afrique de l’Ouest et centrale et ne sont pas comptées ici."
      }
    },
    thomson: {
      "present": [
        "ke",
        "tz"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s75"
      ],
      "note": {
        "en": "Mostly the Serengeti–Mara region.",
        "fr": "Surtout la région du Serengeti et du Masai Mara."
      }
    },
    grant: {
      "present": [
        "tz",
        "ke",
        "ss",
        "et"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s76"
      ]
    },
    springbok: {
      "present": [
        "za",
        "na",
        "bw",
        "ao"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s77"
      ],
      "note": {
        "en": "In Angola, only the south-west. Small introduced populations also exist in KwaZulu-Natal (South Africa).",
        "fr": "En Angola, seulement le sud-ouest. De petites populations introduites existent aussi au KwaZulu-Natal (Afrique du Sud)."
      }
    },
    gemsbok: {
      "present": [
        "bw",
        "na",
        "za",
        "zw"
      ],
      "gone": [
        "ao"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s78"
      ],
      "note": {
        "en": "Extirpated from Angola. Introduced in New Mexico (USA).",
        "fr": "Disparu d’Angola. Introduit au Nouveau-Mexique (États-Unis)."
      }
    },
    lesserkudu: {
      "present": [
        "et",
        "ke",
        "so",
        "ss",
        "tz",
        "ug"
      ],
      "gone": [
        "dj"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s79"
      ],
      "note": {
        "en": "Djibouti: possibly extinct. Past presence in Saudi Arabia and Yemen is disputed.",
        "fr": "Djibouti : peut-être disparu. Une présence passée en Arabie saoudite et au Yémen est contestée."
      }
    },
    nyala: {
      "present": [
        "mw",
        "mz",
        "zw",
        "za",
        "sz",
        "na"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s80"
      ],
      "note": {
        "en": "Namibia has only a small population (about 250 animals).",
        "fr": "La Namibie n’a qu’une petite population (environ 250 animaux)."
      }
    },
    eland: {
      "present": [
        "ao",
        "bw",
        "cd",
        "sz",
        "et",
        "ke",
        "ls",
        "mw",
        "mz",
        "na",
        "rw",
        "za",
        "ss",
        "tz",
        "ug",
        "zm",
        "zw"
      ],
      "gone": [
        "bi"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s81"
      ],
      "note": {
        "en": "No longer found in Burundi.",
        "fr": "N’existe plus au Burundi."
      }
    },
    lechwe: {
      "present": [
        "bw",
        "zm",
        "cd",
        "na",
        "ao",
        "zw"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s82"
      ],
      "note": {
        "en": "Three forms exist: Kafue, red and black lechwe. The red lechwe is the one widespread in Zimbabwe. Roberts’ lechwe is extinct.",
        "fr": "Trois formes existent : le lechwe de Kafue, le rouge et le noir. Le lechwe rouge est celui répandu au Zimbabwe. Le lechwe de Roberts est éteint."
      }
    },
    reedbuck: {
      "present": [
        "ao",
        "bw",
        "mw",
        "mz",
        "na",
        "za",
        "sz",
        "tz",
        "zm",
        "zw"
      ],
      "gone": [
        "cg",
        "ga",
        "cd"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s83"
      ],
      "note": {
        "en": "Congo, Gabon and DR Congo: the reedbuck is critically low there, possibly near extinct or locally extinct.",
        "fr": "Congo, Gabon et RD Congo : le cobe des roseaux y est en nombre critique, peut-être proche de l’extinction ou disparu localement."
      }
    },
    topi: {
      "present": [
        "cd",
        "ke",
        "rw",
        "tz",
        "ug"
      ],
      "gone": [
        "bi"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s84"
      ],
      "note": {
        "en": "Regionally extinct in Burundi. The tsessebe (the form found in Kruger) is a different subspecies and is not counted here.",
        "fr": "Disparu de la région au Burundi. Le tsessebe (la forme présente au Kruger) est une autre sous-espèce et n’est pas compté ici."
      }
    },
    steenbok: {
      "present": [
        "ke",
        "tz",
        "ao",
        "na",
        "za",
        "sz",
        "bw",
        "mz",
        "zm",
        "zw"
      ],
      "gone": [
        "ls",
        "ug"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s85"
      ],
      "note": {
        "en": "Lesotho: only “probably” present. Uganda: formerly present, now almost certainly extinct.",
        "fr": "Lesotho : présence seulement « probable ». Ouganda : autrefois présent, presque certainement disparu aujourd’hui."
      }
    },
    dikdik: {
      "present": [
        "ke",
        "tz",
        "so",
        "na"
      ],
      "asOf": {
        "en": "Mammal Diversity Database and Wikipedia, read Nov 2026",
        "fr": "Mammal Diversity Database et Wikipédia, consultées en nov. 2026"
      },
      "src": [
        "s88",
        "s86"
      ],
      "note": {
        "en": "The database lists only Kenya and Somalia; Wikipedia also names Tanzania and Namibia (along the Fish River). Other dik-dik species live elsewhere in Africa and are not counted here.",
        "fr": "La base de données ne cite que le Kenya et la Somalie ; Wikipédia nomme aussi la Tanzanie et la Namibie (le long de la rivière Fish). D’autres espèces de dik-dik vivent ailleurs en Afrique et ne sont pas comptées ici."
      }
    },
    porcupine: {
      "present": [
        "ao",
        "bw",
        "bi",
        "cd",
        "sz",
        "ke",
        "ls",
        "mw",
        "mz",
        "na",
        "cg",
        "rw",
        "za",
        "tz",
        "ug",
        "zm",
        "zw"
      ],
      "asOf": {
        "en": "Mammal Diversity Database and Wikipedia, read Nov 2026",
        "fr": "Mammal Diversity Database et Wikipédia, consultées en nov. 2026"
      },
      "src": [
        "s89",
        "s87"
      ],
      "note": {
        "en": "This is the Cape porcupine. Other porcupine species live in North and West Africa.",
        "fr": "C’est le porc-épic du Cap. D’autres espèces de porcs-épics vivent en Afrique du Nord et de l’Ouest."
      }
    },
    baboon: {
      "present": [
        "ao",
        "bw",
        "sz",
        "ls",
        "mz",
        "na",
        "za",
        "zm",
        "zw"
      ],
      "asOf": {
        "en": "Mammal Diversity Database, read Nov 2026",
        "fr": "Mammal Diversity Database, consultée en nov. 2026"
      },
      "src": [
        "s91"
      ],
      "note": {
        "en": "Southern Africa. The MDD list includes Lesotho and Eswatini; Animal Diversity Web names only Angola, Botswana, Mozambique, Namibia, South Africa and Zambia.",
        "fr": "Afrique australe. La liste du MDD inclut le Lesotho et l’Eswatini ; Animal Diversity Web ne cite que l’Angola, le Botswana, le Mozambique, la Namibie, l’Afrique du Sud et la Zambie."
      }
    },
    suricate: {
      "present": [
        "ao",
        "bw",
        "na",
        "za"
      ],
      "asOf": {
        "en": "Mammal Diversity Database, read Nov 2026",
        "fr": "Mammal Diversity Database, consultée en nov. 2026"
      },
      "src": [
        "s96",
        "s95"
      ],
      "note": {
        "en": "Dry, open country of the Kalahari and Karoo. In Angola it only just reaches the far south-west. Animal Diversity Web says it extends east as far as the Assegaai River in north-eastern South Africa.",
        "fr": "Régions sèches et ouvertes du Kalahari et du Karoo. En Angola, il atteint à peine l’extrême sud-ouest. Animal Diversity Web indique qu’il s’étend vers l’est jusqu’à la rivière Assegaai, dans le nord-est de l’Afrique du Sud."
      }
    },
    mongoose: {
      "present": [
        "ao",
        "bj",
        "bw",
        "bf",
        "bi",
        "cm",
        "cf",
        "td",
        "ci",
        "cd",
        "dj",
        "gq",
        "er",
        "sz",
        "et",
        "ga",
        "gm",
        "gh",
        "gn",
        "gw",
        "ke",
        "lr",
        "mw",
        "ml",
        "mr",
        "mz",
        "na",
        "ne",
        "ng",
        "cg",
        "rw",
        "sn",
        "sl",
        "so",
        "za",
        "ss",
        "sd",
        "tz",
        "tg",
        "ug",
        "zm",
        "zw"
      ],
      "asOf": {
        "en": "Mammal Diversity Database (as Herpestes sanguineus), read Nov 2026",
        "fr": "Mammal Diversity Database (sous le nom Herpestes sanguineus), consultée en nov. 2026"
      },
      "src": [
        "s98"
      ],
      "note": {
        "en": "Sub-Saharan Africa. We used the longer of the two country lists on the MDD page (42 countries). The shorter list on the same page also names the Cabo Verde islands, which we did not map. The MDD now classes this species as Herpestes sanguineus.",
        "fr": "Afrique subsaharienne. Nous avons utilisé la plus longue des deux listes de pays de la page du MDD (42 pays). La liste plus courte de la même page cite aussi le Cap-Vert, que nous n’avons pas cartographié. Le MDD classe désormais cette espèce sous Herpestes sanguineus."
      }
    },
    honeybadger: {
      "present": [
        "dz",
        "ao",
        "bj",
        "bw",
        "bf",
        "bi",
        "cm",
        "cf",
        "td",
        "cg",
        "cd",
        "ci",
        "eg",
        "gq",
        "er",
        "sz",
        "et",
        "ga",
        "gm",
        "gh",
        "gn",
        "gw",
        "ke",
        "ls",
        "lr",
        "ml",
        "mr",
        "ma",
        "mw",
        "mz",
        "na",
        "ne",
        "ng",
        "rw",
        "sn",
        "sl",
        "so",
        "za",
        "ss",
        "sd",
        "tz",
        "tg",
        "ug",
        "zm",
        "zw"
      ],
      "asOf": {
        "en": "Mammal Diversity Database, read Nov 2026",
        "fr": "Mammal Diversity Database, consultée en nov. 2026"
      },
      "src": [
        "s104"
      ],
      "note": {
        "en": "Also found well beyond Africa (the MDD list includes Arabia, the Middle East, Central Asia and India); those countries are not on this map. Djibouti and some other countries are not on the MDD list.",
        "fr": "Présent aussi bien au-delà de l’Afrique (la liste du MDD inclut l’Arabie, le Moyen-Orient, l’Asie centrale et l’Inde) ; ces pays ne figurent pas sur cette carte. Djibouti et quelques autres pays ne figurent pas dans la liste du MDD."
      }
    },
    serval: {
      "present": [
        "ma",
        "sn",
        "gm",
        "gw",
        "gn",
        "ml",
        "sl",
        "lr",
        "ci",
        "bf",
        "gh",
        "tg",
        "bj",
        "ne",
        "ng",
        "cm",
        "td",
        "cf",
        "sd",
        "ss",
        "ga",
        "cg",
        "cd",
        "et",
        "so",
        "er",
        "dj",
        "ke",
        "ug",
        "rw",
        "bi",
        "tz",
        "ao",
        "zm",
        "mw",
        "mz",
        "zw",
        "bw",
        "na",
        "za",
        "sz"
      ],
      "back": [
        "tn"
      ],
      "gone": [
        "dz",
        "ls"
      ],
      "asOf": {
        "en": "Mammal Diversity Database and Wikipedia, read Nov 2026",
        "fr": "Mammal Diversity Database et Wikipédia, consultées en nov. 2026"
      },
      "src": [
        "s111",
        "s107"
      ],
      "note": {
        "en": "Country list from MDD. Tunisia: reintroduced (Wikipedia). Algeria: feared extinct (Wikipedia; MDD marks it with a question mark). Lesotho: MDD marks presence with a question mark. Wikipedia names Morocco as the only North African country where it is known to occur.",
        "fr": "Liste des pays d’après MDD. Tunisie : réintroduit (Wikipédia). Algérie : sans doute disparu (Wikipédia ; MDD met un point d’interrogation). Lesotho : MDD met un point d’interrogation. Wikipédia cite le Maroc comme seul pays d’Afrique du Nord où il est connu."
      }
    },
    caracal: {
      "present": [
        "ao",
        "bj",
        "bw",
        "cm",
        "cf",
        "td",
        "ci",
        "cd",
        "dj",
        "eg",
        "er",
        "et",
        "ga",
        "gm",
        "gh",
        "gn",
        "gw",
        "ke",
        "ls",
        "ly",
        "mw",
        "mr",
        "ma",
        "mz",
        "na",
        "ne",
        "ng",
        "sn",
        "so",
        "za",
        "sd",
        "tz",
        "tg",
        "tn",
        "ug",
        "zm",
        "zw",
        "sz",
        "ss",
        "dz"
      ],
      "gone": [
        "bf",
        "ml",
        "bi"
      ],
      "asOf": {
        "en": "Mammal Diversity Database and Wikipedia, read Nov 2026",
        "fr": "Mammal Diversity Database et Wikipédia, consultées en nov. 2026"
      },
      "src": [
        "s112",
        "s108"
      ],
      "note": {
        "en": "Country list from MDD (its two lists do not fully match; Gabon appears in one only). Burkina Faso, Mali and Burundi are marked with a question mark in MDD, so they are shown as uncertain. Wikipedia says the caracal is widespread south of the Sahara but rare, and close to extinction, in North Africa. Countries outside Africa (such as India, Iran, Pakistan) are not shown on this map.",
        "fr": "Liste des pays d’après MDD (ses deux listes ne coïncident pas tout à fait ; le Gabon n’apparaît que dans l’une). Le Burkina Faso, le Mali et le Burundi portent un point d’interrogation dans MDD : ils sont donc indiqués comme incertains. Wikipédia indique qu’il est répandu au sud du Sahara mais rare, et proche de l’extinction, en Afrique du Nord. Les pays hors d’Afrique (Inde, Iran, Pakistan, etc.) ne figurent pas sur cette carte."
      }
    },
    pangolin: {
      "present": [
        "ao",
        "bw",
        "bi",
        "cf",
        "td",
        "sz",
        "et",
        "ke",
        "mw",
        "mz",
        "na",
        "rw",
        "za",
        "ss",
        "sd",
        "tz",
        "ug",
        "zm",
        "zw"
      ],
      "gone": [
        "cd"
      ],
      "asOf": {
        "en": "Mammal Diversity Database, read Nov 2026",
        "fr": "Mammal Diversity Database, consultée en nov. 2026"
      },
      "src": [
        "s113",
        "s109"
      ],
      "note": {
        "en": "Country list from MDD. DR Congo is marked with a question mark, so it is shown as uncertain. MDD’s narrative list also adds the Republic of the Congo, but its country field does not, so we left it out. Wikipedia gives no country list, only “southern and eastern Africa”.",
        "fr": "Liste des pays d’après MDD. La RD Congo porte un point d’interrogation : elle est donc indiquée comme incertaine. La liste narrative de MDD ajoute le Congo (République du), mais pas son champ « pays » ; nous l’avons donc écarté. Wikipédia ne donne pas de liste de pays, seulement « Afrique australe et orientale »."
      }
    },
    sidestripedjackal: {
      "present": [
        "ao",
        "bj",
        "bw",
        "bf",
        "bi",
        "cm",
        "cf",
        "td",
        "ci",
        "cd",
        "sz",
        "et",
        "ga",
        "gm",
        "gh",
        "gn",
        "gw",
        "ke",
        "mw",
        "ml",
        "mr",
        "mz",
        "na",
        "ne",
        "ng",
        "cg",
        "rw",
        "sn",
        "sl",
        "so",
        "za",
        "ss",
        "sd",
        "tz",
        "tg",
        "ug",
        "zm",
        "zw"
      ],
      "asOf": {
        "en": "Mammal Diversity Database, read Nov 2026",
        "fr": "Mammal Diversity Database, consultée en nov. 2026"
      },
      "src": [
        "s114",
        "s110"
      ],
      "note": {
        "en": "38 countries from MDD’s country field, none marked uncertain. Wikipedia also mentions Morocco and Tunisia (under subspecies) but MDD does not list them, so they are not shown here.",
        "fr": "38 pays issus du champ « pays » de MDD, aucun marqué incertain. Wikipédia mentionne aussi le Maroc et la Tunisie (au titre de sous-espèces), mais MDD ne les liste pas : ils ne sont donc pas indiqués ici."
      }
    },
    nilecrocodile: {
      "present": [
        "so",
        "et",
        "ug",
        "ke",
        "cf",
        "cd",
        "gq",
        "tz",
        "rw",
        "bi",
        "zm",
        "zw",
        "ga",
        "mw",
        "mz",
        "na",
        "sd",
        "ss",
        "cm",
        "eg",
        "ao",
        "bw",
        "za",
        "mg"
      ],
      "gone": [
        "ly",
        "tn",
        "dz",
        "ma"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s123"
      ],
      "note": {
        "en": "“Gone” = historic or extinct there. Egypt: breeding population wiped out in the 20th century, then re-established locally (Lake Nasser / Aswan). Comoros: only rarely spotted, so not counted as present. Madagascar: an isolated population. Eswatini and Congo (Republic) are not named in the source list, so they are left out. The page says 26 countries but names about 24. Also introduced in Florida (not on our map). Syria and Israel/Palestine: extinct (outside our list).",
        "fr": "« Disparu » = présence historique ou éteinte. Égypte : population reproductrice éliminée au XXe siècle, puis rétablie localement (lac Nasser / Assouan). Comores : seulement aperçu rarement, donc non compté comme présent. Madagascar : population isolée. L’Eswatini et le Congo (République) ne figurent pas dans la liste de la source et sont donc omis. La page annonce 26 pays mais en nomme environ 24. Aussi introduit en Floride (hors de notre carte). Syrie et Israël/Palestine : éteint (hors de notre liste)."
      }
    },
    dwarfcrocodile: {
      "present": [
        "ao",
        "bj",
        "bf",
        "cm",
        "cd",
        "gq",
        "ga",
        "gm",
        "gh",
        "gn",
        "gw",
        "cf",
        "ci",
        "lr",
        "ml",
        "ng",
        "sn",
        "sl",
        "tg"
      ],
      "gone": [
        "ug"
      ],
      "asOf": {
        "en": "The Reptile Database and Wikipedia, read Nov 2026",
        "fr": "The Reptile Database et Wikipédia, consultées en nov. 2026"
      },
      "src": [
        "s129",
        "s124"
      ],
      "note": {
        "en": "Country list from the Reptile Database. Taxonomy: scientists may split it into O. tetraspis (Central Africa, outside the Congo Basin), O. osborni (Congo Basin) and a possibly unnamed West African species; the Reptile Database still lists the ranges together, so they are not separated here. Uganda: last confirmed record in the 1940s, survival unclear, so shown as gone or uncertain. Congo (Republic) is not in the Reptile Database list. Not found in southern Africa or Kruger.",
        "fr": "Liste des pays tirée de la Reptile Database. Taxonomie : les scientifiques proposent peut-être de le scinder en O. tetraspis (Afrique centrale, hors bassin du Congo), O. osborni (bassin du Congo) et une espèce ouest-africaine peut-être non nommée ; la Reptile Database regroupe encore les aires, elles ne sont donc pas séparées ici. Ouganda : dernière mention confirmée dans les années 1940, survie incertaine, donc « disparu ou incertain ». Le Congo (République) ne figure pas dans la liste de la Reptile Database. Absent d’Afrique australe et du Kruger."
      }
    },
    nilemonitor: {
      "present": [
        "za",
        "sz",
        "na",
        "bw",
        "tz",
        "mz",
        "zw",
        "zm",
        "ao",
        "mw",
        "ga",
        "cd",
        "ke",
        "ug",
        "cm",
        "cf",
        "et",
        "er",
        "so",
        "sd",
        "ss",
        "td",
        "eg",
        "lr",
        "ci",
        "gh",
        "tg",
        "bj",
        "bf",
        "ne",
        "ng",
        "ml",
        "mr",
        "sn",
        "gm",
        "gn",
        "gq"
      ],
      "asOf": {
        "en": "The Reptile Database, read Nov 2026",
        "fr": "The Reptile Database, consultée en nov. 2026"
      },
      "src": [
        "s127",
        "s125"
      ],
      "note": {
        "en": "Country list from the Reptile Database. It also lists Lesotho, which looks doubtful, so it is not mapped (to check). Introduced in Florida (not on our map). Historic range near the Jordan River and Dead Sea in Israel, now extinct there (outside our list). Absent from the Sahara and Kalahari deserts and much of the Horn of Africa (Wikipedia).",
        "fr": "Liste des pays tirée de la Reptile Database. Elle cite aussi le Lesotho, ce qui paraît douteux : non cartographié (à vérifier). Introduit en Floride (hors de notre carte). Aire historique près du Jourdain et de la mer Morte en Israël, aujourd’hui éteint (hors de notre liste). Absent du Sahara, du Kalahari et d’une grande partie de la Corne de l’Afrique (Wikipédia)."
      }
    },
    savannamonitor: {
      "present": [
        "mr",
        "sn",
        "gm",
        "gw",
        "gn",
        "sl",
        "lr",
        "ml",
        "ci",
        "bf",
        "gh",
        "tg",
        "bj",
        "ne",
        "ng",
        "td",
        "cm",
        "cf",
        "sd",
        "ss",
        "et",
        "er",
        "ke",
        "ug",
        "cd"
      ],
      "asOf": {
        "en": "The Reptile Database and Wikipedia, read Nov 2026",
        "fr": "The Reptile Database et Wikipédia, consultées en nov. 2026"
      },
      "src": [
        "s128",
        "s126"
      ],
      "note": {
        "en": "West and Central Africa, from Senegal east to Sudan (Wikipedia). It is NOT a South African species. In southern Africa the similar-looking white-throated or rock monitor (Varanus albigularis) takes over, south of the Congo River and Rift Valley (Wikipedia): that is the monitor seen in Kruger, often confused with this one. The Reptile Database also lists Zimbabwe, which conflicts with Wikipedia; not mapped (to check). DR Congo: northern part only. Introduced in Florida (not on our map).",
        "fr": "Afrique de l’Ouest et centrale, du Sénégal à l’est jusqu’au Soudan (Wikipédia). Ce N’EST PAS une espèce d’Afrique du Sud. En Afrique australe, le varan à gorge blanche ou varan terrestre (Varanus albigularis), d’aspect proche, prend le relais au sud du fleuve Congo et du Rift (Wikipédia) : c’est celui qu’on voit au Kruger, souvent confondu avec celui-ci. La Reptile Database cite aussi le Zimbabwe, ce qui contredit Wikipédia : non cartographié (à vérifier). RD Congo : nord seulement. Introduit en Floride (hors de notre carte)."
      }
    },
    blackmamba: {
      "present": [
        "bf",
        "cm",
        "cf",
        "cd",
        "ss",
        "et",
        "er",
        "so",
        "ke",
        "ug",
        "tz",
        "bi",
        "rw",
        "mz",
        "sz",
        "mw",
        "zm",
        "zw",
        "bw",
        "za",
        "na",
        "ao"
      ],
      "gone": [
        "sn"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s137"
      ],
      "note": {
        "en": "Wikipedia lists 22 countries. Senegal: a 1954 record was never confirmed, so West African presence is unresolved (shown as uncertain).",
        "fr": "Wikipédia cite 22 pays. Sénégal : une mention de 1954 n’a jamais été confirmée, la présence en Afrique de l’Ouest reste donc incertaine (indiqué comme incertain)."
      }
    },
    spittingcobra: {
      "present": [
        "ao",
        "bw",
        "mw",
        "mz",
        "na",
        "za",
        "tz",
        "zm",
        "zw"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s138"
      ],
      "note": {
        "en": "Countries listed by Wikipedia; also on Pemba Island (Tanzania). Other sources may list more countries (for example Eswatini), but we could not verify that in a page we read.",
        "fr": "Pays cités par Wikipédia ; aussi sur l’île de Pemba (Tanzanie). D’autres sources peuvent citer davantage de pays (par exemple l’Eswatini), mais nous n’avons pas pu le vérifier dans une page lue."
      }
    },
    sebapython: {
      "present": [
        "sn",
        "gm",
        "mr",
        "gw",
        "gn",
        "sl",
        "lr",
        "ci",
        "gh",
        "tg",
        "bj",
        "bf",
        "ml",
        "ne",
        "ng",
        "td",
        "cm",
        "cf",
        "sd",
        "ss",
        "et",
        "er",
        "so",
        "ug",
        "ke",
        "cd",
        "cg",
        "gq",
        "ga",
        "rw",
        "bi",
        "tz",
        "ao",
        "bw",
        "zm",
        "mw",
        "na",
        "za",
        "mz",
        "zw",
        "sz"
      ],
      "asOf": {
        "en": "The Reptile Database and Wikipedia, read Nov 2026",
        "fr": "The Reptile Database et Wikipédia, consultées en nov. 2026"
      },
      "src": [
        "s143",
        "s139",
        "s142",
        "s155"
      ],
      "note": {
        "en": "Combined range of Python sebae (Central, West and East Africa, from Senegal to Ethiopia and Somalia, south to northern Angola and northern Tanzania) and Python natalensis (southern Africa, including South Africa and the Kruger). Specialists disagree: The Reptile Database and Wikipedia treat them as two species (Broadley 1999), but some authors treat them as one. In the south: Angola, south only; DR Congo, south-east/east; Kenya, centre; Namibia, north.",
        "fr": "Aire combinée de Python sebae (Afrique centrale, de l’Ouest et de l’Est, du Sénégal à l’Éthiopie et la Somalie, au sud jusqu’au nord de l’Angola et de la Tanzanie) et de Python natalensis (Afrique australe, y compris l’Afrique du Sud et le Kruger). Les spécialistes ne sont pas d’accord : The Reptile Database et Wikipédia les traitent comme deux espèces (Broadley 1999), mais certains auteurs n’en font qu’une. Dans le sud : Angola, sud seulement ; RD Congo, sud-est/est ; Kenya, centre ; Namibie, nord."
      }
    },
    chameleon: {
      "present": [
        "za",
        "sz",
        "bw",
        "zw",
        "na",
        "ao",
        "zm",
        "mw",
        "mz",
        "tz",
        "bi",
        "ke",
        "so",
        "et",
        "ss",
        "cd",
        "cg",
        "ga",
        "gq",
        "cm",
        "ng",
        "tg",
        "ls"
      ],
      "gone": [
        "ug",
        "cf"
      ],
      "asOf": {
        "en": "French Wikipedia and The Reptile Database, read Nov 2026",
        "fr": "Wikipédia FR et The Reptile Database, consultées en nov. 2026"
      },
      "src": [
        "s141",
        "s144"
      ],
      "note": {
        "en": "Uganda and Central African Republic: presence uncertain (shown as uncertain). The Reptile Database also notes no credible Uganda records. Togo comes from French Wikipedia only; Namibia, South Sudan and Lesotho from The Reptile Database only. English Wikipedia gives no country list.",
        "fr": "Ouganda et République centrafricaine : présence incertaine (indiqué comme incertain). The Reptile Database note aussi l’absence de mention crédible pour l’Ouganda. Le Togo vient de Wikipédia FR seule ; la Namibie, le Soudan du Sud et le Lesotho de The Reptile Database seule. Wikipédia EN ne donne pas de liste de pays."
      }
    },
    marabou: {
      "text": {
        "en": "Sub-Saharan Africa (breeds south of the Sahara). Common in urban areas of East Africa; breeds mainly in less populated areas of southern Africa. No country list in the source used.",
        "fr": "Afrique subsaharienne (se reproduit au sud du Sahara). Commun dans les zones urbaines d’Afrique de l’Est ; se reproduit surtout dans les zones peu peuplées d’Afrique australe. Pas de liste de pays dans la source utilisée."
      },
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s159"
      ]
    },
    sable: {
      "present": [
        "ke",
        "tz",
        "zm",
        "mw",
        "ao",
        "cd",
        "zw",
        "bw",
        "za",
        "mz",
        "na"
      ],
      "asOf": {
        "en": "Wikipedia and Mammal Diversity Database, read Nov 2026",
        "fr": "Wikipédia et Mammal Diversity Database, consultés en nov. 2026"
      },
      "src": [
        "s162",
        "s169"
      ],
      "note": {
        "en": "Wikipedia lists Kenya (south), Tanzania (southwest), Zambia, Malawi, Angola, DR Congo (east), Zimbabwe, Botswana (north), South Africa and Mozambique (north). The Mammal Diversity Database also lists Namibia (not in Wikipedia; unclear whether natural or introduced). The giant sable (H. n. variani) is found only in central Angola.",
        "fr": "Wikipédia cite le Kenya (sud), la Tanzanie (sud-ouest), la Zambie, le Malawi, l’Angola, la RD Congo (est), le Zimbabwe, le Botswana (nord), l’Afrique du Sud et le Mozambique (nord). La Mammal Diversity Database cite aussi la Namibie (absente de Wikipédia ; on ne sait pas si la présence est naturelle ou introduite). L’hippotrague noir géant (H. n. variani) n’existe que dans le centre de l’Angola."
      }
    },
    roan: {
      "present": [
        "ao",
        "bw",
        "cd",
        "mw",
        "zm",
        "bj",
        "et",
        "ke",
        "rw",
        "ss",
        "tz",
        "ug",
        "mz",
        "za",
        "zw",
        "cm",
        "cf",
        "td",
        "ng",
        "sd",
        "sn",
        "bf",
        "gh",
        "gn",
        "gw",
        "ml",
        "tg",
        "ci",
        "na"
      ],
      "back": [
        "sz"
      ],
      "gone": [
        "bi",
        "gm",
        "er",
        "ne"
      ],
      "asOf": {
        "en": "Wikipedia and Mammal Diversity Database, read Nov 2026",
        "fr": "Wikipédia et Mammal Diversity Database, consultés en nov. 2026"
      },
      "src": [
        "s163",
        "s170"
      ],
      "note": {
        "en": "Sources partly disagree. Wikipedia lists Burundi as present, the Mammal Diversity Database as extinct (we followed the database). Gambia: extinct per MDD. Northern Eritrea: possibly extinct. Niger: uncertain (marked with a question mark). Eswatini: extinct, then reintroduced. Tanzania is in the MDD text but not in its country list; Wikipedia lists it as present. Mauritania is mentioned in the MDD text but unclear, so it is not classified. Namibia and Côte d’Ivoire, Guinea, Guinea-Bissau, Ghana, Togo, Mali, Burkina Faso come from the MDD list.",
        "fr": "Les sources divergent en partie. Wikipédia indique le Burundi comme présent, la Mammal Diversity Database comme disparu (nous avons suivi la base). Gambie : disparu selon la MDD. Nord de l’Érythrée : peut-être disparu. Niger : incertain (point d’interrogation). Eswatini : disparu puis réintroduit. La Tanzanie figure dans le texte de la MDD mais pas dans sa liste de pays ; Wikipédia la donne présente. La Mauritanie est citée dans le texte de la MDD sans clarté, elle n’est donc pas classée. La Namibie, la Côte d’Ivoire, la Guinée, la Guinée-Bissau, le Ghana, le Togo, le Mali et le Burkina Faso viennent de la liste de la MDD."
      }
    },
    brownhyena: {
      "present": [
        "na",
        "bw",
        "zw",
        "mz",
        "sz",
        "za"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s171"
      ],
      "note": {
        "en": "Wikipedia lists: Namibia, Botswana, western and southern Zimbabwe, southern Mozambique, western Eswatini, South Africa. Kenya (Middle Pleistocene fossils) and Europe (uncertain fossils) are ancient and not counted.",
        "fr": "Wikipédia cite : Namibie, Botswana, ouest et sud du Zimbabwe, sud du Mozambique, ouest de l’Eswatini, Afrique du Sud. Le Kenya (fossiles du Pléistocène moyen) et l’Europe (fossiles incertains) sont anciens et non comptés."
      }
    },
    okapi: {
      "present": [
        "cd"
      ],
      "gone": [
        "ug"
      ],
      "asOf": {
        "en": "Wikipedia, read Nov 2026",
        "fr": "Wikipédia, consultée en nov. 2026"
      },
      "src": [
        "s172"
      ],
      "note": {
        "en": "DR Congo is the only confirmed range (north and east of the Congo River). Genetic evidence hints at a population southwest of the river (uncertain). Uganda: seen in the Semuliki Valley but extinct there since the late 1970s.",
        "fr": "La RD Congo est la seule aire confirmée (nord et est du fleuve Congo). Des indices génétiques suggèrent une population au sud-ouest du fleuve (incertain). Ouganda : vu dans la vallée de la Semliki mais disparu depuis la fin des années 1970."
      }
    },
    ostrich: {
      "text": {
        "en": "Historically Africa north and south of the Sahara and parts of Asia Minor. Today mainly the savannas and Sahel of Africa and the semi-desert and desert of south-western Africa; most remaining wild birds live in reserves. The North African form survives in only 6 of the 18 countries where it once occurred. Failed reintroduction attempts in Israel (outside our country list). No country-by-country list found in our sources.",
        "fr": "Historiquement l’Afrique au nord et au sud du Sahara et une partie de l’Asie Mineure. Aujourd’hui surtout les savanes et le Sahel d’Afrique et les semi-déserts et déserts du sud-ouest de l’Afrique ; la plupart des oiseaux sauvages restants vivent en réserve. La forme nord-africaine ne survit que dans 6 des 18 pays où elle vivait. Tentatives de réintroduction en Israël (hors de notre liste de pays) restées sans succès. Aucune liste pays par pays trouvée dans nos sources."
      },
      "asOf": {
        "en": "read Nov 2026",
        "fr": "consultée en nov. 2026"
      },
      "src": [
        "s175",
        "s176"
      ]
    },
    flamingo: {
      "present": [
        "dz",
        "eg",
        "ly",
        "ma",
        "tn",
        "ke",
        "mg",
        "rw",
        "tz",
        "ug",
        "za",
        "na"
      ],
      "gone": [],
      "asOf": {
        "en": "Wikipedia and SA-Venues, read Nov 2026",
        "fr": "Wikipédia et SA-Venues, consultées en nov. 2026"
      },
      "src": [
        "s180",
        "s182"
      ],
      "note": {
        "en": "Wikipedia lists Algeria, Egypt, Libya, Morocco, Tunisia, Kenya, Madagascar, Rwanda, Tanzania and Uganda without saying breeding, resident or visitor. South Africa comes from SA-Venues (sites such as Kamfers Dam and West Coast National Park); Namibia from a Wikipedia photo caption (Walvis Bay). The list is probably incomplete (a forum post mentions flamingos in Mozambique and Botswana, unverified). Not the lesser flamingo (Phoeniconaias minor).",
        "fr": "Wikipédia cite l’Algérie, l’Égypte, la Libye, le Maroc, la Tunisie, le Kenya, Madagascar, le Rwanda, la Tanzanie et l’Ouganda sans préciser nicheur, résident ou visiteur. L’Afrique du Sud vient de SA-Venues (sites comme Kamfers Dam et le parc national de la côte ouest) ; la Namibie d’une légende photo de Wikipédia (Walvis Bay). La liste est probablement incomplète (un message de forum évoque des flamants au Mozambique et au Botswana, non vérifié). Il ne s’agit pas du flamant nain (Phoeniconaias minor)."
      }
    },
    pythons: {"present": ["sn", "gm", "gw", "gn", "sl", "lr", "ci", "gh", "tg", "bj", "ne", "bf", "ml", "ng", "cm", "cf", "cd", "cg", "ga", "gq", "ug", "ss", "et", "so", "ke", "tz", "ao", "na", "bw", "zm", "mw", "bi", "za", "mz", "zw", "sz"], "asOf": {"en": "Reptile Database and Wikipedia, read Nov 2026", "fr": "Reptile Database et Wikipédia, consultées en nov. 2026"}, "src": ["s186", "s187", "s188", "s189", "s191", "s197"], "note": {"en": "Union of the ranges of the five types; some records are disputed (Liberia for ball python). Python sebae: Senegal to Ethiopia and Somalia, south to northern Angola and northern Tanzania; Python natalensis: central and southern Africa.", "fr": "Union des aires des cinq types ; certaines mentions sont contestées (Liberia pour le python royal). Python sebae : du Sénégal à l'Éthiopie et la Somalie, au sud jusqu'au nord de l'Angola et de la Tanzanie ; Python natalensis : Afrique centrale et australe."}},
    baboons: {"present": ["sn", "gm", "gn", "gw", "sl", "ml", "mr", "dj", "er", "et", "ke", "so", "sd", "sa", "ye", "tz", "zw", "bw", "ao", "cd", "zm", "za", "mz", "na", "sz", "ls"], "asOf": {"en": "MDD country lists and Wikipedia, read Nov 2026", "fr": "Listes de pays de la MDD et Wikipédia, consultées en nov. 2026"}, "src": ["s200", "s201", "s202", "s203", "s206", "s207"], "note": {"en": "Also Saudi Arabia and Yemen for the hamadryas baboon (not listed here: the app only covers African countries). Olive baboon lives in 25 countries (not itemised in the sources used) so only countries named in sources are listed.", "fr": "Aussi l’Arabie saoudite et le Yémen pour le babouin hamadryas (non listés ici : l’appli ne couvre que les pays d’Afrique). Le babouin olive vit dans 25 pays (non détaillés dans les sources utilisées) : seuls les pays nommés dans les sources sont listés."}},
    gyps: {"present": ["sn", "gm", "ml", "mr", "sd", "et", "so", "ke", "tz", "za", "sz", "bw", "ls", "mz", "ao", "na", "zw", "dz", "ma", "tn"], "asOf": {"en": "Sources read Nov 2026", "fr": "Sources consultées en nov. 2026"}, "src": ["s215", "s216", "s217", "s220", "s221", "s224"], "note": {"en": "Union of the four species' ranges. Vagrants excluded (e.g. Zambia, DR Congo for the Cape Vulture; Spain/Portugal for Rüppell's). Rüppell's in southern Africa (Zimbabwe, South Africa, Mozambique per the Peregrine Fund) is not in ADW or Wikipedia, so only Zimbabwe, South Africa and Mozambique appear via other species here. Morocco and Tunisia: griffon mostly migrant/former breeder.", "fr": "Réunion des aires des quatre espèces. Errants exclus (ex. Zambie, RD Congo pour le vautour du Cap ; Espagne/Portugal pour Rüppell). La présence de Rüppell en Afrique australe (Zimbabwe, Afrique du Sud, Mozambique selon The Peregrine Fund) ne figure ni dans ADW ni dans Wikipédia, donc ces pays apparaissent ici via d'autres espèces. Maroc et Tunisie : vautour fauve surtout migrateur ou ancien nicheur."}},
    emperorscorpion: {"present": ["bj", "bf", "ci", "gm", "gh", "gn", "gw", "tg", "lr", "ml", "ng", "sn", "sl", "cm"], "asOf": {"en": "Wikipedia list, read Nov 2026", "fr": "Liste de Wikipédia, consultée en nov. 2026"}, "src": ["s226", "s227", "s228"], "note": {"en": "Wikipedia lists Benin, Burkina Faso, Côte d'Ivoire, Gambia, Ghana, Guinea, Guinea-Bissau, Togo, Liberia, Mali, Nigeria, Senegal, Sierra Leone and Cameroon, in forest and open savanna. NTNU lists a narrower set (Côte d'Ivoire, Ghana, Guinea, Guinea-Bissau, Nigeria, Togo, plus the DR Congo) and says it likely occurs in other nearby countries. Animal Diversity Web also mentions the Congo region; the DR Congo is not shown on the map. Many pet-trade animals come from Ghana and Togo.", "fr": "Wikipédia cite le Bénin, le Burkina Faso, la Côte d'Ivoire, la Gambie, le Ghana, la Guinée, la Guinée-Bissau, le Togo, le Liberia, le Mali, le Nigeria, le Sénégal, la Sierra Leone et le Cameroun, en forêt et en savane ouverte. NTNU donne une liste plus restreinte (Côte d'Ivoire, Ghana, Guinée, Guinée-Bissau, Nigeria, Togo, plus la RD Congo) et précise qu'il se trouve probablement dans d'autres pays voisins. Animal Diversity Web mentionne aussi la région du Congo ; la RD Congo n'apparaît pas sur la carte. Beaucoup d'animaux du commerce d'animaux de compagnie viennent du Ghana et du Togo."}},
    capevulture: {"present": ["bw", "ls", "mz", "za", "ao", "sz", "na", "zw"], "asOf": {"en": "IUCN assessment 2021", "fr": "Évaluation UICN 2021"}, "src": ["s230", "s231", "s234"], "note": {"en": "Resident and breeding: Botswana, Lesotho, Mozambique, South Africa. Non-breeding visitor: Angola, Eswatini, Namibia (its breeding population there is extinct), Zimbabwe. Vagrant only (not counted): Zambia, DR Congo. In South Africa it occurs in the north-east (Limpopo, Mpumalanga, North West, Gauteng; no breeding colonies remain in Mpumalanga), the south-east (Lesotho, KwaZulu-Natal, Eastern Cape) and the south-west (one colony remains, at Potberg). Presence in Kruger National Park: Not found in the sources used for this species.", "fr": "Résident et nicheur : Botswana, Lesotho, Mozambique, Afrique du Sud. Visiteur non nicheur : Angola, Eswatini, Namibie (sa population nicheuse y est éteinte), Zimbabwe. Errant seulement (non compté) : Zambie, RD Congo. En Afrique du Sud, il se trouve dans le nord-est (Limpopo, Mpumalanga, Nord-Ouest, Gauteng ; plus de colonie nicheuse dans le Mpumalanga), le sud-est (Lesotho, KwaZulu-Natal, Cap-Oriental) et le sud-ouest (une seule colonie subsiste, à Potberg). Présence dans le parc national Kruger : non trouvé dans les sources utilisées pour cette espèce."}},
    ruppellvulture: {"present": ["sn", "gm", "ml", "mr", "ng", "sd", "ss", "et", "er", "ke", "tz", "ug", "mz"], "asOf": {"en": "Sources read Nov 2026", "fr": "Sources consultées en nov. 2026"}, "src": ["s239", "s241", "s242", "s243", "s246"], "note": {"en": "Mainly a Sahel-to-East-Africa belt, roughly 5°S to 20°N (ADW). Countries retained: Senegal, Gambia, Mali, Sudan, South Sudan, Ethiopia, Kenya, Tanzania, northern Mozambique (Vulture MSAP); Mauritania (Peregrine Fund); Nigeria (oiseaux.net, 'Senegal to northern Nigeria'); Eritrea (ADW, 'Senegambia to Eritrea'); Uganda (a photo caption of the IUCN Vulture Specialist Group report places one in Kidepo NP). Excluded as uncertain or conflicting: Zimbabwe and South Africa (Peregrine Fund only), Morocco (Wikipedia only), and Spain and Portugal (vagrants; breeding not confirmed). Other Sahel countries such as Chad, Niger and Burkina Faso are not named in the sources read, so the list may be incomplete.", "fr": "Surtout une ceinture du Sahel à l'Afrique de l'Est, environ de 5° S à 20° N (ADW). Pays retenus : Sénégal, Gambie, Mali, Soudan, Soudan du Sud, Éthiopie, Kenya, Tanzanie, nord du Mozambique (plan d'action CMS) ; Mauritanie (Peregrine Fund) ; Nigeria (oiseaux.net, « du Sénégal au nord du Nigeria ») ; Érythrée (ADW, « de la Sénégambie à l'Érythrée ») ; Ouganda (la légende d'une photo du rapport du Groupe de spécialistes des vautours de l'UICN en situe un au parc de Kidepo). Écartés car incertains ou contradictoires : Zimbabwe et Afrique du Sud (Peregrine Fund seul), Maroc (Wikipédia seul), Espagne et Portugal (errants ; reproduction non confirmée). D'autres pays du Sahel comme le Tchad, le Niger et le Burkina Faso ne sont pas nommés dans les sources lues : la liste peut être incomplète."}},
    griffonvulture: {"present": ["ma", "dz", "tn", "sn", "gm", "ml", "mr", "ne"], "asOf": {"en": "Sources read Nov 2026; Morocco data to early 2025", "fr": "Sources consultées en nov. 2026 ; données du Maroc jusqu'au début de 2025"}, "src": ["s250", "s252", "s254", "s255", "s256", "s257", "s258", "s261"], "note": {"en": "Africa: breeding in Algeria (Atlas; 'doing well at some sites', Magornitho 2014). Morocco: last pairs recorded in 1984, then recolonisation with a reintroduction programme from 2020; 7 pairs in early 2025 around Jbel Moussa, 4 breeding; migrants and immatures from Spain seen mainly in the north. Tunisia: considered extinct as a breeder, may survive in the northwest near the Algerian border (Magornitho 2014); mostly migrant. Senegal, Gambia (wintering immatures per BirdForum), Mali, Mauritania, Niger: wintering or ringing recoveries, not breeding. Ethiopia and Eritrea: no source read lists the Eurasian Griffon in Ethiopia (a 2019-era Horn of Africa paper lists seven resident vultures, griffon not among them); a Saudi Arabia blog (2018) only suggests that birds seen in Asir may cross the Bab-el-Mandeb toward the Horn, naming Djibouti and Eritrea, so Ethiopia and Eritrea are left out. Sudan, Egypt, Chad: not found in the sources used. Outside the app (Europe/Asia): Spain, Portugal, France, Italy, Croatia, Serbia, North Macedonia, Bulgaria, Greece, Cyprus, Armenia, Turkey, Caucasus, Arabian Peninsula, Iran, Central Asia, Himalayas and northwest India.", "fr": "Afrique : nicheur en Algérie (Atlas ; « semble se porter bien sur certains sites », Magornitho 2014). Maroc : derniers couples notés en 1984, puis recolonisation avec un programme de réintroduction depuis 2020 ; 7 couples début 2025 autour du Jbel Moussa, dont 4 nicheurs ; migrateurs et immatures venus d'Espagne vus surtout dans le nord. Tunisie : considéré éteint comme nicheur, il survit peut-être dans le nord-ouest près de la frontière algérienne (Magornitho 2014) ; surtout migrateur. Sénégal, Gambie (immatures hivernants selon BirdForum), Mali, Mauritanie, Niger : hivernage ou reprises d'oiseaux bagués, pas de reproduction. Éthiopie et Érythrée : aucune source lue ne cite le vautour fauve en Éthiopie (un article sur la Corne de l'Afrique liste sept vautours résidents, sans lui) ; un blog d'Arabie saoudite (2018) suggère seulement que des oiseaux vus dans l'Asir pourraient traverser le Bab-el-Mandeb vers la Corne, en citant Djibouti et l'Érythrée ; l'Éthiopie et l'Érythrée ne sont donc pas retenues. Soudan, Égypte, Tchad : non trouvé dans les sources utilisées. Hors appli (Europe/Asie) : Espagne, Portugal, France, Italie, Croatie, Serbie, Macédoine du Nord, Bulgarie, Grèce, Chypre, Arménie, Turquie, Caucase, péninsule arabique, Iran, Asie centrale, Himalaya et nord-ouest de l'Inde."}}
  },

  /* News and update log, newest first. Shown on the "What’s new" page. */
  updates: [
    {
      date: "2026-11-24",
      title: { en: "Note where you saw an animal", fr: "Noter où vous avez vu un animal" },
      text: {
        en: "After a photo is recognised, a “Note the sighting” button lets you share where you saw the animal. If the photo was just taken, the app uses your position (with your permission). For an older photo, you enter the coordinates or pick the spot on the map, and the date. Without a connection, the sighting waits on your phone and is sent when the connection comes back. The terms were updated: sightings are visible to all users.",
        fr: "Après la reconnaissance d’une photo, un bouton « Noter l’observation » permet de partager où vous avez vu l’animal. Si la photo vient d’être prise, l’appli utilise votre position (avec votre autorisation). Pour une photo plus ancienne, vous saisissez les coordonnées ou touchez l’endroit sur la carte, et la date. Sans réseau, l’observation attend sur votre téléphone et part quand le réseau revient. Les conditions ont été mises à jour : les observations sont visibles par tous."
      },
      src: []
    },
    {
      date: "2026-11-24",
      title: { en: "Observations map (first part)", fr: "Carte des observations (première partie)" },
      text: {
        en: "New “Observations” page: pick a park to see a map of where animals were seen, with the date, the GPS position and a button to open it in Google Maps. Adding observations comes next.",
        fr: "Nouvelle page « Observations » : choisissez un parc pour voir la carte des endroits où des animaux ont été vus, avec la date, la position GPS et un bouton pour ouvrir dans Google Maps. L’ajout d’observations arrive ensuite."
      },
      src: []
    },
    {
      date: "2026-11-22",
      title: { en: "New menu to go back to the home page quickly", fr: "Nouveau menu pour revenir vite à l’accueil" },
      text: {
        en: "The ☰ button at the top left opens a menu showing where you are (home, country, park, animal). Tap a step to go straight back to it.",
        fr: "Le bouton ☰ en haut à gauche ouvre un menu qui montre où vous êtes (accueil, pays, parc, animal). Touchez une étape pour y revenir directement."
      },
      src: []
    },
    {
      date: "2026-11-22",
      title: { en: "Photo recognition: artificial intelligence only; keep photos for later", fr: "Reconnaissance par photo : intelligence artificielle seulement ; photos gardées pour plus tard" },
      text: {
        en: "The offline detector is removed: it was not precise enough, and the app is lighter without it. Without a connection, or if the artificial intelligence cannot be reached, a “Keep to check later” button saves the photo on your phone so you can check it when you have a connection. The terms were rewritten to match. Illustrations of tall animals now show their head, and the language button shows a small flag.",
        fr: "Le détecteur hors ligne est supprimé : il n’était pas assez précis, et l’appli est plus légère sans lui. Sans réseau, ou si l’intelligence artificielle ne répond pas, un bouton « Garder pour vérifier plus tard » enregistre la photo sur votre téléphone pour la vérifier quand vous aurez du réseau. Les conditions ont été réécrites en conséquence. Les illustrations des grands animaux montrent maintenant leur tête, et le bouton de langue affiche un petit drapeau."
      },
      src: []
    },
    {
      date: "2026-11-21",
      title: { en: "New pages: pythons, baboons, vultures, emperor scorpion; full-screen illustrations", fr: "Nouvelles pages : pythons, babouins, vautours, scorpion empereur ; illustrations en plein écran" },
      text: {
        en: "Group pages list the types present in Africa and how to tell them apart (pythons, baboons, Gyps vultures); the Cape, Rüppell’s and griffon vultures and the emperor scorpion have their own pages. Tap the small button on an illustration to see it full screen and zoom. When the artificial intelligence only finds the group (for example “python”), the app now opens the group page. Photo tips moved into the terms screen.",
        fr: "Des pages de groupe listent les types présents en Afrique et comment les distinguer (pythons, babouins, vautours Gyps) ; les vautours du Cap, de Rüppell et fauve ainsi que le scorpion empereur ont leur propre fiche. Touchez le petit bouton sur une illustration pour l’afficher en plein écran et zoomer. Quand l’intelligence artificielle ne trouve que le groupe (par exemple « python »), l’appli ouvre la page du groupe. Les conseils pour les photos sont maintenant dans l’écran des conditions."
      },
      src: []
    },
    {
      date: "2026-11-18",
      title: { en: "Seba’s python and rock python merged", fr: "Python de Seba et python de roche fusionnés" },
      text: {
        en: "The two python pages are now one: African rock python (Seba’s python), with the Kruger and the southern countries added. Specialists disagree on whether the southern rock python (Python natalensis) is a separate species; the page says so.",
        fr: "Les deux fiches de pythons n’en font plus qu’une : Python de Seba (python de roche d’Afrique), avec le Kruger et les pays du sud ajoutés. Les spécialistes ne sont pas d’accord sur le fait que le python de roche du sud (Python natalensis) soit une espèce distincte ; la fiche le précise."
      },
      src: []
    },
    {
      date: "2026-11-18",
      title: { en: "Four more animals and nine new pictures", fr: "Quatre animaux de plus et neuf nouvelles images" },
      text: {
        en: "Added the brown hyena, okapi, common ostrich and greater flamingo. New pictures for the side-striped jackal, Southern African rock python, marabou stork, sable antelope and roan antelope. The ostrich is in the Kruger list; the brown hyena, okapi and flamingo are found by search with their countries.",
        fr: "Ajout de la hyène brune, de l’okapi, de l’autruche d’Afrique et du flamant rose. Nouvelles images pour le chacal à flancs rayés, le python de roche d’Afrique australe, le marabout d’Afrique, l’antilope noire et l’antilope rouanne. L’autruche est dans la liste du Kruger ; la hyène brune, l’okapi et le flamant se trouvent par la recherche avec leurs pays."
      },
      src: []
    },
    {
      date: "2026-11-17",
      title: { en: "4 more animals; two pictures withdrawn", fr: "4 animaux de plus ; deux images retirées" },
      text: {
        en: "Added the Southern African rock python, marabou stork, sable antelope and roan antelope, all four in the Kruger list (their pictures will follow). The pictures of the side-striped jackal and Seba’s python did not match the animals, so they were withdrawn until correct ones are available.",
        fr: "Ajout du python de roche d’Afrique australe, du marabout d’Afrique, de l’antilope noire et de l’antilope rouanne, tous quatre dans la liste du Kruger (leurs images suivront). Les images du chacal à flancs rayés et du python de Seba ne correspondaient pas aux animaux ; elles sont retirées en attendant des images correctes."
      },
      src: []
    },
    {
      date: "2026-11-17",
      title: { en: "16 more animals (groups 3 and 4)", fr: "16 animaux de plus (groupes 3 et 4)" },
      text: {
        en: "Added the chacma baboon, suricate, slender mongoose, honey badger, serval, caracal, Temminck’s pangolin and side-striped jackal, plus the Nile crocodile, dwarf crocodile, Nile monitor, savanna monitor, black mamba, Mozambique spitting cobra, Seba’s python and flap-necked chameleon. Twelve of them are in the Kruger; the suricate, dwarf crocodile, savanna monitor and Seba’s python are found by search with their countries.",
        fr: "Ajout du babouin chacma, du suricate, de la mangouste rouge, du ratel, du serval, du caracal, du pangolin de Temminck et du chacal à flancs rayés, ainsi que du crocodile du Nil, du crocodile nain, du varan du Nil, du varan des savanes, du mamba noir, du cobra cracheur du Mozambique, du python de Seba et du caméléon bilobé. Douze vivent au Kruger ; le suricate, le crocodile nain, le varan des savanes et le python de Seba se trouvent par la recherche avec leurs pays."
      },
      src: []
    },
    {
      date: "2026-11-16",
      title: { en: "Photo: choices and “To check” list", fr: "Photo : choix et liste « À vérifier »" },
      text: {
        en: "When the app is not sure, it shows its best three guesses so you can pick the right one, or keep the photo in a “To check” list on your device and check it later with Google Lens or Gemini.",
        fr: "Quand l’appli n’est pas sûre, elle propose ses trois meilleures hypothèses pour choisir la bonne, ou garde la photo dans une liste « À vérifier » sur l’appareil pour la vérifier plus tard avec Google Lens ou Gemini."
      },
      src: []
    },
    {
      date: "2026-11-16",
      title: { en: "“Seen it” tracker and photo recognition", fr: "Suivi des animaux vus et reconnaissance par photo" },
      text: {
        en: "On each animal page, a round button at the bottom left marks the animal as seen: its frame turns from red to green in the lists. Also new: photograph an animal from the home page and the app opens its page, or says it is not recognised.",
        fr: "Sur chaque fiche, un bouton rond en bas à gauche marque l’animal comme vu : son cadre passe du rouge au vert dans les listes. Nouveau aussi : photographiez un animal depuis l’accueil, et l’appli ouvre sa fiche, ou indique qu’il n’est pas reconnu."
      },
      src: []
    },
    {
      date: "2026-11-16",
      title: { en: "13 more animals (group 2) and a new logo", fr: "13 animaux de plus (groupe 2) et un nouveau logo" },
      text: {
        en: "Added Thomson’s and Grant’s gazelles, springbok, gemsbok, lesser kudu, nyala, eland, lechwe, southern reedbuck, topi, steenbok, Kirk’s dik-dik and Cape porcupine. Eland, nyala, reedbuck, steenbok and porcupine are in Kruger; the others are found by search with their countries, and will get a park later.",
        fr: "Ajout des gazelles de Thomson et de Grant, du springbok, de l’oryx, du petit koudou, du nyala, de l’éland, du cobe de Lechwe, du cobe des roseaux, du topi, du steenbok, du dik-dik de Kirk et du porc-épic du Cap. Éland, nyala, cobe des roseaux, steenbok et porc-épic vivent au Kruger ; les autres se trouvent par la recherche avec leurs pays, et auront un parc plus tard."
      },
      src: ["s81"]
    },
    {
      date: "2026-11-15",
      title: { en: "Images in one file, jackal and vervet monkey added", fr: "Images dans un seul fichier, chacal et singe vervet ajoutés" },
      text: {
        en: "All animal pictures are now inside a single file (images.js), so no picture file can be forgotten on upload. Added the black-backed jackal and the vervet monkey to Kruger, and pictures for the four birds: all 23 animals now have one.",
        fr: "Toutes les images des animaux sont maintenant dans un seul fichier (images.js) : plus aucun fichier image à oublier lors de l’envoi. Ajout du chacal à chabraque et du singe vervet au Kruger, et des images des quatre oiseaux : les 23 animaux ont maintenant la leur."
      },
      src: ["s71"]
    },
    {
      date: "2026-11-15",
      title: { en: "Search from the home page, countries per animal, 4 birds", fr: "Recherche depuis l’accueil, pays par animal, 4 oiseaux" },
      text: {
        en: "You can now search an animal or a park from the home page. Each animal page shows the countries where it lives (with source and date). Added martial eagle, African fish eagle, white-backed vulture and lappet-faced vulture to Kruger.",
        fr: "Vous pouvez maintenant chercher un animal ou un parc depuis l’accueil. Chaque fiche animal montre les pays où il vit (avec source et date). Ajout de l’aigle martial, de l’aigle pêcheur d’Afrique, du vautour africain et du vautour oricou au Kruger."
      },
      src: ["s63"]
    },
    {
      date: "2026-11-15",
      title: { en: "New: how to recognise each animal", fr: "Nouveau : comment reconnaître chaque animal" },
      text: {
        en: "Each animal page now explains how to recognise it, and how males and females differ (or that there is no visible difference).",
        fr: "Chaque fiche explique maintenant comment reconnaître l’animal, et en quoi le mâle et la femelle diffèrent (ou qu’il n’y a pas de différence visible)."
      },
      src: []
    },
    {
      date: "2026-11-15",
      title: { en: "Pictures for all 17 animals", fr: "Images pour les 17 animaux" },
      text: {
        en: "Elephant, giraffe, zebra, white and black rhino, buffalo, hippo, blue wildebeest, greater kudu, impala, waterbuck, lion, leopard, cheetah, African wild dog, spotted hyena and warthog now have an illustration.",
        fr: "L’éléphant, la girafe, le zèbre, les rhinocéros blanc et noir, le buffle, l’hippopotame, le gnou bleu, le grand koudou, l’impala et le cobe à croissant, le lion, le léopard, le guépard, le lycaon, la hyène tachetée et le phacochère ont maintenant une illustration."
      },
      src: []
    },
    {
      date: "2026-11-15",
      title: { en: "17 species in Kruger: rhinos split, hyena, impala and more", fr: "17 espèces au Kruger : rhinocéros séparés, hyène, impala et plus" },
      text: {
        en: "White and black rhinos now have their own pages. Added spotted hyena, impala, greater kudu, blue wildebeest, waterbuck and warthog. Giraffe, hippo and zebra now show SANParks’ latest trend (27 Mar 2025). A new gauge shows how threatened each animal is.",
        fr: "Les rhinocéros blanc et noir ont chacun leur page. Ajout de la hyène tachetée, de l’impala, du grand koudou, du gnou bleu, du cobe à croissant et du phacochère. La girafe, l’hippopotame et le zèbre affichent la dernière tendance de SANParks (27 mars 2025). Une nouvelle jauge montre à quel point chaque animal est menacé."
      },
      src: ["s30"]
    },
    {
      date: "2026-11-14",
      title: { en: "App launched with South Africa and Kruger National Park", fr: "Lancement de l’application avec l’Afrique du Sud et le parc national Kruger" },
      text: {
        en: "First version: 10 species, English and French, works offline. Other countries are listed as coming soon.",
        fr: "Première version : 10 espèces, anglais et français, fonctionne hors ligne. Les autres pays sont indiqués « bientôt »."
      },
      src: []
    },
    {
      date: "2026-09-22",
      title: { en: "South Africa: at least 15,096 rhinos at the end of 2025", fr: "Afrique du Sud : au moins 15 096 rhinocéros fin 2025" },
      text: {
        en: "The government reports at least 2,565 black and 12,531 white rhinos. Poaching took 2.2% of the national population in 2025.",
        fr: "Le gouvernement indique au moins 2 565 rhinocéros noirs et 12 531 blancs. Le braconnage a touché 2,2 % de la population nationale en 2025."
      },
      src: ["s7"]
    },
    {
      date: "2026-07-26",
      title: { en: "SANParks explains 951 elephant deaths in Kruger (2020–2025)", fr: "SANParks explique 951 décès d’éléphants au Kruger (2020–2025)" },
      text: {
        en: "More than half were natural; 179 were linked to snares and 207 to management actions. SANParks says the population fluctuates between 28,000 and 39,000.",
        fr: "Plus de la moitié étaient naturels ; 179 liés aux collets et 207 à des interventions de gestion. SANParks indique que la population varie entre 28 000 et 39 000."
      },
      src: ["s22", "s2"]
    },
    {
      date: "2026-07-01",
      title: { en: "First national census of free-roaming cheetahs in South Africa", fr: "Premier recensement national des guépards en liberté en Afrique du Sud" },
      text: {
        en: "Reported as showing a steep decline outside protected areas (month of publication: July 2026).",
        fr: "Décrit comme montrant un déclin marqué hors des zones protégées (publié en juillet 2026)."
      },
      src: ["s23"]
    },
    {
      date: "2026-02-11",
      title: { en: "Rhino poaching in Kruger almost doubled in 2025", fr: "Le braconnage de rhinocéros au Kruger a presque doublé en 2025" },
      text: {
        en: "174 rhinos were poached in Kruger in 2025 versus 88 in 2024, while national poaching fell 16%.",
        fr: "174 rhinocéros ont été braconnés au Kruger en 2025 contre 88 en 2024, alors que le braconnage national a baissé de 16 %."
      },
      src: ["s6"]
    }
  ]
};
