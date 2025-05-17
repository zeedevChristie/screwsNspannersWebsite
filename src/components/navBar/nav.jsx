import React from "react";
import { Link } from "react-router-dom";
import playstore from "../../assets/images/playstore.png";
import iosLogo from "../../assets/images/appstore.png"

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-4 bg-black text-white">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/about" className="hover:text-gray-300 transition">About</Link>
        <Link to="/services" className="hover:text-gray-300 transition">Service Delivery</Link>
        <Link to="/projects" className="hover:text-gray-300 transition">Projects</Link> 
        <Link to="/blogsAndVlogs" className="hover:text-gray-300 transition">Vlogs</Link>
        <Link to="/contactUs" className="hover:text-gray-300 transition">Contact Us</Link>
        <Link to="/faq" className="hover:text-gray-300 transition">FAQ</Link>
      </div>

      {/* App Download Buttons */}
      <div className="flex gap-4 md:gap-8 mt-4 md:mt-0">

        <a href="#">
          <img className="w-[7rem]" src={playstore} alt="playstore download" />
        </a>
        <a href="#">
          <img className="w-[7rem] " src={iosLogo} alt="ios download" />
        </a>

       </div>
    </nav>
  );
};

export default Navbar;
