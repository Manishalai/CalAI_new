import React from "react";
import Brochure from "../forms/Brochure";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div class="block md:hidden">
        <div class="border-b border-gray-200">
          <nav
            class=" flex gap-6 bg-[#074D8D] px-5 pt-[20px] justify-evenly"
            aria-label="Tabs"
          >
            <button
              onClick={() => scrollToSection("home-section")}
              id="certificate"
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("courses-section")}
              id="certificate"
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("aboutus-section")}
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500
                    aria-current="
            >
              About Us
            </button>
            <button
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500
                    aria-current="
            >
              <Brochure />
            </button>
            <button
              onClick={() => scrollToSection("footer-section")}
              class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500
                    aria-current="
            >
              Blogs
            </button>
          </nav>
        </div>
      </div>
      <div class="hidden md:block">
        <div id="mobile navbar" class="bg-blue-600 flex p-1 justify-between ">
          <img id="hamburger" class="h-[30px]" src="menu-line.svg" alt="" />
          <button class="bg-white text-red-600 rounded-md p-1 test-[15px]">
            <Brochure />
          </button>
        </div>
      </div>

      <div id="menu-bar" class="text-center text-blue-700 font-bold hidden ">
        <ul class="">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#page3">Certifications</a>
          </li>
          <li>
            <a href="#page2">About Us</a>
          </li>
          <li>
            <a href="#footer">FAQs</a>
          </li>
          <li>
            <a href="Blog.html">Blogs</a>
          </li>
          <li>
            <a href="terms&conditions.html">Terms&Conditions</a>
          </li>
          <li>
            <a href="privact.html">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
