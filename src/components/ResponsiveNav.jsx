import React from "react";
import logo from "../assets/images/logo.png";
import pho from "../assets/images/pho.png";
import { Link} from "react-router-dom";
import { useToggle } from "../context/ToggleContext";
import SpeisenToggle from "./SpeisenToggle";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
export default function ResponsiveNav() {
  const { state, dispatch } = useToggle();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <>
      <div class="fixed inset-y-0 z-10 flex w-[80%] ">
        <svg
          class="absolute inset-0 w-full h-full text-black/70"
          style={{ filter: "drop-shadow(10px 0 10px #00000030)" }}
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
        </svg>

        <div class="z-10 flex flex-col flex-1">
          <div class="flex items-center justify-between flex-shrink-0 w-full p-4">
            <Link to="/" className="nav-bar--logo admin-logo">
              <img alt="logo" src={logo} />
            </Link>

            {/* Close sidebar button */}
            <button
              onClick={handleToggle}
              class="p-1 rounded-lg focus:outline-none focus:ring mr-6"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FF8D00"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span class="sr-only">Close sidebar</span>
            </button>
          </div>
          {/* Content of sideBar */}
          <nav class="flex flex-col flex-1 w-64 pt-4 px-4">
            <Link to="/" class="flex items-center space-x-2">
              <img src={pho} alt="icon" className="w-10 h-10"/>
              <span className="text-bold text-2xl text-primary-100">Home</span>
            </Link>
            <Link to="/speisen" class="flex items-center space-x-2">
              {/* <img src={pho} alt="icon" className="w-10 h-10"/> */}
              <MdOutlineRestaurantMenu className="text-primary-100 text-[40px]"/>
              <span className="text-bold text-2xl text-primary-100">Speisen</span>
            </Link>
            <SpeisenToggle isNav={true}/>
            <Link to="/kontakt" class="flex items-center space-x-2">
              {/* <img src={pho} alt="icon" className="w-10 h-10"/> */}
              <IoMdContact className="text-primary-100 text-[40px]"/>
              <span className="text-bold text-2xl text-primary-100">Kontakt</span>
            </Link>
          </nav>
          <div class="flex-shrink-0 p-4">
            <button class="flex items-center space-x-2">
              <svg
                aria-hidden="true"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      <div className="overlay w-[20%]"></div>
    </>
  );
}
