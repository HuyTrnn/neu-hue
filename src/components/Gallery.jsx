import React, { useEffect, useState } from "react";
import ProductsCarousel from "./ProductsCarousel";
import { CSSTransition } from "react-transition-group";

export default function Gallery() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [tagInvisible, setTagInvisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("gallery");
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
      id="gallery"
      className="w-full flex justify-center items-center py-10 px-[40px] md:px-[80px] lg:px-[120px] "
    >
      <div className="w-full flex flex-col gap-8 sm:gap-20">
        <CSSTransition
          in={sectionVisible}
          timeout={3000}
          classNames="content-title"
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl text-primary-100 font-semibold">
              Müssen versuchen
            </h2>
            <span className="text-primary-text max-w-[600px]  text-[20px] text-left leading-8">
              Neu Hue ist ein neues vietnamesisches Restaurant in Hamburg, das
              seine Gäste mit frischen Gerichten aus dem ostasiatischen Land
              beglückt.
            </span>
          </div>
        </CSSTransition>
        <div className="max-w-screen space-x-2 sm:space-x-5 z-10">
          <ProductsCarousel />
        </div>
      </div>
    </div>
  );
}
