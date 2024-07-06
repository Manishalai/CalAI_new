import React from "react";
import certificate from "../../images/certificate.svg";
import Email from "../../images/Email support.png";
import mask from "../../images/Mask group 2 1.svg";
import icon from "../../images/icon1 1 1.svg";
import caseStudy from "../../images/case-study.svg";

export const Aboutus = () => {
  return (
    <>
      <div>
        <h1 class="text-[28px] font-bold text-[#074D8D] p-5 mx-8">
          About CalAI
        </h1>
        <div class="flex mx-8 gap-5">
          <img class="h-[64px]" src={icon} alt="CalAI-Online-Courses" />
          <div id="details">
            <h2 class="text-[22px] text-[#CBA135] font-semibold">
              Flexible Learning with Self-Paced Online Courses
            </h2>
            <p class="text-[18px]">
              Embrace a personalized learning journey with our self-paced online
              courses, allowing you to study at your own convenience and set
              your own pace for mastering new skills
            </p>
          </div>
        </div>
        <div class="flex mx-2 gap-5">
          <img
            class="h-[55px] ml-6 mt-2"
            src={certificate}
            alt="CalAI-certificate"
          />
          <div id="details">
            <h2 class="text-[22px] text-[#CBA135] font-semibold">
              Earn Recognized Credentials with Certificate Courses
            </h2>
            <p class="text-[18px]">
              Boost your career prospects and showcase your expertise with our
              certificate courses. Gain valuable credentials that are recognized
              in the industry, validating your skills and knowledge
            </p>
          </div>
        </div>

        <div class="flex mx-7 gap-6">
          <img class="h-[60px]" src={Email} alt="CalAI-Email-Support" />
          <div id="details">
            <h2 class="text-[22px] text-[#CBA135] font-semibold">
              Unmatched 24/7 Mentor Support
            </h2>
            <p class="text-[18px]">
              Experience continuous guidance and support with our dedicated team
              of mentors available round the clock. Get real-time assistance,
              feedback, and insights to enhance your understanding and succeed
              in your learning journey
            </p>
          </div>
        </div>

        <div class="flex mx-5 gap-4 ">
          <img class="h-[75px]" src={mask} alt="CalAI-online-Learning" />
          <div id="details">
            <h2 class="text-[22px] text-[#CBA135] font-semibold">
              Tailored Learning
            </h2>
            <p class="text-[18px]">
              Dive into a personalized learning experience with our curated
              e-books, customized to suit your individual learning style. Access
              resources that align with your goals, making your educational
              journey more effective and engaging Experience continuous guidance
              and support with our dedicated team of mentors available round the
              clock. Get real-time assistance, feedback, and insights to enhance
              your understanding and succeed in your learning journey
            </p>
          </div>
        </div>

        <div class="flex mx-7 gap-6">
          <img class="h-[60px]" src={caseStudy} alt="CalAI-Case-Studies" />
          <div id="details">
            <h2 class="text-[22px] text-[#CBA135] font-semibold">
              Practical Application with Real-World Case Studies and Practice
              Code
            </h2>
            <p class="text-[18px]">
              Bridge the gap between theory and practice by immersing yourself
              in real-world case studies and practical coding exercises. Gain
              hands-on experience, ensuring you're well-equipped to apply your
              knowledge in real-life scenarios
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
