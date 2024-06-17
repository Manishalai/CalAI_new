import React, { useState } from "react";
import axios from "axios";

const Brochure = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");

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
      await axios.post("http://localhost:5000/send-brochure", { email });
      alert("Brochure Sent to your email");
    } catch (error) {
      alert("Error sending email: " + error.response.data.message);
    }

    setEmail("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={handleButtonClick}>Brochure</button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-1/3 p-8 rounded-lg shadow-lg relative md:w-4/5 lg:w-1/3">
            <button
              onClick={handleCloseForm}
              className="absolute w-full text-right px-3 top-2 right-2 text-gray-800 hover:text-gray-700"
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4">Get the Email Brochure</h2>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                className="block text-left text-[18px] font-medium text-gray-700 mb-2"
              >
                Enter your email address:
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-8 bg-slate-100 border-2 border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brochure;
