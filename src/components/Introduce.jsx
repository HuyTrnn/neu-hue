import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import { CSSTransition } from "react-transition-group";
export default function Introduce() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [tagInvisible, setTagInvisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("introduce");
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= 0) {
          setSectionVisible(true);
          setTagInvisible(true);
        } else {
          setSectionVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="introduce"
      className="w-full flex justify-center items-center py-10 px-[40px] md:px-[80px] lg:px-[120px] min-h-[700px]"
    >

      <div className="w-full flex flex-col gap-20">
      <CSSTransition
      >
        <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl text-primary-100 font-semibold">
              Neuigkeiten vom Geschäft:
            </h2>
          <div className="p-5 group relative rounded-lg bg-primary-100/30 lg:min-w-[300px] min-h-[120px]  cursor-pointertransform transition duration-500 hover:scale-125 flex justify-center items-center hover:bg-primary-100/50">
            <div className="">
            <span className="text-primary-text text-[24px]  transition duration-150 ease-out hover:ease-in text-left leading-8">
              Geschäft: ! Lieferung Ab 20€! ! Schnelle und kostenlose Lieferung!
              <br></br> Rabatt -10,00% Ab den Bestellwert von 20,00 € (Nur Abholung)
              <br></br>Rabatt -10,00% Ab den Bestellwert von 30,00 € (Nur Lieferung).
            </span>
            </div>
            <div className="absolute hidden left-0 top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine group-hover:block" />
          </div>
        </div>
        </CSSTransition>
        <CSSTransition
          in={sectionVisible}
          timeout={3000}
          classNames="content-title"
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl text-primary-100 font-semibold">
              Neueröffnung in Hamburgs Innenstadt
            </h2>
            <span className="text-primary-text text-[20px] max-w-[600px] text-left leading-8">
              Neben einer wechselnden Mittagskarte, die eine bunte Mischung aus
              vietnamesischen Gerichten für 10,90 Euro bereithält, bietet das
              freundliche Team im Service und in der Küche auch eine Bandbreite
              an Klassikern wie Rotes Curry, Udon-Nudeln und Pho-Suppe.
            </span>
          </div>
         
        </CSSTransition>
       
       

        <div className="flex lg:flex-row flex-col gap-8 justify-around mt-5">
          <CSSTransition in={tagInvisible} timeout={200} classNames="tag-left">
            <Tag />
          </CSSTransition>
          <CSSTransition
            in={tagInvisible}
            weekend={true}
            timeout={200}
            classNames="tag-right"
          >
            <Tag />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
