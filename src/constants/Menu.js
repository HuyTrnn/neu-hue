import img1 from "../assets/images/disk1.jpg";
import img2 from "../assets/images/disk2.jpg";
import img3 from "../assets/images/disk3.jpg";
import img4 from "../assets/images/disk4.jpg";
import img5 from "../assets/images/disk5.jpg";
import img7 from "../assets/images/disk6.jpg";
import commingSoon from "../assets/images/coming_soon.jpg"
// import img8 from "../assets/images/xoisoai.jpg";
import img9 from "../assets/images/slider4.jpg";
import img10 from "../assets/images/slider3.jpg";
import dessert1 from "../assets/images/dessert1.jpg";
import dessert2 from "../assets/images/dessert2.jpg";
import dessert3 from "../assets/images/dessert3.jpg";
import dessert4 from "../assets/images/dessert4.jpeg";
import dessert5 from "../assets/images/dessert5.jpg";
import { TofuineinmePankoMehi, DimsumGarnelen, Edamame, NemRan, Tofu} from '../assets/imagesVor'
import {
  Bunreisnudelnfruhlingsrollen,
  Bunrind,
  Phoreisbandnudelsuppehahnchen,
  Udonxaokrossesente,
  Comrang,
} from '../assets/imagesHau'
import {Tofubowl} from '../assets/imagesBowl'

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
      name: "Reisgerichte Curry",
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
          name: "(eicht sover-schart) mit Enteftleisch, Gemüse undEl",
          price: 4.5,
        },
      ],
    },
    {
      name: "Wan Tan Suppe Teigtaschen.",
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
        "Kokosmich-Suppe mit Hühnerfleisch, Thai Bosllikum und Zitronengras",
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
      description: "würzige Suppe, Glasnudeln und Gemuse",
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
      img: commingSoon,
      description:
        "Frische Avocado mit einem Knusprigen TempuraMantel. überzogen von einer Mango Sauce mit gerösteten Sesam",
      price: 5.5,
      foods: [],
    },
    {
      name: "Xôi Xoài",
      img: commingSoon,
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
      name: "My Xoo Vietnam / Vietnamese Noodles",
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
      description: "ebraten mit frischem Gemüse",
      foods: getFood(),
    },
    {
      name: "Mien Xao/Glasnudeln",
      img: commingSoon,
      description: "gebraten, mit Gemüse",
      foods: getFood(),
    },
    {
      name: "Com Rang/gebraten",
      img: Comrang,
      description: "Reis gebraten Reis mit frischem Wok-Gemüse",
      foods: getFood(),
    },
    {
      name: "Pho/Reisbandnudelsuppe",
      img: Phoreisbandnudelsuppehahnchen,
      description:
        "Reisbandnudelsuppe in einer würzigen Rinderbrühe mit Koriander, Lauchzwiebeln Und Krouter",
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
        "Sushi-Reis, Gurke, Wakame, Papriko, Mango, Avocado, Sesam, Edamame, Chia",
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



const DESSERTS = {
  category: "DESSERTS",
  items: [
    {
      name: "Gebackene Banane",
      img: dessert1,
      description: "mit einer Kugel Vanille-Eis, auf Wunsch mit Honig",
      price: 4.9,
      foods: [],
    },
    {
      name: "gebackene Ananas",
      img: dessert2,
      description: "mit einer Kugel Vanille-Eis, auf Wunsch mit Honig",
      price: 4.9,
      foods: [],
    },
    {
      name: "gebackene Eis im Teigmantel mit Honig",
      img: dessert3,
      description: "",
      price: 6.5,
      foods: [],
    },
    {
      name: "Sesambällchen",
      img: dessert4,
      description:
        "Sesambällchen, gefüllt mit süßer Bohnenpaste und einer Kugel Eis Vanille",
      price: 5.5,
      foods: [],
    },
    {
      name: "Kem (zwei Kugeln Eis)",
      img: dessert5,
      description: "Sorten: Mango, Kokos, Vanille",
      price: 3.0,
      foods: [],
    },
  ],
};

const GERICHTE = {
  category: "GERICHTE",
  items: [
    {
      name: "Gegrilltes Fleites",
      img: img9,
      description:
        "mit Gemüse Zitronengras, Limetten in dunkler hausgemachter Soße",
      foods: [
        {
          name: "Hähnchenfile",
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
      img: img10,
      description:
        "mit Gemüse, Basilikum in Kokosmilch, rotem Curry, leicht scharf",
      foods: [
        {
          name: "Hähnchenfile",
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
      img: img3,
      description: "mit Gemuse in housgemachter in Mango-Sauce",
      foods: [
        {
          name: "Hähnchenfile",
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
      img: img4,
      description: "mit Ananas und Wok-Gemüse in süßsaurer Soße",
      foods: [
        {
          name: "Hähnchenfile",
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
      img: img4,
      description: "mit roten Zwiebeln und verschiedenem Gemüse",
      price: 14.9,
      foods: [],
    },
    {
      name: "PEANUT - Gegrilltes Fleisch ",
      img: img7,
      description:
        "Gegrilltes Fleisch mit Gemüse in hausgemachter Erdnusssauce",
      foods: [
        {
          name: "Hähnchenfile",
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

const DACBIET = {
  category: "DAC BIET",
  items: [
    {
      name: "Dac Biet",
      img: img1,
      description:
        "Knackiges Gemüse in dunkler Sauce mit Chili, Knoblauch, Basilikum nach Neu Hue-Art gebraten, (auf Wunsch auch scharf)",
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
      img: img2,
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
      img: img3,
      description: "Wok-Gemüse in hausgemachter süßsaurer Soße",
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
      img: img4,
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
      name: "Reis Gerichte Penuts",
      img: img5,
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

export const foodCategory = [
  VORSPEISEN,
  HAUPTSPEISEN,
  BOWLS,
  DACBIET,
  GERICHTE,
  DESSERTS,
];