import React from "react";
import FoodCard from "./FoodCard";

export default function SpeisenMenu({ title, data }) {
  return (
    <div>
      <div className="flex gap-5 items-center justify-center">
        <hr className="bg-black text-black border-primary-100 border-t-[0.5px] w-full my-8"></hr>
        <h2 className="text-4xl text-primary-100 font-bold min-w-[200px]">{title}</h2>
        <hr className="bg-black text-black border-primary-100 border-t-[0.5px] w-full my-8"></hr>
      </div>
      <FoodCard />{" "}
    </div>
  );
}
