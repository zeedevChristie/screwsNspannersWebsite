import React from "react";
import office from "../../assets/welcomeImages/office.jpg";
import Package from "./Package";
import { FaCheck } from "react-icons/fa";

const ServiceDelivery = () => {
  return (
    <div className="bg-black text-white">
      <div
        className="bg-cover bg-center min-h-[25rem] flex flex-col items- justify-center text-[1.5rem] font-serif text-black p-8"
        style={{ backgroundImage: `url(${office})` }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[3rem]  font-semibold">Our Service Deliveries</h1>

          <div>
            <div className=" flex items-center gap-2">
              <FaCheck /> <p>One Subscription</p>
            </div>
            <div className=" flex items-center gap-2">
              <FaCheck /> <p>All Services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className=" py-3">
          <h3 className=" font-semibold text-[2rem] ">Introduction</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
            iusto aperiam quis harum rem dolor, tempora velit quos, ipsa est
            quas mollitia maxime qui adipisci aspernatur unde explicabo fuga?
          </p>
        </div>
        <hr className="w-full border-t-2 border-dashed border-gray-500  " />

        <div className="space-y-3 py-3">
          <h2 className=" font-semibold text-[2rem]">Service Provider</h2>

          <div>
            <h3 className=" font-semibold text-[1.2rem] ">
              Who are the Service Providers?
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
              iusto aperiam quis harum rem dolor, tempora velit quos, ipsa est
              quas mollitia maxime qui adipisci aspernatur unde explicabo fuga?
            </p>
          </div>
          <div>
            <h3 className=" font-semibold text-[1.2rem]">
              Join our Community as a Service Provider
            </h3>
            <p>1.</p>
            <p>2.</p>
            <p>3.</p>
            <p>4.</p>
          </div>
          <div className="  ">
            <h3 className=" font-semibold text-[1.2rem]">Our Promise</h3>
            <p>
              its just a market place, where we provide maximum support. You are
              responsible for your choices and safety
            </p>
          </div>
          <div>
            <h3 className=" font-semibold text-[1.2rem]">
              What Stands Us Apart ??
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              natus id vitae accusantium numquam doloribus fugit, sunt
              blanditiis sint dolorem.
            </p>
          </div>
          <div className="  flex items-center justify-center font-serif text-[1.5rem] ">
            START NOW !!!
          </div>
        </div>

        {/* <div>6</div>  */}

        <hr className="w-full border-t-2 border-dashed border-gray-500  " />

        <div className="space-y-3 py-3">
          <h2 className=" font-semibold text-[2rem] ">Customers</h2>
          <div className="  ">
            <h3 className=" font-semibold text-[1.2rem] ">
              Who are the SnS Customers?
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
              iusto aperiam quis harum rem dolor, tempora velit quos, ipsa est
              quas mollitia maxime qui adipisci aspernatur unde explicabo fuga?
            </p>
          </div>
          <div>
            <h3 className=" font-semibold text-[1.2rem]">
              Join our Community as a Customer
            </h3>
            <p>1.</p>
            <p>2.</p>
            <p>3.</p>
            <p>4.</p>
          </div>
          <div className="  ">
            <h3 className=" font-semibold text-[1.2rem]">Our Promise</h3>
            <p>
              its just a market place, where we provide maximum support. You are
              responsible for your choices and safety
            </p>
          </div>
          <div>
            <h3 className=" font-semibold text-[1.2rem]">
              What Stands Us Apart ??
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              natus id vitae accusantium numquam doloribus fugit, sunt
              blanditiis sint dolorem.
            </p>
          </div>
          <div className="  flex items-center justify-center font-serif text-[1.5rem] ">
            START NOW !!!
          </div>
        </div>
        {/* <div>6</div>  */}

        <hr className="w-full border-t-2 border-dashed border-gray-500  " />

        <Package />
      </div>
    </div>
  );
};

export default ServiceDelivery;
