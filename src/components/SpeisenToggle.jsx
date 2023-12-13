import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SpeisenToggle({isNav}) {
    const foodCategory = [
        {
          category: "DAC BIET",
          items: [
            {
              name: "Dac Biet",
            },
            {
              name: "Reisgerichte Curry",
            },
            {
              name: "Chua Ngot / SuBsauer SoBe",
            },
            {
              name: "Reisgerichte Mango mit Gemuse-Sauce",
            },
            {
              name: "Reis Gerichte Penuts",
            },
          ],
        },
        {
          category: "GERICHTE",
          items: [
            {
              name: "Gegrilltes Fleites",
            },
            {
              name: "Gegrilltes Fleisch",
            },
            {
              name: "Gegrilltes Fleisch mit Gemuse in housgemachter in Mango-Sauce",
            },
            {
              name: "Gegrilltes Fleisch mit Ananas und Wok-Gemuse in suBsaurer SoBe",
            },
            {
              name: "Gegrilltes Fleisch mit Gemuse in housgemachter Erdnusssauce",
            },
          ],
        },
      ];
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        console.log(section);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div>
      <ul className={`${isNav ? "" : 'list-speisen absolute bg-black/70'}  min-w-[200px] top-[46px] w-fit h-fit text-white  text-left px-3 py-2 transition duration-150 ease-out`}>
        <div className="border-2 border-primary-100 top-[-22px] left-0 absolute border-l-transparent border-b-black/70 border-b-[20px] border-r-[20px] border-l-[20px] border-r-transparent"></div>
        <div className="top-[-22px] left-0 absolute w-[96px] h-6"></div>
        {foodCategory.map((category, index) => (
          <li
            onClick={() =>
              scrollToSection(
                `${category.category.toLowerCase().replace(/\s+/g, "-")}`
              )
            }
            key={index}
            className=""
          >
            <p className="text-primary-100">{category.category}</p>
            {category.items.map((food, index) => (
              <div
                key={index}
                className="text-xs line-clamp-2 pl-4 my-1 py-1 hover:text-primary-100/80 group flex transition duration-150 cursor-pointer"
              >
                <FaLongArrowAltRight className="hidden group-hover:block mr-2 transition duration-150 text-xs" />
                <span className="line-clamp-2 text-white group-hover:text-primary-100/80 max-w-[140px]">
                  {food.name}
                </span>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
