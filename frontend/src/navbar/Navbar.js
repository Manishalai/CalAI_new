// src/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-around">
        <div className="text-white text-xl cursor-pointer">Home</div>
        <div className="text-white text-xl cursor-pointer">Certification</div>
        <div className="text-white text-xl cursor-pointer">About</div>
        <div className="text-white text-xl  cursor-pointer">FAQs</div>
        <div className="text-white text-xl  cursor-pointer">Blogs</div>
      </div>
    </nav>
  );
};

export default Navbar;
