import React from "react";
import teleContact from "../../assets/images/teleContact.png";
import ContactUsForm from "./ContactUsForm";
import { LuMapPin } from "react-icons/lu";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import contactBackground from "../../assets/images/contactBackground.jpg";
import contactBackground2 from "../../assets/images/contactBackground2.jpg";

const ContactUs = () => {
  return (
    <div
      className="p-6 md:p-12 bg-[#212121] h-[82vh] text-white bg-cover flex justify-center items-center"
      // style={{ backgroundImage: `url(${contactBackground})` }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full max-w-6xl">
        
        {/* Social Icons */}
        <div className="flex flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-6">
          {[["https://www.facebook.com/people/ScrewsNspanners/61563364336827/", IoLogoFacebook, "text-blue-500"],
            ["https://www.instagram.com/screwsnspannerz/", AiFillInstagram, "text-purple-500"],
            ["https://x.com/screwsNspanners", FaTwitter, "text-blue-500"],
            ["https://www.linkedin.com/company/screwsnspanners", TbBrandLinkedinFilled, "text-blue-500"],
            ["https://wa.me/2347047001592", IoLogoWhatsapp, "text-green-500"]
          ].map(([url, Icon, color], index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <Icon className={`${color} hover:opacity-75 text-3xl md:text-2xl`} />
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <ContactUsForm />
        </div>

        {/* Contact Info & Image */}
        <div className="flex flex-col items-center w-full md:w-1/3  ">
          <img className="w-40 md:w-[20rem] rounded-lg" src={teleContact} alt="Contact Us" />
          <div className="flex flex-col text-center md:text-center  space-y-  ">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <LuMapPin size={30} color="red" className="text-gray-600" />
              <p className="text-sm md:text-base font-serif">
                Plot 29 Shittu Animashaun Street, Gbagada, Lagos, Nigeria
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm md:text-base font-semibold">📞 0704 700 1592</p>
              <a href="mailto:help@screwsandspanners.com" className="text-blue-500 hover:underline">
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
