import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/images/slider3.jpg";
// import swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import require module
import { Navigation, Autoplay } from "swiper/modules";
import { productsRecommend } from "../constants/ProductsRecomment";

export default function ProductsCarousel() {
  return (
    <>
      {" "}
      <div className="hidden sm:block">
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
          className="mySwiper swiper-slide text-white cursor-pointer max-w-screen z-50 "
        >
          {productsRecommend.map((category, index) =>
            category.items.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col space-y-2 sm:space-y-3"
              >
                <div className="carousel-items flex justify-between relative h-full w-full rounded-lg min-h-[140px]">
                  <img
                    className="h-full w-full rounded-lg max-h-[140px] sm:min-h-[200px] md:min-h-[260px]  md:max-h-[240px] lg:min-h-[320px] lg:max-h-[320px]"
                    src={item.img}
                    alt="product-img"
                  ></img>
                </div>

                <div className="flex justify-between text-primary-100 flex-row sm:flex-col items-center">
                  <span className="z-10 font-bold text-center sm:text-base text-xs sm:line-clamp-2">
                    {" "}
                    {item.name}
                  </span>
                  <span className="z-10 font-bold text-left sm:text-base text-xs sm:line-clamp-3 line-clamp-2">
                    {item.price ? <span>{item.price} €</span> : <><span>{item.foods[0]?.price}€</span> - <span>{item.foods[item.foods.length - 1]?.price}€</span></>}
                  </span>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>


      {/* For Mobile */}
      <div className="block sm:hidden">
        <Swiper
          slidesPerView={3}
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
          className="mySwiper swiper-slide text-white cursor-pointer max-w-screen z-50 "
        >
          {productsRecommend.map((category, index) =>
            category.items.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col space-y-2 sm:space-y-3"
              >
                <div className="flex justify-between relative h-full w-full rounded-lg">
                  <img
                    className="h-full w-full rounded-lg max-h-[140px] h-[100px] min-h-[140px] "
                    src={item.img}
                    alt="product-img"
                  ></img>
                </div>

                <div className="flex justify-between text-primary-100 gap-1 ">
                  <span className="z-10 font-bold text-left sm:text-base text-xs sm:line-clamp-3 line-clamp-2">
                    {" "}
                    {item.name}
                  </span>
                  <span className="z-10 font-bold text-left sm:text-base text-xs sm:line-clamp-3 line-clamp-2 min-w-[30px]">
                    4,00 €
                  </span>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </>
  );
}
