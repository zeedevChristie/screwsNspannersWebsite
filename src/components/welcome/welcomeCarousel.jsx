import React, { useState, useEffect } from "react";
import iosLogo from "../../assets/images/appstore.png";
import playstoreLogo from "../../assets/images/playstore.png";

import image1 from "../../assets/welcomeImages/aboutUs.png";
import image2 from "../../assets/welcomeImages/3Cs.jpg";
import image3 from "../../assets/welcomeImages/convenience.png";
import image4 from "../../assets/welcomeImages/competence.jpg";
import image5 from "../../assets/welcomeImages/control.jpg";

import androidQR from "../../assets/QRCODE/androidQRcode.jpg";
import IOSqr from "../../assets/QRCODE/IOSqrCode.jpg";

const slides = [
  { image: image1, title: "ABOUT SCREWS AND SPANNERS", description: "Screws and Spanners is a marketplace for quality professional artisans..." },
  { image: image2, title: "CONVENIENCE. COMPETENCE. CONTROL.", description: "Have you ever been frustrated with paying an Artisan without getting your job done?" },
  { image: image3, title: "CONVENIENCE", description: "Having issues with the stress of getting skilled artisans? You don't have to bother anymore." },
  { image: image4, title: "COMPETENCE", description: "Screws and Spanners provides you Competence. The artisans are well-trained and qualified." },
  { image: image5, title: "CONTROL", description: "Screws and Spanners gives you Control. You can track your job from start to finish." },
];

const WelcomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-black text-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:h-[30rem] gap-4 p-4">
        
        {/* Image */}
        <img src={slides[currentSlide].image} alt="" className="w-full md:w-1/2 h-[20rem] md:h-[25rem] object-cover rounded-lg" />

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <h2 className="text-xl md:text-3xl font-bold">{slides[currentSlide].title}</h2>
          <p className="text-sm md:text-lg mt-2">{slides[currentSlide].description}</p>

          {/* QR Code Section */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-4">
            <div className="text-center">
              <img className="w-20 md:w-[10rem]" src={iosLogo} alt="iOS Logo" />
              <a href="https://apps.apple.com/ng/app/screws-and-spanners/id6630377072">
                <img className="w-20 md:w-[10rem]" src={IOSqr} alt="iOS QR Code" />
              </a>
            </div>
            <div className="text-center mt-4 md:mt-0">
              <img className="w-20 md:w-[10rem]" src={playstoreLogo} alt="Playstore Logo" />
              <a href="https://play.google.com/store/apps/details?id=com.triz.screwsspanners&pcampaignid=web_share&pli=1">
                <img className="w-20 md:w-[10rem]" src={androidQR} alt="Android QR Code" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-4 bg-white text-black px-3 py-2 rounded-full md:px-4 md:py-3"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 bg-white text-black px-3 py-2 rounded-full md:px-4 md:py-3"
      >
        ❯
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"}`}>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeCarousel;
