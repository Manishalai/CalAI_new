// src/components/Courses2.jsx
import React from "react";
import badge from "../../images/streamline_star-badge-solid.svg";
import { useNavigate } from "react-router-dom";

const Courses2 = ({ onApplyNow }) => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-[36px] text-[#074D8D] font-semibold p-5 lg:text-2xl">
        Our Comprehensive Program
      </h1>
      <div
        id="Comprehensive"
        className="w-full p-5 flex justify-around lg:flex-col lg:items-center lg:gap-5 lg:p-8"
      >
        {/* Course 1 */}
        <div className="card flex flex-col w-[400px] relative shadow-xl rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl border border-black lg:w-full">
          <img
            className="absolute h-[55px] left-1 top-10"
            src={badge}
            alt="CalAI-Best-Online-Certification-in-USA"
          />
          <button className="absolute p-1 h-[28px] text-[18px] rounded-tr-lg right-0 bg-[#CBA135] font-bold">
            $1000
          </button>
          <div className="flex flex-col text-center gap-3 items-center justify-center flex-grow">
            <h1 className="text-[#074D8D] text-[20px] w-[300px] font-semibold lg:text-[17px] lg:text-center lg:w-[200px]">
              Certified Artificial Intelligence Developer (CAID <sup>TM</sup>)
            </h1>
            <p className="px-12 ml-6">
              Enhance AI expertise with cutting-edge modules validated by top
              subject matter experts for optimal proficiency
            </p>
          </div>
          <div className="flex text-[14px] justify-evenly mt-4">
            <p>Self Paced Content</p>
            <p>5-16 Weeks</p>
            <p>Technical</p>
          </div>
          <div className="flex mt-4 justify-end">
            <button
              id="knowMore"
              className="w-[225px] bg-white font-bold rounded-bl-lg lg:w-[480px]"
              onClick={() => navigate("/AI_Developer")}
            >
              Know More
            </button>
            <button
              id="applyNow"
              className="w-[225px] bg-blue-800 text-white rounded-br-lg font-bold p-2 lg:w-[480px]"
              onClick={() =>
                onApplyNow(
                  "Certified Artificial Intelligence Developer (CAID TM)"
                )
              }
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Course 2 */}
        <div className="card flex flex-col w-[400px] relative shadow-xl rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl border border-black lg:w-full">
          <img
            className="absolute h-[55px] left-1 top-10"
            src={badge}
            alt="CalAI-Best-Online-Certification-in-USA"
          />
          <button className="absolute p-1 h-[28px] text-[18px] rounded-tr-lg right-0 bg-[#CBA135] font-bold">
            $1200
          </button>
          <div className="flex flex-col text-center items-center justify-center flex-grow">
            <h1 className="text-[#074D8D] text-[20px] w-[300px] font-semibold lg:text-[17px] lg:text-center lg:w-[200px]">
              Certified Artificial Intelligence Leader (CAIL<sup>TM</sup>)
            </h1>
            <p className="px-12 ml-4">
              An emerging leadership program offering a holistic, strategic
              implementation of AI across sectors
            </p>
          </div>
          <div className="flex text-[14px] justify-evenly mt-4">
            <p>Self Paced Content</p>
            <p>8-24 Weeks</p>
            <p>Non-Technical</p>
          </div>
          <div className="flex mt-4 justify-end">
            <button
              id="knowMore"
              className="w-[225px] bg-white font-bold rounded-bl-lg lg:w-[480px]"
              onClick={() => navigate("/AI_Leader")}
            >
              Know More
            </button>
            <button
              id="applyNow"
              className="w-[225px] bg-blue-800 text-white rounded-br-lg font-bold p-2 lg:w-[480px]"
              onClick={() =>
                onApplyNow("Certified Artificial Intelligence Leader (CAIL TM)")
              }
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Course 3 */}
        <div className="card flex flex-col w-[400px] relative shadow-xl rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl border border-black lg:w-full">
          <img
            className="absolute h-[55px] left-1 top-10"
            src={badge}
            alt="CalAI-Best-Online-Certification-in-USA"
          />
          <button className="absolute p-1 h-[28px] text-[18px] rounded-tr-lg right-0 bg-[#CBA135] font-bold">
            $499
          </button>
          <div className="flex flex-col text-center items-center justify-center flex-grow">
            <h1 className="text-[#074D8D] text-[20px] w-[300px] font-semibold lg:text-[17px] lg:text-center lg:w-[200px]">
              Certified Artificial Intelligence Manager (CAIM <sup>TM</sup>)
            </h1>
            <p className="px-12 ml-6">
              Enable professionals from diverse roles to lead and collaborate
              effectively in AI, even without coding skills
            </p>
          </div>
          <div className="flex text-[14px] justify-evenly mt-4">
            <p>Self Paced Content</p>
            <p>8-24 Weeks</p>
            <p>Non-Technical</p>
          </div>
          <div className="flex mt-4 justify-end">
            <button
              id="knowMore"
              className="w-[225px] bg-white font-bold rounded-bl-lg lg:w-[480px]"
              onClick={() => navigate("/AI_Manager")}
            >
              Know More
            </button>
            <button
              id="applyNow"
              className="w-[225px] bg-blue-800 text-white rounded-br-lg font-bold p-2 lg:w-[480px]"
              onClick={() =>
                onApplyNow(
                  "Certified Artificial Intelligence Manager (CAIM TM)"
                )
              }
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses2;
