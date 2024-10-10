import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import badge from "../../images/badge.svg";
import books from "../../images/books.svg";
import brain from "../../images/brain.svg";
import terminal from "../../images/terminal-window-line.svg";
import vedios from "../../images/videos.svg";

const AIM_content = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  const handleApplyNowClick = (coursePath, courseName, price) => {
    if (currentUser) {
      navigate("/checkout", {
        state: { courseName, price }, // Pass course details
      });
    } else {
      navigate("/login-signup", {
        state: { from: `/checkout`, courseName, price },
      });
    }
  };
  return (
    <>
      <div id="pag2">
        <h1 class="text-[36px] text-[#074D8D] p-4 font-bold md:text-[20px]">
          Welcome to Certified Artificial Intelligence Manager: Your Gateway to
          Non-Technical AI Leadership!
        </h1>
        <div class="mx-4 mb-4" id="overview">
          <h1 class="p-4 text-3xl text-[#074D8D] font-semibold">Overview</h1>
          <p class="px-4">
            AI Lead is a comprehensive, non-technical AI professional
            certification designed for professionals across various domains,
            including sales, finance, HR, product management, and marketing.
            This self-paced program equips you with the skills to lead and
            collaborate with AI tech teams, harnessing the power of artificial
            intelligence without the need for coding expertise.
          </p>
        </div>
        <div class="bg-[#e7e7e7] mx-4 " id="eligibilty">
          <h1 class="p-4 text-3xl text-[#074D8D] font-semibold">Eligibilty</h1>
          <p class="px-4">
            Professionals from sales, finance, HR, product management, and
            marketing can seamlessly integrate into this course, making it
            accessible to a wide range of industry experts. No prior coding
            experience is required.
          </p>
          <h1 class="p-4 text-3xl font-semibold">
            Programming skills are not mandatory to apply for AI Lead
            certification.
          </h1>
        </div>
      </div>
      <div id="page3">
        <h1 class="text-[36px] text-[#074D8D] p-4 font-bold">
          Program Details
        </h1>
        <div class="flex-col p-4">
          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Introduction to AI in Business
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <li>Understanding AI's Role in Business Transformation</li>
              <li>Exploring AI Applications Across Industries</li>
              <li>AI in Decision-Making</li>
              <li>Industry Use Cases and Case Studies</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                NLP and Sentiment Analysis in Customer Feedback
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">12%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg md:grid-cols-1">
              <li>Fundamentals of Natural Language Processing (NLP)</li>
              <li>Extracting Insights from Customer Feedback</li>
              <li>Sentiment Analysis Tools and Techniques</li>
              <li>Implementing NLP in Business Communication</li>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Robotics in Business Operations{" "}
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <li>Introduction to Business Robotics</li>
              <li>Robotic Process Automation (RPA)</li>
              <li>Implementing Robotics for Efficiency</li>
              <li>Case Studies on Robotics in Fortune 500 Companies</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Cloud Fraud Prevention
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">8%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg md:grid-cols-1">
              <li>Understanding Cloud-based Fraud Detection</li>
              <li>Implementing AI in Fraud Prevention</li>
              <li>Cloud Security Measures</li>
              <li>Real-world Examples of Cloud Fraud Prevention</li>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Machine Learning for Decision Makers{" "}
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">15%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <li>Introduction to Machine Learning (ML)</li>
              <li>ML Algorithms in Business Context</li>
              <li>Making Informed Decisions with ML</li>
              <li>Industry Applications of Machine Learning</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Trend & Future of AI
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">8%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg md:grid-cols-1">
              <li>Emerging Trends in AI</li>
              <li>Future of AI in Business</li>
              <li>Ethical Considerations in AI</li>
              <li>Preparing for AI's Future Landscape</li>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Frameworks in Making AI Model
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">8%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <li>Overview of AI Frameworks</li>
              <li>Choosing the Right Framework for Business Applications</li>
              <li>Building Scalable AI Models</li>
              <li>Case Studies on Framework Implementation</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Stages of Training AI Models
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">8%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg md:grid-cols-1">
              <li>Introduction to Model Training</li>
              <li>Data Preparation and Cleaning</li>
              <li>Training and Validation Phases</li>
              <li>Model Deployment and Evaluation</li>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Industry-Specific AI Applications
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">7%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <li>AI in Sales and Customer Relationship Management</li>
              <li>AI in Finance and Risk Management</li>
              <li>HR and Talent Management with AI</li>
              <li>Marketing Strategies with AI</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Business Leadership in AI
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">5%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg md:grid-cols-1">
              <li>Strategies for Leading AI Initiatives</li>
              <li>Collaborating with AI Tech Teams</li>
              <li>Managing AI Projects without Coding</li>
              <li>AI Leadership Case Studies</li>
            </ul>
          </div>

          <button
            id="applyNow"
            className="relative overflow-hidden mt-4 ml-7 bg-[#074D8D] text-white p-2 text-lg font-bold group"
            onClick={() =>
              handleApplyNowClick(
                "/register",
                "Certified Artificial Intelligence Manager (CAIM)",
                499
              )
            }
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-[1500ms] ease-in-out transform translate-x-[-150%] group-hover:translate-x-[150%]"></span>
            <span className="relative z-10">APPLY NOW</span>
          </button>

          <div class="bg-[#e7e7e7] mx-4 relative mt-4 p-4">
            <h1 class="text-2xl font-bold">
              Program Fee: $499. Limited Offer: Apply now to avail a 10% Early
              bird discount with code{" "}
              <strong style={{ color: "blue" }}>EarlyBird10</strong> at
              checkout!
            </h1>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Resource Materials
              </h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 gap-4 p-4 list-inside list-none text-lg md:grid-cols-1">
              <li class="flex gap-5">
                <img class="h-[30px]" src={terminal} alt="" />
                State-of-the-art practice codes for hands-on learning
              </li>
              <li class="flex gap-5">
                <img class="h-[30px]" src={brain} alt="" />
                Real-world case studies from Fortune 500 companies
              </li>
              <li class="flex gap-5">
                <img class="h-[30px]" src={books} alt="" />
                Exclusive Downlodable Study Materials
              </li>
              <li class="flex gap-5">
                <img class="h-[30px]" src={vedios} alt="" />
                Self paced videos designed by world renowned AI Experts
              </li>
              <li class="flex gap-5">
                <img class="h-[30px]" src={badge} alt="" /> World Class
                Certification
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIM_content;
