// src/AIProgramFinder.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuitableProgram from "../popup/SuitableProgram";
import { getVideoUrl } from "../../firebase/getVideoUrl";
const AIProgramFinder = () => {
  const navigate = useNavigate();
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState({ qualification: "", experience: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [videoUrl,setVideoUrl] = useState('');
  const videoName = 'videoplaybackintro.mp4';

  useEffect(() => {
    const fetchVideoUrl = async () => {
      const url = await getVideoUrl(videoName);
      if(url){
        console.log("url intor:",url);
        setVideoUrl(url);
      }
    };
    fetchVideoUrl();
  },[videoName])

  const handleQualificationChange = (event) => {
    console.log(event.target.value);
    setQualification(event.target.value);
    if (event.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, qualification: "" }));
    }
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
    if (event.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, experience: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newErrors = { qualification: "", experience: "" };

    if (!qualification) {
      newErrors.qualification = "Please select any one option.";
      valid = false;
    }

    if (!experience) {
      newErrors.experience = "Please select your working field.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <h1 className="text-[36px] text-[#074D8D] font-semibold p-5 pb-3 lg:text-2xl">
        Find Suitable Program for you
      </h1>
      <div className="flex flex-row md:flex-col">
        <div className="w-full mx-auto p-6 pt-0 bg-white rounded-lg">
          <p className="text-gray-700 mb-6 text-[18px] px-3">
            The California Artificial Intelligence Institute (CalAI) is
            committed to meeting the global demands of the AI skill gap and the
            workforce shortage and takes the responsibility of developing the
            right talent, potential, and abilities to be efficient and
            well-qualified in Artificial Intelligence. The first step is to
            identify the right AI program for you.
          </p>
          <div className="flex flex-row md:flex-col">
            <form onSubmit={handleSubmit} className="w-3/4 md:w-full">
              <div className="w-3/4 mb-4 md:w-full">
                <label
                  htmlFor="qualification"
                  className="block text-left text-[18px] font-medium text-gray-700 mb-2"
                >
                  <strong>
                    Do you have basic Python knowledge?{" "}
                    <span className="text-red-600">*</span>
                  </strong>
                </label>
                <select
                  id="qualification"
                  className="w-full h-10 border-6 border-black bg-slate-100 px-2 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={qualification}
                  onChange={handleQualificationChange}
                >
                  <option value="">--Select--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.qualification && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.qualification}
                  </p>
                )}
              </div>
              <div className="w-3/4 mb-4 md:w-full">
                <label
                  htmlFor="experience"
                  className="block text-left text-[18px] font-medium text-gray-700 mb-2"
                >
                  <strong>
                    Objective for pursuing an AI cerification ?{" "}
                    <span className="text-red-600"> *</span>
                  </strong>
                </label>
                <select
                  id="experience"
                  className="w-full h-10 bg-slate-100 px-2 border-gray-600 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={experience}
                  onChange={handleExperienceChange}
                >
                  <option value="">--Select--</option>
                  <option value="mgmnt">
                    Transitioning into Leadership roles
                  </option>
                  <option value="tech">
                    Getting Technical Expertise in AI
                  </option>
                </select>
                {errors.experience && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.experience}
                  </p>
                )}
              </div>
              <button
                id="find-right-program"
                type="submit"
                className="w-1/5 h-12 text-[20px] font-semibold bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:w-1/2"
              >
                Check Now
              </button>
            </form>
            <div className="w-full max-w-md mx-auto p-1 sm:p-1 sm:mt-4 rounded-lg shadow-lg bg-gray-100">
          {videoUrl ? (
            <div className="relative pb-[56.25%] h-0">
              <video
              controls
                className="absolute top-0 left-0 w-full h-full rounded-md"
                controlsList="nodownload"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="w-full h-[250px] sm:h-[190px] flex items-center justify-center">
              <svg
                className="animate-spin h-12 w-12 sm:h-10 sm:w-10 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
        </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <SuitableProgram
          onClose={handleClosePopup}
          field={experience}
          eligible={qualification}
        />
      )}
    </>
  );
};

export default AIProgramFinder;
