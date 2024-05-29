import React from "react";

export default function Tag({ weekend, title, content }) {
  return (
    <>
      {!weekend && (
        <div className="p-5 rounded-lg bg-primary-100/30 lg:min-w-[300px] min-h-[120px] cursor-pointer transition duration-150 ease-out hover:ease-in hover:bg-primary-100/50 ">
          <div className="">
            <span className="text-3xl text-primary-100">Öffnungszeiten</span>
            <div className="flex items-center flex-col text-primary-text mt-6">
              {!weekend && (
                <>
                  <span className="text-xl">Mo. bis Fr.: </span>
                  <span className="">11 Uhr bis 21 Uhr</span>
                </>
              )}
              {!weekend && (
                <>
                  <span className="text-xl">Samstag : </span>
                  <span className="">12 Uhr. bis 21 Uhr</span>
                </>
              )}
              {!weekend && (
                <>
                  <span className="text-xl">Sonntag : </span>
                  <span className="">17 Uhr. bis 21 Uhr</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
