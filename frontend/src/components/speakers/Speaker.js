import React from "react";
import Joshep from "../../images/1689046864317.avif";
import Aiyana from "../../images/Rectangle 23.svg";
import Mike from "../../images/Rectangle 21.svg";

const Speaker = () => {
  return (
    <>
      <div id="testimonials" class="p-5">
        <h2 class="text-[36px] text-[#074D8D] font-semibold p-5 lg:text-2xl">
          Customer Speak
        </h2>
        <div class="flex justify-around md:flex-col md:gap-4">
          <div class="w-[420px]  p-2 flex flex-col justify-center items-center border-2 rounded-[10px] border-black transition-transform transform hover:-translate-y-1 hover:shadow-lg gap-5 md:w-full">
            <img
              class="h-[150px] rounded-full"
              src={Joshep}
              alt="Joseph-Wilson-CalAI-Best-AI-Certification-Institute-in-USA"
            />
            <div class="flex gap-5 text-[14px] font-bold text-[#074D8D]  md:text-center md:ml-6 ">
              <h2>Joseph Wilson</h2>
              <h2>AI Lead Program</h2>
            </div>
            <p class="text-center text-[14px]">
              The CalAI program has been a game-changer, providing a profound
              understanding of AI concepts in a well-structured course.
              Instructors' expertise and support were exceptional, enabling me
              to confidently apply these skills in my professional journey. I
              highly recommend this course for anyone seeking a comprehensive
              introduction to artificial intelligence
            </p>
          </div>
          <div class="w-[420px]  p-2 flex flex-col justify-center items-center border-2 rounded-[10px] border-black transition-transform transform hover:-translate-y-1 hover:shadow-lg gap-5  md:w-full">
            <img
              class="h-[150px] rounded-full"
              src={Aiyana}
              alt="Aiyana-ThomasCalAI-Best-AI-Certification-Institute-in-USA"
            />
            <div class="flex gap-5 text-[14px] font-bold text-[#074D8D] md:text-center  md:ml-8">
              <h2>Aiyana Thomas</h2>
              <h2>AI Leadership Program</h2>
            </div>
            <p class="text-center text-[14px]">
              In my 7 years of Data Analytics experience, I was tasked with an
              AI-based project in my current role. Despite a basic understanding
              of the domain, I aimed for excellence. I discovered CalAI, an
              advanced AI program, which empowered me with up-to-date content
              and skills. Unlike costlier alternatives, CalAI was
              budget-friendly. I highly recommend it for AI education and skills
              development.
            </p>
          </div>
          <div class="w-[420px]  p-2 flex flex-col justify-center items-center border-2 rounded-[10px] border-black transition-transform transform hover:-translate-y-1 hover:shadow-lg gap-5 md:w-full">
            <img
              class="h-[150px] rounded-full"
              src={Mike}
              alt="Mike-Williams-CalAI-Best-AI-Certification-Institute-in-USA"
            />
            <div class="flex gap-5 text-[14px] font-bold text-[#074D8D]  md:text-center md:ml-8">
              <h2>Mike Williams</h2>
              <h2>AI Developer Program</h2>
            </div>
            <p class="text-center text-[14px]">
              The CalAI program provided me with valuable insights into
              effectively managing intricate AI projects and modules. The AI
              literature covered in the program is exceptionally thorough and
              comprehensive, making the time invested in completing it truly
              worthwhile. I believe I have successfully attained my desired
              goals through CalAI.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speaker;
