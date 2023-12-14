import fork from "../assets/images/fork.png";
import pho from "../assets/images/pho.png";
import bg_into from "../assets/images/bg-intro.jpg";
import { IoIosArrowDropright } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Recommend() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [tagInvisible, setTagInvisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("recommend");
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= 0) {
          setSectionVisible(true);
          setTagInvisible(true);
        } else {
          setSectionVisible(false);
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
      id="recommend"
      style={{
        backgroundImage: `url(${bg_into})`,
        backgroundSize: "cover",
      }}
      className="w-full md:min-h-[700px] relative md:px-0 px-4 min-h-[520px] "
    >
      <div
        style={{
          backgroundImage: `url(${pho})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "28%",
          backgroundPositionY: "50%",
          backgroundPositionX: "50%",
        }}
        className="absolute top-0 bottom-0 right-0 left-0 bg-[#ff8d0045] flex flex-col md:flex-row items-center justify-around md:px-0 px-10"
      >
        <CSSTransition
          in={sectionVisible}
          timeout={3000}
          classNames="content-title"
        >
          <div className=" md:w-[33.33333%] text-center md:text-right relative md:right-[-14%] md:h-[300px] flex flex-col justify-between">
            <h2 className="text-2xl md:text-4xl text-primary-200 font-semibold lg:min-h-[80px]">
              Starters
            </h2>
            <div className="flex items-center flex-col md:block">
              <span className="text-black/80 text-center md:text-right  text-base md:text-lg line-clamp-6 text-[#4f4c4c] mb-5">
                Unsere asiatische Küche ist bunt und vielfältig! Ob als
                Mittagstisch oder komplettes Abendmenue: Wir haben die besten
                Gerichte von Vietnamesisch bis Sushi für Dich zusammengestellt.
                Wir liefern Ihnen Ihre fernöstlichen Köstlichkeiten auch direkt
                nach Hause!
              </span>
              <Link to='/speisen' className=" group flex border items-center justify-center font-bold border-primary-200 py-1 text-black/80 px-6 rounded w-[190px] transition hover:bg-primary-200 hover:text-primary-100 float-right">
                Alles sehen
                <IoIosArrowDropright className="hidden group-hover:block ml-3" />
              </Link>
            </div>
          </div>
        </CSSTransition>

        <div className="md:w-[33.33333%] hidden md:block md:w-[55%] flex justify-center">
          <img src={fork} className="" alt="fork" />
        </div>
        <CSSTransition
          in={sectionVisible}
          timeout={3000}
          classNames="content-title"
        >
          <div className=" md:w-[33.33333%] text-center md:text-left relative md:right-[14%] md:h-[300px] flex flex-col justify-between">
            <h2 className="text-2xl md:text-4xl text-primary-200 font-semibold lg:min-h-[80px]">
              Spezialitäten aus Vietnam
            </h2>
            <div className="flex items-center flex-col md:block">
              <span className="text-black/80 text-center md:text-left text-base md:text-lg line-clamp-6 text-[#4f4c4c] mb-5">
                Unsere asiatische Küche ist bunt und vielfältig! Ob als
                Mittagstisch oder komplettes Abendmenue: Wir haben die besten
                Gerichte von Vietnamesisch bis Sushi für Dich zusammengestellt.
                Wir liefern Ihnen Ihre fernöstlichen Köstlichkeiten auch direkt
                nach Hause!
              </span>
              <Link to='speisen' className="group flex border items-center justify-center font-bold border-primary-200 py-1 text-black/80 px-6 rounded w-[190px] transition hover:bg-primary-200 hover:text-primary-100 md:self-start ">
                Alles sehen
                <IoIosArrowDropright className="hidden group-hover:block ml-3" />
              </Link>
            </div>
          </div>
        </CSSTransition>
      </div>
      <div></div>
    </div>
  );
}
