import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button based on the scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 0.3; // 30% of the page height

      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const shouldShow = scrollY > pageHeight * scrollThreshold;

      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className={`fixed bottom-[44px] right-[52px] rounded-full bg-black/50 text-primary-100 p-3 z-50 animate-bounce ${
          isVisible ? "visible" : ""
        }`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
