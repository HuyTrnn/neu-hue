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
  Lilletwildberry,
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
      name: "Krosses Hähnchen",
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

export const VORSPEISEN = {
  category: "VORSPEISEN",
  items: [
    {
        name: "Lillet Wildberry",
        img: Lilletwildberry,
        description: "Junge Sojabohnen gedũnstet",
        foods: [
          {
            name: "wahlweise mit Meersalz",
            price: 4.0,
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
      name: "Tofu in einem Panko-Mehl (4 Stk.).",
      img: TofuineinmePankoMehi,
      description: "",
      price: 5.0,
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

export const HAUPTSPEISEN = {
  category: "HAUPTSPEISEN",
  items: [
    {
      name: "Udon Xao/Udon Noodles",
      img: Udonxaokrossesente,
      description:
        "Udon Nudeln gebraten mit frischem Gemüse, in Teriyaki-Sauce",
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
  ],
};

export const BOWLS = {
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

export const DACBIET = {
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
  ],
};

export const GERICHTE = {
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
      name: "SÜSSSAUER - Rindfleisch",
      img: Susssaugerlachfilet,
      description: "mit roten Zwiebeln und verschiedenem Gemüse",
      price: 14.9,
      foods: [],
    },
  ],
};

export const DESSERTS = {
  category: "DESSERTS",
  items: [
    {
      name: "Gebackene Banane",
      img: banane,
      description: "mit einer Kugel Vanille-Eis, auf Wunsch mit Honig",
      price: 4.9,
      foods: [],
    }
  ],
};

export const productsRecommend = [
  VORSPEISEN,
  HAUPTSPEISEN,
  BOWLS,
  DACBIET,
  GERICHTE,
  DESSERTS,
];
