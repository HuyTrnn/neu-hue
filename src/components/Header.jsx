import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import pho from "../assets/images/pho.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  useScroll,
  useAnimatedValue,
  AnimatedBlock,
  interpolate,
} from "react-ui-animate";
export default function Header() {
  const [scroll, setScroll] = useState();
  const y = useAnimatedValue(0, { immediate: true });
  const height = useAnimatedValue(120);
  const navigate = useNavigate();
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
  useScroll(({ scrollY }) => {
    y.value = scrollY;
  });

  const colorText = interpolate(y.value, [0, 300], ["#fff", "#FF8D00"], {
    extrapolate: "clamp",
  });

  const heightHeader = interpolate(y.value, [0, 300], [120, 64], {
    extrapolate: "clamp",
    duration: 2000,
  });

  return (
    <AnimatedBlock
      style={{ height: heightHeader }}
      className={`fixed top-0 left-0 right-0  bg-black/30 flex items-center justify-between lg:px-[100px] md:px-[60px] px-6 z-50`}
    >
      <div className="py-[22px]">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar flex gap-10 text-white items-center py-[22px] top-[46px]">
        <NavLink
          to="/"
          className="flex items-center uppercase cursor-pointer hover:opacity-70 transition duration-150 ease-out font-bold text-lg"
        >
          <img alt="home" className="h-12 w-12 mr-3" src={pho} />
          <AnimatedBlock
            style={{
              color: colorText,
            }}
            className=""
          >
            Neu Hue
          </AnimatedBlock>
        </NavLink>
        <NavLink
          to="/speisen"
          className=" speisen uppercase  relative transition duration-150 ease-out font-bold text-lg "
        >
         
          <AnimatedBlock
            style={{
              color: colorText,
            }}
          >
            Speisen
          </AnimatedBlock>
          <ul className="list-speisen absolute min-w-[200px] top-[46px] w-fit h-fit text-white bg-black/70 text-left px-3 py-2 transition duration-150 ease-out">
          <div
            className="border-2 border-primary-100 top-[-22px] left-0 absolute border-l-transparent border-b-black/70 border-b-[20px] border-r-[20px] border-l-[20px] border-r-transparent"
          ></div>
          <div
            className="top-[-22px] left-0 absolute w-[96px] h-6"
          ></div>
            {foodCategory.map((category, index) => (
              <li key={index} className="">
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
        </NavLink>
        <NavLink
          to="/Kontakt"
          className="uppercase cursor-pointer hover:opacity-70 transition duration-150 ease-out font-bold text-lg "
        >
          <AnimatedBlock
            style={{
              color: colorText,
            }}
          >
            Kontakt
          </AnimatedBlock>
        </NavLink>
      </ul>
    </AnimatedBlock>
  );
}
