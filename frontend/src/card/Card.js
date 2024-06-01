// src/Card.js
import React from "react";

const Card = ({ title, price, description, content, duration, type }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 m-4 max-w-sm">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">{title}</div>
        <div className="bg-yellow-500 text-white px-2 py-1 rounded-full">
          {price}
        </div>
      </div>
      <div className="text-center my-4">
        <div className="text-yellow-500">
          <svg
            className="w-12 h-12 mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927C9.363 1.941 10.637 1.941 10.951 2.927L12.308 7.195L16.97 7.265C18.002 7.282 18.405 8.607 17.553 9.18L13.816 11.776L15.019 16.336C15.242 17.299 14.157 18.035 13.31 17.503L9.5 15.304L5.69 17.503C4.843 18.035 3.758 17.299 3.981 16.336L5.184 11.776L1.447 9.18C0.595 8.607 0.998 7.282 2.03 7.265L6.692 7.195L8.049 2.927Z" />
          </svg>
        </div>
        <div className="mt-2">{description}</div>
      </div>
      <div className="flex justify-between mt-4 border-t pt-4">
        <div>{content}</div>
        <div>{duration}</div>
        <div>{type}</div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
          Know More
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Card;
