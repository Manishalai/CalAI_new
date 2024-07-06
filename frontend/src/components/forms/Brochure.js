import React, { useState } from "react";
import { toast } from "react-toastify";
import { firestore } from "../../firebase/firebase"; // Ensure this path matches where your firebase.js is located
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { handleSuccess } from "../../notifications/notify";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SelfVedio = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handlePhoneChange = (value, phone) => {
    setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !phone) {
      toast.error("All fields required");
      return;
    }

    const apiKey = process.env.REACT_APP_BREVO_API_KEY;
    const listId = 98;

    try {
      // Check if the email is already in the list
      const checkResponse = await axios.get(
        `https://api.brevo.com/v3/contacts/${email}`,
        {
          headers: {
            "api-key": apiKey,
          },
        }
      );
      console.log(checkResponse);
      if (checkResponse.data) {
        // Delete the existing contact
        await axios.delete(`https://api.brevo.com/v3/contacts/${email}`, {
          headers: {
            "api-key": apiKey,
          },
        });
      }

      const response = await axios.post(
        "https://api.brevo.com/v3/contacts",
        {
          email: email,
          attributes: {
            FIRSTNAME: name,
            PHONE: phone,
          },
          listIds: [listId],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        }
      );

      handleSuccess(response);
      await addDoc(collection(firestore, "brochure_download"), {
        email: email,
        name: name,
        phone: phone,
        timestamp: new Date(),
        brevo_id: response.data.id,
      });
      setEmail("");
      setName("");
      setPhone("");
    } catch (error) {
      console.log("Error", error);
      if (error.response.status === 404) {
        const response = await axios.post(
          "https://api.brevo.com/v3/contacts",
          {
            email: email,
            attributes: {
              FIRSTNAME: name,
              PHONE: phone,
            },
            listIds: [listId],
          },
          {
            headers: {
              "Content-Type": "application/json",
              "api-key": apiKey,
            },
          }
        );

        handleSuccess(response);
        await addDoc(collection(firestore, "brochure_download"), {
          email: email,
          name: name,
          phone: phone,
          timestamp: new Date(),
          brevo_id: response.data.id,
        });
        setEmail("");
        setName("");
        setPhone("");
      } else toast.error("An unexpected error occured.");
    }
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={handleButtonClick}>Download Brochure</button>
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
            <h2 className="text-xl text-black font-bold mb-6 text-center">
              Get your Brochure
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
                  htmlFor="phoneNumber"
                  className="block text-[16px] md:text-[14px] text-left font-medium text-gray-800 mb-1"
                >
                  Phone Number <span className="text-red-600">*</span> :
                </label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full h-10 px-3 text-black bg-slate-100 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>{" "}
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
