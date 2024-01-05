import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../components/css/carousel.scss";
import img1 from "../assets/images/slider1.jpg";
import img2 from "../assets/images/slider2.jpg";
import img3 from "../assets/images/slider3.jpg";
import img4 from "../assets/images/slider4.jpg";
import img5 from "../assets/images/slider5.jpg";
import img6 from "../assets/images/slider6.jpg";
import bg from "../assets/images/pho-dark.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import coverflow effect styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
export default function Carousel() {
  const slider = [img1, img2, img3, img4, img5, img6];

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      speed={600}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 4,
        slideShadows: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}

      className="carousels h-full max-h-[720px]"
    >
      {slider.map((item, index) => (
        <div
          key={index}
          className="w-full flex flex-col justify-between items-center "
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div className="bg-white h-screen w-full relative">
                {
                  <>
                    {!isActive && (
                      <div className="bg-white h-full w-full opacity-30 absolute"></div>
                    )}
                    <img
                      src={item}
                      alt=""
                      className="w-[800px] h-full lg:min-h-[700px] min-h-[525px] max-h-[720px]"
                    />
                  </>
                }
              </div>
            )}
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}
