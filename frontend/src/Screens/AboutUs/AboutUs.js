import React from "react";
import missionImage from "../../images/technology-785742.jpg";
import visionImage from "../../images/vision-2372177.jpg";
import commitmentImage from "../../images/workspace-1280538_1280.jpg";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-white min-h-screen text-black">
        <div className="mx-auto w-3/4 md:w-full px-4 py-20">
          <h1 className="text-5xl font-bold text-center mb-12 text-blue-900">
            About CalAI
          </h1>
          <p className="text-lg mb-8">
            Welcome to the California Artificial Intelligence Institute (CalAI),
            the forefront of innovation in AI technology. Our institute is
            dedicated to advancing the field of artificial intelligence through
            cutting-edge research, education, and industry collaboration. We
            strive to make AI accessible and beneficial to all, driving progress
            and fostering a smarter, more connected world.
          </p>
          <p className="text-lg mb-8">
            At CalAI, we believe in the transformative power of AI and its
            potential to solve some of the world’s most pressing challenges. Our
            team of experts and researchers are committed to exploring new
            frontiers in AI, developing solutions that improve lives, enhance
            business processes, and contribute to societal advancement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 md:w-full gap-8 mb-12">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <img
                src={missionImage}
                alt="Mission"
                className="w-full h-60 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                Mission
              </h2>
              <p className="text-lg mb-4">
                Our mission is to drive innovation through cutting-edge AI
                research and development. We aim to:
              </p>
              <ul className="list-disc list-inside mb-8 text-lg">
                <li>
                  Drive innovation through cutting-edge AI research and
                  development.
                </li>
                <li>
                  Provide high-quality AI education to empower the next
                  generation of leaders.
                </li>
                <li>
                  Collaborate with industry partners to create impactful AI
                  solutions.
                </li>
                <li>Promote the ethical use of AI to benefit society.</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img
                src={visionImage}
                alt="Vision"
                className="w-full h-60 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                Vision
              </h2>
              <p className="text-lg mb-4">
                Our vision is to be a global leader in AI research and
                innovation. We aspire to:
              </p>
              <ul className="list-disc list-inside mb-8 text-lg">
                <li>Be a global leader in AI research and innovation.</li>
                <li>
                  Foster a world where AI enhances the quality of life for all.
                </li>
                <li>Create a collaborative ecosystem for AI advancement.</li>
              </ul>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <img
                src={commitmentImage}
                alt="Commitment"
                className="w-full h-60 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                Commitment
              </h2>
              <p className="text-lg mb-4">
                We are committed to maintaining the highest standards of
                integrity in our research. Our commitments include:
              </p>
              <ul className="list-disc list-inside mb-8 text-lg">
                <li>
                  Maintain the highest standards of integrity and transparency
                  in our research.
                </li>
                <li>
                  Promote diversity and inclusion within the AI community.
                </li>
                <li>Engage in responsible AI development practices.</li>
                <li>
                  Continuously evolve to meet the needs of society and industry.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
