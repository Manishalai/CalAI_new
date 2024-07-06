import React, { useState } from "react";
import divImage from "../../images/building-4884852.jpg"; // Replace with your image path
import bgImage from "../../images/tied-up-1792237_1280.jpg";
import partImage from "../../images/building-4803602.jpg";
import Brochure from "../../components/forms/Brochure";
import { firestore } from "../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    programs: "1-5",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.designation) {
      toast.error("All fields are required!");
      return;
    }

    try {
      await addDoc(collection(firestore, "partnership request"), formData);
      toast.success("Your Request has been Sent!");
      setFormData({
        name: "",
        email: "",
        designation: "",
        programs: "1-5",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to submit the div. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-white text-black min-h-screen flex flex-col items-center">
        <header className="bg-white text-black w-full py-6">
          <h1 className="text-4xl font-bold text-center">Partner With CalAI</h1>
        </header>
        <main className="w-5/6 items-center justify-center mx-auto mt-4">
          {/* Hero Section */}
          <section
            className="flex flex-col justify-center items-center bg-cover bg-center rounded p-12"
            style={{ backgroundImage: `url(${bgImage})`, height: "300px" }} // Adjust the height value as needed
          >
            <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold mb-4 text-white text-center">
              Gain a competitive advantage in delivering the best AI minds in
              the world.
            </h2>
            <button className="bg-blue-600 px-6 py-2 rounded text-white font-semibold">
              <Brochure />
            </button>
          </section>
          {/* Writing section */}
          <section className="flex flex-col md:flex-row mt-10">
            <div className="p-4">
              <p className="text-base md:text-lg mb-4">
                Our partner can help an organization or individual in their
                focused professional and personal growth. The CalAI worldwide
                partner network is on a rapid growth path, providing
                unparalleled expertise and support across various domains.
              </p>
              <p className="text-base md:text-lg mb-4">
                With a team of experienced professionals, we ensure that our
                partners receive the best resources and guidance to excel in
                their respective fields. Our commitment to innovation and
                excellence drives us to continuously improve and expand our
                network.
              </p>
              <p className="text-base md:text-lg mb-4">
                Join us in our mission to deliver top-tier AI solutions and
                services, and be part of a community that values growth,
                collaboration, and success. Together, we can achieve
                extraordinary results and shape the future of technology.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Why Partner With CalAI
            </h2>
            <div className="grid w-5/6 md:w-3/4 lg:w-1/2 mx-auto text-white grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 text-black p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row md:flex-row items-start">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Scholarships and Discounts
                  </h3>
                  <p className="text-sm md:text-base">
                    Education partners can benefit from CalAI Partner Program
                    and get scholarships and discounts for their students and
                    faculty.
                  </p>
                </div>
              </div>

              <div className="bg-gray-200 text-black p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  Risk-Free Partner Program
                </h3>
                <p>
                  The CalAI Partner Program is absolutely Risk-Free the
                  Certification fee will be refunded if conditions aren’t met.
                </p>
              </div>
              <div className="bg-gray-100 text-black p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  Industry-relevant Certification Programs
                </h3>
                <p>
                  CalAI offers the most distinguished and industry-relevant
                  artificial intelligence certification programs to upskill and
                  reskill AI professionals.
                </p>
              </div>
              <div className="bg-gray-200 text-black p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  Customized Program Delivery
                </h3>
                <p>
                  As a training partner, you can choose your methodology to
                  deliver the AI programs to your learners. Our programs are
                  flexible and scalable to suit your learners.
                </p>
              </div>
              <div className="bg-gray-100 text-black p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  Dedicated Partner Support
                </h3>
                <p>
                  Access to an integrated, dedicated, and state-of-the-art
                  Partner Portal with tailor-made Partner Program Deliverables
                  available.
                </p>
              </div>
              <div className="bg-gray-200 text-black p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  Partner Incentives
                </h3>
                <p>
                  Opportunity to get enrolled for Partner Incentive Suite for
                  select partners on expected deliverables.
                </p>
              </div>
            </div>
          </section>

          {/* form section */}
          <section className="my-10">
            <div
              className="relative flex flex-row w-auto h-auto md:w-full bg-black/20 justify-center p-6 rounded-lg bg-center bg-cover shadow-md z-10"
              style={{ backgroundImage: `url(${partImage})` }}
            >
              <div className="w-1/3 md:hidden">
                <img
                  src={divImage}
                  alt="Partnership"
                  className="w-full h-full object-cover rounded-l-md"
                />
              </div>
              <div className="w-1/2 md:w-full bg-white p-8 rounded-r-md shadow-md ">
                <h2 className="text-2xl font-semibold mb-4">
                  Let's Continue and connect together
                </h2>
                <p className="mb-6 text-gray-700">
                  Partnering with us can provide significant benefits, including
                  heavy discounts on our programs.
                </p>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full mb-4">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="email"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your work email"
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="designation"
                    >
                      Designation
                    </label>
                    <input
                      type="text"
                      id="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter your designation"
                    />
                  </div>
                  <div className="w-full mb-6">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="programs"
                    >
                      Number of Certifications Required
                    </label>
                    <select
                      id="programs"
                      value={formData.programs}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    >
                      <option value="2-5">2-5</option>
                      <option value="6-10">6-10</option>
                      <option value="10+">10+</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-1/2 md:w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default PartnerWithUs;
