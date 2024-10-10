import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const PayPal480 = () => {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    const loadPayPalScript = () => {
      const existingScript = document.getElementById("paypal-sdk");

      if (!existingScript) {
        const script = document.createElement("script");
        script.src =
          "https://www.paypal.com/sdk/js?client-id=BAAsfrt98UrvRnt42wPD5CRUCT5AreQUMRWzxCem6c_2KFCzeIXkkjoOwH4Ih_EHXKRZjZMZx-XTx5zqEE&components=hosted-buttons&disable-funding=venmo&currency=USD";
        script.id = "paypal-sdk";
        script.async = true;
        script.onload = () => {
          setSdkLoaded(true); // Mark SDK as loaded when script is loaded
        };
        script.onerror = (error) => {
          console.error("PayPal SDK script loading error:", error);
        };
        document.body.appendChild(script);
      } else {
        setSdkLoaded(true); // Mark SDK as loaded if script already exists
      }
    };

    const initializePayPalButtons = () => {
      const termsCheckbox = document.getElementById("terms-checkbox");
      const paypalButtonContainer = document.getElementById(
        "paypal-container-HM8WK4SUU6VRE"
      );

      if (sdkLoaded && window.paypal) {
        window.paypal
          .HostedButtons({
            hostedButtonId: "HM8WK4SUU6VRE",
          })
          .render("#paypal-container-HM8WK4SUU6VRE");

        paypalButtonContainer.style.pointerEvents = "none";
        paypalButtonContainer.style.opacity = 0.5;

        termsCheckbox.addEventListener("change", () => {
          if (termsCheckbox.checked) {
            paypalButtonContainer.style.pointerEvents = "auto";
            paypalButtonContainer.style.opacity = 1;
            // Additional logic for enabling PayPal button
          } else {
            paypalButtonContainer.style.pointerEvents = "none";
            paypalButtonContainer.style.opacity = 0.5;
            // Additional logic for disabling PayPal button
          }
        });
      } else {
        console.error("PayPal SDK not loaded.");
      }
    };

    loadPayPalScript(); // Load PayPal SDK script

    // Initialize PayPal buttons once SDK is loaded
    initializePayPalButtons();
  }, [sdkLoaded]);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center gap-5 mt-4 md:p-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Complete Your Registration!
          </h2>
          <p>
            Complete your CalAI® registration to personalize your AI journey
            with tailored content.
          </p>
        </div>
        <div className="w-500px text-center p-4">
          <div id="paypal-container-HM8WK4SUU6VRE"></div>
          <div id="terms-container">
            <input
              className="mx-2"
              type="checkbox"
              id="terms-checkbox"
              required
            />
            <label htmlFor="terms-checkbox">
              I agree to the{" "}
              <Link to="/terms-conditions" style={{ color: "blue" }}>
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                className="ml-1"
                to="/Privacy_Policy"
                style={{ color: "blue" }}
              >
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayPal480;
