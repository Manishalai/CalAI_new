import React from "react";
import logo from "../images/Cal_ai_orign-removebg-preview [MConverter.eu].avif";

const Header = () => {
  return (
    <header className="flex flex-wrap md:flex-no-wrap justify-between items-center p-4 bg-white text-black">
      <div className="flex items-center">
        <img className="h-20 ml-4 mb-0" src={logo} alt="CalAI" />
        <p className="ml-2 text-2xl font-bold text-blue-700">
          California Institute of Artificial Intelligence
        </p>
      </div>

      <div>
        <button className="mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
