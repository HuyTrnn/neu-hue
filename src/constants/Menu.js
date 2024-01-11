import commingSoon from "../assets/images/coming_soon.jpg";
import banane from "../assets/images/DESERT/gebackenebanane.jpg";
import {
  TofuineinmePankoMehi,
  DimsumGarnelen,
  Edamame,
  NemRan,
  Tofu,
  Friesavocado,
  Xoixoai,
} from "../assets/imagesVor";
import {
  Bunreisnudelnfruhlingsrollen,
  Bunrind,
  Phoreisbandnudelsuppehahnchen,
  Udonxaokrossesente,
  Comrang,
} from "../assets/imagesHau";
import { Tofubowl } from "../assets/imagesBowl";
import { Dacbiet, Udonxao, Reisgerichtecury } from "../assets/imagesDacbiet";
import {
  Entenbrustfilet,
  Gegrilltesfleisch,
  Susssaugerlachfilet,
} from "../assets/imagesGi";

function getFood(a, b, c, d, e, f, more) {
  return [
    {
      name: "Tofu",
      price: a || 10.9,
    },
    {
      name: "Krosses Höhnchen",
      price: b || 13.5,
    },
    {
      name: "Hähnchen",
      price: c || 12.9,
    },
    {
      name: "Garnelen",
      price: d || 15.9,
    },
    {
      name: "Rind",
      price: e || 13.9,
    },
    {
      name: "Krosses Ente",
      price: f || 15.9,
    },
  ];
}

const VORSPEISEN = {
  category: "VORSPEISEN",
  items: [
    {
      name: "Mini-Frühlingsrollen",
      img: commingSoon,
      description: "",
      foods: [
        {
          name: "(6Stk) vegetarisch, mit süßsaurer Soße",
          price: 3.0,
        },
      ],
    },
    {
      name: "Peking Suppe",
      img: commingSoon,
      description: "",
      foods: [
        {
          name: "(leicht sauer-scharf) mit Entefleisch, Gemüse und Ei",
          price: 4.5,
        },
      ],
    },
    {
      name: "Wan Tan Suppe.",
      img: commingSoon,
      description: "",
      foods: [
        {
          name: "Gefülft mit Garnelen",
          price: 5.5,
        },
        {
          name: "Hähnchen und Gemüse",
          price: 5.5,
        },
      ],
    },
    {
      name: "Tom Kha Gai (leicht- scharf)",
      img: commingSoon,
      description:
        "Kokosmich-Suppe mit Hühnerfleisch, Thai Basilikum und Zitronengras",
      foods: [
        {
          name: "Tofu",
          price: 5.5,
        },
        {
          name: "Hähnchen",
          price: 6.0,
        },
        {
          name: "Gumelen",
          price: 6.5,
        },
      ],
    },
    {
      name: "Sup Mien/ Glas Noodle Soup",
      img: commingSoon,
      description: "würzige Suppe, Glasnudeln und Gemüse",
      foods: [
        {
          name: "Tofu",
          price: 5.5,
        },
        {
          name: "Hähnchen",
          price: 6.0,
        },
        {
          name: "Gumelen",
          price: 6.5,
        },
      ],
    },
    {
      name: "Edamame",
      img: Edamame,
      description: "Junge Sojabohnen gedũnstet",
      foods: [
        {
          name: "wahlweise mit Meersalz",
          price: 4.0,
        },
      ],
    },
    {
      name: "Gyoza 6 gebackene Gyoza-Teigtaschen",
      img: commingSoon,
      description: "",
      foods: [
        {
          name: "(eicht sover-schart) mit Enteftleisch, Gemüse undEl",
          price: 4.5,
        },
      ],
    },
    {
      name: "Tofu in einem Panko-Mehl (4 Stk.).",
      img: TofuineinmePankoMehi,
      description: "",
      price: 5.0,
      foods: [],
    },
    {
      name: "Ebi Tempura (Garnelen im Pankomantel) (4 Stk.)",
      img: commingSoon,
      description: "",
      price: 7.5,
      foods: [],
    },
    {
      name: "Dimsum mit Garnelen (4 Stk.)",
      img: DimsumGarnelen,
      description: "",
      price: 6.0,
      foods: [],
    },
    {
      name: "Nem Ran/Frühlingsrollen",
      img: NemRan,
      description:
        "2 große hausgemachte Frühlingsrollen, gefüllt mit Garnelen, Fleisch und Gemüse, serviert mit Limetten-Dressing",
      price: 6.0,
      foods: [],
    },
    {
      name: "Wan Tan Chien",
      img: commingSoon,
      description:
        "6 teigtaschen gebacken, gefüllt mit Garnelen, Hähnchen und Gemüse",
      price: 6.0,
      foods: [],
    },
    {
      name: "Nom Xoai/ Mangosalat",
      img: commingSoon,
      description:
        "Frischer Mangosalat, dazu Kräuter und Erdnüsse. serviert mit Limetten-Dressing",
      foods: [
        {
          name: "Tofu",
          price: 6.9,
        },
        {
          name: "Hähnchen",
          price: 7.9,
        },
        {
          name: "Garnelen..",
          price: 8.5,
        },
      ],
    },
    {
      name: "Gỏi Cuốn",
      img: commingSoon,
      description:
        "2 Sommerrollen mit Reisnudeln, frischem Salat. Wetnamesischen Kräutern, serviert mit Hoisin Sauce 5,50 b. Hähnchen 6,00 Tofu.",
      price: 6.0,
      foods: [
        {
          name: "Tofu",
          price: 5.5,
        },
        {
          name: "Hähnchen",
          price: 6.0,
        },
        {
          name: "Garnelen..",
          price: 6.5,
        },
      ],
    },
    {
      name: "Gỏi Đu Đủ",
      img: commingSoon,
      description:
        "Frischer Papaya Salat mit Karotten, gerösteten Erdnüssen, Koriander, Sesam und Limetten-Chili",
      foods: [
        {
          name: "Tofu",
          price: 8.9,
        },
        {
          name: "Hähnchen",
          price: 8.9,
        },
        {
          name: "Rind",
          price: 8.9,
        },
        {
          name: "Garnelen..",
          price: 8.9,
        },
      ],
    },
    {
      name: "Fries Avocado",
      img: Friesavocado,
      description:
        "Frische Avocado mit einem Knusprigen TempuraMantel. überzogen von einer Mango Sauce mit gerösteten Sesam",
      price: 5.5,
      foods: [],
    },
    {
      name: "Xôi Xoài",
      img: Xoixoai,
      description:
        "schwarzer Klebreis mit geösteten Erdnüssen, Mangostücken und einer Kokossauce",
      price: 6.5,
      foods: [],
    },
  ],
};

