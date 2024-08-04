import React, { useState } from "react";
import Brochure from "../forms/Brochure";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* DESKTOP */}
      <div className="block md:hidden">
        <div className="border-b border-gray-200">
          <nav
            className="flex gap-6 bg-[#074D8D] px-5 pt-[20px] justify-evenly"
            aria-label="Tabs"
          >
            <Link to="/">
              <button
                onClick={() => scrollToSection("home-section")}
                id="home"
                className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
              >
                Home
              </button>
            </Link>
            {/* Certifications Button with Dropdown */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link to="/Certifications">
                <button
                  id="certificate"
                  className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
                >
                  Certifications
                </button>
              </Link>
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute left-0 mt-1 w-100 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <Link
                    to="/AI_Leader"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Certified Artificial Intelligence Leader (CAIL<sup>TM</sup>)
                  </Link>
                  <Link
                    to="/AI_Developer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Certified Artificial Intelligence Developer (CAID{" "}
                    <sup>TM</sup>)
                  </Link>
                  <Link
                    to="/AI_Manager"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Certified Artificial Intelligence Manager (CAIM{" "}
                    <sup>TM</sup>)
                  </Link>
                </div>
              )}
            </div>
            {/* <Link to="/AboutUs"> */}
              <button 
              onClick={() => scrollToSection("aboutus-section")}
              className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500">
                About Us
              </button>
            {/* </Link> */}
            <button
              id="brochure-navbar"
              className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
            >
              <Brochure />
            </button>
            <button
              onClick={() => scrollToSection("footer-section")}
              className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-[18px] font-medium text-white hover:border-orange-300 hover:text-orange-500"
            >
              Blogs
            </button>
          </nav>
        </div>
      </div>

      {/* mobile strip */}
      <div className="hidden md:flex bg-[#074D8D] p-2 items-center justify-between">
        <span onClick={toggleMenu} className="cursor-pointer flex-shrink-0">
          <MenuIcon className="text-white" fontSize="large" />
        </span>
        <span className="text-white text-[10px] flex items-center space-x-1 mx-2 flex-grow justify-center">
          <CallIcon fontSize="small" />
          <span>Call Us:</span>
          <strong className="ml-1">+1 334-432-8116</strong>
        </span>
        <button
          id="brochure-navbar-mobile"
          className="bg-white rounded p-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm flex-shrink-0"
        >
          <Brochure />
        </button>
      </div>

      {/* mobile navbar */}
      <div
        id="menu-bar"
        className={`text-center text-[#074D8D] p-2 font-bold ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          <li>
            <Link to="/">
              <button
                onClick={() => scrollToSection("home-section")}
                id="home"
                className="inline-flex m-1 mt-0 shrink-0 items-center border-transparent text-[18px] font-medium hover:border-orange-300 hover:text-orange-500"
              >
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Certifications">
              <button
                id="certificate"
                className="inline-flex m-1 shrink-0 items-center border-transparent text-[18px] font-medium hover:border-orange-300 hover:text-orange-500"
              >
                Certifications
              </button>
            </Link>
          </li>
          <li>
            <Link to="/AboutUs">
              <button className="inline-flex m-1 shrink-0 items-center border-transparent text-[18px] font-medium hover:border-orange-300 hover:text-orange-500">
                About Us
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("footer-section")}
              className="inline-flex shrink-0 m-1 items-center border-transparent= text-[18px] font-medium hover:border-orange-300 hover:text-orange-500"
            >
              Blogs
            </button>
          </li>
          <li>
            <Link to="/Terms&Conditions">
              <button className="inline-flex m-1 shrink-0 items-center border-transparenttext-[18px] font-medium hover:border-orange-300 hover:text-orange-500">
                Terms and Conditions
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Privacy_Policy">
              <button className="inline-flex m-1 mb-0 shrink-0 items-center border-transparenttext-[18px] font-medium hover:border-orange-300 hover:text-orange-500">
                Privacy and policy
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
