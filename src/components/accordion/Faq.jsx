import React, { useState } from "react";

const faqData = [
  { question: "What services do you offer?", answer: "We offer web development, app design, and more." },
  { question: "How can I contact support?", answer: "You can email us at support@example.com or call our helpline." },
  { question: "Do you provide refunds?", answer: "Yes, we have a refund policy. Check our terms for details." },
  { question: "Is there a free trial?", answer: "Yes! We provide a 7-day free trial for new users." },
  { question: "How secure is my data?", answer: "We follow strict security protocols to ensure data protection." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto p-6">
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
