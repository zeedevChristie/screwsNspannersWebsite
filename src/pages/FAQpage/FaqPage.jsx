import React from "react";
import Navbar from "../../components/navBar/nav";
import Footer from "../../components/footer/Footer";
import FAQ from "../../components/accordion/Faq";

const FaqPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* FAQ Section */}
      <main className="flex-grow p-4 md:p-8  bg-black text-white w-full h-[100vh] overflow-auto  ">
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FaqPage;
