/* Africa Wildlife Finder - data file (EN/FR)
 * Every figure has a source id (see "sources") and an "asOf" date.
 * Update this file once a month (see README.md).
 * conf = "official" | "scientific" | "unofficial" | "none"
 */
window.APP_DATA = {
  meta: {
    version: "1.9.2",
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
    CR: { en: "Critically Endangered", fr: "En danger critique" }
  },

  gauge: {
    LC: { text: { en: "Least Concern: many animals and no immediate risk of disappearing.", fr: "Préoccupation mineure : beaucoup d’individus et pas de risque immédiat de disparition." } },
    NT: { text: { en: "Near Threatened: not threatened yet, but could become so soon. This is LESS serious than Vulnerable.", fr: "Quasi menacée : pas encore menacée, mais pourrait le devenir bientôt. C’est MOINS grave que « Vulnérable »." } },
    VU: { text: { en: "Vulnerable: high risk of disappearing from the wild.", fr: "Vulnérable : risque élevé de disparaître à l’état sauvage." } },
    EN: { text: { en: "Endangered: very high risk of disappearing from the wild.", fr: "En danger : risque très élevé de disparaître à l’état sauvage." } },
    CR: { text: { en: "Critically Endangered: extremely high risk, on the edge of disappearing.", fr: "En danger critique : risque extrêmement élevé, au bord de la disparition." } }
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
    }
  },

  parks: [
    {
      id: "kruger",
      country: "za",
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
      animals: ["lion", "elephant", "leopard", "buffalo", "whiterhino", "blackrhino", "giraffe", "hippo", "cheetah", "wilddog", "hyena", "zebra", "impala", "kudu", "wildebeest", "waterbuck", "warthog", "martialeagle", "whitebackedvulture", "lappetvulture", "fisheagle", "blackbackedjackal", "vervet", "eland", "nyala", "reedbuck", "steenbok", "porcupine"]
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
    }
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
    }
  },

  /* News and update log, newest first. Shown on the "What’s new" page. */
  updates: [
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
