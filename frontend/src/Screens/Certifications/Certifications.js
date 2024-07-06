import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const certifications = [
  {
    title: "Certified Artificial Intelligence Leader (CAIL™)",
    intro:
      "This comprehensive program is designed for current and aspiring AI leaders who aim to spearhead AI implementation across various sectors. Participants will develop strategic insight into the deployment of AI technologies to drive business transformation, innovation, and sustainable competitive advantage. The curriculum emphasizes ethical considerations, cross-functional collaboration, and change management strategies to ensure effective AI integration within organizations.",
    description: [
      "Lead AI initiatives to drive business transformation and innovation.",
      "Gain insights into the ethical, legal, and social implications of AI deployment.",
      "Collaborate with cross-functional teams to integrate AI solutions effectively.",
      "Develop strategies to manage AI-driven change within organizations.",
      "Understand AI governance and compliance standards.",
      "Create AI policies that align with organizational goals and regulatory requirements.",
      "Foster a culture of AI literacy and preparedness in the workforce.",
    ],
    duration: "8-24 Weeks",
    type: "Non-Technical",
    price: "$1200",
    path: "/AI_Leader",
    priceValue: 1200,
  },
  {
    title: "Certified Artificial Intelligence Developer (CAID™)",
    intro:
      "An intensive program tailored for developers and technical professionals seeking to master the latest AI technologies and frameworks. Participants will gain hands-on experience with AI programming languages, develop advanced algorithms, and implement AI models in real-world scenarios. The course focuses on building scalable, secure, and maintainable AI solutions, making it ideal for those aiming to advance their technical skills in the AI domain.",
    description: [
      "Enhance AI expertise with cutting-edge modules validated by top subject matter experts for optimal proficiency.",
      "Master AI programming languages and frameworks.",
      "Implement AI models and algorithms for real-world applications.",
      "Ensure AI solutions are scalable, secure, and maintainable.",
      "Learn best practices for AI model training, testing, and deployment.",
      "Work with popular AI tools and libraries like TensorFlow, PyTorch, and Keras.",
      "Develop solutions for natural language processing, computer vision, and predictive analytics.",
      "Optimize AI systems for performance and efficiency.",
    ],
    duration: "5-16 Weeks",
    type: "Technical",
    price: "$1000",
    path: "/AI_Developer",
    priceValue: 1000,
  },
  {
    title: "Certified Artificial Intelligence Manager (CAIM™)",
    intro:
      "Ideal for professionals from diverse roles who aim to bridge the gap between technical teams and business strategies in AI. This program equips participants with the knowledge to lead AI projects, facilitate strategic planning, and enhance collaboration between technical and business stakeholders. The curriculum focuses on project management, AI literacy, and the strategic deployment of AI within organizations to drive innovation and efficiency.",
    description: [
      "Enable professionals from diverse roles to lead and collaborate effectively in AI, even without coding skills.",
      "Facilitate AI project management and strategic planning.",
      "Coordinate between technical teams and business stakeholders.",
      "Promote AI literacy and skills development across the organization.",
      "Manage AI project lifecycle from inception to deployment.",
      "Understand the business impact of AI and drive AI adoption.",
      "Develop frameworks for evaluating and selecting AI solutions.",
      "Implement best practices for managing AI teams and resources.",
    ],
    duration: "8-24 Weeks",
    type: "Non-Technical",
    price: "$499",
    path: "/AI_Manager",
    priceValue: 499,
  },
];

const CertificationPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const handleApplyNowClick = (courseName, price) => {
    if (currentUser) {
      navigate("/checkout", {
        state: { courseName, price }, // Pass course details
      });
    } else {
      navigate("/login&signup", {
        state: { from: "/checkout", courseName, price },
      });
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-cover bg-gray-100 bg-center min-h-screen bg-fixed">
        <div className="bg-white/10 py-10">
          <h1 className="text-4xl px-2 md:text-2xl text-[#074D8D] font-bold text-center mb-10">
            Our Comprehensive Program
          </h1>
          <div className="max-w-6xl mx-auto px-4 grid gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-center items-center mb-4">
                    <h2 className="text-2xl md:text-xl text-center font-semibold text-[#074D8D]">
                      {cert.title}
                    </h2>
                    <span className="bg-yellow-300 text-black px-3 py-1 rounded-full ml-4">
                      {cert.price}
                    </span>
                  </div>
                  <p className="text-gray-700 p-4 mb-4">{cert.intro}</p>
                  <h3 className="text-xl text-[#074D8D] font-semibold mb-4">
                    Program Benefits
                  </h3>
                  <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
                    {cert.description.map((point, idx) => (
                      <li
                        key={idx}
                        className={`p-4 rounded-md border-l-4 ${
                          idx % 2 === 0
                            ? "bg-[#102445] border-yellow-400 text-white"
                            : "bg-[#0c3b92] border-yellow-400 text-white"
                        }`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center px-2 mt-4 text-sm text-gray-600">
                  <span>{cert.duration}</span>
                  {/* <span>{cert.price}</span> */}
                  <span>{cert.type}</span>
                </div>
                <div className="flex mt-6 space-x-4">
                  <button
                    className="bg-gray-100 text-red-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-300 shadow-md"
                    onClick={() => navigate(cert.path)}
                  >
                    Know More
                  </button>
                  <button
                    className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800 shadow-md"
                    onClick={() =>
                      handleApplyNowClick(cert.title, cert.priceValue)
                    }
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CertificationPage;
