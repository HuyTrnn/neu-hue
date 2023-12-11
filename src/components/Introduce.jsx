import React from 'react'
import Tag from "./Tag";

export default function Introduce() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-[120px] min-h-[700px]">
        <div className="w-full flex flex-col gap-20">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl text-primary-100 font-semibold">
              Fine Asian Fusion Kitchen
            </h2>
            <span className="text-primary-text text-[20px] max-w-[600px] text-left leading-8">
              Unsere asiatische Küche ist bunt und vielfältig! Ob als
              Mittagstisch oder komplettes Abendmenue: Wir haben die besten
              Gerichte von Vietnamesisch bis Sushi für Dich zusammengestellt.
              Wir liefern Ihnen Ihre fernöstlichen Köstlichkeiten auch direkt
              nach Hause!
            </span>
          </div>
          <div className="flex gap-8 justify-between mt-5">
          <Tag/>
          <Tag/>
          <Tag/>
          </div>
        </div>
      </div>
  )
}
