import React from "react";
import Navbar from "../../components/navbar/Navbar2";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import AIL_content from "../../components/content/AIL";
import { Hero2 } from "../../components/Hero/Hero2";
import SelfPacedVideo from "../../components/self_paced_vedio/SelfPacedVedio";
import { CAIL_Hero } from "../../components/Hero/CAIL_Hero";

const AIL = () => {
  return (
    <>
      <Header />
      <Navbar />
      <CAIL_Hero />
      <AIL_content />
      <SelfPacedVideo />
      <Footer />
    </>
  );
};

export default AIL;
