import React from "react";
import image1 from "../../images/Hands On Learning (15).svg";
import image2 from "../../images/Hands On Learning (16).svg";
import image3 from "../../images/Hands On Learning (17).svg";
import image4 from "../../images/Hands On Learning (18).svg";
import image5 from "../../images/Hands On Learning (19).svg";
import image6 from "../../images/Hands On Learning (20).svg";
import image7 from "../../images/Hands On Learning (21).svg";
import image8 from "../../images/Hands On Learning (22).svg";
import image9 from "../../images/Hands On Learning (23).svg";
import image10 from "../../images/Hands On Learning (24).svg";
import image11 from "../../images/Hands On Learning (25).svg";
import image12 from "../../images/Hands On Learning (26).svg";

const Gallery = () => {
  // URLs for redirection
  const links = [
    "https://thebudgetreport.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://morningdispatcher.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://dailysprinter.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://thedailyfeeder.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://www.google.co.in/search?q=calai+california+artificial+intelligence+institute&sca_esv=8434a35677f193c1&sca_upv=1&biw=1440&bih=779&tbm=nws&ei=KGN1Zr_yNdGIjuMP7cSskAk&ved=0ahUKEwi_prqCy-yGAxVRhGMGHW0iC5IQ4dUDCA0&uact=5&oq=calai+california+artificial+intelligence+institute&gs_lp=Egxnd3Mtd2l6LW5ld3MiMmNhbGFpIGNhbGlmb3JuaWEgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgaW5zdGl0dXRlMgcQIRigARgKSPFOUABYjkNwA3gAkAEAmAGPAqABozmqAQcwLjE0LjIyuAEDyAEA-AEBmAInoAL7OcICBxAAGIAEGA3CAgYQABgNGB7CAggQABgNGB4YD5gDAJIHBzMuMTMuMjOgB-jFAQ&sclient=gws-wiz-news",
    "https://thejournalistreport.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://thefinancialcapital.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://www.issuewire.com/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024-1801774938859741",
    "https://dailydispatcher.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://fortuneweek.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://theworldinsiders.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://themorningherald.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <h2 className="px-4 mt-4 text-[36px] text-center font-bold text-[#074D8D] md:text-[20px]">
          As featured in
        </h2>
        <div className="flex flex-wrap m-4">
          <a
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image1}
              alt="Image 1"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image2}
              alt="Image 2"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image3}
              alt="Image 3"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image4}
              alt="Image 4"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[4]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image5}
              alt="Image 5"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[5]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image6}
              alt="Image 6"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[6]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image7}
              alt="Image 7"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[7]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image8}
              alt="Image 8"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[8]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image9}
              alt="Image 9"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[9]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image10}
              alt="Image 10"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[10]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image11}
              alt="Image 11"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
          <a
            href={links[11]}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 my-4"
          >
            <img
              src={image12}
              alt="Image 12"
              className="w-32 h-32 rounded-lg  cursor-pointer transform transition-transform duration-200 hover:scale-105"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Gallery;
