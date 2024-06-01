import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="hidden md:flex flex-grow justify-center items-center">
            <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md mr-4">
              Home
            </a>
            <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md mr-4">
              Certifications
            </a>
            <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md mr-4">
              About Us
            </a>
            <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md mr-4">
              FAQs
            </a>
            <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">
              Blogs
            </a>
          </div>
          <div className="md:hidden">
            {/* Add your mobile menu button/icon here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
