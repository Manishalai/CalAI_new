import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import AIL_content from "../../components/content/AIL";
import { Hero2 } from "../../components/Hero/Hero2";
import SelfPacedVideo from "../../components/self_paced_vedio/SelfPacedVedio";

const AIL = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero2 />
      <AIL_content />
      <SelfPacedVideo />
      <Footer />
    </>
  );
};

export default AIL;
