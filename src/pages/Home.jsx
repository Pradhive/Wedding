import React, { useState, useEffect } from "react";
import Front1 from "../assets/Images/Front1.jpg";
import Front2 from "../assets/Images/Front2.jpg";
import Front3 from "../assets/Images/Front3.jpg";
import Front4 from "../assets/Images/Front4.jpg";
import Counter from "../components/Counter";

function Home() {
  const images = [Front1, Front2, Front3, Front4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center overflow-hidden w-screen h-screen">
      <div className=" absolute w-screen h-screen">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="love"
            className={
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }
          />
        ))}
      </div>
      <div className="z-10">
        <h1 className="flex items-center justify-center text-5xl md:text-9xl text-white font-semibold cursive ani">Vijay & Trisha</h1>
        <h1 className="flex items-center justify-center tracking-[.4em] text-md mt-5 text-white great md:text-3xl ani">ARE GETTING MARRIED</h1>
        <div className="flex items-center justify-center">
          <div>
            <hr className="animated-hr" />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div>
            <hr className="animated-hr" />
          </div>
        </div>
        <div className="flex items-center justify-center tracking-[.4em] text-md  text-white great md:text-3xl ani1">JAN 26TH, 2024</div>
        <div className="ani2">
          <Counter/>
        </div>
      </div>
    </div>
  );
}

export default Home;
