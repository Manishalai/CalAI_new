import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AID_content from "../../components/content/AID";
import { Hero } from "../../components/Hero/Hero";

const AID = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <AID_content />
      <Footer />.
    </>
  );
};

export default AID;
