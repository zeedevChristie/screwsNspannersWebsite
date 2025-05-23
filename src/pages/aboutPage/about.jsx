import React from "react";
import convenience from "../../assets/welcomeImages/convenience.png";
import competence from "../../assets/welcomeImages/competence.jpg";
import control from "../../assets/welcomeImages/control.jpg";
import values from "../../assets/images/values.jpg";
import binocular from "../../assets/images/binocular.jpg";
import mission from "../../assets/images/mission.jpg";

const About = () => {
  return (
   <div>
     <div className="px-6 md:px-10 py-7">
      <div>
        <h2 className="text-2xl md:text-[3rem] font-serif text-center md:text-center">About Screws and Spanners</h2>
        <p className="text-sm md:text-base mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus et perspiciatis dolorum mollitia maxime qui eum quidem iste assumenda?
        </p>
      </div>

      <hr className="my-6 border-t-2 border-dashed border-gray-500" />

      {/* Section - Convenience */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-5">
        <img className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl" src={convenience} alt="Convenience" />
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-[1.5rem] font-mono">Convenience</h2>
          <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      {/* Section - Competence */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-5">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-[1.5rem] font-mono">Competence</h2>
          <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <img className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl" src={competence} alt="Competence" />
      </div>

      {/* Section - Control */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-5">
        <img className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl" src={control} alt="Control" />
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-[1.5rem] font-mono">Control</h2>
          <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      {/* <hr className="my-6 border-t-2 border-dashed border-gray-500" /> */}
    </div>
      {/* ///////////////////////////////////////////////// */}
     <div className="px-6 md:px-20 py-7">
      <div>
        <h2 className="text-2xl md:text-[3rem] font-serif text-center md:text-center">About Triz House</h2>
        <p className="text-sm md:text-base mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus et perspiciatis dolorum mollitia maxime qui eum quidem iste assumenda?
        </p>
      </div>

      <hr className="my-6 border-t-2 border-dashed border-gray-500" />

      {/* Section - Vision */}

 <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-5">
         <img className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl" src={binocular} alt="Vision" />
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-[1.5rem] font-mono">Vision</h2>
          <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

     

      {/* Section - Mission */}

 <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-5">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-[1.5rem] font-mono">Mission</h2>
          <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <img className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl" src={mission} alt="Mission" />    
      </div>     

      {/* Section - Values */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-5">
           <img className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl" src={values} alt="Values" />
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-[1.5rem] font-mono">Values</h2>
          <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      {/* <hr className="my-6 border-t-2 border-dashed border-gray-500" /> */}
    </div>
   </div>
  );
};

export default About;
