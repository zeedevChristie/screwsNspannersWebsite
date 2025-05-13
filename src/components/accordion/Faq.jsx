import React, { useState } from "react";

const faqData = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 3", answer: "Answer 3" },
  { question: "Question 4", answer: "Answer 4" },
  { question: "Question 5", answer: "Answer 5" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`border-b p-4 cursor-pointer transition-all ${
            openIndex === index ? "bg-blue-100" : "hover:bg-gray-100"
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="font-semibold">{item.question}</div>
          {openIndex === index && <div className="mt-2 text-gray-700">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
