import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Courses from "../components/courses/Courses";
import Speaker from "../components/speakers/Speaker";
import Slider from "../components/slider/Slider";
import { Aboutus } from "../components/Aboutus/Aboutus";
import { Hero } from "../components/Hero/Hero";
const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Aboutus />
      <Courses />
      <Speaker />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
