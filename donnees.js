/* Africa Wildlife Finder - data file (EN/FR)
 * Every figure has a source id (see "sources") and an "asOf" date.
 * Update this file once a month (see README.md).
 * conf = "official" | "scientific" | "unofficial" | "none"
 */
window.APP_DATA = {
  meta: {
    version: "1.1.0",
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
      animals: ["lion", "elephant", "leopard", "buffalo", "whiterhino", "blackrhino", "giraffe", "hippo", "cheetah", "wilddog", "hyena", "zebra", "impala", "kudu", "wildebeest", "waterbuck", "warthog"]
    }
  ],

  animals: {
    lion: {
      img: "animaux/lion.jpg",
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
      safety: {
        en: "Never leave your vehicle outside permitted areas. Keep windows closed when lions are close.",
        fr: "Ne quittez jamais votre véhicule en dehors des zones autorisées. Gardez les vitres fermées quand des lions sont proches."
      }
    },

    elephant: {
      img: "animaux/elephant.jpg",
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
      safety: {
        en: "Keep a respectful distance, never block their path and switch off your engine. Warning signs: ears spread wide, head shaking, mock charges. Bulls in musth are especially dangerous.",
        fr: "Gardez vos distances, ne leur barrez jamais le passage et coupez le moteur. Signes d’avertissement : oreilles déployées, secouements de tête, fausses charges. Les mâles en musth sont particulièrement dangereux."
      }
    },

    leopard: {
      img: "animaux/leopard.jpg",
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
      safety: {
        en: "Rarely seen and shy, but very powerful. Stay in your vehicle and never approach on foot.",
        fr: "Rarement vu et craintif, mais très puissant. Restez dans votre véhicule et ne vous approchez jamais à pied."
      }
    },

    buffalo: {
      img: "animaux/buffalo.jpg",
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
      safety: {
        en: "Considered one of Africa’s most dangerous animals when wounded or alone. Keep your distance and stay in your vehicle.",
        fr: "Considéré comme l’un des animaux les plus dangereux d’Afrique lorsqu’il est blessé ou isolé. Gardez vos distances et restez dans votre véhicule."
      }
    },


    whiterhino: {
      img: "animaux/whiterhino.jpg",
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
      safety: {
        en: "Can charge suddenly. Keep your distance and stay in your vehicle. Never share live rhino locations on social media, it helps poachers.",
        fr: "Peut charger brusquement. Gardez vos distances et restez dans votre véhicule. Ne partagez jamais la position en direct des rhinocéros sur les réseaux sociaux : cela aide les braconniers."
      }
    },

    blackrhino: {
      img: "animaux/blackrhino.jpg",
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
      safety: {
        en: "Can charge without warning. Keep your distance and stay in your vehicle. Never share live rhino locations on social media.",
        fr: "Peut charger sans prévenir. Gardez vos distances et restez dans votre véhicule. Ne partagez jamais la position en direct des rhinocéros sur les réseaux sociaux."
      }
    },

    impala: {
      img: "animaux/impala.jpg",
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
      safety: {
        en: "Harmless to people, but its herds attract predators: drive slowly near them.",
        fr: "Inoffensif pour l’humain, mais ses troupeaux attirent les prédateurs : roulez doucement à proximité."
      }
    },

    kudu: {
      img: "animaux/kudu.jpg",
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
      safety: {
        en: "Harmless unless cornered. Bulls can be aggressive during the mating season.",
        fr: "Inoffensif sauf s’il est acculé. Les mâles peuvent être agressifs pendant la saison des amours."
      }
    },

    wildebeest: {
      img: "animaux/wildebeest.jpg",
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
      safety: {
        en: "Males can be aggressive. Stay in your vehicle.",
        fr: "Les mâles peuvent être agressifs. Restez dans votre véhicule."
      }
    },

    waterbuck: {
      img: "animaux/waterbuck.jpg",
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
      safety: {
        en: "Males can be aggressive and are dangerous when cornered. Admire from the vehicle.",
        fr: "Les mâles peuvent être agressifs et dangereux s’ils sont acculés. Admirez-le depuis le véhicule."
      }
    },

    warthog: {
      img: "animaux/warthog.jpg",
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
      safety: {
        en: "Rarely aggressive, but the tusks can hurt. Keep away.",
        fr: "Rarement agressif, mais les défenses peuvent blesser. Gardez vos distances."
      }
    },

    hyena: {
      img: "animaux/hyena.jpg",
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
      safety: {
        en: "Can be dangerous at night near camps. Never feed it, never leave food out, and stay in your vehicle or inside the camp fence.",
        fr: "Peut être dangereuse la nuit près des camps. Ne la nourrissez jamais, ne laissez aucune nourriture dehors et restez dans votre véhicule ou dans l’enceinte du camp."
      }
    },

    giraffe: {
      img: "animaux/giraffe.jpg",
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
      safety: {
        en: "Usually calm, but a kick can be deadly. Slow down when giraffes cross the road.",
        fr: "Généralement calme, mais un coup de patte peut être mortel. Ralentissez quand des girafes traversent la route."
      }
    },

    hippo: {
      img: "animaux/hippo.jpg",
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
      safety: {
        en: "Often called one of Africa’s most dangerous animals. Never walk near river banks, never stand between a hippo and the water, and take extra care at dusk and at night.",
        fr: "Souvent cité parmi les animaux les plus dangereux d’Afrique. Ne marchez jamais près des berges, ne vous placez jamais entre un hippopotame et l’eau, et soyez très prudent au crépuscule et la nuit."
      }
    },

    cheetah: {
      img: "animaux/cheetah.jpg",
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
      safety: {
        en: "Shy and not dangerous in normal conditions, but stay in your vehicle and keep quiet so you do not disturb a hunt.",
        fr: "Craintif et peu dangereux en temps normal, mais restez dans votre véhicule et en silence pour ne pas perturber une chasse."
      }
    },

    wilddog: {
      img: "animaux/wilddog.jpg",
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
      safety: {
        en: "Very rarely a danger to people, but keep your distance and stay in your vehicle.",
        fr: "Très rarement dangereux pour l’humain, mais gardez vos distances et restez dans votre véhicule."
      }
    },

    zebra: {
      img: "animaux/zebra.jpg",
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
      safety: {
        en: "Can kick and bite if cornered. Admire from the vehicle.",
        fr: "Peut ruer et mordre s’il est acculé. Admirez-le depuis le véhicule."
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

    }
  },

  /* News and update log, newest first. Shown on the "What’s new" page. */
  updates: [
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
