import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import bgimage from "../../images/gear-192875_1920.jpg";
import { Link } from "react-router-dom";

const Blog_PF = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div id="blog-content" className="p-3 w-full">
        <div id="content" className="md:w-full p-4 pt-0 w-full bg-white">
          <div className="relative pt-0 mb-8">
            <img
              src={bgimage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative p-8 bg-opacity-60 bg-black">
              <h2 className="text-[28px] md:text-[20px] text-white z-10 relative font-bold inline-block px-4 py-2 rounded-lg">
                The Machine Learning Product Lifecycle
              </h2>
            </div>
          </div>
          <div className="flex flex-row md:flex-col">
            <div className="space-y-6 px-4 text-justify">
              <p>
                The lifecycle is iterative and includes stages such as scoping,
                data collection, modeling, and deployment. Each stage requires
                careful consideration and often revisiting to refine the
                project's goals and processes.
              </p>
              <p>
                Scoping involves defining project objectives and variables. Data
                collection is about gathering relevant data for model training
                and testing, which may involve extracting and labeling data.
              </p>
              <p>
                Modeling entails training and fine-tuning algorithms while
                evaluating their performance. Deployment is when the model is
                put into production, followed by monitoring and maintenance to
                ensure its effectiveness.
              </p>
              <p>
                Despite being the final stage, deployment is not the end of the
                process. It involves addressing data and software engineering
                challenges. Data issues include drift and concept changes over
                time, while software engineering issues concern system resources
                and functionalities.
              </p>
              <p>
                Various deployment strategies exist, including shadow mode,
                canary deployment, and blue/green deployment, each offering
                different levels of risk management and scalability.
              </p>
              <p>
                The level of automation varies depending on the project's goals
                and tasks, ranging from human-only systems to full automation.
                Each application may require a different degree of human
                involvement.
              </p>
              <p>
                Deployment is an ongoing process that involves monitoring both
                software and data metrics. Thresholds and metrics are set to
                identify when adjustments or model retraining are needed to
                maintain performance.
              </p>
              <p>
                Deployment is a critical stage in the Machine Learning project
                lifecycle, but it's not the final step. Understanding deployment
                challenges, automation levels, and iterative processes is
                essential for successful project implementation.
              </p>
            </div>
            <div
              id="blog-menu"
              className="w-1/3 md:w-full flex flex-col rounded shadow-xl text-center bg-slate-200 md:bg-transparent p-6 border-t md:border-none border-gray-200"
            >
              <h2 className="text-[22px] md:text-[25px] font-bold mb-6">
                Explore Our Courses
              </h2>
              <ul className="text-[16px] md:text-[18px] font-semibold space-y-4">
                <Link to="/AI_Developer">
                  <li className="my-4 hover:text-[#074D8D]">
                    Certified Artificial Intelligence Developer
                  </li>
                </Link>
                <Link to="/AI_Manager">
                  <li className="my-4 hover:text-[#074D8D]">
                    Certified Artificial Intelligence Manager
                  </li>
                </Link>
                <Link to="/AI_Leader">
                  <li className="my-4 hover:text-[#074D8D]">
                    Certified Artificial Intelligence Leader
                  </li>
                </Link>
              </ul>
              {/* <div className="mt-4 space-y-4">
                <Link to="/StartTest">
                  <h2 className="text-[22px] md:text-[25px] font-bold text-[#074D8D]">
                    Start Scholarship Test Now!
                  </h2>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog_PF;
