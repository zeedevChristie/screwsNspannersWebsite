import React from "react";
import convenience from "../../assets/welcomeImages/convenience.png";
import competence from "../../assets/welcomeImages/competence.jpg";
import control from "../../assets/welcomeImages/control.jpg";
import trizHouse from "../../assets/welcomeImages/trizHouse.png";

const About = () => {
  return (
    <div className="">
      <div className="p-7 px-20">
        <h2 className="text-[3rem] font-serif">About Screws and Spanners</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Similique ducimus et
          perspiciatis dolorum mollitia maxime qui eum quidem iste assumenda?
          Commodi cum saepe dolores explicabo veniam. Sint asperiores porro
          atque odio nam?
        </p>
      </div>
      {/* <div className="p-5 px-20 text-center">
        <h2 className="text-[2rem] font-bold">Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Odio nostrum maiores
          laudantium, rerum eligendi consectetur alias molestias sunt similique
          dolore? Commodi cum saepe dolores explicabo veniam. Sint asperiores
          porro atque odio nam?
        </p>
      </div> */}
      <hr className="w-full border-t-2 border-dashed border-gray-500  " />

      <div className="flex  items-center justify-center gap-10 p-5 px-[10rem]">
        <div className=" ">
          <img
            className="w-[25rem] h-[12rem] border rounded-2xl"
            src={convenience}
            alt="convenience"
          />
        </div>
        <div className="">
          <h2 className="text-[1.5rem] font-mono">Convenience</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non
            dolor sit exercitationem deleniti, quia modi neque voluptatibus
            nostrum ea?
          </p>
        </div>
      </div>
      <div className="flex items-center  justify-center gap-10 p-5 px-[10rem]">
        <div className="">
          <h2 className="text-[1.5rem] font-mono">Competence</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non
            dolor sit exercitationem deleniti, quia modi neque voluptatibus
            nostrum ea?
          </p>
        </div>
        <div className="">
          <img
            className="w-[25rem] h-[12rem] border rounded-2xl"
            src={competence}
            alt="competence"
          />
        </div>
      </div>
      <div className="flex items-center  justify-center gap-10 p-5 px-[10rem]">
        <div className="">
          <img
            className="w-[25rem] h-[12rem] border rounded-2xl"
            src={control}
            alt="control"
          />
        </div>
        <div className="">
          <h2 className="text-[1.5rem] font-mono">Competence</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non
            dolor sit exercitationem deleniti, quia modi neque voluptatibus
            nostrum ea?
          </p>
        </div>
      </div>

      <hr className="w-full border-t-2 border-dashed border-gray-500  " />
      <div className="p-7 px-20">
        <h2 className="text-[3rem] font-serif">About Triz House</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Similique ducimus et
          perspiciatis dolorum mollitia maxime qui eum quidem iste assumenda?
          Commodi cum saepe dolores explicabo veniam. Sint asperiores porro
          atque odio nam?
        </p>
      </div>
      {/* <div className="p-5 px-20 text-center">
        <h2 className="text-[2rem] font-bold">Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Odio nostrum maiores
          laudantium, rerum eligendi consectetur alias molestias sunt similique
          dolore? Commodi cum saepe dolores explicabo veniam. Sint asperiores
          porro atque odio nam?
        </p>
      </div>
      <hr className="w-full border-t-2 border-dashed border-gray-500  " /> */}

      <div className="flex  items-center justify-center gap-10 p-5 px-[10rem]">
        <div className="">
          <h2 className="text-[1.5rem] font-mono">Mission</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non
            dolor sit exercitationem deleniti, quia modi neque voluptatibus
            nostrum ea?
          </p>
        </div>
        <div className=" ">
          <img
            className="w-[25rem] h-[12rem] border rounded-2xl"
            src={convenience}
            alt="convenience"
          />
        </div>
      </div>
      <div className="flex items-center  justify-center gap-10 p-5 px-[10rem]">
        <div className="">
          <img
            className="w-[25rem] h-[12rem] border rounded-2xl"
            src={competence}
            alt="competence"
          />
        </div>
        <div className="">
          <h2 className="text-[1.5rem] font-mono">Vision</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non
            dolor sit exercitationem deleniti, quia modi neque voluptatibus
            nostrum ea?
          </p>
        </div>
      </div>
      <div className="flex items-center  justify-center gap-10 p-5 px-[10rem]">
        <div className="">
          <h2 className="text-[1.5rem] font-mono">Values</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non
            dolor sit exercitationem deleniti, quia modi neque voluptatibus
            nostrum ea?
          </p>
        </div>
        <div className="">
          <img
            className="w-[25rem] h-[12rem] border rounded-2xl"
            src={control}
            alt="control"
          />
        </div>
      </div>

      <hr className="w-full border-t-2 border-dashed border-gray-500  " />

      {/* <div className="flex items-center bg-[#eaeaea] justify-center gap-10 py-5 px-[5rem]">
        <div className="">
          <img
            className="w-[70vw] h-[rem] border rounded-2xl"
            src={trizHouse}
            alt="trizHouse"
          />
        </div>
            <div className="">
            <h2 className="text-[2.5rem] font-bold">About Triz House</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non
                dolor sit exercitationem deleniti, quia modi neque voluptatibus
                nostrum ea?
            </p>
            </div>
      </div> */}
    </div>
  );
};

export default About;
