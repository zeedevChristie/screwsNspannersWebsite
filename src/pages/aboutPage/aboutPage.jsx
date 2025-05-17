import React from "react";

import Footer from "../../components/footer/Footer";
import About from "./about";
import Navbar from "../../components/navBar/nav";

const AboutPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow w-full overflow-auto bg-black text-white ">
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
