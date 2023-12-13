import React from "react";

export default function FoodCard() {
  const newArray = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-6 gap-x-4">
      {newArray.map((index) => (
        <div
          key={index}
          className=" object-contain flex flex-col items-start sm:items-center w-full"
        >
          <span className="text-primary-text font-bold text-xl">01</span>
          <p className="text-primary-100 text-xl font-bold">Mini-Nem</p>
          <div className=" h-[290px] sm:h-[220px] w-full rounded-lg bg-center bg-cover bg-[url('https://www.lquan.de/wp-content/uploads/2020/11/starter.jpg')]">
            <div className=" flex  h-full w-full items-center justify-center p-10 sm:p-0 w-full">
              <span className="font-bold text-lg text-primary-100 bg-black/50 line-clamp-2 w-full">
                6 kleine vegetarische Frühlingsrollen
              </span>
            </div>
          </div>
          <hr className="bg-black text-black border-primary-100 border-t-[0.5px] w-full my-3"></hr>
          <span className="font-bold text-xl text-primary-100">
            3a Gyoza Veggie (veg.): 4,00 €
          </span>
          <span className="font-bold text-xl text-primary-100">
            3a Gyoza Veggie (veg.): 4,00 €
          </span>
          <span className="font-bold text-xl text-primary-100">
            3a Gyoza Veggie (veg.): 4,00 €
          </span>
        </div>
      ))}
    </div>
  );
}
