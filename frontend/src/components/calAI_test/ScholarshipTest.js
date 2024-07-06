import React, { useEffect, useRef } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const TestPage = () => {
  const formContainerRef = useRef(null);

  useEffect(() => {
    const loadScript = () => {
      // Create a new script element
      const script = document.createElement("script");
      script.src = "https://form.jotform.com/jsform/241665060573052";
      script.async = true;

      // Append the script to the form container
      if (
        formContainerRef.current &&
        !formContainerRef.current.querySelector("script")
      ) {
        formContainerRef.current.appendChild(script);
      }

      // Clean up the script on component unmount
      return () => {
        if (formContainerRef.current) {
          formContainerRef.current.removeChild(script);
        }
      };
    };

    // Execute the script loading function
    loadScript();
  }, []);

  return (
    <>
      <Header />
      <div ref={formContainerRef}>
        {/* The form will be injected here by the script */}
      </div>
      <Footer />
    </>
  );
};

export default TestPage;
