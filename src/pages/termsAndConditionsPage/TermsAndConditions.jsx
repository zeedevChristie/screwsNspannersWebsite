import React from "react";
import Navbar from "../../components/navBar/nav";
import Footer from "../../components/footer/footer";
import TandC from "./TandC";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <main className="flex-grow w-full h-[100vh] overflow-auto ">
        <TandC />
        <Footer />
      </main>
    </>
  );
};

export default TermsAndConditions;
