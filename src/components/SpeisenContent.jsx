import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import speisen from "../assets/images/neuhue.png";
import { FaArrowDown } from "react-icons/fa";
import SpeisenMenu from "./SpeisenMenu";
import { CSSTransition } from "react-transition-group";
import { foodCategory } from "../constants/Menu";

export default function SpeisenContent() {
  const [isShow, setShow] = useState(false);

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
