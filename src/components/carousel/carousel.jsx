import React, { useState, useEffect } from "react";
import iosLogo from "../../assets/images/appstore.png"
import playstoreLogo from "../../assets/images/playstore.png"



const Carousel = () => {
  const slides = [
    {
      image: "https://www.daibau.ng/showfile.php?id=24773",
      ccc: "CONVENIENCE. COMPETENCE. CONTROL",
      header : "Welcome to Screws and Spanners",
      description : "a marketplace for quality professional artisans.",
      
    },
    {
      image: "https://www.datocms-assets.com/49357/1634679845-roadside-help.jpg?auto=format&fit=max&w=1200",
      ccc: "CONVENIENCE. COMPETENCE. CONTROL",
      header : "Welcome to Screws and Spanners",
      description : "a marketplace for quality professional artisans.",
      
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/047/595/416/non_2x/female-electrician-in-safety-helmet-working-on-complex-control-panel-dramatic-side-lighting-industrial-environment-photo.jpg",
      ccc: "CONVENIENCE. COMPETENCE. CONTROL",
      header : "Welcome to Screws and Spanners",
      description : "a marketplace for quality professional artisans.",
      
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 7000); // Auto transition every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
const increaseHeight = () => {
    const carouselElement = document.querySelector(".relative.w-full.h-96.overflow-hidden");
    if (carouselElement) {
        carouselElement.style.height = "500px"; // Increase height to 600px
    }
};


return (
    
    <div className=" w-full h-[500px]   overflow-hidden">
        <div className="relative h-full  ">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity  duration-1000 ${
                        currentIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "500px", // Increase height to 500px
                        
                    }}
                >
                    <div className="flex flex-col  p-10 space-y-4 h-full  bg-opacity-50 text-white ">
                        <p>{slide.ccc}</p>
                        <p className="text-[3rem] w-[20rem] text-white font-extrabold ">{slide.header}</p>
                        <p className=" font-bold text-[1.8rem]" >{slide.description}</p>
                       <div className="flex gap-2">
                        <a className="10" href="https://apps.apple.com/ng/app/screws-and-spanners/id6630377072"><img className="w-[8rem] h-10" src={iosLogo} alt="ioslogo" /></a>
                        <a className="10" href="https://play.google.com/store/apps/details?id=com.triz.screwsspanners&pcampaignid=web_share&pli=1"><img className="w-[8rem] h-10" src={playstoreLogo} alt="playstorelogo" /></a>
                       </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default Carousel;
