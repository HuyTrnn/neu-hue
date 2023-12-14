import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import speisen from "../assets/images/neuhue.png";
import { FaArrowDown } from "react-icons/fa";
import SpeisenMenu from "./SpeisenMenu";
import { CSSTransition } from "react-transition-group";
import img1 from "../assets/images/disk1.jpg";
import img2 from "../assets/images/disk2.jpg";
import img3 from "../assets/images/disk3.jpg";
import img4 from "../assets/images/disk4.jpg";
import img5 from "../assets/images/disk5.jpg";
import img7 from "../assets/images/disk6.jpg";
import img8 from "../assets/images/xoisoai.jpg";
import img9 from "../assets/images/slider7.jpg";
import img10 from "../assets/images/slider3.jpg";
import dessert1 from "../assets/images/dessert1.jpg"
import dessert2 from "../assets/images/dessert2.jpg"
import dessert3 from "../assets/images/dessert3.jpg"
import dessert4 from "../assets/images/dessert4.jpeg"
import dessert5 from "../assets/images/dessert5.jpg"

export default function SpeisenContent() {
  const [isShow, setShow] = useState(false);

  const foodCategory = [
    {
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
    },
    {
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
          img: img8,
          description: "mit roten Zwiebeln und verschiedenem Gemüse",
          price: 14.9,
          foods: [
        
          ],
        },
        {
          name: "PEANUT - Gegrilltes Fleisch ",
          img: img7,
          description: "Gegrilltes Fleisch mit Gemüse in hausgemachter Erdnusssauce",
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
    },
    {
      category: 'DESSERTS',
      items: [
        {
          name: "Gebackene Banane",
          img: dessert1,
          description:
            "mit einer Kugel Vanille-Eis, auf Wunsch mit Honig",
          price: 4.90,
          foods: [
          ],
        },
        {
          name: "gebackene Ananas",
          img: dessert2,
          description:
            "mit einer Kugel Vanille-Eis, auf Wunsch mit Honig",
          price: 4.90,
          foods: [
          ],
        },
        {
          name: "gebackene Eis im Teigmantel mit Honig",
          img: dessert3,
          description:
            "",
          price: 6.50,
          foods: [
          ],
        },
        {
          name: "Sesambällchen",
          img: dessert4,
          description:
            "Sesambällchen, gefüllt mit süßer Bohnenpaste und einer Kugel Eis Vanille",
          price: 5.50,
          foods: [
          ],
        },
        {
          name: "Kem (zwei Kugeln Eis)",
          img: dessert5,
          description:
            "Sorten: Mango, Kokos, Vanille",
          price: 3.00,
          foods: [
          ],
        },
      ]
    }
  ];

  useEffect(() => {
    // const el = document.getElementById(targetId);
    // console.log(el);
    // if (el) {
    //   el.scrollIntoView();
    // }
    setShow(true);
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-[40px] md:px-[80px] lg:px-[120px] mb-12">
      <div className="w-full flex justify-center items-center py-10 min-h-screen ">
        <div className="w-full flex flex-col gap-20">
          <div className="flex flex-col gap-4 justify-center items-center mt-10 sm:mt-0">
            <CSSTransition
              in={isShow}
              timeout={3000}
              classNames="content-title"
            >
              <img
                src={speisen}
                className="h-[260px] sm:h-[300px] mb-10 sm:mb-0"
                alt="intro "
              />
            </CSSTransition>
            <CSSTransition
              in={isShow}
              timeout={3000}
              classNames="content-title"
            >
              <span className="text-primary-text text-[20px] max-w-[600px] text-center leading-8">
                Vietnamesisches Restaurant mit mehr als 200 attraktiven
                Gerichten, die darauf warten, von Ihnen entdeckt zu werden!
              </span>
            </CSSTransition>

            <button
              onClick={() => scrollDown()}
              className="bg-white text-primary-200 rounded-full animate-bounce p-3 mt-[64px] hover:opacity-80"
            >
              <FaArrowDown className="" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Menu />
      </div>
      {foodCategory.map((category) => (
        <SpeisenMenu
          key={category.category}
          title={category.category}
          data={category.items}
        />
      ))}
    </div>
  );
}
