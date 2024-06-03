import React from "react";
import brain from "../../images/brain.svg";
import badge from "../../images/badge.svg";
import vedios from "../../images/videos.svg";
import books from "../../images/books.svg";
import terminal from "../../images/terminal-window-line.svg";
import star from "../../images/Star 1.png";
import h_star from "../../images/4.8.png";

const AID_content = () => {
  return (
    <>
      <div id="page2">
        <h1 class="text-[36px] text-[#074D8D] p-4 font-bold md:text-[20px]">
          Welcome to Certified Artificial Intelligence Developer: Master the Art
          and Science of AI Development!
        </h1>
        <div class="mx-4 mb-4" id="overview">
          <h1 class="p-4 text-3xl text-[#074D8D] font-semibold">Overview</h1>
          <p class="px-4">
            Embark on a transformative journey into the heart of Artificial
            Intelligence with our AI Developer Certification program. Designed
            to meet the dynamic needs of the industry, this comprehensive course
            takes you from the fundamentals of AI to the intricacies of
            creating, training, and optimizing AI models on both labeled and
            unlabeled datasets. Elevate your expertise and become an AI
            Developer, equipped with the skills demanded by today's tech
            landscape. Embark on a self-paced learning journey with AI Developer
            Certification, where cutting-edge knowledge meets practical
            application. Elevate your career as an AI Developer and be at the
            forefront of innovation in the ever-evolving field of Artificial
            Intelligence.
          </p>
        </div>
        <div class="bg-[#e7e7e7] mx-4 " id="eligibilty">
          <h1 class="p-3 text-3xl text-[#074D8D] font-semibold">Eligibilty</h1>
          <p class="px-4">
            This certification is tailored for individuals with a strong
            technical background and a passion for AI. Proficiency in
            programming languages such as Python is recommended, ensuring
            participants can fully engage with the technical intricacies of AI
            development.
          </p>
          <h1 class="p-4 text-3xl font-semibold md:text-[18px] italic">
            Programming skills are mandatory to apply for AI Developer
            certification.
          </h1>
        </div>
        <div id="key-learnings">
          <h1 class="p-4 text-3xl text-[#074D8D] font-semibold">
            Key-Outcomes
          </h1>
          <ul class="px-8 list-disc">
            <li>
              Go from zero to hero in Python, Seaborn, Matplotlib, Scikit-Learn,
              SVM, unsupervised Machine Learning etc.
            </li>
            <li>
              Discover new ways to use LLMs, including how to build your own
              chatbot
            </li>
            <li>
              Use dense and recurrent neural networks, LSTMs, GRUs, and Siamese
              networks in TensorFlow and Trax to perform advanced sentiment
              analysis, text generation, named entity recognition, and to
              identify duplicate questions.
            </li>
            <li>
              Compare generative models, use FID method to assess GAN fidelity
              and diversity, learn to detect bias in GAN, and implement StyleGAN
              techniques
            </li>
            <li>
              Various ML modellings such as
              <ul class="px-5 list-disc">
                <li>Supervised Machine Learning Modelling.</li>
                <li>Unsupervised Machine Learning Modelling.</li>
                <li>Reinforcement Machine Learning Modelling.</li>
                <li>Image Recognition and Computer Vision.</li>
                <li>Build your own Recommendation Engine.</li>
              </ul>
            </li>
            <li>
              Skills that employers desire, helping you ace machine learning
              interview questions and land your dream job.
            </li>
          </ul>
        </div>
      </div>
      <div id="page3">
        <h1 class="p-4 text-3xl text-[#074D8D] font-semibold">
          Program Details
        </h1>
        <div class="flex-col p-4">
          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Introduction to AI Development
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <li>Big Data and AI</li>
              <li>Artificial Intelligence on the Cloud</li>
              <li>AI in Banking</li>
              <li>Exploring Feature Selection</li>
              <li>Chatbots</li>
              <li>White box XAI for AI Bias & Ethics</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Essential of Machine Learning
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">15%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg   md:grid-cols-1">
              <li>Machine Learning and Python</li>
              <li>Supervised Learning: Classification and Regression</li>
              <li>Unsupervised Learning: Detecting Patterns</li>
              <li>Dimensionality Reduction</li>
              <li>Visualising Data for Machine Learning</li>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Deep Learning Foundation{" "}
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">15%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <li>TensorFlow and its functionalities</li>
              <li>Deep Learning with TensorFlow on the Cloud</li>
              <li>TensorFlow for Mobile and IOT</li>
              <li>Life Cycle of Model Creation</li>
              <li>Deep Learning with KERAS</li>
              <li>Activation Function</li>
              <li>Confusion Matrix</li>
              <li>Underfitting and Overfitting</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Natural Language Processing (NLP)
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg md:grid-cols-1">
              <li>Natural Language Processing using Python</li>
              <li>Transform Text File into Data Structures</li>
              <li>Word Embeddings and Text Distance Metrics</li>
              <li>Document, Sentence, and Character-Level Embedding</li>
              <li>Text Data Analysis</li>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                {" "}
                Large Language Model Operations (LLMops)
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px]  md:grid-cols-1">
              <li>Foundations of LLMOps</li>
              <li>Advanced LLMOps Techniques</li>
              <li>LLMOps in Production Environments</li>
              <li>LLM Prompt Engineering</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                {" "}
                Computer Vision and GANs
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg md:grid-cols-1">
              <li>Computer Vision, Raspberry Pi</li>
              <li>Multiclassifier to recognize traffic signals</li>
              <li>GANs: Applications, Architecture, Variants and Advantages</li>
              <li>Object Detection Using OpenCV</li>
              <li>Face detection and recognition</li>
              <li>Real-time Face, Age and Gender Detection</li>
              <li>Image, Age and Gender Detection</li>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Reinforcement Learning
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <li>Reinforcement Learning</li>
              <li>Bellman Equation and Dynamic Programming</li>
              <li>Monte Carlo (MC) Methods</li>
              <li>Temporal Difference Learning</li>
              <li>Multi-Armed Bandit(MAB) Problem</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Deep Reinforcement Learning
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">5%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg md:grid-cols-1">
              <li>Deep Q Network</li>
              <li>Actor Critic and Policy Gradient</li>
              <li>Method Learning DDPG, TD3 and SAC</li>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Model Interpretability and Explainability
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">5%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <li>Interpreting Model Predictions</li>
              <li>Explainable AI Techniques</li>
              <li>Building Transparent and Trustworthy Models</li>
              <li>Industry Best Practices</li>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                AI Developer Capstone Project
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-lg md:grid-cols-1">
              <li>Apply Knowledge to Real-world Scenario</li>
              <li>Collaborate on a Comprehensive AI Project</li>
              <li>Showcase Skills to Potential Employers</li>
              <li>Receive Feedback and Enhance Portfolio</li>
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
              Program Fee:$699 Limited Slots available for CalAI Sholarship
              Program.Hurry up and{" "}
              <a class="text-blue-700" href="Starttest.html">
                Apply Now
              </a>
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
                <p class="text-[#D6C107] text-[1.5rem] font-bold">4.8</p>
              </div>
              <p class="text-[1.2rem] mt-1 md:mt-0 md:text-[1rem]">
                (1.4K + Users)
              </p>
            </div>
            <div class="flex flex-col gap-4 mt-4">
              <p>
                "The AI courses offered by CalAI completely transformed my
                understanding of artificial intelligence. The content is
                comprehensive, yet easy to grasp, and the interactive exercises
                made learning engaging and fun. I highly recommend it to anyone
                looking to delve into the world of AI." -{" "}
                <span class="font-bold">Shannon Zock, Adobe</span>{" "}
              </p>
              <p>
                “"I've tried several online platforms for learning AI, but CalAI
                stands out for its exceptional quality. The instructors are
                experts in the field, and the course materials are constantly
                updated to reflect the latest trends and technologies in AI.
                Thanks to this platform, I've been able to advance my career in
                tech with confidence." -{" "}
                <span class="font-bold">Fatima Al-Hamdi, Atlassian</span>{" "}
              </p>
              <p>
                “Enrolling in AI courses on CalAI was one of the best decisions
                I've made for my professional development. The lessons are
                well-structured, allowing me to progress at my own pace, and the
                practical projects helped me apply theoretical concepts in
                real-world scenarios. I'm now equipped with the skills needed to
                tackle complex AI projects in my job." -{" "}
                <span class="font-bold">Luna Sterling, Microsoft Research</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AID_content;
