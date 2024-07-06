import React, { useState } from "react";
import Slider from "../slider/Slider";
import Courses2 from "../courses/Courses2";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import Gallery from "../imageGallery/Gallery";

const IntrestForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [courseName, setCourseName] = useState(
    "Certified Artificial Intelligence Developer (CAID TM)"
  );
  const [isInterestForm, setIsInterestForm] = useState(true);

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!name || !email || !phone || (isInterestForm && !courseName)) {
      toast.error("All fields are required!");
      return;
    }

    // Determine the correct Firestore collection
    const collectionName = isInterestForm ? "courseInterest" : "testUsers";

    // Data to be submitted
    const data = {
      name,
      email,
      phone,
      courseName: isInterestForm ? courseName : null, // Only add courseName if it's the interest form
    };

    try {
      // Submit the data to the appropriate collection
      await addDoc(collection(firestore, collectionName), data);

      toast.success("Form submitted successfully!");

      // Navigate to the appropriate page after submission
      setTimeout(() => {
        if (!isInterestForm) {
          navigate("/calAIscholarshipTestPage"); // Navigate to the scholarship test page
        } else {
        }
      }, 1000);
    } catch (error) {
      toast.error("Error submitting form!");
      console.error("Error adding document: ", error);
    }
  };

  const handleApplyNow = (courseName) => {
    setCourseName(courseName);
    setIsInterestForm(true);
  };

  return (
    <>
      <Header />
      <hr className="w-full bg-black h-[3px]" />

      <div id="main" className="w-full h-full">
        <div className="flex w-full">
          <div className="w-[75%] md:hidden">
            <Courses2 onApplyNow={handleApplyNow} />
            <Gallery />
            <Slider />
          </div>

          {/* Form Section */}
          <div
            className="flex flex-col items-center h-auto px-6 py-8 bg-slate-300 z-10 w-full max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
              {isInterestForm ? "Interest Form" : "Welcome to CalAI Test"}
            </h1>
            <p className="text-lg text-center text-gray-600 mb-6">
              {isInterestForm
                ? "Please fill your basic details to show your interest in the course"
                : "Please fill your basic details to get started"}
            </p>

            <div className="w-full mx-auto p-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name <span className="text-red-600">*</span> :
                </label>
                <input
                  id="name"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email <span className="text-red-600">*</span> :
                </label>
                <input
                  id="email"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your E-mail"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-medium"
                >
                  Phone Number <span className="text-red-600">*</span> :
                </label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {isInterestForm && (
                <div className="mb-4">
                  <label
                    htmlFor="courseName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Course Name <span className="text-red-600">*</span> :
                  </label>
                  <input
                    id="courseName"
                    className="text-sm border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={courseName}
                    readOnly
                  />
                </div>
              )}
            </div>

            <div className="w-1/2 md:w-full flex justify-center mt-2">
              <button
                className="bg-blue-600 text-white text-lg font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-1/2 max-w-sm"
                type="submit"
                onClick={handleSubmit}
              >
                {isInterestForm ? "Submit Interest" : "Start Test"}
              </button>
            </div>
            <div className="m-2 p-2 mt-4 text-gray-900 w-4/5 text-center">
              Note: CalAI respects your privacy, and your data is 100% secured
              with us. We are not sharing your data with any third party vendor.
            </div>
          </div>
        </div>
        <a id="scholarship" href="scholarship.html"></a>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
};

export default IntrestForm;
