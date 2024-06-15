import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const captureOrder = async () => {
      try {
        // Get the orderId and certification from the URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const orderId = urlParams.get("token");
        const certification = urlParams.get("certification"); // Fixed typo from "cretification"

        if (!orderId) {
          console.error("Order ID not found in URL.");
          return;
        }

        // Capture the order by sending a POST request to your backend endpoint
        const captureResponse = await fetch(
          "http://localhost:5000/capture-order",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderId: orderId,
              program: certification,
            }),
          }
        );

        if (captureResponse.ok) {
          const responseData = await captureResponse.json();
          console.log(responseData);
          setTransactionId(responseData.transactionId);
          setPaymentConfirmed(true);
        } else {
          console.error("Failed to capture order");
        }
      } catch (error) {
        console.error("Error capturing order:", error.message);
      }
    };

    captureOrder();
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {!paymentConfirmed ? (
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl font-semibold text-gray-700">
            Confirming your payment status...
          </p>
          <div className="mt-6">
            <svg
              className="animate-spin h-12 w-12 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl font-semibold text-gray-700">
            Thank you for your purchase!
          </p>
          {transactionId && (
            <p className="text-lg text-gray-600 mt-4">
              Invoice Number: {transactionId}
            </p>
          )}
          <button
            onClick={handleGoHome}
            className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg rounded-md shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Go Back to Home Screen
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
