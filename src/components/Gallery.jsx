import React from "react";
import test from "../assets/images/slider3.jpg";
import ProductsCarousel from "./ProductsCarousel";
export default function Gallery() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-[40px] md:px-[80px] lg:px-[120px] ">
      <div className="w-full flex flex-col gap-8 sm:gap-20">
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
        <div className="max-w-screen space-x-2 sm:space-x-5">
          <ProductsCarousel />
        </div>
      </div>
    </div>
  );
}
