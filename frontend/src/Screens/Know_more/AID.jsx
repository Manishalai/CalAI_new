import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AID_content from "../../components/content/AID";
import { Hero2 } from "../../components/Hero/Hero2";
import SelfPacedVideo from "../../components/self_paced_vedio/SelfPacedVedio";

const AID = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero2 />
      <AID_content />
      <SelfPacedVideo />
      <Footer />
    </>
  );
};

export default AID;
