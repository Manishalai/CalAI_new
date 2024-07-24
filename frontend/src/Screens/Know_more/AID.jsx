import React from "react";
import Navbar2 from "../../components/navbar/Navbar2";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AID_content from "../../components/content/AID";
import SelfPacedVideo from "../../components/self_paced_vedio/SelfPacedVedio";
import { CAID_Hero } from "../../components/Hero/CAID_Hero";
import Speaker from "../../components/speakers/Speaker";

const AID = () => {
  return (
    <>
      <Header />
      <Navbar2 />
      <CAID_Hero />
      <div id="program-details">
        <AID_content />
      </div>
      <div
        id="ratings"
        class="flex flex-col gap-2 mx-6 md:w-full md:p-5 md:mx-0"
      >
        <h2 class="text-3xl text-[#074D8D] font-bold mb-4 ">
          Ratings and Reviews
        </h2>
        <Speaker />
      </div>
      <SelfPacedVideo />
      <Footer />
    </>
  );
};

export default AID;
