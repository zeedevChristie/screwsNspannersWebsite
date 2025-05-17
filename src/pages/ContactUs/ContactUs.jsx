import React from "react";
import teleContact from "../../assets/images/teleContact.jpg";
import ContactUsForm from "./ContactUsForm";
import { LuMapPin } from "react-icons/lu";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import contactBackground from "../../assets/images/contactBackground.jpg";

const ContactUs = () => {
  return (
    <div
      className="p-4 md:p-10 bg-[#212121] h-full text-white bg-cover bg- flex justify-center items-center"
      style={{ backgroundImage: `url(${contactBackground})` }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-x-10">
        
        {/* Social Icons */}
        <div className="flex flex-row md:flex-col space-x-5 md:space-x-0 md:space-y-10">
          <a href="https://www.facebook.com/people/ScrewsNspanners/61563364336827/">
            <IoLogoFacebook className="text-blue-500 hover:text-blue-700 text-3xl md:text-2xl" />
          </a>
          <a href="https://www.instagram.com/screwsnspannerz/">
            <AiFillInstagram className="text-purple-500 hover:text-purple-700 text-3xl md:text-2xl" />
          </a>
          <a href="https://x.com/screwsNspanners">
            <FaTwitter className="text-blue-500 hover:text-blue-700 text-3xl md:text-2xl" />
          </a>
          <a href="https://www.linkedin.com/company/screwsnspanners">
            <TbBrandLinkedinFilled className="text-blue-500 hover:text-blue-700 text-3xl md:text-2xl" />
          </a>
          <a href="https://wa.me/2347047001592" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className="text-green-500 hover:text-green-700 text-3xl md:text-2xl" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <ContactUsForm />
        </div>

        {/* Contact Info & Image */}
        <div className="flex flex-col items-center w-full md:w-1/3 space-y-5">
          <div>
            {/* <img className="w-[15rem] md:w-[20rem]" src={teleContact} alt="Contact us image" /> */}
          </div>
          <div className="flex flex-col px-5 md:px-10 space-y-3 ">
            <div className="flex items-center space-x-2 pt-[10rem] ">
              <LuMapPin size={40} color="red" className="text-gray-600 text-xl" />
              <p className="text-center md:text-center text-sm md:text- font-serif text-[1.2em] ">
                Plot 29 Shittu Animashaun Street, Gbagada, Lagos, Nigeria
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm md:text-base font-semibold">0704 700 1592</p>
              <a href="mailto:help@screwsandspanners.com" className="text-blue-600 hover:underline">
                help@screwsandspanners.com
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;
