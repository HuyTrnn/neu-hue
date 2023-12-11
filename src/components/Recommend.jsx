import React from "react";
import fork from "../assets/images/fork.png";
import pho from "../assets/images/pho.png";
import bg_into from "../assets/images/bg-intro.jpg";
import { IoIosArrowDropright } from "react-icons/io";
export default function Recommend() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_into})`,
        backgroundSize: "cover",
      }}
      className="w-full min-h-[700px] relative"
    >
      <div
        style={{
          backgroundImage: `url(${pho})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "28%",
          backgroundPositionY: "170px",
        }}
        className="absolute top-0 bottom-0 right-0 left-0 bg-[#ff8d0045] flex items-center justify-around"
      >
        <div className="text-right relative right-[-14%] h-[300px] flex flex-col justify-between">
          <h2 className="text-4xl text-primary-200 font-semibold min-h-[80px]">Starters</h2>
          <span className="text-black/80 text-right  text-lg line-clamp-6 text-[#4f4c4c]">
            Unsere asiatische Küche ist bunt und vielfältig! Ob als Mittagstisch
            oder komplettes Abendmenue: Wir haben die besten Gerichte von
            Vietnamesisch bis Sushi für Dich zusammengestellt. Wir liefern Ihnen
            Ihre fernöstlichen Köstlichkeiten auch direkt nach Hause!
          </span>
          <button className=" group flex border items-center justify-center font-bold border-primary-200 py-1 text-black/80 px-6 rounded hover:w-fit w-[190px] transition hover:bg-primary-200 hover:text-primary-100 self-end ">Online bestellen <IoIosArrowDropright className="hidden group-hover:block ml-3"/></button>
        </div>
        <img src={fork} />
        <div className="text-left relative right-[14%] h-[300px] flex flex-col justify-between">
          <h2 className="text-4xl text-primary-200 font-semibold min-h-[80px]">
            Spezialitäten aus Vietnam
          </h2>
          <span className="text-black/80 text-left  text-lg line-clamp-6 text-[#4f4c4c]">
            Unsere asiatische Küche ist bunt und vielfältig! Ob als Mittagstisch
            oder komplettes Abendmenue: Wir haben die besten Gerichte von
            Vietnamesisch bis Sushi für Dich zusammengestellt. Wir liefern Ihnen
            Ihre fernöstlichen Köstlichkeiten auch direkt nach Hause!
          </span>
          <button className="group flex border items-center justify-center font-bold border-primary-200 py-1 text-black/80 px-6 rounded hover:w-fit w-[190px] transition hover:bg-primary-200 hover:text-primary-100 self-start ">Online bestellen <IoIosArrowDropright className="hidden group-hover:block ml-3"/></button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
