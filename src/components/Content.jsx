import React from "react";
import Carousel from "./Carousel";
import Introduce from "./Introduce";
import Recommend from "./Recommend";
import Gallery from "./Gallery"
import BookingTable from "./BookingTable";

export default function Content() {

  return (
    <div className="background h-full min-h-screen ">
      <Carousel />
      <Introduce/>
      <Gallery />
      <Recommend />
      <BookingTable />
    </div>
  );
}
