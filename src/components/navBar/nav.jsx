import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-4 bg-black text-white">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/about" className="hover:text-gray-300 transition">About</Link>
        <Link to="/projects" className="hover:text-gray-300 transition">Projects</Link>
        <Link to="/services" className="hover:text-gray-300 transition">Services</Link>
        <Link to="/blogs" className="hover:text-gray-300 transition">Blogs</Link>
        <Link to="/contactUs" className="hover:text-gray-300 transition">Contact Us</Link>
        <Link to="/faq" className="hover:text-gray-300 transition">FAQ</Link>
      </div>

      {/* App Download Buttons */}
      <div className="flex gap-4 md:gap-8 mt-4 md:mt-0">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">PlayStore</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">iOS</button>
      </div>
    </nav>
  );
};

export default Navbar;
