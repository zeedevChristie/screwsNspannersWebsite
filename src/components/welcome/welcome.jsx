import React from "react";
import artisan from "../../assets/images/artisan.png";
import iosLogo from "../../assets/images/appstore.png";
import playstoreLogo from "../../assets/images/playstore.png";

const Welcome = () => {
  return (
    <div className="flex">
      <img className="" src={artisan} alt="" />
      <div className="  content-center  px-12 space-y-12  bg-[#031324] text-white">
        <div className="text-[1.5rem]">CONVENIENCE. COMPETENCE. CONTROL.</div>
        <div className="text-[1rem]">
          Have you ever been frustrated with paying an Artisan without getting
          your job done? Have you ever received a quote from an Artisan and you
          wonder how much premium you are paying? <br /> <br /> Welcome to
          Screws And Spanners Your one-stop-tool for your everyday Artisan need.
          Quick, Convenient and Professional
        </div>
        <div className="flex gap-8 justify-self-center">
          <a
            className="10"
            href="https://apps.apple.com/ng/app/screws-and-spanners/id6630377072"
          >
            <img className="w-[8rem] h-10 " src={iosLogo} alt="ioslogo" />
          </a>
          <a
            className="10"
            href="https://play.google.com/store/apps/details?id=com.triz.screwsspanners&pcampaignid=web_share&pli=1"
          >
            <img
              className="w-[8rem] h-10"
              src={playstoreLogo}
              alt="playstorelogo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
