import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import pho from "../assets/images/pho.png";
import { NavLink } from "react-router-dom";
import {
  useScroll,
  useAnimatedValue,
  AnimatedBlock,
  interpolate,
} from "react-ui-animate";
import { MdOutlineMenuOpen } from "react-icons/md";
import ResponsiveNav from "./ResponsiveNav";
import SpeisenToggle from "./SpeisenToggle";
export default function Header() {
  const [toggle, setToggle] =useState(false)
  const y = useAnimatedValue(0, { immediate: true });
  const height = useAnimatedValue(120);

  useScroll(({ scrollY }) => {
    y.value = scrollY;
  });

  const colorText = interpolate(y.value, [0, 300], ["#fff", "#FF8D00"], {
    extrapolate: "clamp",
  });

  const heightHeader = interpolate(y.value, [0, 300], [120, 64], {
    extrapolate: "clamp",
    duration: 2000,
  });

  return (
    <>
      <AnimatedBlock
        style={{ height: heightHeader }}
        className={`fixed ${toggle ? 'hidden ' : ''} top-0 left-0 right-0  bg-black/30 flex items-center justify-between lg:px-[100px] md:px-[60px] px-6 z-50`}
      >
        <div className="py-[22px]">
          <img src={logo} alt="logo" />
        </div>
        <MdOutlineMenuOpen onClick={() => setToggle(!toggle)} className="block sm:hidden text-[40px] text-primary-100" />
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
            <AnimatedBlock
              style={{
                color: colorText,
              }}
              className=""
            >
              Neu Hue
            </AnimatedBlock>
          </NavLink>
          <NavLink
            to="/speisen"
            className=" speisen uppercase  relative transition duration-150 ease-out font-bold text-lg "
          >
            <AnimatedBlock
              style={{
                color: colorText,
              }}
            >
              Speisen
            </AnimatedBlock>
            <SpeisenToggle />
          </NavLink>
          <NavLink
            to="/Kontakt"
            className="uppercase cursor-pointer hover:opacity-70 transition duration-150 ease-out font-bold text-lg "
          >
            <AnimatedBlock
              style={{
                color: colorText,
              }}
            >
              Kontakt
            </AnimatedBlock>
          </NavLink>
        </ul>
      </AnimatedBlock>
       {
        toggle && <ResponsiveNav />
       }
    </>
  );
}
