import React from "react";
import convenience from "../../assets/welcomeImages/convenience.png";
import competence from "../../assets/welcomeImages/competence.jpg";
import control from "../../assets/welcomeImages/control.jpg";
import values from "../../assets/images/values.jpg";
import binocular from "../../assets/images/binocular.jpg";
import mission from "../../assets/images/mission.jpg";
import consequence from "../../assets/images/consequence.png";

const About = () => {
  return (
    <div>
      <div className="px-6 md:px-10 py-4 ">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-[3rem] font-serif text-center md:text-center">
            About Screws and Spanners
          </h2>
          <h3 className="text- p-4 md:text-[1.5rem] text-red-400 text-center md:text-center">
            There's fixing things, and then there's doing it the Screws &
            Spanners way.
          </h3>
          <p className="text-sm md:text-base mt-">
            We're not just another platform—we're a movement. A better way to
            find help when things break down, act up, or just won't work.
          </p>
          <p>
            Whether it's a leaking tap, a broken down car, or a whole
            construction job, we connect you with artisans that get the job
            done—no drama, no guesswork.
          </p>
          <p>
            Screws & Spanners is built for everyday people: homeowners, tenants,
            small business owners, even busy mums and dads. We keep it simple,
            fast, and fair. And yes, you can invite the artisans you already
            trust to join the app and grow their hustle.
          </p>
        </div>

        <hr className="my-6 border-t-2 border-dashed border-gray-500" />

        {/* Section - Convenience */}
        <div className="flex flex-col md:flex-row items-center justify-center py-5">
          <div className="flex w-full justify-center">
            <div className="flex flex-col md:flex-row w-[70%] items-center justify-center gap-6 md:gap-10">
              <img
                className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl"
                src={convenience}
                alt="Convenience"
              />
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-[1.5rem] font-mono">Convenience</h2>
                <p className="text-sm md:text-base mt-2">
                  No long stories. No "I'll get back to you" messages. Just open the app, request a service, and relax.
                </p>
                <p>Find help in minutes, track requests in real-time, and enjoy seamless fixes—from plumbing to electricals and beyond.</p>
                <p>Life's stressful enough. Getting things fixed shouldn't be.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section - Competence */}
        <div className="flex w-full justify-center">
          <div className="flex flex-col md:flex-row w-[70%] items-center justify-center gap-6 md:gap-10 py-5">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-[1.5rem] font-mono">Competence</h2>
              <p className="text-sm md:text-base mt-2">
                We are building a marketplace that levels the playing field—and excellence wins.
              </p>
              <p>Anyone can join, but only the best get noticed. How? Through real reviews, real ratings, and consistent service.</p>
              <p>It is the smart way to know who is good—and who is just loud.</p>
            </div>
            <img
              className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl"
              src={competence}
              alt="Competence"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-5">
          <img
            className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl"
            src={control}
            alt="Control"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-[1.5rem] font-mono">Control</h2>
            <p className="text-sm md:text-base mt-2">
              This isn't “one random guy” fixing your fan.
            </p>
            <p>This is you, in charge of who comes in, when, and how much you pay.</p>
            <p>Browse profiles. Read reviews. Choose what works for you.</p>
            <p>No pressure, no pushovers—just power in your pocket.</p>
          </div>
        </div>

        {/* Section - Consequence */}
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-5">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-[1.5rem] font-mono">Consequence</h2>
            <p className="text-sm md:text-base mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <img
            className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl"
            src={consequence}
            alt="Competence"
          />
        </div> */}

        {/* <hr className="my-6 border-t-2 border-dashed border-gray-500" /> */}
      </div>
      {/* ///////////////////////////////////////////////// */}
      <div className="px-6 md:px-20 py-7">
        <div>
          <h2 className="text-2xl md:text-[3rem] font-serif text-center md:text-center">
            About Triz House
          </h2>
          <p className="text-sm md:text-base mt-4">
          TRIZ House is the parent company that birthed Screws and Spanners, and has many other innovative solutions in the works. You can be sure that we are here to serve you the very best in technology-driven convenience, reliability, and value—today and into the future.
          </p>
        </div>

        <hr className="my-6 border-t-2 border-dashed border-gray-500" />

        {/* Section - Vision */}
        <div className="flex w-full justify-center">
          <div className="flex flex-col md:flex-row w-[70%] items-center justify-center gap-6 md:gap-10 py-5">
            <img
              className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl"
              src={binocular}
              alt="Vision"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-[1.5rem] font-mono">Vision</h2>
              <p className="text-sm md:text-base mt-2">
                To be the destination for tech-solving problems.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex flex-col md:flex-row w-[70%] items-center justify-center gap-6 md:gap-10 py-5">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-[1.5rem] font-mono">Mission</h2>
              <p className="text-sm md:text-base mt-2">
                Develop capacity for a deep appreciation of problems
              </p>
              <p>Build a vibrant  community of problem solving talents</p>
              <p>Find the right fit between the problem, the people and the technology</p>
              <p>Cultivate relationships across  the solution landscape</p>
            </div>
            <img
              className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl"
              src={mission}
              alt="Mission"
            />
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex flex-col md:flex-row w-[70%] items-center justify-between gap-6 md:gap-10 py-5">
            <img
              className="w-full md:w-[18rem] h-auto md:h-[12rem] border rounded-2xl"
              src={values}
              alt="Values"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-[1.5rem] font-mono">Values</h2>
              <p className="text-sm md:text-base mt-2">
                Innovation
              </p>
              <p>Excellence</p>
              <p>Service</p>
              <p>Fun</p>
              <p>Passion</p>
              <p>Relationship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
