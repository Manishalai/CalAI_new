import React from "react";
import banner from "../../images/Main_banner.jpg";
import CAID_Brochure from "../forms/CAID_Brochure";

export const CAID_Hero = () => {
  const scrollTodiv = (divId) => {
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat h-[500px] md:h-[400px] lg:h-[600px]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Text container */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-4 bg-black bg-opacity-20">
        <div className="text-white max-w-5xl flex flex-col items-start ml-4 md:ml-4 lg:ml-12">
          <h1 className="text-6xl md:text-3xl p-4 lg:text-5xl font-bold mb-4">
            Elevate Your Knowledge with{" "}
            <span className="block md:inline py-4">
              Our
              <span className="text-red-500"> Cutting-Edge</span>
            </span>{" "}
            <p className="block md:inline">
              <span className="text-yellow-500 py-2">AI</span> Courses!
            </p>
          </h1>
          {/* Button */}
          <button
            onClick={() => {
              scrollTodiv("courses-section");
            }}
            className="relative overflow-hidden border border-red-500 bg-red-500 text-white font-bold py-2 px-4 mt-2 ml-20 rounded text-lg md:text-lg group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-[1000ms] ease-in-out transform translate-x-[-150%] group-hover:translate-x-[150%] group-hover:animate-shine"></span>
            <span className="relative z-10">
              <CAID_Brochure />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
