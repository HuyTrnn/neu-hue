import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import neu from "../assets/images/neu.png";
import pho from "../assets/images/pho.png";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import ResponsiveNav from "./ResponsiveNav";
import SpeisenToggle from "./SpeisenToggle";
import { useToggle } from "../context/ToggleContext";
import { useSpring, animated } from "@react-spring/web";
import useDetectScroll from "@smakss/react-scroll-direction";
import ScrollToTopButton from "./ScrollToTop";
import ModalOrder from "./ModalOrder";
export default function Header({total}) {
  const { state, dispatch } = useToggle();
  const [toggle, setToggle] = useState(false);
  const scrollDir = useDetectScroll();
  const slideDown = useSpring({
    transform: scrollDir == "down" ? "translateY(-100%)" : "translateY(0%)",
  });


  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  const openModal = (status) => {
    setToggle(status);
  };

  return (
    <>
      <ScrollToTopButton />
      <animated.header
        style={{
          width: "100%",
          zIndex: 20,
          ...slideDown,
        }}
        className={`fixed ${
          state.isToggled ? "hidden " : ""
        } top-0 left-0 right-0  bg-black/30 flex items-center justify-between lg:px-[100px] md:px-[60px] px-6 z-[100] max-w-screen py-3 md:py-0`}
      >
        <Link to="/" className=" w-fit  h-10 flex">
          <img src={pho} alt="logo" className="text-base " />
          <img src={neu} alt="logo" className="text-base " />
        </Link>
        <MdOutlineMenuOpen
          onClick={handleToggle}
          className="block sm:hidden text-[40px] text-primary-100"
        />
        <ul className="navbar  hidden sm:flex gap-10 text-white items-center py-[22px] top-[46px]">
          <NavLink
            to="/"
            className="flex items-center uppercase cursor-pointer hover:opacity-70 transition duration-150 ease-out font-bold text-lg"
          >
            <img
              alt="home"
              className="h-12 w-12 mr-3 hidden md:block"
              src={pho}
            />
            <div
              // style={{
              //   color: colorText,
              // }}
              className=""
            >
              Neu Hue
            </div>
          </NavLink>
          <NavLink
            to="/speisen"
            className=" speisen uppercase  relative transition duration-150 ease-out font-bold text-lg "
          >
            <div
            // style={{
            //   color: colorText,
            // }}
            >
              Speisen
            </div>
            <SpeisenToggle />
          </NavLink>
          <NavLink
            to="/Kontakt"
            className="uppercase cursor-pointer hover:opacity-70 transition duration-150 ease-out font-bold text-lg "
          >
            <div
            // style={{
            //   color: colorText,
            // }}
            >
              Kontakt
            </div>
          </NavLink>
        </ul>
      </animated.header>

      <ResponsiveNav />
    </>
  );
}
