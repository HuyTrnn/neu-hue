import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function SpeisenToggle({ isNav }) {
  const navigate = useNavigate();
  const foodCategory = [
    {
      category: "VORSPEISEN",
      items: [{ name: "Mini-Frühlingsrollen" }, { name: "Peking Suppe..." }],
    },
    {
      category: "HAUPTSPEISEN",
      items: [
        {
          name: "Reisgerichte Curry",
        },
        {
          name: "Udon Xao/Udon Noodles...",
        },
      ]
    },
    {
      category: "BOWLS",
      items: [{ name: "Tofu Bowl" }, { name: "Chicken Bowl" }],
    },
    {
      category: "DAC BIET",
      items: [
        {
          name: "Dac Biet",
        },
        {
          name: "Reisgerichte Curry...",
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
          name: "Gegrilltes Fleisch...",
        },
      ],
    },
    {
      category: "DESSERTS",
      items: [
        {
          name: "Gebackene Banane...",
        },
      ],
    },
  ];
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <ul
        className={`${
          isNav ? "" : "list-speisen absolute bg-black/70"
        }  min-w-[200px] top-[46px] w-fit h-fit text-white  text-left px-3 py-2 transition duration-150 ease-out`}
      >
        <div className="border-2 border-primary-100 top-[-22px] left-0 absolute border-l-transparent border-b-black/70 border-b-[20px] border-r-[20px] border-l-[20px] border-r-transparent"></div>
        <div className="top-[-22px] left-0 absolute w-[96px] h-6"></div>
        {foodCategory.map((category, index) => (
          <li
            onClick={() => {
              scrollToSection(
                `${category.category.toLowerCase().replace(/\s+/g, "-")}`
              );
              navigate("/speisen", { state: { key: "value" } });
            }}
            key={index}
            className=""
          >
            <p className="text-primary-100 text-base">{category.category}</p>
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
        <li className="text-primary-100 text-[12px] text-center hover:underline"><Link to={'/speisen'}>Mehr sehen...</Link></li>
      </ul>
    </div>
  );
}
