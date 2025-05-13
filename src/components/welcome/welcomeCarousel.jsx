import React, { useState, useEffect } from "react";
import iosLogo from "../../assets/images/appstore.png"
import playstoreLogo from "../../assets/images/playstore.png"

import image1 from "../../assets/images/convenience.png";
import image2 from "../../assets/images/convenience.png";
import image3 from "../../assets/images/convenience.png";
import image4 from "../../assets/images/convenience.png";
import image5 from "../../assets/images/convenience.png";

import androidQR from "../../assets/QRCODE/androidQRcode.jpg";
import IOSqr from "../../assets/QRCODE/IOSqrCode.jpg"

const slides = [
  {
    image: image1,
    title: "ABOUT SCREWS AND SPANNERS",
    description:
      "Screws and Spanners is a marketplace for quality professional artisans. It allows easier access to qualified artisans just from the comfort of your space. Simply download the Screws and Spanners . You can scan the QR code , or click to be directed to the download stores",
  },
  {
    image: image2,
    title: "CONVENIENCE. COMPETENCE. CONTROL.",
    description:
      "Have you ever been frustrated with paying an Artisan without getting your job done? Have you ever received a quote from an Artisan and wondered how much premium you are paying? Welcome to Screws And Spanners—your one-stop tool for your everyday Artisan needs. Quick, convenient, and professional.",
  },
  {
    image: image3,
    title: "CONVENIENCE",
    description: "Having issues with the stress of getting skilled artisans? You don't have to bother anymore. We offer, at your own convenience, connection with qualified artisans.",
  },
  {
    image: image4,
    title: "COMPETENCE",
    description: "Screws and Spanners provides you Competence . The artisans are well trained and qualified to handle your jobs. They are professionals in their respective fields.",
  },
  {
    image: image5,
    title: "CONTROL",
    description: "Screws and Spanners gives you Control. You can track your job from start to finish. You can also rate the artisans based on their performance. This helps us to maintain a high standard of service. We are committed to providing you with the best service possible.",
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

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[98%] bg-[#031324] text-white flex items-center justify-center">
      <div className="flex w-full h-full items-center justify-between rounded-lg transition-all duration-500 relative">
        {/* Image */}
        <img
          src={slides[currentSlide].image}
          alt=""
          className="w-1/2 h-full object-cover rounded-lg"
        />

        {/* Text Content */}
        <div className="w-1/2 text-center pt-2 flex flex-col justify-between h-full">
          <div className="space-y-10 pt-5">
            <div className="text-2xl font-bold">
              {slides[currentSlide].title}
            </div>
            <div className="text-lg">{slides[currentSlide].description}</div>
          </div>

          {/* QR Code Section placed at the bottom */}
          <div className="flex justify-between p-5">
            <div>
              {/* <p>IOS download</p>  */}
              <img className="w-[10rem] " src={iosLogo} alt="iosLogo" />
              <a
                className="10"
                href="https://apps.apple.com/ng/app/screws-and-spanners/id6630377072"
              >
                <img className="w-[10rem]" src={IOSqr} alt="iosQR" />
              </a>
            </div>
            <div>
              {/* <p>Android download</p>  */}
              <img className="w-[10rem]" src={playstoreLogo} alt="playstoreLogo" />
              <a
                className="10"
                href="https://play.google.com/store/apps/details?id=com.triz.screwsspanners&pcampaignid=web_share&pli=1"
              >
                <img className="w-[10rem]" src={androidQR} alt="androidQR" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-gray-800 text-white rounded-full p-2"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-gray-800 text-white rounded-full p-2"
        >
          ▶
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute w-1/2 bottom-4 flex space-x-2 text-center">
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

export default WelcomeCarousel;
