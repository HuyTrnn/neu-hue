import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/images/slider3.jpg";
// import swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import require module
import { Navigation, Autoplay } from "swiper/modules";

export default function ProductsCarousel() {
  const newArray = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={12}
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
      className="mySwiper swiper-slide text-white cursor-pointer max-w-screen z-50"
    >
      {newArray.map(() => (
        <SwiperSlide className="flex flex-col space-y-2 sm:space-y-3">
          <div className="flex justify-between relative h-full w-full rounded-lg">
            <img className="h-full w-full rounded-lg" src={img} alt='product-img'></img>
          </div>

          <div className="flex justify-between text-primary-100">
            <span className="z-10 font-bold sm:text-base text-xs sm:line-clamp-3 line-clamp-2"> 3a Gyoza Veggie</span>
            <span className="z-10 font-bold sm:text-base text-xs sm:line-clamp-3 line-clamp-2">4,00 €</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
