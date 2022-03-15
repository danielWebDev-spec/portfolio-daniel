import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Home() {
  return (
    <section name="intro" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="sm:text-7xl text-4xl font-bold text-[#ccd6f6]">
          Daniel Dela Cruz
        </h1>
        <h2 className="sm:text-5xl text-2xl  font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 space-x-3">
            <h4>View Work</h4>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
