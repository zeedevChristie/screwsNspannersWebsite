import React, { useState } from "react";
import { Link } from "react-router-dom";
import playstore from "../../assets/images/playstore.png";
import iosLogo from "../../assets/images/appstore.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 md:px-8 py-4 bg-black text-white">
      <div className="flex justify-between items-center">
        {/* Brand / Logo */}
        <h1 className="text-xl font-bold">LOGO</h1>

        {/* Hamburger Icon */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className="w-8 h-8"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation Links (Visible on Desktop, Hidden on Mobile) */}
      <div className={`flex-col md:flex md:flex-row md:justify-between md:items-center ${isOpen ? "flex" : "hidden"} mt-4 md:mt-0`}>
        <div className="flex flex-col md:flex-row text-center md:text-left gap-4 md:gap-8">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/services" className="hover:text-gray-300 transition">Service Delivery</Link>
          <Link to="/projects" className="hover:text-gray-300 transition">Projects</Link>
          <Link to="/blogsAndVlogs" className="hover:text-gray-300 transition">Vlogs</Link>
          <Link to="/contactUs" className="hover:text-gray-300 transition">Contact Us</Link>
          <Link to="/faq" className="hover:text-gray-300 transition">FAQ</Link>
        </div>

        {/* App Download Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0 items-center">
          <a href="https://play.google.com/store/apps/details?id=com.triz.screwsspanners&pcampaignid=web_share&pli=1">
            <img className="w-24 md:w-28" src={playstore} alt="playstore download" />
          </a>
          <a href="https://apps.apple.com/ng/app/screws-and-spanners/id6630377072">
            <img className="w-24 md:w-28" src={iosLogo} alt="ios download" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
