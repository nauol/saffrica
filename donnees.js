/* Africa Wildlife Finder - data file (EN/FR)
 * Every figure has a source id (see "sources") and an "asOf" date.
 * Update this file once a month (see README.md).
 * conf = "official" | "scientific" | "unofficial" | "none"
 */
window.APP_DATA = {
  meta: {
    version: "1.0.0",
    lastChecked: "2026-11-14",
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
      animals: ["lion", "elephant", "leopard", "buffalo", "rhino", "giraffe", "hippo", "cheetah", "wilddog", "zebra"]
    }
  ],

  animals: {
    lion: {
      emoji: "🦁",
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
      emoji: "🐘",
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
      emoji: "🐆",
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
      emoji: "🐃",
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

    rhino: {
      emoji: "🦏",
      name: { en: "Rhinoceros (white & black)", fr: "Rhinocéros (blanc et noir)" },
      sci: "Ceratotherium simum / Diceros bicornis",
      status: "NT",
      statusNote: {
        en: "Status shown is for the white rhino (Near Threatened). The black rhino is Critically Endangered.",
        fr: "Le statut affiché est celui du rhinocéros blanc (quasi menacé). Le rhinocéros noir est en danger critique."
      },
      statusAsOf: { en: "IUCN Red List (white rhino)", fr: "Liste rouge UICN (rhinocéros blanc)" },
      statusSrc: ["s26"],
      global: {
        pop: {
          en: "About 26,700 rhinos of all five species worldwide (2025). South Africa holds the most: at least 15,096 at the end of 2025 (12,531 white + 2,565 black). Black rhinos across Africa: 6,788 (up from 6,195 in 2022).",
          fr: "Environ 26 700 rhinocéros des cinq espèces dans le monde (2025). L’Afrique du Sud en abrite le plus : au moins 15 096 fin 2025 (12 531 blancs + 2 565 noirs). Rhinocéros noirs en Afrique : 6 788 (contre 6 195 en 2022)."
        },
        trend: { en: "Mixed: black rhinos recovering, poaching still a major threat", fr: "Mitigé : les rhinocéros noirs se rétablissent, le braconnage reste une menace majeure" },
        asOf: { en: "Sep 2025 (world) / Sep 2026 (South Africa)", fr: "sept. 2025 (monde) / sept. 2026 (Afrique du Sud)" },
        src: ["s8", "s7"]
      },
      diet: {
        en: "White rhino: grazer (short grass). Black rhino: browser (leaves, twigs and shrubs).",
        fr: "Rhinocéros blanc : brouteur d’herbe rase. Rhinocéros noir : mange feuilles, brindilles et arbustes."
      },
      size: { en: "White rhino about 1,800–2,300 kg; black rhino about 800–1,350 kg.", fr: "Rhinocéros blanc d’environ 1 800 à 2 300 kg ; rhinocéros noir d’environ 800 à 1 350 kg." },
      lifespan: { en: "About 35–40 years.", fr: "Environ 35 à 40 ans." },
      behavior: {
        en: "Mostly solitary or in small groups. Poor eyesight but excellent hearing and smell. Loves wallowing in mud.",
        fr: "Surtout solitaire ou en petits groupes. Vue faible mais excellents ouïe et odorat. Aime se vautrer dans la boue."
      },
      safety: {
        en: "Can charge suddenly. Keep your distance and stay in your vehicle. Never share live rhino locations on social media, it helps poachers.",
        fr: "Peut charger brusquement. Gardez vos distances et restez dans votre véhicule. Ne partagez jamais la position en direct des rhinocéros sur les réseaux sociaux : cela aide les braconniers."
      }
    },

    giraffe: {
      emoji: "🦒",
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
      emoji: "🦛",
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
      emoji: "🐆",
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
      emoji: "🐕",
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
      emoji: "🦓",
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
        src: ["s2", "s3"],
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
        src: ["s1"],
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
      rhino: {
        pop: {
          en: "about 2,060 rhinos (about 1,851 white + 210 black, median estimate, end of 2022). “Just over 2,000” reported in 2025.",
          fr: "environ 2 060 rhinocéros (environ 1 851 blancs + 210 noirs, estimation médiane, fin 2022). « Un peu plus de 2 000 » selon des déclarations de 2025."
        },
        asOf: { en: "end of 2022 (report published 2023); 2025 statement", fr: "fin 2022 (rapport publié en 2023) ; déclaration de 2025" },
        conf: "official",
        src: ["s4", "s5"],
        note: {
          en: "Kruger once held over 12,000 rhinos. Poaching hit hard: 174 rhinos were killed in Kruger in 2025, up from 88 in 2024, even though poaching fell 16% nationwide. The “Rhino Renaissance” campaign aims to rebuild Kruger’s white rhino population from just over 2,000 to 12,000 within a decade.",
          fr: "Le Kruger a abrité plus de 12 000 rhinocéros. Le braconnage a frappé fort : 174 rhinocéros ont été tués au Kruger en 2025, contre 88 en 2024, alors que le braconnage a baissé de 16 % au niveau national. La campagne « Rhino Renaissance » vise à reconstituer la population de rhinocéros blancs du Kruger, de un peu plus de 2 000 à 12 000 en dix ans."
        },
        extraSrc: ["s6", "s21"],
        spot: {
          en: "Mostly southern Kruger, but sightings take patience and luck. Exact rhino locations are usually not shared publicly, to protect them from poachers. (Traveller tips, not official.)",
          fr: "Surtout le sud du Kruger, mais les observations demandent patience et chance. Les positions exactes des rhinocéros ne sont généralement pas rendues publiques, pour les protéger des braconniers. (Conseils de voyageurs, non officiels.)"
        },
        spotSrc: ["s20"]
      },
      giraffe: {
        pop: { en: "No recent official figure found", fr: "Aucun chiffre officiel récent trouvé" },
        asOf: "—",
        conf: "none",
        src: ["s1"],
        note: {
          en: "SANParks lists one giraffe species in Kruger but its website shows no recent giraffe count. This will be searched again in the next monthly update.",
          fr: "SANParks recense une espèce de girafe au Kruger mais son site n’affiche aucun comptage récent. Une nouvelle recherche sera faite lors de la prochaine mise à jour mensuelle."
        },
        spot: {
          en: "Widespread in open woodland and savanna with acacia trees.",
          fr: "Répandue dans les bois clairs et la savane avec des acacias."
        },
        spotSrc: []
      },
      hippo: {
        pop: { en: "No recent official figure found", fr: "Aucun chiffre officiel récent trouvé" },
        asOf: "—",
        conf: "none",
        src: ["s28"],
        note: {
          en: "Sources only say hippos are abundant in Kruger’s rivers. No park count was found. This will be searched again in the next monthly update.",
          fr: "Les sources disent seulement que les hippopotames sont abondants dans les rivières du Kruger. Aucun comptage du parc n’a été trouvé. Une nouvelle recherche sera faite lors de la prochaine mise à jour mensuelle."
        },
        spot: {
          en: "Rivers and dams such as the Sabie, Crocodile, Olifants and Letaba. Watch from safe river viewpoints and camps.",
          fr: "Rivières et barrages comme la Sabie, la Crocodile, l’Olifants et la Letaba. Observez depuis les points de vue sécurisés et les camps."
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
      zebra: {
        pop: { en: "No recent official figure found", fr: "Aucun chiffre officiel récent trouvé" },
        asOf: "—",
        conf: "none",
        src: ["s1"],
        note: {
          en: "SANParks counts zebra in Kruger but no recent figure could be found online. This will be searched again in the next monthly update.",
          fr: "SANParks recense les zèbres au Kruger mais aucun chiffre récent n’a pu être trouvé en ligne. Une nouvelle recherche sera faite lors de la prochaine mise à jour mensuelle."
        },
        spot: {
          en: "Open grasslands, often mixed with wildebeest. Very common.",
          fr: "Prairies ouvertes, souvent mêlés aux gnous. Très commun."
        },
        spotSrc: ["s28"]
      }
    }
  },

  /* News and update log, newest first. Shown on the "What’s new" page. */
  updates: [
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
