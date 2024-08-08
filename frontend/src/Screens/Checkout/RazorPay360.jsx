import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const Razorpay360 = () => {
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (rzpPaymentForm && !rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_ORUN1Qs2HzETM2"; // Replace with your actual payment button ID
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
      rzpPaymentForm.style.pointerEvents = "auto";
      rzpPaymentForm.style.opacity = 0.5;
    }
  }, [sdkLoaded, termsAccepted]);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center gap-5 mt-4 md:p-4">
        <div>
        <h2 className="text-[2rem] font-semibold text-center">
          Complete Your Registration!
        </h2>
        <p className=" text-center py-2">
          Complete your CalAI® registration to personalize your AI journey with
          tailored content.
        </p>
        </div>
        <p className="text-center flex flex-col">
          <span className="text-2xl font-bold pb-2">Combo Pack</span>
          <span>Certified Artificial Intelligence Developer (CAID<sup>TM</sup>)</span> 
          <span>&</span>
          <span>Certified Artificial Intelligence Leader (CAIL<sup>TM</sup>)</span>
        </p>
        <h3 class="text-[2rem] font-semibold">66,504 INR</h3>
        <p class="font-semibold">Total: 66,504 INR (Inclusive of 18% GST)</p>
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

export default Razorpay360;
