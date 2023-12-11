import React, { useState, useEffect, useLayoutEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from '../assets/images/slider1.jpg'
import img2 from '../assets/images/slider2.jpg'
import img3 from '../assets/images/slider3.jpg'

export default function Carousel() {
  const slider = [
    img1, img2, img3
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [image, setImage] = useState(slider);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % image.length);
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleNextSlider = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % image.length);
  };

  const handlePreviousSlider = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + image.length) % image.length
    );
  };

  const handleIndexClick = (index) => {
    setCurrentImage(index);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${image[currentImage]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "700px",
    maxHeight: "800px",
    transition: "background-image 0.5s ease-in-out",
  };

  return (
    <div
      className="w-full flex flex-col justify-between"
      style={backgroundImageStyle}
    >
      <div className="flex-1 flex px-20 items-center justify-between ">
        <button className="arrow-button" onClick={handlePreviousSlider}>
          <FaArrowLeft className="text-4xl opacity-50 " />
        </button>
        <button className="arrow-button" onClick={handleNextSlider}>
          <FaArrowRight className="text-4xl opacity-50" />
        </button>
      </div>

      <div className="flex items-center justify-center ">
        {image.map((item, index) =>
          item ? (
            <div
              key={index}
              onClick={() => handleIndexClick(index)}
              className={`my-2 mx-4 cursor-pointer ${
                currentImage === index ? "border-2 border-red-500" : ""
              }`}
            >
              <img
                alt=""
                className="w-[82px] h-[82px] object-cover"
                src={item}
              />
            </div>
          ) : (
            <label className="mr-4" key={index}>
              <input
                type="radio"
                name="slider-index"
                checked={currentImage === index}
                onChange={() => handleIndexClick(index)}
              />
            </label>
          )
        )}
      </div>
    </div>
  );
}
