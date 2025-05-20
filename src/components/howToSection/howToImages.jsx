import React, { useState, useEffect } from "react";

import welcomeLogIn from "../../assets/howToImages/welcomeLogIn.png";
import homePage from "../../assets/howToImages/homePage.png";
import srPage from "../../assets/howToImages/srPage.png";
import addressPage from "../../assets/howToImages/addressPage.png";
import requestSubmitted from "../../assets/howToImages/requestSubmitted.png";

const slides = [
  { image: welcomeLogIn, alt: "welcomeLogin" },
  { image: homePage, alt: "homePage" },
  { image: srPage, alt: "srPage" },
  { image: addressPage, alt: "addressPage" },
  { image: requestSubmitted, alt: "requestSubmitted" },
];

const HowToImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManual, setIsManual] = useState(false); // Tracks manual clicks

  // Auto-slide every 8 seconds, but reset when manual navigation is used
  useEffect(() => {
    if (isManual) return; // Prevents auto-scroll if manually changed

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [isManual]); // Resets interval when manual action occurs

  const nextSlide = () => {
    setIsManual(true); // Mark manual navigation
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsManual(false), 5000); // Resume auto-scroll after manual interaction
  };

  const prevSlide = () => {
    setIsManual(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsManual(false), 5000);
  };

  return (
    <div className="bg-black text-white p-4 space-y-4 text-center text-[1rem] relative h-[80vh] w-full ">
      {/* Image Display */}
      <div className="flex items-center justify-center h-[vh]  w-full">
        <img
          className="h-[28rem] w-[17rem] object- transition-all duration-700 ease-in-out"
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
        />
      </div>

      {/* Navigation Buttons - Centered Below */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6">
        <button
          onClick={prevSlide}
          className="bg- text-white px-4 py-2 rounded-full hover:bg-gray-600"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg- text-white px-4 py-2 rounded-full hover:bg-gray-600"
        >
          ❯
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-[50%] transform -translate-x-1/2 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsManual(true);
              setCurrentSlide(index);
              setTimeout(() => setIsManual(false), 5000);
            }}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HowToImages;
