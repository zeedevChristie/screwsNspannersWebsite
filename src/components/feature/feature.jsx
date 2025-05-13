import React from "react";
import convenience from "../../assets/images/convenience.png";
import competence from "../../assets/images/competence.png";
// import control from "../../assets/images/control.png";
import frustrated from "../../assets/images/frustrated.png";
const Feature = () => {
  return (
    <div className="flex bg-[#e4e4e4] p-6  py-8 gap-3 items-center">

      <div className=""> 
        <p className="flex justify-center py-6 font-bold text-[2rem]"> Why Choose Screws and Spanners ?</p>
        <div className="flex justify-self-center gap-4  text-center">
          <div className="">
            <img className="w-full" src={convenience} alt="convenience" />
            <p className="font-semibold pt-2">CONVENIENCE</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, eius.</p>
          </div>
          <div className="">
            <img className="w-full h-[14.7rem] " src={competence} alt="competence" />
            <p className="font-semibold pt-2">COMPETENCE</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, fugit.</p>
          </div>
        </div>

        <div className="flex-col my-4  justify-items-center ">
          <img className="w-[28rem]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWwciLiRXbNix_PaahpAneAzTmyiR-Yi7uw&s" alt="control" />
          <p className="font-semibold pt-2">CONTROL</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ipsa.</p>
        </div>
      </div>

      <div className="space-y-3 w-[37rem] py-2  text-[1.2rem] text-center  shadow-lg ">
        <img className="w-full  " src={frustrated} alt="" />
        <p className="text-red-600 text-[1.3rem] font-semibold"> SCREWS AND SPANNERS ?</p>
        <p>
          Have you ever been frustrated with paying an Artisan without getting
          your job done? Have you ever received a quote from an Artisan and you
          wonder how much premium you are paying?
        </p>
        <p>
          Welcome to Screws And Spanners Your one-stop-tool for your everyday
          Artisan need. Quick, Convenient and Professional
        </p>
        <p className="font-bold" >A marketplace for quality
        professional artisans.</p>
        <button className="border-2 rounded-full p-3 bg-blue-700 shadow-2xl "> Contact us</button>
      </div>
    </div>
  );
};

export default Feature;
