import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";

const Checkout = () => {
  const location = useLocation();
  const { courseName, price } = location.state || {};
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const email = currentUser ? currentUser.email : "";
  const name = currentUser ? currentUser.displayName : "";

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [invalidCoupon, setInvalidCoupon] = useState(false);

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = async () => {
    try {
      const response = await fetch(
        "https://cal-ai-eta.vercel.app/validate-coupon",
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
      } else {
        setDiscount(0);
        setInvalidCoupon(true);
        setTimeout(() => {
          setInvalidCoupon(false);
        }, 1000);
      }
    } catch (error) {
      setInvalidCoupon(true);
      setCouponApplied(false);
      alert("Something Went Wrong Please try after sometime");
      console.log(error);
    }
  };

  const handlePayNow = () => {
    alert("Payment processing...");
    // Implement payment processing logic here
  };

  return (
    <>
      <Header />
      <div className="checkout-container p-5 bg-gray-100">
        <div className="checkout-card mx-auto max-w-md p-6 bg-white rounded-lg shadow-lg mt-4">
          <h1 className="text-[24px] text-[#074D8D] font-semibold mb-4 text-center">
            Checkout
          </h1>
          <hr className="col-span-2 border-t mb-5 border-gray-600" />
          <div className="checkout-details mb-1 grid grid-cols-2 gap-3 text-left">
            <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
              Course Name:
            </p>
            <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-light break-words w-full">
              {courseName}
            </p>
            <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
              Email:
            </p>
            <p className="text-[16px] sm:text-[15px] lg:text-[18px] font-light break-words w-full">
              {email}
            </p>
            <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
              Name:
            </p>
            <p className="text-[16px] sm:text-[15px] lg:text-[18px] font-light break-words w-full">
              {name}
            </p>
            <hr className="col-span-2 border-t border-gray-600" />
            <p className="text-[18px] sm:text-[16px] lg:text-[18px] font-medium">
              Total Fees:
            </p>
            <div className="text-[18px] text-[#CBA135] sm:text-[16px] lg:text-[18px] flex items-center">
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
            <hr className="col-span-2 border-t border-gray-600" />
          </div>

          <div className="coupon-section mt-4 flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={handleCouponChange}
              className="w-full p-2 mb-2 border rounded bg-gray-200"
            />
            <button
              onClick={applyCoupon}
              className={`w-1/2 p-2 ${
                couponApplied
                  ? "cursor-not-allowed text-green-600"
                  : invalidCoupon
                  ? "cursor-not-allowed text-red-600"
                  : "cursor-pointer text-blue-700"
              } rounded font-semibold`}
              disabled={couponApplied}
            >
              {couponApplied
                ? " Coupon Applied"
                : invalidCoupon
                ? "Invalid Coupon"
                : "Apply Coupon"}
            </button>
          </div>
          <div className="pay-now flex justify-center mt-6">
            <button
              onClick={handlePayNow}
              className="w-full p-2 bg-blue-900 hover:bg-blue-700 text-white rounded"
            >
              PAY NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
