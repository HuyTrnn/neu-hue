import React from "react";
import Carousel from "./Carousel";
import Introduce from "./Introduce";
import Recommend from "./Recommend";
import Gallery from "./Gallery";
import BookingTable from "./BookingTable";
import { useToggle } from "../context/ToggleContext";
import CarouselMobile from "./CarouselMobile";
import discount from "../assets/images/menuBuoiTrua.jpg"
import Menu from "./Menu";

export default function Content() {
  return (
    <div className="background h-full min-h-screen ">
      <div className="max-h-[750px] h-full md:block hidden">
        <Carousel />
      </div>
      <div className="w-full flex justify-center items-center py-10 px-[40px] md:px-[80px] lg:px-[120px] min-h-[700px]">
        <div className="max-w-[500px]"><Menu images={discount} /></div>
      </div>
      <div className="max-h-[750px] h-[700px] md:hidden block">
        <CarouselMobile />
      </div>
      <Introduce />
      <Gallery />
      <Recommend />
      <BookingTable />
    </div>
  );
}
