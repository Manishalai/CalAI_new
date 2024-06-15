import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const [error, setError] = useState(false); // State for error handling
  const navigate = useNavigate();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return; // If already run, return early
    hasRun.current = true;
    const captureOrder = async () => {
      try {
        // Get the orderId and certification from the URL query parameters
        console.log("error");
        const urlParams = new URLSearchParams(window.location.search);
        const orderId = urlParams.get("token");
        const certification = urlParams.get("certification");

        if (!orderId) {
          console.error("Order ID not found in URL.");
          setError(true); // Set error state if order ID is missing
          return;
        }

        // Capture the order by sending a POST request to your backend endpoint
        const captureResponse = await fetch(
          "https://cal-ai-new-server.vercel.app/capture-order",
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
          setError(true); // Set error state if capture fails
        }
      } catch (error) {
        console.error("Error capturing order:", error.message);
        setError(true); // Set error state on exception
      }
    };

    captureOrder();
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {error ? (
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl font-semibold text-red-600">
            Oops! Something went wrong.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            If money has been deducted, it will be returned within 2-3 business
            days.
          </p>
          <button
            onClick={handleGoHome}
            className="mt-8 px-6 py-3 bg-red-500 text-white text-lg rounded-md shadow-md hover:bg-red-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Go Back to Home Screen
          </button>
        </div>
      ) : !paymentConfirmed ? (
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
