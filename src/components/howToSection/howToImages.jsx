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

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-black  text-white p-4 space-y-4 text-center text-[1.5rem] relative">
      {/* <h2>How To Use The App?</h2> */}
      <div className="flex items-center justify-center h-[80vh] w-full">
        <img
          className="h-full w-full object-cover transition-all duration-500"
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
        />
      </div>

      {/* Navigation Buttons
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2  text-white px-4 py-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  text-white px-4 py-2 rounded-full"
      >
        ▶
      </button> */}

      {/* Dots for Navigation */}

      <div className="absolute bottom-4 left-[50%] transform -translate-x-1/2 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
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
