import React, { useState, useEffect } from "react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            onClick={() => toggleAccordion(index)}
          >
            <strong className="text-lg">{item.question}</strong>
          </div>
          {openIndex === index && (
            <div className="p-4  shadow-md rounded-md">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const slides = [
  {
    title: "How to use the App",
    description: "Go to Playstore or IOS search for screws and spanners.  or just scan the QRcode",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees—know exactly what you're paying for with clear estimates.",
  },
  {
    title: "24/7 Availability",
    description: "Need help anytime? Our Artisans are ready around the clock to assist you.",
  },
  {
    title: "Frequently Asked Questions",
    description: <FAQAccordion />,
  },
];

const HowToText = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full flex justify-center bg-gray-800 text-white p-6">
      <div className="text-center space-y-4">
        <div className="text-2xl font-bold">{slides[currentSlide].title}</div>
        <div className="text-lg">{slides[currentSlide].description}</div>
      </div>

      {/* Navigation Buttons */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 px-3 py-1 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 px-3 py-1 rounded-full"
      >
        ▶
      </button> */}

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
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
