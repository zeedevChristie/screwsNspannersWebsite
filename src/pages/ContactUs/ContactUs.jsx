import React from "react";
import teleContact from "../../assets/images/teleContact.png";
import ContactUsForm from "./ContactUsForm";
import { LuMapPin } from "react-icons/lu";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const ContactUs = () => {
  return (
    <div className="p-10">
      <div className="flex items-center   gap-x-20 p-">
        <div className="flex flex-col space-y-10">
          <a href="https://www.facebook.com/people/ScrewsNspanners/61563364336827/"><IoLogoFacebook/></a>
          <a href="https://www.instagram.com/screwsnspannerz/"> <AiFillInstagram/> </a>    
          <a href="https://x.com/screwsNspanners"><FaTwitter/></a>
          <a href="https://www.linkedin.com/company/screwsnspanners"> <TbBrandLinkedinFilled/>  </a>
          <a href="#"><IoLogoWhatsapp/> </a>  
        </div>
        <div>
          <ContactUsForm />
        </div>
        <div>
          <img src={teleContact} alt="Contact us image" />
        </div>
        </div>                          
      <div className="flex items-center  justify-end gap-x-10 ">
        {/* <div className="flex flex-col space-y-5">
          <h1 className="text-[2rem] font-bold">Contact Us</h1>
          <p className="text-[1.5rem]">We are here to help you</p>
          <p className="text-[1.5rem]">Get in touch with us</p>
          </div> */}
        <div className="flex flex-col px-14">
          <div className="flex items-center">
          <LuMapPin />
          <p className="">Plot 29 Shittu Animashaun Street Gbagada, Lagos, Nigeria</p>
          </div>
          <div className="flex">
          <p className="px-5">0704 700 1592</p>
          <a href="#">help@screwsandspanners.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