const HAUPTSPEISEN = {
  category: "HAUPTSPEISEN",
  items: [
    {
      name: "My Xao Vietnam / Vietnamese Noodles",
      img: commingSoon,
      description: "",
      foods: getFood(9.9, 12.0, 11.9, 14.9, 12.9, 14.9),
    },
    {
      name: "Udon Xao/Udon Noodles",
      img: Udonxaokrossesente,
      description:
        "Udon Nudeln gebraten mit frischem Gemüse, in Teriyaki-Sauce",
      foods: getFood(),
    },
    {
      name: "Pho Xao/Reisbandnudeln",
      img: commingSoon,
      description: "gebraten mit frischem Gemüse",
      foods: getFood(),
    },
    {
      name: "Mien Xao/Glasnudeln",
      img: commingSoon,
      description: "gebraten, mit Gemüse",
      foods: getFood(),
    },
    {
      name: "Com Rang/gebraten Reis",
      img: Comrang,
      description: "gebraten Reis mit frischem Wok-Gemüse",
      foods: getFood(),
    },
    {
      name: "Pho/Reisbandnudelsuppe",
      img: Phoreisbandnudelsuppehahnchen,
      description:
        "Reisbandnudelsuppe in einer würzigen Rinderbrühe mit Koriander, Lauchzwiebeln Und Kräuter",
      foods: [
        {
          name: "Tofu",
          price: 10.9,
        },
        {
          name: "Hähnchen",
          price: 12.9,
        },
        {
          name: "Rind",
          price: 13.9,
        },
        {
          name: "Garnelen",
          price: 13.5,
        },
        {
          name: "Krosser Ente",
          price: 13.9,
        },
        {
          name: "Rind u. Hähnchen",
          price: 13.9,
        },
      ],
    },
    {
      name: "Bun/Reisnudeln",
      img: Bunreisnudelnfruhlingsrollen,
      description:
        "Reisnudeln mit frischem Salat, Minze Kräutern, Erdnüssen und hausgemachtem Limetten-Dressing",
      foods: [
        {
          name: "Tofu",
          price: 10.9,
        },
        {
          name: "Hähnchen",
          price: 12.9,
        },
        {
          name: "Rind",
          price: 13.9,
        },
        {
          name: "Frühlingsrollen",
          price: 12.9,
        },
        {
          name: "Garnelen",
          price: 13.9,
        },
      ],
    },
    {
      name: "Pho Tron/Reisbandnudeln",
      img: commingSoon,
      description: "Salat lauwarm serviert",
      foods: getFood(11.9, 12.5, 13.5, 12.5, 14.9, 14.9),
    },
    {
      name: "Herbst Mix nach Neu Hue",
      img: commingSoon,
      description:
        "Gegrilltes Hähnchenfleisch, Tofu und hausgemachte Früh- lingsrollen (Hähnchenfleischfüllung) in einer speziellen Gewürzmischung lauwarm serviert mit Reisnudeln, Salat, frischen Kräutern und Erdnüssen. Dazu Limetten-Dressing",
      price: 14.9,
      foods: [],
    },
  ],
};

