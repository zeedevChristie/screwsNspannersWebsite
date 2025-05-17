import React from "react";
import Navbar from "../../components/navBar/nav";
import PrivacyPolicy from "./PrivacyPolicy";
import Footer from "../../components/footer/footer";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow w-full h-[100vh] overflow-auto ">
        <PrivacyPolicy />
        <Footer />
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
