import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import badge from "../../images/streamline_star-badge-solid.svg";

const SuitableProgram = ({ onClose, field }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const handleApplyNowClick = (coursePath, courseName, price) => {
    if (currentUser) {
      navigate("/checkout", {
        state: { courseName, price },
      });
    } else {
      navigate("/login&signup");
    }
  };

  const renderCard = (
    courseName,
    description,
    weeks,
    technical,
    price,
    route
  ) => (
    <div className="px-2 flex flex-row lg:flex-col items-center bg-white border border-gray-300 rounded-lg shadow-xl transition-transform transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-[720px] lg:max-w-full">
      <div className="m-2 flex-shrink-0 h-[55px] w-[55px] lg:w-[70px] lg:h-[70px] flex items-center justify-center">
        <img src={badge} alt="CalAI-Badge" className="h-full w-full" />
      </div>
      <div className="flex-grow p-4 lg:p-2">
        <h1 className="text-[#074D8D] text-base lg:text-lg font-semibold">
          {courseName}
        </h1>
        <p className="text-xs lg:text-sm mt-2">{description}</p>
        <div className="flex text-xs lg:text-sm justify-between mt-3">
          <p>Self Paced</p>
          <p>{weeks}</p>
          <p>{technical ? "Technical" : "Non-Technical"}</p>
        </div>
      </div>
      <div className="flex w-1/6 flex-col items-center m-4 md:w-full">
        <button className="bg-[#CBA135] text-white font-bold text-xs lg:text-sm rounded-full px-4 py-1 lg:py-2">
          ${price}
        </button>
        <div className="mt-2 lg:mt-4 flex flex-col w-full">
          <button
            id="knowMore"
            className="w-full p-2 bg-white rounded-t-md text-blue-800 font-bold border border-gray-300 text-xs"
            onClick={() => navigate(route)}
          >
            Know More
          </button>
          <button
            id="applyNow"
            className="w-full p-2 bg-blue-800 rounded-b-md text-white font-bold text-xs"
            onClick={() => handleApplyNowClick("/register", courseName, price)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white md:w-full lg:w-1/2 h-auto max-h-[90vh] rounded-md shadow-md overflow-auto">
        <div className="p-4">
          <h2 className="text-2xl md:text-xl mb-4 text-center">
            Recommended Programs
          </h2>
          <div className="flex flex-col items-center gap-6">
            {field === "tech" ? (
              <>
                {renderCard(
                  "Certified Artificial Intelligence Developer (CAID TM)",
                  "Enhance AI expertise with cutting-edge modules validated by top subject matter experts for optimal proficiency.",
                  "5-16 Weeks",
                  true,
                  1000,
                  "/AI_Developer"
                )}
                {renderCard(
                  "Certified Artificial Intelligence Leader (CAIL TM)",
                  "An emerging leadership program offering a holistic, strategic implementation of AI across sectors.",
                  "8-24 Weeks",
                  false,
                  1200,
                  "/AI_Leader"
                )}
              </>
            ) : (
              <>
                {renderCard(
                  "Certified Artificial Intelligence Leader (CAIL TM)",
                  "An emerging leadership program offering a holistic, strategic implementation of AI across sectors.",
                  "8-24 Weeks",
                  false,
                  1200,
                  "/AI_Leader"
                )}
              </>
            )}
            <button
              onClick={onClose}
              className="mt-6 w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm lg:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuitableProgram;
