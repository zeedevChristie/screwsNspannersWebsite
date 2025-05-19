import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";

import iosLogo from "../../assets/images/appstore.png";
import playstoreLogo from "../../assets/images/playstore.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:flex justify-around gap-10">
        {/* Company Info */}
        <div className="flex-col justify-around md:flex md:items-start mb-8 md:mb-0">
          <div>
            <h2 className="text-xl font-bold mb-3">Screws and Spanners</h2>
            <p className="text-gray-400 text-sm">
              Convenience . Competenece . Control
            </p>
          </div>

          {/* Contact Section */}
          <div className="  gap-5  text-gray-400 text-sm">
            <p>📞 Phone: +234 704 700 1592</p>
            <p>
              📩 Email:{" "}
              <a
                href="mailto:help@screwsandspanners.com"
                className="hover:text-white"
              >
                help@screwsandspanners.com
              </a>
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <nav className="flex flex-col space-y-2 text-gray-400">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/projects" className="hover:text-white">
              Projects
            </a>
            <a href="/services" className="hover:text-white">
              Service Delivery
            </a>
            <a href="/vlogs" className="hover:text-white">
              Vlogs
            </a>
            <a href="/contactUs" className="hover:text-white">
              Contact Us
            </a>
            <a href="/faq" className="hover:text-white">
              FAQ
            </a>
            <a href="/privacyPolicy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/termsAndConditions" className="hover:text-white">
              Terms and Conditions
            </a>
            <a href="/refundPolicy" className="hover:text-white">
              Refund Policy
            </a>
          </nav>
        </div>

        <div className="space-y-10">
          {/* Newsletter Subscription */}
          <div>
            <p className="text-gray-400 text-sm mb-2">
              Subscribe to our newsletter:
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 text-black rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Social Media & Newsletter */}
          <div>
            <h2 className="text-xl mb-3 font-bold ">Stay Connected</h2>
            <div className="flex text-xl space-x-6 mb-4">
              <a
                href="https://x.com/screwsNspanners"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoTwitter />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61563364336827"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/screwsnspannerz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://wa.me/2347047001592"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/company/screwsnspanners"
                target="_blank"
                rel="noopener noreferrer"
              >
               <TbBrandLinkedinFilled  />
              </a>
            </div>
          </div>
          {/* App Download Section */}
          <div className="flex gap-5">
            <a href="https://apps.apple.com/ng/app/screws-and-spanners/id6630377072">
              <img className="w-[6rem]" src={iosLogo} alt="" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.triz.screwsspanners&pcampaignid=web_share&pli=1">
              <img className="w-[6rem]" src={playstoreLogo} alt="" />
            </a>
          </div>
        </div>
      </div>

      <p className=" mt-20 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Triz House. All rights reserved.
      </p>
    </footer> 
  );
};

export default Footer;
