import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/images/slider3.jpg";
import img2 from "../assets/images/slider1.jpg";
import img3 from "../assets/images/slider2.jpg";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import require module
import { Navigation, Pagination } from "swiper/modules";
export default function ProductsCarousel() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Pagination]}
      className="mySwiper text-white cursor-pointer max-w-screen"
    >
      <SwiperSlide className="flex flex-col space-y-5">
        <img className="h-[100px] w-[100px]" src={img}></img>
        <div className="flex justify-between">
          <span>Planet 1</span>
          <span>7.000.000</span>
        </div>
        
        <div>
          <span className="text-slate-400">buy planet</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col space-y-5">
        <img className="h-[100px] w-[100px]" src={img}></img>
        <div className="flex justify-between">
          <span>Planet 1</span>
          <span>7.000.000</span>
        </div>
        
        <div>
          <span className="text-slate-400">buy planet</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col space-y-5">
        <img className="h-[100px] w-[100px]" src={img2}></img>
        <div className="flex justify-between">
          <span>Planet 1</span>
          <span>7.000.000</span>
        </div>
        
        <div>
          <span className="text-slate-400">buy planet</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col space-y-5">
        <img className="h-[100px] w-[100px]" src={img3}></img>
        <div className="flex justify-between">
          <span>Planet 1</span>
          <span>7.000.000</span>
        </div>
        <div>
          <span className="text-slate-400">buy planet</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col space-y-5">
        <img className="h-[100px] w-[100px]" src={img}></img>
        <div className="flex justify-between">
          <span>Planet 1</span>
          <span>7.000.000</span>
        </div>
        
        <div>
          <span className="text-slate-400">buy planet</span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
