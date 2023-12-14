import React from "react";
import contact1 from "../assets/images/contact1.jpg";
import contact2 from "../assets/images/contact2.jpg";
import contact3 from "../assets/images/contact3.jpg";
import contactIcon from "../assets/images/contactIcon.svg";
import { IoIosArrowDropright } from "react-icons/io";
export default function ContactContent() {
  return (
    <div className="flex flex-col">
      <div className="flex ">
        <img src={contact1} alt="" className="w-[33.33333%] h-[420px]" />
        <img src={contact2} alt="" className="w-[33.33333%] h-[420px]" />
        <img src={contact3} alt="" className="w-[33.33333%] h-[420px]" />
      </div>
      <div className="flex  justify-center items-center w-screen min-h-screen ">
        <div className="container mx-auto my-4 px-4 lg:px-20 flex  flex-col md:flex-row justify-center items-center flex-1">
          <div className="w-full md:w-[50%] p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-15 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl text-primary-100">
                SENDEN SIE UNS A <br /> NACHRICHT
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="">
              <button className="group flex border items-center justify-center font-bold border-primary-200 py-2 text-primary-text px-6 rounded hover:w-fit min-w-[150px] transition hover:bg-primary-200 hover:text-primary-100">
                Sended{" "}
                <IoIosArrowDropright className="hidden group-hover:block ml-3" />
              </button>
            </div>
          </div>

          <div className="w-full min-w-[40vw] lg:w-2/6 px-8 py-12 ml-auto bg-black/70 rounded-2xl">
            <div className="flex flex-col text-white texts-center justify-center w-full">
              <h1 className="font-bold uppercase text-4xl my-4 ">
                Kommen Sie in unserem Büro vorbei
              </h1>
              <p className="text-gray-400 ">
                Kontaktieren Sie uns, um einen Tisch zu reservieren und eine
                wundervolle Zeit mit Ihrer Familie und Ihren Liebsten zu
                verbringen
              </p>
              <p className="text-gray-400 text-left">
                Montag bis Samstag: 10:00 – 20.00 Uhr
              </p>

              <div className="flex justify-between items-center justify-center">
                <div className="flex my-4 w-2/3 lg:w-1/2 items-center justify-center">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Adresse:</h2>
                    <p className="text-gray-400">
                      Kaiser-Wilhelm-Straße 51, 20355 Hamburg
                    </p>
                  </div>
                </div>

                <div className="flex my-4 w-2/3 lg:w-1/2 items-center justify-center">
                  <div className="flex flex-col ">
                    <i className="fas fa-phone-alt pt-2 pr-2" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl">Telefon:</h2>
                    <p className="text-gray-400">Tel: 040346339</p>
                    <p className="text-gray-400">Instagram: neuhue.hamburg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 ">
        <div className="animate-wiggle-more animate-thrice animate-duration-1000 animate-delay-[5000ms] animate-ease-in">
          <a
            title="Buy me a pizza"
            href="https://www.buymeacoffee.com/Dekartmc"
            target="_blank"
            className="block w-16 h-16 rounded-full  transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full"
              src={contactIcon}
            />
          </a>
        </div>
      </div> */}
    </div>
  );
}
