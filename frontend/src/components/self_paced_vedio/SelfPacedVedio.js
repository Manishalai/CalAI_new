import React from "react";
import self from "../../images/self.jpg";
import SelfVedio from "../forms/SelfVedio";

const SelfPacedLearning = () => {
  return (
    <div className="my-8 p-4">
      {/* Heading Section */}
      <h2 className="text-3xl text-[#074D8D] font-bold mb-4 ">
        Program Introduction Video
      </h2>

      {/* Content Section */}
      <div className="flex flex-row md:flex-col">
        {/* Image Section */}
        <div className="w-1/2 md:w-full lg:flex lg:justify-start mb-8 lg:mb-0">
          <img
            src={self} // replace with your actual image URL
            alt="Self-Paced Learning"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full mx-6 p-6 md:mx-0 md:my-2 md:py-0">
          <div className="text-lg text-gray-700 mb-8">
            <p className="mb-4">
              Experience the convenience of learning at your own pace with our
              self-paced video courses. Perfect for those who prefer flexibility
              and the ability to learn anytime, anywhere. Gain knowledge in a
              structured way with high-quality video content that you can
              revisit as needed.
            </p>
            <p>
              Our self-paced videos cover a wide range of topics and are
              designed to provide you with the knowledge and skills to excel.
              Whether you're looking to learn a new skill, advance your career,
              or simply broaden your knowledge, our self-paced videos offer a
              comprehensive learning experience.
            </p>
          </div>

          {/* Button Section */}
          <button
            href="#your-link" // replace with your actual link or route
            className="inline-block bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-900 transition"
          >
            <SelfVedio />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfPacedLearning;
