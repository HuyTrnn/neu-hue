import React from "react";
import Menu from "./Menu";
import speisen from "../assets/images/neuhue.png";
import { FaArrowDown } from "react-icons/fa";
export default function SpeisenContent() {
  return (
    <div>
      <div className="w-full flex justify-center items-center py-10 px-[120px] min-h-[654px]">
        <div className="w-full flex flex-col gap-20">
          <div className="flex flex-col gap-4 justify-center items-center">
            <img src={speisen} className="h-[300px]" alt="intro" />
            <span className="text-primary-text text-[20px] max-w-[600px] text-center leading-8">
              Vietnamesisches Restaurant mit mehr als 200 attraktiven Gerichten,
              die darauf warten, von Ihnen entdeckt zu werden!
            </span>
            <button className="bg-white text-primary-200 rounded-full animate-bounce p-3 mt-[64px] hover:opacity-80">
              <FaArrowDown className="" />
            </button>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}