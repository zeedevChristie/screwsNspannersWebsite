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
        <h1 className="text-2xl md:text-[3rem] font-semibold">Our Service Deliveries</h1>

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
      <div className="px-6 md:px-10 lg:px-20 py-6 space-y-6">
        <section>
          <h3 className="text-xl md:text-[2rem] font-semibold">Introduction</h3>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit iusto aperiam quis harum rem dolor.
          </p>
        </section>

        <hr className="border-t-2 border-dashed border-gray-500" />

        <section>
          <h2 className="text-xl md:text-[2rem] font-semibold">Service Provider</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Who are the Service Providers?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="space-y-2 mt-4">
            <h3 className="text-lg font-semibold">Join our Community as a Service Provider</h3>
            <ul className="list-disc pl-5">
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
              <li>Step 4</li>
            </ul>
          </div>
        </section>

        <hr className="border-t-2 border-dashed border-gray-500" />

        {/* Customers Section */}
        <section>
          <h2 className="text-xl md:text-[2rem] font-semibold">Customers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>

        <hr className="border-t-2 border-dashed border-gray-500" />

        {/* Package Component */}
        <Package />
      </div>
    </div>
  );
};

export default ServiceDelivery;
