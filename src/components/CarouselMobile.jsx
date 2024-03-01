import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../components/css/carousel.scss";
import img1 from "../assets/images/slide1.jpg";
import img2 from "../assets/images/slide2.jpg";
import img3 from "../assets/images/slide3.jpg";
import img4 from "../assets/images/slide4.jpg";
import img5 from "../assets/images/slide5.jpg";
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
export default function CarouselMobile() {
    const slider = [img1, img2, img3, img4, img5, img6];
  return (
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    modules={[Navigation, A11y, EffectFade, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    effect="fade"
  >
    {slider.map((item, index) => (
      <div key={index} className="w-full flex flex-col justify-between items-center ">
        <SwiperSlide>
          <img
            src={item}
            alt=""
            className="w-full h-full lg:min-h-[700px] min-h-[700px] max-h-[700px]"
          />
        </SwiperSlide>
      </div>
    ))}
  </Swiper>
  )
}
