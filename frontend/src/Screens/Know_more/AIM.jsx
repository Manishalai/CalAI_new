import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import AIM_content from "../../components/content/AIM";
import { Hero } from "../../components/Hero/Hero";

const AIM = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <AIM_content />
      <Footer />
    </>
  );
};

export default AIM;