const BOWLS = {
  category: "BOWLS",
  items: [
    {
      name: "BOWLS",
      img: Tofubowl,
      description:
        "Sushi-Reis, Gurke, Wakame, Paprika, Mango, Avocado, Sesam, Edamame, Chia",
      foods: [
        {
          name: "Tofu Bowl",
          price: 11.9,
        },
        {
          name: "Chicken Bowl",
          price: 12.9,
        },
        {
          name: "Shrimp Bowl",
          price: 14.5,
        },
        {
          name: "Lachs Bowl",
          price: 15.5,
        },
      ],
    },
  ],
};

const DACBIET = {
  category: "DAC BIET",
  items: [
    {
      name: "Dac Biet",
      img: Dacbiet,
      description:
        "Knackiges Gemüse in dunkler Sauce mit Chili, Knoblauch, Basilikum nach Neu Hue-Art gebraten, (auf Wunsch auch scharf)",
      foods: [
        {
          name: "Tofu",
          price: 11.9,
        },
        {
          name: "Hähnchen",
          price: 12.9,
        },
        {
          name: "Rind",
          price: 14.9,
        },
        {
          name: "Krosses Fischfilet",
          price: 14.9,
        },
        {
          name: "Krosses Hahnchen",
          price: 13.5,
        },
        {
          name: "Garnelen",
          price: 14.9,
        },
        {
          name: "Krosse Ente",
          price: 14.9,
        },
      ],
    },
    {
      name: "Reisgerichte Curry",
      img: Reisgerichtecury,
      description:
        "Roter Curry mit knackigem Gemüse, Basilikum in Kokosmilch, leicht scharf",
      foods: [
        {
          name: "Tofu",
          price: 11.9,
        },
        {
          name: "Hahnchen",
          price: 12.9,
        },
        {
          name: "Rind",
          price: 14.5,
        },
        {
          name: "Krosses Fischfilet",
          price: 14.9,
        },
        {
          name: "Krosses Hahnchen",
          price: 12.9,
        },
        {
          name: "Garnelen",
          price: 14.9,
        },
        {
          name: "Krosse Ente",
          price: 14.9,
        },
      ],
    },
    {
      name: "Chua Ngot / SuBsauer SoBe",
      img: commingSoon,
      description: "Wok-Gemüse in hausgemachter Süßsauer Soße",
      foods: [
        {
          name: "Tofu",
          price: 11.9,
        },
        {
          name: "Hähnchen",
          price: 12.5,
        },
        {
          name: "Rind",
          price: 14.5,
        },
        {
          name: "Krosses Fischfilet",
          price: 14.9,
        },
        {
          name: "Krosses Hähnchen",
          price: 12.9,
        },
        {
          name: "Garnelen",
          price: 14.9,
        },
        {
          name: "Krosse Ente",
          price: 14.9,
        },
      ],
    },
    {
      name: "Reisgerichte Mango mit Gemüse-Sauce",
      img: commingSoon,
      description: "",
      foods: [
        {
          name: "Tofu",
          price: 11.9,
        },
        {
          name: "Hähnchen",
          price: 12.9,
        },
        {
          name: "Rind",
          price: 14.9,
        },
        {
          name: "Krosses Fischfilet",
          price: 14.9,
        },
        {
          name: "Krosses Hähnchen",
          price: 13.5,
        },
        {
          name: "Garnelen",
          price: 14.9,
        },
        {
          name: "Krosse Ente",
          price: 14.9,
        },
      ],
    },
    {
      name: "Reis Gerichte Peanut",
      img: commingSoon,
      description: "Wok-Gemüse in hausgemachter Erdnüsse-Sauce",
      foods: [
        {
          name: "Tofu",
          price: 11.9,
        },
        {
          name: "Hähnchen",
          price: 12.9,
        },
        {
          name: "Rind",
          price: 14.9,
        },
        {
          name: "Krosses Fischfilet",
          price: 14.9,
        },
        {
          name: "Krosses Hähnchen",
          price: 13.5,
        },
        {
          name: "Garnelen",
          price: 14.9,
        },
        {
          name: "Krosse Ente",
          price: 14.9,
        },
      ],
    },
  ],
};

