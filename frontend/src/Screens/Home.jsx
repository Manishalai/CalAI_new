import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Courses from "../components/courses/Courses";
import Speaker from "../components/speakers/Speaker";
import Slider from "../components/slider/Slider";
import { Aboutus } from "../components/Aboutus/Aboutus";
import { Hero } from "../components/Hero/Hero";
import AIProgramFinder from "../components/Right_program/RightProgram";
import Gallery from "../components/imageGallery/Gallery";

const Home = () => {
  return (
    <>
      <div id="home-section">
        <Header />
      </div>
      <Navbar />
      <Hero />
      <Gallery />
      <div id="courses-section">
        <Courses />
      </div>
      <div id="aboutus-section">
        <Aboutus />
      </div>
      <AIProgramFinder />
      <div id="speakers-section">
        <Speaker />
      </div>
      <Slider />

      <div id="footer-section">
        <Footer />
      </div>
    </>
  );
};

export default Home;
