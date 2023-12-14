import { CSSTransition } from "react-transition-group";
import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";


export default function SpeisenMenu({ title, data }) {
  const [sectionVisible, setSectionVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("list-food");
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= 0) {
          setSectionVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="my-5 sm:my-0 mt-10"
      id={`${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex gap-5 items-center justify-center mt-10">
        <hr className="bg-black text-black border-primary-100 border-t-[0.5px] w-full my-8"></hr>
        <h2 className="text-4xl text-primary-100 font-bold min-w-[200px]">
          {title}
        </h2>
        <hr className="bg-black text-black border-primary-100 border-t-[0.5px] w-full my-8"></hr>
      </div>
      <CSSTransition
        in={sectionVisible}
        timeout={3000}
        classNames="content-title"
      >
        <div id="list-food"  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-6 gap-x-4">
          {
            data.map((food, index) => (
              <FoodCard food={food} key={index} index={index + 1} />
            ))
          }
        </div>
      </CSSTransition>
    </div>
  );
}
