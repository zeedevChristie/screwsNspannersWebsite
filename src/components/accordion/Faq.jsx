import React, { useState } from "react";

const faqData = [
  { question: "How do I request an Artisan?", answer: "Simply log in, navigate to the request section, and follow the steps." },
  { question: "How do I track my request?", answer: "You can view the progress of your request in the 'My Requests' section." },
  { question: "What payment methods are accepted?", answer: "We support credit cards, bank transfers, and mobile payments." },
  { question: "Is customer support available?", answer: "Yes! Our support team is available 24/7 through the app and email." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border-b p-4 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex justify-between items-center font-semibold">
            <p>{item.question}</p>
            <span className="text-gray-500">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </div>
          {openIndex === index && (
            <div className="mt-2 text-gray-700 transition-opacity duration-500 opacity-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
