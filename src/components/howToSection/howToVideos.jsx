import React, { useState, useEffect } from "react";
import SnS1 from "../../assets/videos/SnS1.mp4";
import howToRequest4SP from "../../assets/videos/howToRequest4SP.mp4";
import howToUseTheApp from "../../assets/videos/HowToUseTheApp.mp4";
import iKnowSomwoneCheeper from "../../assets/videos/iKnowSomwoneCheeper.mp4";

const videos = [
  { src: SnS1, title: "Intro to Screws And Spanners" },
  { src: howToRequest4SP, title: "How to Request for Sp" },
  { src: iKnowSomwoneCheeper, title: "I Know Someone Cheaper" },
  { src: howToUseTheApp, title: "How To Use The App" },
  { src: SnS1, title: "Intro to Screws And Spanners" },
];

const HowToVideos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center w-full max-w-4xl p-6 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center">{videos[currentSlide].title}</h2>
        <video
          className="w-full h-[60vh] sm:h-[70vh] rounded-lg"
          controls
          autoPlay
          key={videos[currentSlide].src}
        >
          <source src={videos[currentSlide].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-gray-300"
      >
        ❮
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-gray-300"
      >
        ❯
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 sm:space-x-3">
        {videos.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HowToVideos;
