import React from "react";

export default function FoodCard({ food, index }) {
  console.log();
  return (
    <div className=" object-contain self-start flex flex-col items-start sm:items-center w-full">
      <span className="text-primary-text font-bold text-xl">0{index}</span>
      <p className="text-primary-100 text-xl font-bold min-h-[56px] text-left sm:text-center">
        {food.name}
      </p>
      <div
        className={`relative h-[290px] sm:h-[220px] w-full rounded-lg bg-center bg-cover  `}
      >
        <img
          src={food.img || ""}
          alt="product-img"
          className="w-full h-full rounded-lg object-cover"
        />
        {/* <div className="absolute top-0 flex  h-full w-full items-center justify-center p-10 sm:p-0 w-full ">
          <span className="font-bold text-lg text-primary-100 bg-black/50 line-clamp-2 w-full">
            {food.description}
          </span>
        </div> */}
      </div>
      <span
        class="font-bold text-[12px] text-primary-100 bg-/50 line-clamp-2 w-full min-h-[36px]"
      >
        {food.description}
      </span>
      <hr className="bg-black text-black border-primary-100 border-t-[0.5px] w-full my-3"></hr>
      <div className="flex flex-col w-full">
        {food.price ? (
          <span className="font-bold text-base line-clamp-2 text-primary-100 text-center">
            {food.price} €
          </span>
        ) : (
          food.foods.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <span className="font-bold text-base line-clamp-2 text-primary-100 text-left max-w-[80%]">
                {item.name}:
              </span>
              <span className="font-bold text-base line-clamp-2 text-primary-100 text-left">
                {item.price} €
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
