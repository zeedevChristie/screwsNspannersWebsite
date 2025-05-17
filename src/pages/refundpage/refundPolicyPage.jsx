import React from "react";
import Navbar from "../../components/navBar/nav";
import RefundPolicy from "./refundPolicy";
import Footer from "../../components/footer/footer";

const RefundPolicyPage = () => {
  return (
    <div>
      <Navbar />

      <main className="flex-grow w-full h-[100vh] overflow-auto ">
        <RefundPolicy />
        <Footer />
      </main>
    </div>
  );
};

export default RefundPolicyPage;
