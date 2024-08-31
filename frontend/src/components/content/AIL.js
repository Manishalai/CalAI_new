import React from 'react';
import brain from '../../images/brain.svg';
import badge from '../../images/badge.svg';
import vedios from '../../images/videos.svg';
import books from '../../images/books.svg';
import terminal from '../../images/terminal-window-line.svg';
import star from '../../images/Star 1.png';
import h_star from '../../images/4.8.png';
import instructor from '../../images/1679927695375.jpg';
import LinkedInLogo from '../../images/linkedin-2815969.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Speaker from '../speakers/Speaker';

const AIL_content = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  const handleApplyNowClick = (coursePath, courseName, price) => {
    if (currentUser) {
      navigate('/checkout', {
        state: { courseName, price }, // Pass course details
      });
    } else {
      navigate('/login&signup', {
        state: { from: `/checkout`, courseName, price },
      });
    }
  };
  return (
    <>
      <div id="pag2">
        <h1 class="text-[36px] text-[#074D8D] p-4 font-bold md:text-[20px]">
          Certified Artificial Intelligence Leader: Elevate Your Leadership with
          AI Mastery!
        </h1>
        <div class="mx-4" id="overview">
          <h1 class="p-4 text-3xl text-[#074D8D] font-semibold">Overview</h1>
          <p class="px-4">
            Welcome to the AI Leadership Programme, an innovative non-technical
            AI professional certification designed exclusively for leadership
            professionals. This self-paced program is curated to provide a
            profound understanding of AI concepts without the need for
            programming knowledge, empowering you to lead your business
            confidently into the era of artificial intelligence. Embrace the
            future of leadership with the AI Leadership Programme. Equip
            yourself with the knowledge and skills needed to lead your
            organization through the transformative power of artificial
            intelligence. Enroll now and become an AI-savvy leader in your
            industry.
          </p>
        </div>
        <div class="bg-[#e7e7e7] mx-4 " id="eligibilty">
          <h1 class="p-4 text-3xl text-[#074D8D] font-semibold">Eligibilty</h1>
          <p class="px-4">
            Leadership professionals across indh1ustries are eligible to enroll.
            No programming knowledge is required. This program is tailor-made
            for executives, managers, and leaders seeking to integrate AI for
            strategic business optimization
          </p>
          <h1 class="p-4 text-3xl font-semibold">
            Programming skills are mandatory to apply for AI Lead certification.
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
                Module 1: Introduction to AI and Its Implications
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 1: Introduction to AI
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Overview of AI evolution, foundational concepts, and
                      critical milestones
                    </li>
                    <li>
                      Discussion on the distinctions between AI, machine
                      learning, and deep learning
                    </li>
                    <li>
                      Examination of AI’s potential impact on future
                      technological developments and societal shifts
                    </li>
                    <li>
                      Analysis of case studies showcasing successful AI
                      applications
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 2: Key AI Technologies
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      In-depth exploration of Natural Language Processing and
                      its role in AI.
                    </li>
                    <li>
                      Discussion on how AI technologies are integrated into
                      mobile and web applications.
                    </li>
                    <li>
                      Overview of Computer Vision technologies and their
                      applications
                    </li>
                    <li>
                      Analysis of challenges in scaling AI technologies across
                      different industries.
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 3: Large Language Models (LLMs) and Generative AI
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Overview of Large Language Models and their applications.
                    </li>
                    <li>
                      Discussion on the challenges and ethical implications of
                      LLMs
                    </li>
                    <li>
                      Examination of how LLMs are used in natural language
                      understanding and generation
                    </li>
                    <li>
                      Generative AI, also known as GenAI, to create original
                      content across various media formats, including text,
                      images, audio, and video
                    </li>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 2: AI in Various Industries
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">15%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  {' '}
                  Lecture 4: AI Applications in Healthcare and Finance
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Exploration of AI’s role in healthcare, including
                      diagnostics, personalized medicine, and patient care
                      management.
                    </li>
                    <li>
                      Discussion on AI’s impact on financial operations, fraud
                      detection, and customer interactions.
                    </li>
                    <li>
                      Review of ethical and regulatory challenges in both
                      healthcare and finance
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 5: AI Applications in Retail and Manufacturing
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Exploration of AI in customer personalization, inventory
                      management, and retail operations.
                    </li>
                    <li>
                      Discussion on AI-driven automation in manufacturing,
                      including predictive maintenance and quality control.
                    </li>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 3: AI Technologies Continued
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 6: Robotics in AI
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Review of advancements in AI-driven robotics and
                      automation.
                    </li>
                    <li>
                      Discussion of robotics applications in complex
                      environments such as space exploration and healthcare.
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 7: Advanced Machine Learning Techniques
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Exploration of advanced algorithms like supervised
                      learning and deep neural networks.
                    </li>
                    <li>
                      Discussion on the use of big data for enhancing machine
                      learning model accuracy.
                    </li>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 4: Ethical and Societal Implications of AI{' '}
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">8%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 8: Ethical AI
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Discussion of the principles and practices of ethical AI
                      development.
                    </li>
                    <li>
                      Review of case studies where AI ethics were challenged.
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 9: Bias and Fairness in AI Systems{' '}
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>Understanding sources and impacts of bias in AI.</li>
                    <li>
                      Techniques for mitigating bias and promoting fairness in
                      AI systems.
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 10: AI and Privacy
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>Developing an AI Adoption Roadmap.</li>
                    <li>Scaling AI Initiatives in Large Organizations.</li>
                    <li>Overcoming Challenges in AI Implementation.</li>
                    <li>Strategies for Sustained AI Leadership.</li>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 5: Strategic AI Leadership
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">12%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  {' '}
                  Lecture 11: Economies of AI-based Business Models{' '}
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Understanding AI business models and operational
                      efficiency.
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 12: Developing an AI Strategy for Your Organization
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Discussion on key components of a successful AI strategy.
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 13: Integrating AI into Business Processes
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Discussion on overcoming challenges in AI integration.
                    </li>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 6: AI Project Management
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 14: Agile Methodologies for AI Projects
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Discussion on adapting agile methodologies for AI
                      projects.
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 15: Managing AI Teams and Projects
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Discussion on unique challenges in managing AI teams.
                    </li>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 7: Risk and Change Management in AI
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">8%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 16: Risk Management in AI Deployments
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Techniques for identifying and mitigating risks in AI
                      implementations.
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 17: Change Management and AI
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Challenges of AI adoption and effective strategies for
                      managing change.
                    </li>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 8: Leadership and Innovation with AI
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">8%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 18: Leading AI Innovation{' '}
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Discussion on nurturing a culture supportive of continuous
                      innovation.
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Lecture 19: Capstone Project Presentations and Program Wrapup
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>
                      Presentation of capstone projects and gathering feedback.
                    </li>
                    <li>
                      Reflection on the program’s impact and participant
                      achievements.
                    </li>
                    <li>Discussion on continuous learning paths in AI.</li>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 9: Voluntary Coding
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">7%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details>
                <summary class="py-2 outline-none cursor-pointer focus:underline">
                  Python, scikit-learn, and TensorFlow
                </summary>
                <div class="px-4 pb-4">
                  <ul class="list-disc list-inside">
                    <li>Basics of Python.</li>
                    <li>Basics of Data Science.</li>
                    <li>Basics of scikit-learn and TensorFlow.</li>
                    <li>
                      AI Models and Projects: Data Science, Natural Language
                      Processing and Reinforcement Laarning.
                    </li>
                    <li>Notebooks.</li>
                    <li>Coding Assignments.</li>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <button
            id="applyNow"
            className="relative overflow-hidden mt-4 ml-7 bg-[#074D8D] text-white p-2 text-lg font-bold group"
            onClick={() =>
              handleApplyNowClick(
                '/register',
                'Certified Artificial Intelligence Leader (CAIL)',
                1200,
              )
            }
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-[1500ms] ease-in-out transform translate-x-[-150%] group-hover:translate-x-[150%]"></span>
            <span className="relative z-10">APPLY NOW</span>
          </button>
          <div class="bg-[#e7e7e7] mx-4 relative mt-4 p-4">
            <h1 class="text-2xl font-bold">
              Program Fee: $1200. Limited Offer: Apply now to avail a 10% Early
              bird discount with code{' '}
              <strong style={{ color: 'blue' }}>EarlyBird10</strong> at
              checkout!
            </h1>
          </div>
          {/* Instructor Section */}
          <div className="bg-slate-100 flex flex-row md:flex-col mx-4 rounded-md shadow-md relative my-4 p-4">
            {!showVideo ? (
              <div className="w-1/2 md:w-full flex flex-col p-2 items-center">
                <img
                  src={instructor} // Replace with the actual URL or import of the instructor's image
                  alt="Instructor"
                  className="w-64 h-64 rounded-full object-cover shadow-lg mb-4"
                />
                <Link to="https://www.linkedin.com/in/dr-miquel-noguer-i-alonso-7242345/">
                  <button className="flex items-center justify-between bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-white/55">
                    <img
                      src={LinkedInLogo} // Replace with the actual path to the LinkedIn logo
                      alt="LinkedIn"
                      className="w-10 h-10 mr-2"
                    />
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold">
                        LinkedIn Activity
                      </span>
                      <span className="text-xs">40k+ followers</span>{' '}
                      {/* Replace with actual follower count */}
                    </div>
                  </button>
                </Link>
              </div>
            ) : (
              <div className="w-1/2 md:w-full flex flex-col p-2 items-center">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-3/4 md:w-full">
                  <iframe
                    title="Calai"
                    className="w-full h-64 md:h-96"
                    src="https://www.youtube.com/embed/CZ7sASs6oJE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            <div className="w-full p-4 flex flex-col justify-center">
              <h2 className="text-xl md:text-xl font-bold mb-1">
                Meet Your Instructor
              </h2>
              <h1 className="text-4xl text-[#074D8D] font-extrabold mb-4">
                Dr. Miquel Noguer
              </h1>
              <p className="text-lg">
                Dr. Miguel Noguer i Alonso is the Chief Development Officer at
                Global AI, a Visiting Scholar at NYU Courant Institute, and a
                Faculty Lecturer at NYU Tandon School of Engineering. He also
                serves on the ACM Europe Technology Policy Committee and the
                advisory boards of the FDP Institute and CFA Society New York.
                Previously, he held roles at UBS as Executive Director and at
                Andbank as Chief Investment Officer. Additionally, he was an
                Adjunct Professor at Columbia University and taught at NYU Stern
                and Imperial Bussiness School.
              </p>
              {/* <button
                className="mt-4 mx-auto bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                onClick={() => setShowVideo(!showVideo)}
              >
                {showVideo ? "Hide Intro" : "Show Intro"}
              </button> */}
            </div>
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

export default AIL_content;
