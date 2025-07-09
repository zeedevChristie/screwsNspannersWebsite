import React, { useState } from "react";

const faqData = [
  {
    question: "How do I request a service?",
    answer: (
      <>
        Download the Screws & Spanners app, sign up as a customer, and choose a subscription plan that suits you.
        <br />
        From your dashboard, select the service you need, browse nearby artisans, and send a request. That's it.
      </>
    ),
  },
  {
    question: "What if my artisan doesn't have a phone?",
    answer: (
      <>
        No worries. If you have a smartphone, you can register an artisan on their behalf.
        <br />
        All you need is their name, location, and basic service details.
        <br />
        They can receive job requests through phone calls, so they don't need a smartphone.
      </>
    ),
  },
  {
    question: "How do you verify artisans?",
    answer: (
      <>
        At the moment, artisans are not manually verified before joining.
        <br />
        Instead, we rely on real customer reviews and ratings to highlight top performers.
        <br />
        Over time, quality service providers naturally stand out, while poor performance is filtered out through feedback.
      </>
    ),
  },
  {
    question: "Is there a cost to join?",
    answer: (
      <>
        It depends on your role.
        <br />
        Customers pay a small subscription fee (weekly, monthly, quarterly, half-yearly or yearly) to access and request services.
        <br />
        Artisans join for free and can start receiving job requests immediately.
      </>
    ),
  },
  {
    question: "What happens if I'm not satisfied?",
    answer: (
      <>
        You can leave a rating and review directly in the app.
        <br />
        We take feedback seriously and use it to improve service quality.
        <br />
        More support and dispute resolution features will be added in future updates.
      </>
    ),
  },
  {
    question: "Can I recommend an artisan?",
    answer: (
      <>
        Absolutely! You can onboard any artisan you trust—whether it's a neighbour, friend, or regular contact.
        <br />
        Just open the app, sign up as if you were creating a new account, and follow the prompts to sign up a Service Provider.
      </>
    ),
  },
  {
    question: "I am an artisan, how can I get in?",
    answer: (
      <>
        Joining is simple and free.
        <br />
        Download the Screws & Spanners app, select "Service Provider," and fill out your service and contact details.
        <br />
        If you don't have a smartphone, someone else can register you from their own app.
      </>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto p- ">
      <h2 className="text-2xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
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
            <div className="mt-2 text-white transition-opacity duration-500 opacity-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
