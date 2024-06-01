import React from "react";
import logo from "../../images/Cal_ai_orign-removebg-preview [MConverter.eu].avif";

const Header = () => {
  return (
    <>
      <div id="banner" class=" flex bg-white w-full justify-between px-4">
        <div class="flex">
          <a href="index.html">
            <img class="h-[80px]" src={logo} alt="CalAI-logo" />
          </a>

          <h1 class="relative top-5 text-[#074D8D] text-[25px] font-bold md:text-[14px] ">
            <a href="index.html">
              California Artificial Intelligence Institute
            </a>
          </h1>
        </div>

        <div>
          <p class="mt-7 relative text-[1rem] text-[#074D8D] font-bold md:mt-5 md:text-[14px] ">
            Email: Info@calai.org
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
