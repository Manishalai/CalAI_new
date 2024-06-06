import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import AIL_content from "../../components/content/AIL";
import { Hero } from "../../components/Hero/Hero";

const AIL = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <AIL_content />
      <Footer />
    </>
  );
};

export default AIL;
