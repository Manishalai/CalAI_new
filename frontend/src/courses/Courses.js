import React from "react";
import badge from "../images/streamline_star-badge-solid.svg";
const Courses = () => {
  return (
    <>
      <h1 class="text-[36px] text-[#074D8D] font-semibold p-5 lg:text-2xl">
        Our Comprehensive Program
      </h1>
      <div
        id="Comprehensive"
        class="w-full p-5  flex justify-around lg:flex-col lg:items-center lg:gap-5 lg:p-8"
      >
        <div class="flex-col w-[400px] relative   border-solid border-2 border-black lg:w-full">
          <img
            class="absolute h-[55px] left-1 top-10"
            src={badge}
            alt="CalAI-Best-Online-Certification-in-USA"
          />
          <button class="absolute p-1 h-[28px] text-[18px] right-0 bg-[#CBA135] font-bold ">
            $899
          </button>
          <div class="flex flex-col text-center gap-3 items-center justify-center">
            <h1 class="text-[#074D8D] text-[20px] w-[300px]   font-semibold lg:text-[17px]  lg:text-center  lg:w-[200px] ">
              Certified Artificial Intelligence Developer (CAID <sup>TM</sup>)
            </h1>
            <p class="px-12 ml-6">
              Enhance AI expertise with cutting-edge modules validated by top
              subject matter experts for optimal proficiency
            </p>
          </div>
          <div class="flex text-[14px] justify-evenly mt-4">
            <p>Self Paced Content</p>
            <p>5-16 Weeks</p>
            <p>Technical</p>
          </div>
          <div class="flex mt-4">
            <button
              id="knowMore"
              class="w-[225px] bg-white font-bold border-t-2 border-solid border-black lg:w-[480px] "
            >
              <a href="AI-Developer.html"> Know More</a>
            </button>
            <button
              id="applyNow"
              class="w-[225px] bg-blue-800 text-white font-bold p-2 lg:w-[480px]"
            >
              Apply Now
            </button>
          </div>
        </div>
        <div class=" flex-col w-[400px] relative   border-solid border-2 border-black lg:w-full">
          <img
            class="absolute h-[55px] left-1 top-10 "
            src={badge}
            alt="CalAI-Best-Online-Certification-in-USA"
          />
          <button class="absolute p-1 h-[28px] text-[18px] right-0 bg-[#CBA135] font-bold ">
            $999
          </button>
          <div class="flex flex-col text-center items-center justify-center gap-3">
            <h1 class="text-[#074D8D] text-[20px] w-[300px]   font-semibold lg:text-[17px]  lg:text-center  lg:w-[200px] ">
              Certified Artificial Intelligence Leader (CAIL<sup>TM</sup>)
            </h1>
            <p class="px-12 ml-4">
              An emerging leadership program offering a holistic, strategic
              implementation of AI across sectors
            </p>
          </div>
          <div class="flex text-[14px] justify-evenly mt-4">
            <p>Self Paced Content</p>
            <p>8-24 Weeks</p>
            <p>Non-Technical</p>
          </div>
          <div class="flex mt-4 lg:w-full">
            <button class="w-[225px] bg-white font-bold border-t-2 border-solid border-black lg:w-[480px]">
              <a href="AILeadership.html">Know More</a>
            </button>
            <button
              id="applyNow2"
              class="w-[225px] bg-blue-800 text-white font-bold p-2 lg:w-[480px]"
            >
              <a href="AILeaderform.html">Apply Now</a>
            </button>
          </div>
        </div>
        <div class="flex-col w-[400px] relative   border-solid border-2 border-black lg:w-full">
          <img
            class="absolute h-[55px] left-1 top-10"
            src={badge}
            alt="CalAI-Best-Online-Certification-in-USA"
          />
          <button class="absolute p-1 h-[28px] text-[18px] right-0 bg-[#CBA135] font-bold ">
            $499
          </button>
          <div class="flex flex-col text-center items-center justify-center gap-3">
            <h1 class="text-[#074D8D] text-[20px] w-[300px]   font-semibold lg:text-[17px]  lg:text-center lg:w-[200px]">
              Certified Artificial Intelligence Manager (CAIM <sup>TM</sup>)
            </h1>
            <p class="px-12 ml-6">
              Enable professionals from diverse roles to lead and collaborate
              effectively in AI, even without coding skills
            </p>
          </div>
          <div class="flex text-[14px] justify-evenly mt-4">
            <p>Self Paced Content</p>
            <p>8-24 Weeks</p>
            <p>Non-Technical</p>
          </div>
          <div class="flex mt-4">
            <button class="w-[225px] bg-white font-bold border-t-2 border-solid border-black lg:w-[480px]">
              <a href="AI-Lead.html">Know More</a>
            </button>
            <button
              id="applyNow3"
              class="w-[225px] bg-blue-800 text-white font-bold p-2 lg:w-[480px]"
            >
              <a href="AI-Leadform.html">Apply Now</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
