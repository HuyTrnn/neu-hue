import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/images/slider3.jpg";
import img2 from "../assets/images/slider1.jpg";
import img3 from "../assets/images/slider2.jpg";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import require module
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ProductsCarousel() {
  const newArray = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      speed={1200}
      loop={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper swiper-slide text-white cursor-pointer max-w-screen"
    >
      {newArray.map(() => (
        <SwiperSlide className="flex flex-col space-y-5">
          <div className="flex justify-between relative h-full w-full rounded-lg">
            <img className="h-full w-full rounded-lg" src={img}></img>
          </div>

          <div className="flex justify-between text-primary-100">
            <span className="z-50 font-bold"> 3a Gyoza Veggie</span>
            <span className="z-50 font-bold">4,00 €</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
