import React from "react";
import brain from "../../images/brain.svg";
import badge from "../../images/badge.svg";
import vedios from "../../images/videos.svg";
import books from "../../images/books.svg";
import terminal from "../../images/terminal-window-line.svg";
import star from "../../images/Star 1.png";
import h_star from "../../images/4.8.png";

const AIL_content = () => {
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
                  {" "}
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
                Module 4: Ethical and Societal Implications of AI{" "}
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
                  Lecture 9: Bias and Fairness in AI Systems{" "}
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
                  {" "}
                  Lecture 11: Economies of AI-based Business Models{" "}
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
                  Lecture 18: Leading AI Innovation{" "}
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
            class="mt-4 ml-7 bg-[#074D8D] text-white p-2 text-lg font-bold hover:bg-blue-500"
          >
            APPLY NOW
          </button>
          <div class="bg-[#e7e7e7] mx-4 relative mt-4 p-4">
            <h1 class="text-2xl font-bold">
              Program Fee:$699. Limited Offer: Apply now to avail a 10% Early
              bird discount with code{" "}
              <strong style={{ color: "blue" }}>Early10</strong> at checkout!
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
                Comprehensive e-books covering each module in detail
              </li>
              <li class="flex gap-5">
                <img class="h-[30px]" src={vedios} alt="" />
                Self paced videos designed by world renowned AI Experts
              </li>
              <li class="flex gap-5">
                <img class="h-[30px]" src={badge} alt="" /> Sharable digital
                Badge
              </li>
            </ul>
          </div>
          <div
            id="ratings"
            class="flex flex-col gap-2 mx-6 md:w-full md:p-5 md:mx-0"
          >
            <h2 class="text-[1.5rem] text-[#074D8D] font-bold">
              Ratings and Reviews
            </h2>
            <div class="flex flex-row gap-2 md:flex-col">
              <div class="flex flex-row gap-2">
                <img class="md:h-[30px]" src={star} alt="" />
                <img class="md:h-[30px]" src={star} alt="" />
                <img class="md:h-[30px]" src={star} alt="" />
                <img class="md:h-[30px]" src={star} alt="" />
                <img class="md:h-[30px]" src={h_star} alt="" />
                <p class="text-[#D6C107] text-[1.5rem] font-bold">4.6</p>
              </div>
              <p class="text-[1.2rem] mt-1 md:mt-0 md:text-[1rem]">
                (1.2K + Users)
              </p>
            </div>
            <div class="flex flex-col gap-4 mt-4">
              <p>
                "The AI Leadership Program by CalAI has been a game-changer for
                our startup. As a CEO, I found the self-paced learning approach
                incredibly convenient, allowing me to balance my hectic schedule
                while delving deep into AI strategies. The insights gained from
                this program have empowered us to make data-driven decisions,
                propelling our growth in the competitive market. Highly
                recommended!" -{" "}
                <span class="font-bold">
                  Emily Chen, CEO, TechSavvy Solutions.
                </span>{" "}
              </p>
              <p>
                "I've always believed in the potential of AI but lacked the
                expertise to implement it effectively. The AI Leadership Program
                provided me with the tools and knowledge needed to drive AI
                initiatives within our organization. The self-paced learning
                format was perfect for my role as a VP, allowing me to learn at
                my own pace and apply concepts directly to our business
                challenges. Thanks to CalAI, we're now leveraging AI to optimize
                processes and drive innovation." -
                <span class="font-bold">
                  Mark Johnson, VP of Operations, BrightTech Innovations.
                </span>{" "}
              </p>
              <p>
                "CalAI's AI Leadership Program exceeded my expectations. As a
                small startup CEO, I needed a program that would equip me with
                practical AI skills without disrupting our daily operations. The
                self-paced learning mode allowed me to access high-quality
                content anytime, anywhere, fitting seamlessly into my busy
                schedule. Now, armed with AI insights, we're revolutionizing our
                products and services, thanks to the invaluable lessons learned
                from CalAI."-
                <span class="font-bold">
                  Alex Smith, CEO, Nexus Dynamics.
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIL_content;