const GERICHTE = {
  category: "GERICHTE",
  items: [
    {
      name: "Gegrilltes Fleites",
      img: Gegrilltesfleisch,
      description:
        "mit Gemüse Zitronengras, Limetten in dunkler hausgemachter Soße",
      foods: [
        {
          name: "Hähnchenfilet",
          price: 14.9,
        },
        {
          name: "Rind",
          price: 15.9,
        },
        {
          name: "Entenbrustfilet",
          price: 18.5,
        },
        {
          name: "Lachsfilet",
          price: 18.5,
        },
      ],
    },
    {
      name: "CURRY - Gegrilltes Fleisch",
      img: commingSoon,
      description:
        "mit Gemüse, Basilikum in Kokosmilch, rotem Curry, leicht scharf",
      foods: [
        {
          name: "Hähnchenfilet",
          price: 14.9,
        },
        {
          name: "Rind",
          price: 15.9,
        },
        {
          name: "Entenbrustfilet",
          price: 18.5,
        },
        {
          name: "Lachsfilet",
          price: 18.5,
        },
      ],
    },
    {
      name: "MANGO - Gegrilltes Fleisch ",
      img: commingSoon,
      description: "mit Gemuse in hausgemachter in Mango-Sauce",
      foods: [
        {
          name: "Hähnchenfilet",
          price: 14.9,
        },
        {
          name: "Rind",
          price: 15.9,
        },
        {
          name: "Entenbrustfilet",
          price: 18.5,
        },
        {
          name: "Lachsfilet",
          price: 18.5,
        },
      ],
    },
    {
      name: "SÜSSSAUER - Gegrilltes Fleisch ",
      img: commingSoon,
      description: "mit Ananas und Wok-Gemüse in süßsaurer Soße",
      foods: [
        {
          name: "Hähnchenfilet",
          price: 14.9,
        },
        {
          name: "Rind",
          price: 15.9,
        },
        {
          name: "Entenbrustfilet",
          price: 18.5,
        },
        {
          name: "Lachsfilet",
          price: 18.5,
        },
      ],
    },
    {
      name: "SÜSSSAUER - Rindfleisch",
      img: Susssaugerlachfilet,
      description: "mit roten Zwiebeln und verschiedenem Gemüse",
      price: 14.9,
      foods: [],
    },
    {
      name: "PEANUT - Gegrilltes Fleisch ",
      img: commingSoon,
      description:
        "Gegrilltes Fleisch mit Gemüse in hausgemachter Erdnusssauce",
      foods: [
        {
          name: "Hähnchenfilet",
          price: 14.9,
        },
        {
          name: "Rind",
          price: 15.9,
        },
        {
          name: "Entenbrustfilet",
          price: 18.5,
        },
        {
          name: "Lachsfilet",
          price: 18.5,
        },
      ],
    },
  ],
};

const DESSERTS = {
  category: "DESSERTS",
  items: [
    {
      name: "Gebackene Banane",
      img: banane,
      description: "mit einer Kugel Vanille-Eis, auf Wunsch mit Honig",
      price: 4.9,
      foods: [],
    },
    {
      name: "gebackene Ananas",
      img: commingSoon,
      description: "mit einer Kugel Vanille-Eis, auf Wunsch mit Honig",
      price: 4.9,
      foods: [],
    },
    {
      name: "gebackene Eis im Teigmantel mit Honig",
      img: commingSoon,
      description: "",
      price: 6.5,
      foods: [],
    },
    {
      name: "Sesambällchen",
      img: commingSoon,
      description:
        "Sesambällchen, gefüllt mit süßer Bohnenpaste und einer Kugel Eis Vanille",
      price: 5.5,
      foods: [],
    },
    {
      name: "Kem (zwei Kugeln Eis)",
      img: commingSoon,
      description: "Sorten: Mango, Kokos, Vanille",
      price: 3.0,
      foods: [],
    },
  ],
};

export const foodCategory = [
  VORSPEISEN,
  HAUPTSPEISEN,
  BOWLS,
  DACBIET,
  GERICHTE,
  DESSERTS,
];
