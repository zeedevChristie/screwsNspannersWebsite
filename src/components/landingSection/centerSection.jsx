import React from "react";
import iosLogo from "../../assets/images/appstore.png";
import playstoreLogo from "../../assets/images/playstore.png";
const CenterSection = () => {
  return (
    <div className=" shadow-xl space-y-8 text-center w-[30vw]">
      <h2 className="font-bold text-[2rem]">About Screws & Spanners</h2>
      <p>
        Have you ever been frustrated with paying an Artisan without getting
        your job done? Have you ever received a quote from an Artisan and you
        wonder how much premium you are paying?
      </p>
      <p>
        Welcome to Screws And Spanners Your one-stop-tool for your everyday
        Artisan need. Quick, Convenient and Professional
      </p>
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
  );
};

export default CenterSection;
