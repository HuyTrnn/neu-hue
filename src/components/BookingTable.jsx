import React from "react";
import test from "../assets/images/slider3.jpg";
import ProductsCarousel from "./ProductsCarousel";
import { IoIosArrowDropright } from "react-icons/io";

export default function BookingTable() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-[120px] ">
      <div className="w-full flex flex-col gap-20 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-4xl text-primary-100 font-semibold">
            Müssen versuchen
          </h2>
          <span className="text-primary-text max-w-[600px] text-left leading-8">
            Nutzen Sie unseren Lieferservice und bestellen Sie Ihre asiatischen
            Lieblingsgerichte bequem online. Wir liefern Ihnen dann umgehend
            Ihre Bestellung nach Hause. Die Liefergebiete sind 20354, 20457,
            20095, 20099 und der Mindestbestellwert beträgt 15,00 Euro.
          </span>
        </div>
          <button className="group flex border items-center justify-center font-bold border-primary-200 py-2 text-primary-text px-6 rounded hover:w-fit w-[190px] transition hover:bg-primary-200 hover:text-primary-100">
            Buchungstabelle{" "}
            <IoIosArrowDropright className="hidden group-hover:block ml-3" />
          </button>
      </div>
    </div>
  );
}
