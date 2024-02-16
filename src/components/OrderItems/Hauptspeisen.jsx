import React, { useState } from 'react'
import { HAUPTSPEISEN } from '../../constants/ProductsRecomment'

export default function Hauptspeisen() {
  // Initialize toggle states for each item
  const [toggles, setToggles] = useState(HAUPTSPEISEN.items.map(() => false));

  // Function to toggle the state for a specific index
  const toggleState = (index) => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
  };

  return (
    <ul className="grid grid-cols-2 gap-8 p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] cursor-pointer transition duration-150 ease-out hover:ease-in">
      {HAUPTSPEISEN.items.map((item, index) => (
        <li key={item.name} className="text-primary-text text-left flex flex-col">
          <div className="flex justify-between" onClick={() => toggleState(index)}>
            {item.name}
            <span>{toggles[index] ? '▲' : '▼'}</span>
          </div>
          <div className={`flex flex-col pl-5 ${!toggles[index] ? 'h-0 overflow-hidden' : 'h-fit'} transition duration-150 ease-out`}>
            {item.foods.length > 0 &&
              item.foods.map((food, foodIndex) => (
                <span key={foodIndex} className="hover:text-primary-200 flex justify-between">
                  <span>{food.name}:</span> <span>{food.price}$</span>
                </span>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
