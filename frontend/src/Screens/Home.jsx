import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Courses from "../components/courses/Courses";
import Speaker from "../components/speakers/Speaker";
import Slider from "../components/slider/Slider";
export const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Courses />
      <Speaker />
      <Slider />
      <Footer />
    </>
  );
};
