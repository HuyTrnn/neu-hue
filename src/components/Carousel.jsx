import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../components/css/carousel.scss";
import img1 from "../assets/images/slider6.jpg";
import img5 from "../assets/images/disk2.jpg";
import img2 from "../assets/images/slider2.jpg";
import img3 from "../assets/images/slider3.jpg";
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
  const [isBlue, setIsBlue] = useState(false);
  const slider = [img1, img2, img3, img5];
  const handleInputChange = () => {
    setIsBlue((prevIsBlue) => !prevIsBlue);
  };

  const isPrevSlide = (swiper) => {
    // Check if the current slide has the class swiper-slide-prev
    return swiper.slides[swiper.activeIndex]?.classList.contains(
      "swiper-slide-prev"
    );
  };

  return (
    //  <div className="carousels h-full flex flex-col items-center justify-center">
    //    <div className={`container ${isBlue ? "blue" : ""}`}>
    //     <input type="radio" name="slider" id="item-1" defaultChecked />
    //     <input type="radio" name="slider" id="item-2" />
    //     <input type="radio" name="slider" id="item-3" />
    //     {/* <input type="radio" name="slider" id="item-4" /> */}
    //     {/* <input type="radio" name="slider" id="item-5" /> */}
    //     <div className="cards">
    //       <label class="card" for="item-1" id="song-1">
    //         <img
    //           src={img1}
    //           alt="song"
    //         />
    //       </label>
    //       <label class="card" for="item-2" id="song-2">
    //         <img
    //           src={img2}
    //           alt="song"
    //         />
    //       </label>
    //       <label class="card" for="item-3" id="song-3">
    //         <img
    //           src={img3}
    //           alt="song"
    //         />
    //       </label>
    //       <label class="card" for="item-3" id="song-4">
    //         <img
    //           src={img5}
    //           alt="song"
    //         />
    //       </label>
    //     </div>
    //   </div>
    //  </div>

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
      // autoplay={{
      //   delay: 4000,
      //   disableOnInteraction: false,
      // }}
      loop={true}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      onSlideChange={(swiper) => {
        // Force re-render on slide change to update the overlay color
        isPrevSlide(swiper);
      }}
      className="carousels"
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
