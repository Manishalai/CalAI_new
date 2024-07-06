import React from "react";
import { useState } from "react";
import Slider from "../slider/Slider";
import Courses from "../courses/Courses";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const StartTest = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("All fields are required!");
      return;
    }

    try {
      // Save data to Firestore
      await addDoc(collection(firestore, "testUsers"), {
        name,
        email,
        phone,
      });
      toast.success("Form submitted successfully!");

      // Redirect to test page after a short delay
      setTimeout(() => navigate("/calAIscholarshipTestPage"), 1000);
    } catch (error) {
      toast.error("Error submitting div!");
      console.error("Error adding document: ", error);
    }
  };
  return (
    <>
      <Header />
      <hr className="w-full bg-black h-[3px]" />

      <div id="main" class="w-full h-full">
        <div class="flex w-full">
          <div class="w-[75%] md:hidden">
            <h1 className="text-[36px] text-[#074D8D] font-semibold mt-3 px-4 pb-0 lg:text-2xl">
              Know More About CalAI Scholarship
            </h1>
            <div class="flex-col p-4 space-y-4">
              <div class="list-decimal list-inside">
                The test consists of 2 rounds
                <ul class="list-disc list-inside">
                  <li>Round 1 - Assessment</li>
                  <li>
                    Round 2 - Virtual interview with our academic counsellor
                  </li>
                </ul>
              </div>
            </div>
            <Courses />
            <Slider />
          </div>
          <div class="flex flex-col items-center h-screen px-6 py-8 bg-slate-300 z-10 w-full max-w-md mx-auto">
            <h1 class="text-4xl font-bold text-center text-gray-800 mb-2">
              Welcome to CalAI Test
            </h1>
            <p class="text-md text-center text-gray-600 mb-6">
              Please fill your basic details to get started
            </p>

            <div id="submission" class="hidden mb-4">
              <p class="text-center text-green-600 font-medium">
                Congratulations! Your div has been submitted.
              </p>
            </div>
            <div className="w-full mx-auto p-4">
              {/* Name Field */}
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

              {/* Email Field */}
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

              {/* Phone Number Field */}
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
            </div>
            <div className="w-1/2 md:w-full flex justify-center mt-4">
              <button
                className="bg-blue-600 text-white text-lg font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-1/2 max-w-sm"
                onClick={handleSubmit}
              >
                Start Test
              </button>
            </div>
            <div className="m-2 mt-4 text-gray-900 w-4/5 text-center">
              Note:CalAI respects your privacy, and your data is 100% secured
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

export default StartTest;
