import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import Aiyana from "../../images/Rectangle 23.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const location = useLocation();
  const { courseName, price } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [invalidCoupon, setInvalidCoupon] = useState(false);

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
      console.log(response);
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
            amount: price * (1 - discount),
            program: courseName,
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

  return (
    <>
      <Header />
      <div className="checkout-container p-5 bg-gray-100 flex items-center justify-center">
        {/* parent container */}
        <div className="bg-white flex p-2 flex-row md:flex-col rounded-md shadow-lg items-stretch justify-between">
          {/* checkout card */}
          <div className="checkout-card flex flex-col items-center mx-auto max-w-md p-6 bg-white rounded-lg">
            <h1 className="text-[24px] text-[#074D8D] font-semibold mb-4 text-center">
              Checkout
            </h1>
            <hr className="col-span-2 w-full border-t mb-5 border-gray-600" />
            <div className="checkout-details mb-1 flex flex-col md:flex-row md:flex-wrap gap-3 text-left">
              <div className="mb-1 flex flex-col w-full">
                <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
                  Course Name:
                </p>
                <p className="text-[18px] mt-1 px-2 sm:text-[16px] lg:text-[18px] font-light break-words w-full">
                  {courseName}
                </p>
              </div>
              <div className="mb-1 flex flex-col w-full">
                <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
                  Email:
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 mt-1 px-2 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <div className="mb-1 flex flex-col w-full">
                <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
                  Name:
                </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  className="border-2 mt-1 px-2 border-gray-400 w-full p-2 rounded bg-gray-200"
                />
              </div>
              <div className="mb-1 flex flex-col w-full">
                <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
                  Phone:
                </p>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="mt-1 px-2 border-2 border-gray-400 w-full p-2 rounded bg-gray-200 break-words"
                />
              </div>
              <hr className="col-span-2 border-t border-gray-600" />
              <div className="w-full flex flex-row md:flex-row justify-between">
                <div className="w-1/2 flex justify-end mr-2">
                  <label
                    htmlFor="totalFees"
                    className="text-[18px] sm:text-[16px] font-medium"
                  >
                    Total Fees:
                  </label>
                </div>
                <div className=" w-1/2 text-[18px] text-[#CBA135] sm:text-[16px] lg:text-[18px] flex items-start">
                  {discount > 0 && (
                    <span className="text-[#CBA135] line-through mr-2">
                      ${price.toFixed(2)}
                    </span>
                  )}
                  <span
                    className={
                      discount > 0
                        ? "text-green-600 font-semibold"
                        : "font-semibold"
                    }
                  >
                    ${(price * (1 - discount)).toFixed(2)}
                  </span>
                </div>
              </div>
              <hr className="col-span-2 border-t border-gray-600" />
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
            <div className="w-1/2 pay-now flex justify-center mt-3">
              <button
                onClick={handlePayNow}
                className={`w-full text-white rounded-md hover:bg-blue-600 transition ${
                  loading
                    ? "cursor-not-allowed text-sky-600 bg-transparent"
                    : "bg-blue-900 hover:bg-blue-700"
                } p-2`}
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="testimonial-card flex flex-col items-center mx-auto max-w-sm p-6 bg-white rounded-lg md:ml-4">
            <p className="text-gray-700 w-6/7 font-bold mb-1text-center">
              Here is what our Client says:
            </p>
            <p className="text-gray-700 w-6/7 text-sm text-center mb-2">
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
      <Footer />
    </>
  );
};

export default Checkout;
