import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FAQAccordion = () => {
  const navigate = useNavigate(); // Enables navigation

  const faqItems = [
    { question: "How do I request an Artisan?", answer: "Simply log in, navigate to the request section, and follow the steps." },
    { question: "How do I track my request?", answer: "You can view the progress of your request in the 'My Requests' section." },
    { question: "What payment methods are accepted?", answer: "We support credit cards, bank transfers, and mobile payments." },
    { question: "Is customer support available?", answer: "Yes! Our support team is available 24/7 through the app and email." },
  ];

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => (
        <div key={index} className="border-b">
          <div
            className="p-4 cursor-pointer hover:bg-red-200 transition-all rounded-md"
            onClick={() => navigate("/faq")} // Redirects to FAQ page
          >
            <strong className="text-lg">{item.question}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

const slides = [
  { title: "How to use the App", description: "Go to Playstore or IOS search for Screws and Spanners. Or scan the QR code." },
  { title: "Transparent Pricing", description: "No hidden fees—know exactly what you're paying for with clear estimates." },
  { title: "24/7 Availability", description: "Need help anytime? Our artisans are ready around the clock to assist you." },
  { title: "Frequently Asked Questions", description: <FAQAccordion /> },
];

const HowToText = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManual, setIsManual] = useState(false); // Tracks manual clicks

  // Auto-slide every 8 seconds, resetting if manual navigation occurs
  useEffect(() => {
    if (isManual) return; // Prevents auto-scroll if manually changed

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000); // Updated to 8 seconds

    return () => clearInterval(interval);
  }, [isManual]); // Reset interval when manual action happens

  const nextSlide = () => {
    setIsManual(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsManual(false), 5000); // Resume auto-scroll after manual navigation
  };

  const prevSlide = () => {
    setIsManual(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsManual(false), 5000);
  };

  return (
    <div className="relative w-full h-[80vh] flex justify-center bg-black text-white p-6">
      <div className="text-center space-y-4">
        <div className="text-2xl font-bold">{slides[currentSlide].title}</div>
        <div className="text-lg">{slides[currentSlide].description}</div>
      </div>

      {/* Navigation Buttons - Centered Below */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6">
        <button onClick={prevSlide} className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600">
          ❮
        </button>
        <button onClick={nextSlide} className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600">
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
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HowToText;
