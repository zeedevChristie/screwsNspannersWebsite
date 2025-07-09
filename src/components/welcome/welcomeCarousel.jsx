import React, { useState, useEffect } from "react";
import iosLogo from "../../assets/images/appstore.png";
import playstoreLogo from "../../assets/images/playstore.png";

import image1 from "../../assets/HomeCarousel/aboutSnS.jpeg";
import image2 from "../../assets/HomeCarousel/3Cs.jpg";
import image3 from "../../assets/HomeCarousel/Convenience.jpg";
import image4 from "../../assets/HomeCarousel/Competence.jpg";
import image5 from "../../assets/HomeCarousel/Control.jpg";

import androidQR from "../../assets/QRCODE/androidQRcode.jpg";
import IOSqr from "../../assets/QRCODE/IOSqrCode.jpg";

const slides = [
  {
    image: image1,
    title: "ABOUT SCREWS AND SPANNERS",
    description: `Tired of hearing “I know one guy” only to be disappointed later?
Or overpaying for a simple job that still isn't done right?
Screws & Spanners is here to change the game. It's a homegrown app that connects you to trusted artisans – think of electricians, plumbers, furniture fixers, and lots more – without the stress or guesswork.Because life’s hard enough already… let’s make fixing things easy.`,
  },
  {
    image: image2,
    title: "CONVENIENCE. COMPETENCE. CONTROL.",
    description: `This isn't just a marketplace. It's a smarter way to get things done.
From leaky taps to major repairs, Screws & Spanners puts convenience, competence, and control right in your hands.
One tap. Zero stress.`,
  },
  {
    image: image3,
    title: "CONVENIENCE",
    description:
      `No more calling five people before finding help.
No waiting endlessly for "someone's guy."
With Screws & Spanners, get matched with nearby artisans in minutes - on your terms, on your schedule.`},
   {
    image: image4,
    title: "COMPETENCE",
    description:
      `Anyone can join, but not everyone shines.
We’re building a system that rewards excellent service, so the best artisans rise to the top.
Over time, your ratings and feedback will shape a trusted community of true professionals.
`,
  },
  {
    image: image5,
    title: "CONTROL",
description:
      `Choose who works for you.
Set your budget. Track your request. Rate your experience.
With Screws & Spanners, you're in charge - from start to finish.
`,
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
    <div className="relative w-full px-4 pt-4 bg-black text-white overflow-hidden flex flex-col items-center">
      <div className="w-full overflow-hidden">
        <div
          className="flex flex-nowrap transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center w-full flex-shrink-0"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[70vh] sm:h-[80vh] flex items-center justify-center">
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-auto max-w-full rounded-lg object-contain"
                />
              </div>

              {/* Text & QR Code Section */}
              <div className="w-full md:w-1/2 py-4 px-6 flex flex-col h-[60vh] sm:h-[70vh] justify-between">
                <div className="text-left">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-lg mt-2 text-center">
                    {slide.description}
                  </p>
                </div>

                <div className="qr-section p-4 flex justify-between">
                  <div className="text-left">
                    <a href="https://apps.apple.com/ng/app/screws-and-spanners/id6630377072">
                      <img
                        className="w-[5rem] sm:w-[6rem]"
                        src={iosLogo}
                        alt="iOS App"
                      />
                      <img
                        className="w-[5rem] sm:w-[6rem]"
                        src={IOSqr}
                        alt="iOS QR Code"
                      />
                    </a>
                  </div>
                  <div className="text-left">
                    <a href="https://play.google.com/store/apps/details?id=com.triz.screwsspanners&pcampaignid=web_share&pli=1">
                      <img
                        className="w-[5rem] sm:w-[6rem]"
                        src={playstoreLogo}
                        alt="Play Store"
                      />
                      <img
                        className="w-[5rem] sm:w-[6rem]"
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
      </div>

      {/* Navigation Buttons (Centered at Bottom) */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 md:left-1/3 transform -translate-x-1/2 flex gap-4 sm:gap-6 justify-center">
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-300"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === slides.length - 1 ? 0 : prev + 1
            )
          }
          className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-300"
        >
          ❯
        </button>
      </div>

      {/* Dot Navigation Below */}
      <div className="absolute bottom-4 left-1/2 md:left-1/3 transform -translate-x-1/2 flex justify-center space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
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

export default WelcomeCarousel;
