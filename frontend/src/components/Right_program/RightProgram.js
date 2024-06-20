// src/AIProgramFinder.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AIProgramFinder = () => {
  const navigate = useNavigate();
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState({ qualification: "", experience: "" });

  const handleQualificationChange = (event) => {
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
      newErrors.qualification = "Please select your qualification.";
      valid = false;
    }

    if (!experience) {
      newErrors.experience = "Please select your years of experience.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      if (experience === "tech") {
        navigate("/AI_Developer");
      } else navigate("/AI_Leader");
    }
  };

  return (
    <>
      <h1 className="text-[36px] text-[#074D8D] font-semibold p-5 lg:text-2xl">
        Find Suitable Program for you
      </h1>
      <div className="w-4/5 mx-auto p-6 bg-white rounded-lg">
        <p className="text-gray-700 mb-6 text-[18px]">
          The California Institute of Artificial Intelligence (Cal-AI) is
          committed to meeting the global demands of the AI skill gap and the
          workforce shortage and takes the responsibility of developing the
          right talent, potential, and abilities to be efficient and
          well-qualified in Artificial Intelligence. The first step is to
          identify the right AI program for you.
        </p>
        <form onSubmit={handleSubmit} className="py-2">
          <div className="w-1/2 mb-4 md:w-full">
            <label
              htmlFor="qualification"
              className="block text-left text-[18px] font-medium text-gray-700 mb-2"
            >
              <strong>
                Select Your Qualification{" "}
                <span className="text-red-600">*</span>
              </strong>
            </label>
            <select
              id="qualification"
              className="w-full h-8 border-6 border-black bg-slate-100 px-2 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={qualification}
              onChange={handleQualificationChange}
            >
              <option value="">--Select--</option>
              <option value="high-school">High School</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
            {errors.qualification && (
              <p className="text-red-500 text-sm mt-2">
                {errors.qualification}
              </p>
            )}
          </div>
          <div className="w-1/2 mb-4 md:w-full">
            <label
              htmlFor="experience"
              className="block text-left text-[18px] sfont-medium text-gray-700 mb-2"
            >
              <strong>
                Select Your Working Feild
                <span className="text-red-600"> *</span>
              </strong>
            </label>
            <select
              id="experience"
              className="w-full h-8 bg-slate-100 px-2 border-gray-600 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={experience}
              onChange={handleExperienceChange}
            >
              <option value="">--Select--</option>
              <option value="tech">Technical</option>
              <option value="mgmnt">Management</option>
            </select>
            {errors.experience && (
              <p className="text-red-500 text-sm mt-2">{errors.experience}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-1/5 bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:w-full"
          >
            Find Out Now
          </button>
        </form>
      </div>
    </>
  );
};

export default AIProgramFinder;
