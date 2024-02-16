import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function SpeisenOrder({ list, onImg, onSave, isHandleSave }) {
  const [selectedFood, setSelectedFood] = useState(null);
  const [category, setCategory] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    isHandleSave && handleSave()
  },[isHandleSave])

  const selectFood = (food, name) => {
    setSelectedFood(food);
    setCategory(name);
  };

  const handleSave = () => {
    if (selectedFood) {
      // Retrieve existing selected foods from local storage
      const existingSelectedFoods = JSON.parse(localStorage.getItem('selectedFoods')) || {};
      
      // Check if there is already a category object with the same name
      if (existingSelectedFoods[category]) {
        // If the category already exists, append the selected food to its array
        existingSelectedFoods[category] = [
          ...existingSelectedFoods[category],
          selectedFood
        ];
      } else {
        // If the category doesn't exist, create a new one with the selected food as its first item
        existingSelectedFoods[category] = [selectedFood];
      }
  
      // Save the updated selected foods to local storage
      localStorage.setItem('selectedFoods', JSON.stringify(existingSelectedFoods));
      
      // Trigger state update to reflect the changes in UI
      setItems(existingSelectedFoods);
  
      // Notify parent component of the selected food
      toast.success('Gerichte erfolgreich hinzufügen')
      onSave(selectedFood);
    } else {
      toast.error('Kein Essen ausgewählt.')
    }
  };
  

  return (
    <ul className="grid grid-cols-2 gap-2 p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] cursor-pointer transition duration-150 ease-out hover:ease-in">
      {list.items.map((item, index) => (
        <li key={item.name} className="text-primary-text text-left flex flex-col">
          <div className="flex justify-between">
            {item.name}
          </div>
          <div className="flex flex-col pl-5 mt-4">
            {item.foods.length > 0 &&
              item.foods.map((food, foodIndex) => (
                <span key={foodIndex} className="hover:text-primary-200 flex justify-between">
                  <div className="flex justify-between w-full">
                    <span onClick={() => {
                      onImg(item.img);
                      selectFood(food, item.name);
                    }}>{food.name}:</span>
                    <span>{food.price}$</span>
                  </div>
                </span>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
