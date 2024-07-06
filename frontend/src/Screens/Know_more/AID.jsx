import React from "react";
import Navbar from "../../components/navbar/Navbar2";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AID_content from "../../components/content/AID";
import { Hero2 } from "../../components/Hero/Hero2";
import SelfPacedVideo from "../../components/self_paced_vedio/SelfPacedVedio";
import { CAID_Hero } from "../../components/Hero/CAID_Hero";

const AID = () => {
  return (
    <>
      <Header />
      <Navbar />
      <CAID_Hero />
      <AID_content />
      <SelfPacedVideo />
      <Footer />
    </>
  );
};

export default AID;
