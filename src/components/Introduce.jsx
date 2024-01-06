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
          in={sectionVisible}
          timeout={3000}
          classNames="content-title"
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl text-primary-100 font-semibold">
              Fine Asian Fusion Kitchen
            </h2>
            <span className="text-primary-text text-[20px] max-w-[600px] text-left leading-8">
              Mittagskarte, die eine bunte Mischung aus vietnamesischen
              Gerichten für 10,90 Euro bereithält, bietet das freundliche Team
              im Service und in der Küche auch eine Bandbreite an Klassikern wie
              Rotes Curry, Udon-Nudeln und Pho-Suppe. Alle Gerichte sind
              individuell mit Tofu, Hähnchen, Rind, krossem Hähnchen, Ente oder
              Garnelen bestellbar.
            </span>
          </div>
        </CSSTransition>

        <div className="flex lg:flex-row flex-col gap-8 justify-between mt-5">
          <CSSTransition in={tagInvisible} timeout={200} classNames="tag-left">
            <Tag />
          </CSSTransition>

          <CSSTransition
            in={tagInvisible}
            timeout={200}
            classNames="tag-center"
          >
            <Tag />
          </CSSTransition>
          <CSSTransition in={tagInvisible} timeout={200} classNames="tag-right">
            <Tag />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
