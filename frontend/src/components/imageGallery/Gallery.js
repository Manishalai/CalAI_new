import React, { useState } from "react";
import image1 from "../../images/Untitled design (9).svg";
import image2 from "../../images/Untitled design (13).svg";
import image3 from "../../images/Untitled design (12).svg";
import image4 from "../../images/Untitled design (15).svg";
import image5 from "../../images/Untitled design (19).svg";
import image6 from "../../images/Untitled design (2).svg";
import image7 from "../../images/Untitled design (4).svg";
import image8 from "../../images/Untitled design (17).svg";
import image9 from "../../images/Untitled design (6).svg";
import image10 from "../../images/Untitled design (5).svg";
import image11 from "../../images/Untitled design (7).svg";
import image12 from "../../images/Hands On Learning (26).svg";
import image13 from "../../images/Untitled design (11).svg";
import image14 from "../../images/Untitled design (14).svg";
import image15 from "../../images/Untitled design (23).svg";
import image16 from "../../images/Untitled design (22).svg";
import image17 from "../../images/Untitled design (20).svg";
import image18 from "../../images/Untitled design (18).svg";
import image19 from "../../images/Untitled design (21).svg";
import "./styles.css"; // Import the custom CSS for grayscale

const Gallery = () => {
  const [showAll, setShowAll] = useState(false); // State to control icon visibility

  // URLs for redirection
  const links = [
    "https://www.google.co.in/search?q=calai+california+artificial+intelligence+institute&sca_esv=8434a35677f193c1&sca_upv=1&biw=1440&bih=779&tbm=nws&ei=KGN1Zr_yNdGIjuMP7cSskAk&ved=0ahUKEwi_prqCy-yGAxVRhGMGHW0iC5IQ4dUDCA0&uact=5&oq=calai+california+artificial+intelligence+institute&gs_lp=Egxnd3Mtd2l6LW5ld3MiMmNhbGFpIGNhbGlmb3JuaWEgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgaW5zdGl0dXRlMgcQIRigARgKSPFOUABYjkNwA3gAkAEAmAGPAqABozmqAQcwLjE0LjIyuAEDyAEA-AEBmAInoAL7OcICBxAAGIAEGA3CAgYQABgNGB7CAggQABgNGB4YD5gDAJIHBzMuMTMuMjOgB-jFAQ&sclient=gws-wiz-news",
    "https://morningdispatcher.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://dailysprinter.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://thedailyfeeder.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "http://nextnewtech.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264/",
    "https://thejournalistreport.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://thefinancialcapital.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://www.issuewire.com/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024-1801774938859741",
    "https://dailydispatcher.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://fortuneweek.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://theworldinsiders.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://themorningherald.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://dailyworldweb.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264",
    "https://www.iglobalupdate.com/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024-471802283638905123",
    "http://intheheadline.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264/",
    "http://theupstocker.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264/",
    "http://thebuzzreporters.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264/",
    "http://thewitnessdaily.com/news/calai-california-artificial-intelligence-institute-opens-enrollment-for-2024/0478264/",
  ];

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  ];

  const visibleImages = showAll ? images : images.slice(0, 8);

  return (
    <>
      <h1 className="text-[36px] text-[#074D8D] font-semibold p-5 pb-1 lg:text-2xl">
        As Featured In
        <span className="font-semibold text-[#074D8D] text-sm md:text-xs px-2">
          (Click to Read more)
        </span>
      </h1>

      <div className="max-w-8xl mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center m-4">
          {visibleImages.map((image, index) => (
            <a
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 my-2 md:mx-4 md:my-4"
              key={index}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-32 h-32 md:w-24 md:h-24 lg:w-40 lg:h-40 rounded-lg cursor-pointer transform transition-transform duration-200 hover:scale-110 grayscale-icon"
              />
            </a>
          ))}
        </div>
        {!showAll ? (
          <button
            className="bg-transparent text-black font-semibold py-2 px-4 rounded-l"
            onClick={() => setShowAll(true)}
          >
            View More
          </button>
        ) : (
          <button
            className="bg-transparent text-black font-semibold py-2 px-4 rounded-l"
            onClick={() => setShowAll(false)}
          >
            View Less
          </button>
        )}
      </div>
    </>
  );
};

export default Gallery;
