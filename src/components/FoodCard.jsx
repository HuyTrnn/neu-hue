import React from "react";

export default function FoodCard() {
  const newArray = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-3 place-items-center gap-y-6">
      {newArray.map(() => (
        <div className="w-[290px] object-contain flex flex-col items-center">
          <span className="text-primary-text font-bold text-xl">01</span>
          <p className="text-primary-100 text-xl font-bold">Mini-Nem</p>
          <div className="h-[220px] w-full rounded-lg bg-center bg-cover bg-[url('https://www.lquan.de/wp-content/uploads/2020/11/starter.jpg')]">
            <div className=" flex  h-full w-full items-center justify-center">
              <span className="font-bold text-lg text-primary-100 bg-black/50 line-clamp-2">
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
