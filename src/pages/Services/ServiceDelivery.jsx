import React from "react";
import office from "../../assets/welcomeImages/office.jpg";
import Package from "./Package";
import { FaCheck } from "react-icons/fa";

const ServiceDelivery = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center min-h-[20rem] flex flex-col items-center justify-center text-center font-serif text-black p-6 md:p-12"
        style={{ backgroundImage: `url(${office})` }}
      >
        <h1 className="text-2xl md:text-[3rem] font-semibold">
          Our Service Deliveries
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
          <div className="flex items-center gap-2">
            <FaCheck /> <p>One Subscription</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck /> <p>All Services</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-10 lg:px-10 py-6 space-y-6">
        <section>
          <h3 className="text-xl md:text-[2rem] font-semibold">
            One Subscription. All Services.{" "}
          </h3>
          <p className="text-sm md:text-base pt-2">
            Need a plumber today? An electrician next week? A fridge fixer next
            month? With just one subscription, you get access to dozens of
            trusted service providers - anytime, anywhere.
          </p>
          <p>
            Screws & Spanners is your smart way to solve everyday problems
            without the stress. No long calls. No "my guy go come" stories. Just
            good hands, ready when you are.
          </p>
        </section>

        <hr className="border-t-2 border-dashed border-gray-500" />

        <section className="space-y-4">
          <h2 className="text-xl md:text-[2rem] font-semibold">
            Service Provider
          </h2>
          <div className="space-y-">
            <h3 className="text-lg font-semibold">
              Who are the Service Providers?
            </h3>
            <p>
              Our Service Providers (SPs) are the skilled hands that make life
              easier - plumbers, electricians, furniture repairers, painters, and
              more. Some are professionals, others are skilled freelancers. Many
              are your neighbours.
            </p>
            <p>
              We don't charge SPs a fee to join. We believe more work should
              lead to more income — without the middlemen.
            </p>
          </div>
          <div className="space-y-2 mt-2">
            <h3 className="text-lg font-semibold">
              Join our Community as a Service Provider
            </h3>
            <ol className="list-decimal pl-5">
              <li>Download the app and sign up (or ask someone with a smartphone to sign you up)</li>
              <li> Complete your profile and service categories</li>
              <li>Receive job requests</li>
              <li>Negotiate and start work</li>
              <li>Get paid and grow your business</li>
            </ol>
          </div>
        </section>

        <hr className="border-t-2 border-dashed border-gray-500" />

        {/* Customers Section */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-[2rem] font-semibold">Customers</h2>
          <h3 className="text-lg font-semibold">Who are the Customers?</h3>

          <div className="space-y-2 mt-2">
            <p>You! From homeowners and tenants to office managers and small business owners—anyone who needs fast, reliable help.</p>
            <h3 className="text-lg font-semibold">
              Join Our Community as a Customer
            </h3>
            <ol className="list-decimal pl-5">
              <li>Create an account</li>
              <li>Choose a subscription plan</li>
              <li>Request a service</li>
              <li>Choose your preferred artisan</li>
              <li>Negotiate and commission the job</li>
              <li>Track progress and give feedback</li>
            </ol>
          </div>
        </section>

        <hr className="border-t-2 border-dashed border-gray-500" />

        {/* Package Component */}
        <Package />
      </div>
    </div>
  );
};

export default ServiceDelivery;
