import React, { useState, useEffect } from "react";
import iosLogo from "../../assets/images/appstore.png";
import playstoreLogo from "../../assets/images/playstore.png";

import image1 from "../../assets/logos/SandSlogo.png";
import image2 from "../../assets/welcomeImages/3C.jpg";
import image3 from "../../assets/welcomeImages/convenience.png";
import image4 from "../../assets/welcomeImages/competence.jpg";
import image5 from "../../assets/welcomeImages/control.jpg";

import androidQR from "../../assets/QRCODE/androidQRcode.jpg";
import IOSqr from "../../assets/QRCODE/IOSqrCode.jpg";

const slides = [
  {
    image: image1,
    title: "ABOUT SCREWS AND SPANNERS",
    description:
      "Screws and Spanners is a marketplace for quality professional artisans...",
  },
  {
    image: image2,
    title: "CONVENIENCE. COMPETENCE. CONTROL.",
    description:
      "Have you ever been frustrated with paying an Artisan without getting your job done?",
  },
  {
    image: image3,
    title: "CONVENIENCE",
    description:
      "Having issues with the stress of getting skilled artisans? You don't have to bother anymore.",
  },
  {
    image: image4,
    title: "COMPETENCE",
    description:
      "Screws and Spanners provides you Competence. The artisans are well-trained and qualified.",
  },
  {
    image: image5,
    title: "CONTROL",
    description:
      "Screws and Spanners gives you Control. You can track your job from start to finish.",
  },
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
    <div className="relative w-full pl-4 pt-4 bg-black text-white overflow-hidden flex flex-col items-center">
      {/* Slide Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex   flex-col md:flex-row items-center justify-center w-full flex-shrink-0"
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 h-[80vh]  flex items-center justify-center">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text & QR Code Side */}
            <div className="w-full md:w-1/2 py- flex flex-col px-8 h-[80vh] justify-between">
              {/* Text Section */}
              <div className="text-left">
                <h2 className="text-xl md:text-3xl font-bold text-center ">{slide.title}</h2>
                <p className="text-sm md:text-lg mt-2">{slide.description}</p>
              </div>

              {/* QR Code Section */}
              <div className="qr-section p-4 flex justify-between">
                <div className="text-left">
                  <a href="https://apps.apple.com/ng/app/screws-and-spanners/id6630377072">
                    <img className="w-[6rem]" src={iosLogo} alt="iOS App" />
                    <img className="w-[6rem]" src={IOSqr} alt="iOS QR Code" />
                  </a>
                </div>
                <div className="text-left">
                  <a href="https://play.google.com/store/apps/details?id=com.triz.screwsspanners&pcampaignid=web_share&pli=1">
                    <img
                      className="w-[6rem]"
                      src={playstoreLogo}
                      alt="Play Store"
                    />
                    <img
                      className="w-[6rem]"
                      src={androidQR}
                      alt="Android QR Code"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute w-1/2 bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6">
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === slides.length - 1 ? 0 : prev + 1
            )
          }
          className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300"
        >
          ❯
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute w-1/2 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeCarousel;
