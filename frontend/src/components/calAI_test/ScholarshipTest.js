import React, { useEffect, useRef } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const TestPage = () => {
  const formContainerRef = useRef(null);

  useEffect(() => {
    if (formContainerRef.current) {
      // Create a new script element
      const script = document.createElement("script");
      script.src = "https://form.jotform.com/jsform/240043707195049";
      script.async = true;

      // Append the script to the form container
      formContainerRef.current.appendChild(script);

      // Clean up the script on component unmount
      return () => {
        if (formContainerRef.current) {
          formContainerRef.current.removeChild(script);
        }
      };
    }
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
