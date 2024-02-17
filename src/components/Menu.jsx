import React, { useState } from "react";
import menu from "../assets/images/menu_page.jpg";
export default function Menu({images}) {
  const [fullScreenImage, setFullScreenImage] = useState(false);
  const onClose = () => {
    setFullScreenImage(!fullScreenImage);
  };
  return (
    <>
      {!fullScreenImage ? (
        <img
          onClick={() => setFullScreenImage(!fullScreenImage)}
          src={images ? images : menu}
          alt="Full Screen"
          className="max-w-full max-h-full z-50"
        />
      ) : (
        <div
          onClick={onClose}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
        >
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-40"></div>
          <img
             src={images ? images : menu}
            alt="Full Screen"
            className="max-w-full max-h-full z-50"
          />
        </div>
      )}
    </>
  );
}
