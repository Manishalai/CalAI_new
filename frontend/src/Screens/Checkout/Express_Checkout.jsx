import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import Aiyana from "../../images/Rectangle 23.svg";
import Header from "../../components/header/Header";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ExpressCheckout = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [invalidCoupon, setInvalidCoupon] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email || "");
        setPhone(user.phoneNumber || "");
      } else {
        setEmail("");
        setName("");
        setPhone("");
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = async () => {
    try {
      const response = await fetch(
        "https://cal-ai-new-server.vercel.app/validate-coupon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ scholarshipCode: coupon }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setDiscount(data.discount / 100);
        setCouponApplied(true);
        setInvalidCoupon(false);
        toast.success("Coupon applied successfully!");
      } else {
        setDiscount(0);
        setInvalidCoupon(true);
        toast.error("Invalid coupon code.");
        setTimeout(() => {
          setInvalidCoupon(false);
        }, 1000);
      }
    } catch (error) {
      setInvalidCoupon(true);
      setCouponApplied(false);
      toast.error("Something went wrong. Please try again later.");
      console.error(error);
    }
  };

  const validateInputs = () => {
    if (!email) {
      toast.error("Email is required.");
      return false;
    }
    if (!name) {
      toast.error("Name is required.");
      return false;
    }
    if (!phone) {
      toast.error("Phone number is required.");
      return false;
    }
    if (!selectedCourse) {
      toast.error("Please select a course.");
      return false;
    }
    if (!termsAccepted) {
      toast.error("Please accept our terms and conditions");
      return false;
    }
    return true;
  };

  const handlePayNow = async () => {
    if (!validateInputs()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://cal-ai-new-server.vercel.app/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: coursePrice * (1 - discount),
            program: selectedCourse,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const approvalURL = data.approvalUrl;

        if (approvalURL) {
          window.location.href = approvalURL;
        } else {
          console.error("Approval URL not found in response.");
        }
      } else {
        console.error("Payment initiation failed.");
        toast.error("Payment initiation failed.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Error initiating payment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCourseChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);

    // Simulate fetching price based on course selection (replace with actual logic)
    switch (course) {
      case "AI_Developer":
        setCoursePrice(1000); // Example price
        break;
      case "AI_Leader":
        setCoursePrice(1200); // Example price
        break;
      case "AI_Manager":
        setCoursePrice(499); // Example price
        break;
      case "AI_Combo":
        setCoursePrice(2200); // Example price
        break;
      default:
        setCoursePrice(0);
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="checkout-container p-5 bg-gray-100 flex items-center justify-center">
        <div className="bg-white flex flex-row md:flex-col rounded-md shadow-lg items-stretch justify-between w-full max-w-5xl">
          {/* Checkout card */}
          <div className="checkout-card flex flex-col items-center mx-auto w-full md:max-w-md p-6 bg-white rounded-lg">
            <h1 className="text-2xl text-[#074D8D] font-semibold mb-4 text-center">
              Express Checkout
            </h1>
            <hr className="border-t mb-5 border-gray-600" />
            <div className="checkout-details mb-1 flex flex-col gap-3 text-left w-full">
              <div className="mb-3 flex flex-col w-full">
                <label
                  htmlFor="courseName"
                  className="text-lg font-medium mb-1"
                >
                  Course Name:
                </label>
                <select
                  id="courseName"
                  value={selectedCourse}
                  onChange={handleCourseChange}
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                >
                  <option value="">Select a course</option>
                  <option value="AI_Leader">
                    Certified Artificial Intelligence Leader (CAIL)
                  </option>
                  <option value="AI_Developer">
                    Certified Artificial Intelligence Developer (CAID)
                  </option>
                  <option value="AI_Combo">Combo program (CAID + CAIL)</option>
                </select>
              </div>
              <div className="mb-3 flex flex-col w-full">
                <label htmlFor="name" className="text-lg font-medium mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <div className="mb-3 flex flex-col w-full">
                <label htmlFor="email" className="text-lg font-medium mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <div className="mb-3 flex flex-col w-full">
                <label htmlFor="phone" className="text-lg font-medium mb-1">
                  Phone:
                </label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="px-2 py-1 border-2 mt-1 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <hr className="col-span-2 border-t border-gray-600" />
              <div className="w-full flex flex-row md:flex-row justify-between">
                <div className="w-1/2 flex justify-end mr-2">
                  <label htmlFor="totalFees" className="text-lg font-medium">
                    Total Fees:
                  </label>
                </div>
                <div className=" w-1/2 text-[18px] text-[#CBA135] sm:text-[16px] lg:text-[18px] flex items-start">
                  {discount > 0 && (
                    <span className="text-[#CBA135] line-through mr-2">
                      ${coursePrice.toFixed(2)}
                    </span>
                  )}
                  <span
                    className={
                      discount > 0
                        ? "text-green-600 font-semibold"
                        : "font-semibold"
                    }
                  >
                    ${(coursePrice * (1 - discount)).toFixed(2)}
                  </span>
                </div>
              </div>
              <hr className="w-full border-t border-gray-600" />
            </div>
            <div className="w-7/8 coupon-section my-5 flex flex-row items-center">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={handleCouponChange}
                className="w-full p-2 border rounded bg-gray-200"
              />
              <button
                onClick={applyCoupon}
                className={`p-2 ${
                  couponApplied
                    ? "cursor-not-allowed text-green-600 w-full"
                    : invalidCoupon
                    ? "cursor-not-allowed text-red-600 w-full"
                    : "cursor-pointer text-blue-700 w-1/2"
                } rounded font-semibold`}
                disabled={couponApplied}
              >
                {couponApplied
                  ? "Coupon Applied"
                  : invalidCoupon
                  ? "Invalid Coupon"
                  : "Apply"}
              </button>
            </div>
            <hr className="col-span-2 w-full border-t border-gray-600 mb-4" />
            <div className="flex items-center text-sm mb-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2"
              />
              <label htmlFor="terms">
                I accept the{" "}
                <Link
                  to="/Terms&Conditions"
                  className="text-blue-500 hover:underline"
                >
                  terms and conditions
                </Link>{" "}
                and the{" "}
                <Link
                  to="/Privacy_Policy"
                  className="text-blue-500 hover:underline"
                >
                  privacy policy
                </Link>
                .
              </label>
            </div>
            <div className="w-1/2 pay-now flex justify-center mt-3">
              <button
                onClick={handlePayNow}
                className="w-full px-4 py-2 bg-[#074D8D] text-white rounded"
              >
                Pay Now
              </button>
            </div>
          </div>
          {/* Testimonial Card */}
          <div className="testimonial-card flex flex-col items-center mx-auto w-full md:max-w-md p-6 bg-white rounded-lg mt-4">
            <p className="text-gray-700 w-full font-bold mb-1 text-center">
              Here is what our Client says:
            </p>
            <p className="text-gray-700 w-full text-sm text-center mb-2">
              "CalAI provided me with essential AI skills for my Data Analytics
              career. It's affordable and highly effective. I recommend it for
              professional growth."
            </p>

            <img
              src={Aiyana} // Replace with actual path to your image
              alt="Aiyana Thomas"
              className="w-24 h-24 rounded-full mb-1"
            />
            <h2 className="text-lg font-semibold text-[#074D8D]">
              Aiyana Thomas
            </h2>
            <p className="text-sm font-medium text-[#074D8D] mb-2">
              Certified AI Leader
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpressCheckout;
