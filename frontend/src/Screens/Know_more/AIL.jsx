import React from "react";
import Navbar2 from "../../components/navbar/Navbar2";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import AIL_content from "../../components/content/AIL";
import { Hero2 } from "../../components/Hero/Hero2";
import SelfPacedVideo from "../../components/self_paced_vedio/SelfPacedVedio";
import { CAIL_Hero } from "../../components/Hero/CAIL_Hero";
import Speaker from "../../components/speakers/Speaker";

const AIL = () => {
  return (
    <>
      <Header />
      <Navbar2 />
      <CAIL_Hero />
      <div id="program-details">
        <AIL_content />\
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

export default AIL;
