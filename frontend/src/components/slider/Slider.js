import React from "react";
import xerox from "../../images/xerox.webp";
import techmahindra from "../../images/techmahindra.webp";
import codebright from "../../images/codebright.webp";
import google from "../../images/google.webp";
import intuit from "../../images/intuit.webp";
import sap from "../../images/sap.webp";
import microsoft from "../../images/microsoft.webp";

const Slider = () => {
  return (
    <div className="w-full py-5">
      <h2 class="px-4 text-[36px] my-4 font-semibold text-[#074D8D] md:text-[20px]">
        AI Professionals Empowered by CalAI certifications, worked at
      </h2>
      <div id="slider" class="flex w-full whitespace-nowrap overflow-x-hidden py-5">
        <div
          id="slide-images"
          className="flex flex-row h-[80px] text-nowrap animate-infinite-scroll mb-4"
        >
          {/* <img src={hplogo} alt="CalAI-Best-AI-Certification-Institute-in-USA" /> */}
          <img
            src={techmahindra}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img src={xerox} alt="CalAI-Best-AI-Certification-Institute-in-USA" />
          <img
            src={codebright}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img
            src={google}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img
            src={intuit}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img src={sap} alt="CalAI-Best-AI-Certification-Institute-in-USA" />
          <img
            src={microsoft}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          {/* <img src={hplogo} alt="CalAI-Best-AI-Certification-Institute-in-USA" /> */}
          <img
            src={techmahindra}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img src={xerox} alt="CalAI-Best-AI-Certification-Institute-in-USA" />
          <img
            src={codebright}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img
            src={google}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img
            src={intuit}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img src={sap} alt="CalAI-Best-AI-Certification-Institute-in-USA" />
          <img
            src={microsoft}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img
            src={techmahindra}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
          <img src={xerox} alt="CalAI-Best-AI-Certification-Institute-in-USA" />
          <img
            src={codebright}
            alt="CalAI-Best-AI-Certification-Institute-in-USA"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
