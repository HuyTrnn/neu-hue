import React from "react";
import vid1 from '../assets/images/Video/vid1.mp4'
import vid2 from '../assets/images/Video/vid2.mp4'
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Video from "./Video";

export default function BookingTable() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-[40px] md:px-[80px] lg:px-[120px] ">
      <div className="w-full flex flex-col gap-12 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-4xl text-primary-100 font-semibold">
            Reservieren
          </h2>
          <span className="text-primary-text max-w-[600px] text-center leading-8">
            Kontaktieren Sie uns, um einen Tisch zu reservieren und eine
            wundervolle Zeit mit Ihrer Familie und Ihren Liebsten zu verbringen
          </span>
        </div>
        <div className="flex gap-5 flex-col md:flex-row">
        <Video url={vid1}/>
        <Video url={vid2}/>
        </div>
        <Link to='tel:040346339'>
        <button className="group flex border items-center justify-center font-bold border-primary-200 py-2 text-primary-text px-6 rounded hover:w-fit min-w-[250px] transition hover:bg-primary-200 hover:text-primary-100">
          Durch Telefon einen Tisch reservieren{" "}
          <IoIosArrowDropright className="hidden group-hover:block ml-3" />
        </button>
        </Link>
        <Link to='https://www.instagram.com/neuhue.hamburg/'>
        <button className="group flex border items-center justify-center font-bold border-primary-200 py-2 text-primary-text px-6 rounded hover:w-fit min-w-[250px] transition hover:bg-primary-200 hover:text-primary-100">
          Durch Instagram einen Tisch reservieren{" "}
          <IoIosArrowDropright className="hidden group-hover:block ml-3" />
        </button>
        </Link>
      </div>
    </div>
  );
}
