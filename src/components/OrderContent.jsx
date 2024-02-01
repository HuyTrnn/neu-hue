import React from "react";
import { BOWLS, DACBIET, DESSERTS, GERICHTE, HAUPTSPEISEN } from "../constants/ProductsRecomment";
import { useState } from "react";
import { Tabs } from "antd";
import { VORSPEISEN } from "../constants/ProductsRecomment";
import BaseCollapse from "./Collapse";

export default function OrderContent() {
  const [field, setField] = useState();

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "VORSPEISEN",
      children: (
        <ul className=" grid grid-cols-2 gap-y-3 p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] cursor-pointer transition duration-150 ease-out hover:ease-in ">
          {VORSPEISEN.items.map((item,index) => (
            <>
            <li
              key={item.name}
              className="text-primary-text hover:text-primary-200 text-left flex justify-between"
            >
              {item.name}
              <span>&darr;</span>
              { item.foods.length > 0 && 
              item.foods.map(food => (
                <span>{food.name}</span>
              ))
            }
            </li>
            
            </>
          ))}
        </ul>
      ),
    },
    {
      key: "2",
      label: "HAUPTSPEISEN",
      children:(
        <ul className=" grid grid-cols-2 gap-y-3 p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] cursor-pointer transition duration-150 ease-out hover:ease-in ">
          {HAUPTSPEISEN.items.map((item) => (
            <li
              key={item.name}
              className="text-primary-text hover:text-primary-200 text-left"
            >
              {item.name}
              <span>&darr;</span>
              { item.foods.length > 0 && 
              item.foods.map(food => (
                <span>{food.name}</span>
              ))
            }
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: "3",
      label: "BOWLS",
      children: (
        <ul className=" grid grid-cols-2 gap-y-3 p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] cursor-pointer transition duration-150 ease-out hover:ease-in ">
          {BOWLS.items.map((item) => (
            <li
              key={item.name}
              className="text-primary-text hover:text-primary-200 text-left"
            >
              {item.name}
              <span>&darr;</span>
              { item.foods.length > 0 && 
              item.foods.map(food => (
                <span>{food.name}</span>
              ))
            }
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: "4",
      label: "DACBIET",
      children: (
        <ul className=" grid grid-cols-2 gap-y-3 p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] cursor-pointer transition duration-150 ease-out hover:ease-in ">
          {DACBIET.items.map((item) => (
            <li
              key={item.name}
              className="text-primary-text hover:text-primary-200 text-left"
            >
              {item.name}
              <span>&darr;</span>
              { item.foods.length > 0 && 
              item.foods.map(food => (
                <span>{food.name}</span>
              ))
            }
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: "5",
      label: "GERICHTE",
      children: (
        <ul className=" grid grid-cols-2 gap-y-3 p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] cursor-pointer transition duration-150 ease-out hover:ease-in ">
          {GERICHTE.items.map((item) => (
            <li
              key={item.name}
              className="text-primary-text hover:text-primary-200 text-left"
            >
              {item.name}
              <span>&darr;</span>
              { item.foods.length > 0 && 
              item.foods.map(food => (
                <span>{food.name}</span>
              ))
            }
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: "6",
      label: "DESSERTS",
      children: (
        <ul className=" grid grid-cols-2 gap-y-3 p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] cursor-pointer transition duration-150 ease-out hover:ease-in ">
          {DESSERTS.items.map((item) => (
            <li
              key={item.name}
              className="text-primary-text hover:text-primary-200 text-left"
            >
              {item.name}
              <span>&darr;</span>
              { item.foods.length > 0 && 
              item.foods.map(food => (
                <span>{food.name}</span>
              ))
            }
            </li>
          ))}
        </ul>
      ),
    },
  ];
  return (
    <div className="h-screen flex p-10 gap-10">
      <div className="w-full text-primary-100 mt-[100px]">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          inkBarColor="#FF8D00"
        />
      </div>
      <div className="w-full text-primary-100 mt-[100px]">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          inkBarColor="#FF8D00"
        />
      </div>
    </div>
  );
}
