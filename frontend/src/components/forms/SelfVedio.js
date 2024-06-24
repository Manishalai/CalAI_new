import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SelfVedio = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the email to the backend API
      if (!email || !name || !country) {
        toast.error("Please fill all the details");
      }
      axios.post("https://cal-ai-new-server.vercel.app/send-vedio", {
        email,
        name,
        country,
      });
      toast.success(
        "Your self paced vedio has been sent to your registerd email"
      );
    } catch (error) {
      toast.error("Server Error. Please try again later");
    }

    setEmail("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={handleButtonClick}>Get Self-paced Vedio</button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative mx-2 md:w-4/5 lg:w-1/3">
            <button
              onClick={handleCloseForm}
              className="absolute w-8 h-8 top-3 right-3 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              &#10005;
            </button>
            <h2 className="text-xl md:text-[16px] text-black font-bold mb-6 text-center">
              Get your Self-paced Video
            </h2>
            <div className="space-y-4 w-full">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[16px] md:text-[14px] text-left font-medium text-gray-800 mb-1"
                >
                  Enter your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full h-10 px-3 text-black bg-slate-100 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-[16px] md:text-[14px] text-left font-medium text-gray-800 mb-1"
                >
                  Enter your Country:
                </label>
                <input
                  type="text"
                  id="country"
                  className="w-full h-10 px-3 text-black bg-slate-100 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter your country"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[16px] text-left md:text-[14px] font-medium text-gray-800 mb-1"
                >
                  Enter your Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-10 px-3 bg-slate-100 text-black border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full p-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelfVedio;
