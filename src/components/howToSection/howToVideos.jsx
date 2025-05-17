import React, { useState, useEffect } from "react";
import SnS1 from "../../assets/videos/SnS1.mp4";
import howToRequest4SP from "../../assets/videos/howToRequest4SP.mp4";
import howToUseTheApp from "../../assets/videos/howToUseTheApp.mp4";
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  //   }, 50000);

  //   return () => clearInterval(interval);
  // }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center w-full max-w-4xl p-6 space-y-4">
        <h2 className="text-2xl font-bold">{videos[currentSlide].title}</h2>
        <video
          className="w-full h-[70vh] rounded-lg"
          controls
          autoPlay
          key={videos[currentSlide].src}
          onClick={nextSlide} // Clicking the video changes to the next one
        >
          <source src={videos[currentSlide].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2  text-white px-4 py-2 rounded-full">
        {/* ◀ */}
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2  text-white px-4 py-2 rounded-full">
        {/* ▶ */}
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 flex justify-center space-x-2">
        {videos.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${
            currentSlide === index ? "bg-white" : "bg-gray-400"
          }`}></button>
        ))}
      </div>
    </div>
  );
};

export default HowToVideos;
