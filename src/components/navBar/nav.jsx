import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between  px-16 p-6 bg-black text-white ">
     <div className="flex gap-8">
     <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
      <Link to="/projects">
        <p>Projects</p>
      </Link>
      <Link to="/services">
        <p>Services</p>
      </Link>
      <Link to="/blogs">
        <p>Blogs</p>
      </Link>
      <Link to="/contactUs">
        <p>Contact Us</p>
      </Link>
      <Link to="/faq">
        <p>FAQ</p>
      </Link>
     </div>
     <div className="flex gap-8">
        <button>playstore</button>
        <button>IOS</button>
     </div>
    </nav>
  );
};

export default Navbar;
