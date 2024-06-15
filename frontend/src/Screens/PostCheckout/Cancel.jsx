import React from "react";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col items-center text-center">
        <p className="text-2xl font-semibold text-gray-700">
          Oops! Looks like you canceled the payment.
        </p>
        <div className="mt-4">
          <span className="text-6xl">:(</span>
        </div>
        <button
          onClick={handleGoHome}
          className="mt-8 px-6 py-3 bg-red-500 text-white text-lg rounded-md shadow-md hover:bg-red-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Go Back to Home Screen
        </button>
      </div>
    </div>
  );
};

export default Cancel;
