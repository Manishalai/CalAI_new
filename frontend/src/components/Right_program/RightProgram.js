// src/AIProgramFinder.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuitableProgram from "../popup/SuitableProgram";
const AIProgramFinder = () => {
  const navigate = useNavigate();
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState({ qualification: "", experience: "" });
  const [showPopup, setShowPopup] = useState(false);

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
                type="submit"
                className="w-1/5 h-12 text-[20px] font-semibold bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:w-1/2"
              >
                Check Now
              </button>
            </form>
            <div className="w-1/2 md:w-full flex justify-start items-start p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-3/4 md:w-full">
                <iframe
                  title="Calai"
                  className="w-full h-64 md:h-96"
                  src="https://www.youtube.com/embed/CZ7sASs6oJE"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
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
