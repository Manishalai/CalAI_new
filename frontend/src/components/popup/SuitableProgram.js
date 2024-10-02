import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import badge from "../../images/streamline_star-badge-solid.svg";
import CloseIcon from "@mui/icons-material/Close";

const SuitableProgram = ({ onClose, field, eligible }) => {
  console.log(eligible);
  console.log(field);
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
    <div className="card flex flex-col w-[400px] relative shadow-xl rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl border border-black lg:w-full">
      <img
        className="absolute h-[55px] left-1 top-10"
        src={badge}
        alt="CalAI-Best-Online-Certification-in-USA"
      />
      <button className="absolute p-1 h-[28px] text-[18px] rounded-tr-lg right-0 bg-[#CBA135] font-bold">
        {price}
      </button>
      <div className="flex flex-col text-center items-center justify-center flex-grow">
        <h1 className="text-[#074D8D] text-[18px] w-[300px] font-semibold lg:text-[17px] lg:text-center lg:w-[200px]">
          {courseName}
        </h1>
        <p className="px-12 ml-6">{description}</p>
      </div>
      <div className="flex text-[14px] justify-evenly mt-4">
        <p>Self Paced Content</p>
        <p>{weeks}</p>
        <p>{technical}</p>
      </div>
      <div className="flex mt-4 justify-end">
        <button
          id="knowMore"
          className="w-[225px] bg-white font-bold rounded-bl-lg lg:w-[480px]"
          onClick={() => navigate(route)}
        >
          Know More
        </button>
        <button
          id="applyNow"
          className="w-[225px] bg-blue-800 text-white rounded-br-lg font-bold p-2 lg:w-[480px]"
          onClick={() => handleApplyNowClick("/register", courseName, price)}
        >
          Apply Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white md:w-full lg:w-1/2 h-auto max-h-[90vh] rounded-md shadow-md overflow-auto">
        <div className="p-4">
          <div className="mr-3 mb-6 w-full flex items-center justify-between">
            <h2 className="text-2xl w-full md:text-xl text-center">
              Recommended Programs
            </h2>
            <button
              onClick={onClose}
              className="text-black ml-auto p-1 rounded-full hover:bg-gray-200"
              aria-label="Close"
            >
              <CloseIcon size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6">
            {eligible === "yes" ? (
              <>
                {field === "tech" ? (
                  <>
                    {renderCard(
                      `Certified Artificial Intelligence Developer (CAID)`,
                      "Enhance AI expertise with cutting-edge modules validated by top subject matter experts for optimal proficiency.",
                      "5-16 Weeks",
                      true,
                      1000,
                      "/Artificial-intelligence-certifications/certified-ai-developer"
                    )}
                  </>
                ) : (
                  <>
                    {/* {renderCard(
                      "Certified Artificial Intelligence Developer (CAID TM)",
                      "Enhance AI expertise with cutting-edge modules validated by top subject matter experts for optimal proficiency.",
                      "5-16 Weeks",
                      true,
                      1000,
                      "/AI_Developer"
                    )} */}
                    {renderCard(
                      "Certified Artificial Intelligence Leader (CAIL)",
                      "An emerging leadership program offering a holistic, strategic implementation of AI across sectors.",
                      "8-24 Weeks",
                      false,
                      1200,
                      "/Artificial-intelligence-certifications/certified-ai-leader"
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {renderCard(
                  "Certified Artificial Intelligence Leader (CAIL)",
                  "An emerging leadership program offering a holistic, strategic implementation of AI across sectors.",
                  "8-24 Weeks",
                  false,
                  1200,
                  "/Artificial-intelligence-certifications/certified-ai-leader"
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuitableProgram;
