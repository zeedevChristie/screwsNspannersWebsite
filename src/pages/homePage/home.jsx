import React from "react";
import Navbar from "../../components/navBar/nav";
import Statistics from "../../components/landingSection/statistics";
import Footer from "../../components/footer/footer";
import WelcomeCarousel from "../../components/welcome/welcomeCarousel";
import HowToSection from "../../components/howToSection/howToSection";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
    
     <Navbar />
    

      <main className="flex-grow w-full  overflow-auto">
        <WelcomeCarousel />
        <Statistics />
        <HowToSection />
      <Footer/>                    
      </main>

    </div>
  );
};

export default Home;
