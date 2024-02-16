import React, { useRef } from "react";
import {
  BOWLS,
  DACBIET,
  DESSERTS,
  GERICHTE,
  HAUPTSPEISEN,
} from "../constants/ProductsRecomment";
import { useState } from "react";
import { Tabs } from "antd";
import { VORSPEISEN } from "../constants/ProductsRecomment";
import commingSoon from "../assets/images/coming_soon.jpg";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import { useForm } from "react-hook-form";
import Hauptspeisen from "./OrderItems/Hauptspeisen";
import SpeisenOrder from "./OrderItems/SpeisenOrder";
import Modal from "./ModalOrder";
import ModalOrder from "./ModalOrder";

export default function OrderContent({setIsAdded}) {
  const emailRef = useRef();
  const nameRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [img, setImg] = useState();
  const [choose, setChoose] = useState();
  const [handleSave, setHandleSave] = useState(false);
  const speisenOrderRef = useRef(null);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
  } = useForm();

  const apiUrl = "https://neuhue-restaurant-fxyn.onrender.com/dhuy782/api/contact";

  const setImgOrder = (img) => {
    setImg(img)
  }

  const getItems = (value) => {
    setChoose(value)
    setIsAdded();
  }

  const handleSaveInSpeisenOrder = () => {
    // Call handleSave function in SpeisenOrder component
    setHandleSave(!handleSave)
  };

  const items = [
    {
      key: "1",
      label: "VORSPEISEN",
      children: <SpeisenOrder ref={speisenOrderRef} isHandleSave={handleSave} onSave={getItems} onImg={setImgOrder} list={VORSPEISEN} />,
    },
    {
      key: "2",
      label: "HAUPTSPEISEN",
      children: <SpeisenOrder ref={speisenOrderRef} isHandleSave={handleSave} onSave={getItems} onImg={setImgOrder} list={HAUPTSPEISEN}/>,
    },
    {
      key: "3",
      label: "BOWLS",
      children: <SpeisenOrder ref={speisenOrderRef} isHandleSave={handleSave} onSave={getItems} onImg={setImgOrder} list={BOWLS} />,
    },
    {
      key: "4",
      label: "DACBIET",
      children: <SpeisenOrder ref={speisenOrderRef} isHandleSave={handleSave} onSave={getItems} onImg={setImgOrder} list={DACBIET} />,
    },
    {
      key: "5",
      label: "GERICHTE",
      children: <SpeisenOrder ref={speisenOrderRef} isHandleSave={handleSave} onSave={getItems} onImg={setImgOrder} list={GERICHTE} />,
    },
    {
      key: "6",
      label: "DESSERTS",
      children: <SpeisenOrder ref={speisenOrderRef} isHandleSave={handleSave} onSave={getItems} onImg={setImgOrder} list={DESSERTS} />,
    },
  ];




  return (
    <div className="h-screen flex px-[140px] py-10 gap-10">
      <div className="w-full text-primary-100 mt-[100px]">
        <Tabs
          defaultActiveKey="1"
          items={items}
          // onChange={onChange}
          inkBarColor="#FF8D00"
        />
      </div>
      <div className="w-full text-primary-100 mt-[100px] px-8">
        <div className="flex ">
          <img src={img || commingSoon} className="w-full min-h-[350px] min-w-[500px] rounded-lg"/>
        </div>
        <div className="my-4">
          <textarea
            placeholder="Notiz..."
            {...register("content", { required: true })}
            className="w-full h-25 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button onClick={() => {
            handleSaveInSpeisenOrder()
          }} className="group flex border items-center justify-center font-bold border-primary-200 py-2 text-primary-text px-6 rounded hover:w-fit min-w-[150px] transition hover:bg-primary-200 hover:text-primary-100">
            in den Warenkorb legen
            <IoIosArrowDropright className="hidden group-hover:block ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
