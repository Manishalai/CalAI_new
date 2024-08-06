import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const Razorpay300 = () => {
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (rzpPaymentForm && !rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_ORUI1ttqJ3oWfK"; // Replace with your actual payment button ID
      script.onload = () => setSdkLoaded(true);
      script.onerror = (error) => {
        console.error("Razorpay script loading error:", error);
      };
      rzpPaymentForm.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (sdkLoaded && termsAccepted) {
      rzpPaymentForm.style.pointerEvents = "auto";
      rzpPaymentForm.style.opacity = 1;
    } else {
      rzpPaymentForm.style.pointerEvents = "none";
      rzpPaymentForm.style.opacity = 0.5;
    }
  }, [sdkLoaded, termsAccepted]);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center gap-5 mt-4 md:p-4 border-2 rounded-md">
        <h2 className="text-[2rem] font-semibold">
          Complete Your Registration!
        </h2>
        <p>
          Complete your CalAI® registration to personalize your AI journey with
          tailored content.
        </p>
        <p>
          Certified Artificial Intelligence Developer (CAID<sup>TM</sup>)
        </p>
        <h3 className="text-[2rem] font-semibold">29,528 INR</h3>
        <p className="font-semibold mt-0">
          Total: 29,528 INR (Inclusive of 18% GST)
        </p>
        <form
          id="rzp_payment_form"
          className="w-full max-w-lg text-center"
        ></form>
        <div className="w-full max-w-lg text-center p-4">
          <div id="terms-container">
            <input
              className="mx-2"
              type="checkbox"
              id="terms-checkbox"
              required
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms-checkbox">
              I agree to the{" "}
              <a href="/Terms&Conditions" className="text-blue-500">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/Privacy_Policy" className="text-blue-500">
                Privacy Policy
              </a>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Razorpay300;
