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
                Module 1: Introduction to Artificial Intelligence
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <hr class="bg-[black] h-[2px] w-full" />
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Big Data and AI
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Big Data and AI
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Definition and Importance of Big Data</li>
                          <li>Overview of Artificial Intelligence</li>
                          <li>The Three Vs of Big Data</li>
                          <li>
                            Key Technologies: Hadoop, Spark, NoSQL databases
                          </li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Data Processing and Analytics
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Data Preprocessing</li>
                          <li>Data Storage and Management</li>
                          <li>Introduction to Data Analytics</li>
                          <li>Machine Learning Basics</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Analytics and AI Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Deep Learning</li>
                          <li>Natural Language Processing (NLP)</li>
                          <li>Computer Vision</li>
                          <li>Reinforcement Learning</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Applications and Case Studies
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Big Data and AI Applications</li>
                          <li>Ethical and Legal Considerations</li>
                          <li>Real World Case Studies</li>
                          <li>Hands-on Exercise</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Artificial Intelligence on the Cloud
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Cloud Computing and AI
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Cloud Computing Basics</li>
                          <li>Major Cloud Providers</li>
                          <li>AI on the Cloud Introduction</li>
                          <li>Hands-on Exercise</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        AI Services on Cloud Platforms
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Overview of AI Services</li>
                          <li>Machine Learning on the Cloud</li>
                          <li>Overview of AI Services</li>
                          <li>Machine Learning on the Cloud</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Big Data and AI Integration on the Cloud
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Big Data on the Cloud</li>
                          <li>Data Analytics with AI</li>
                          <li>AI-driven Big Data Solutions</li>
                          <li>Hands-on Exercise</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Topics and Future Trends
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Advanced AI Services</li>
                          <li>AI Ethics and Governance</li>
                          <li>Edge AI and IoT Integration</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  AI in Banking
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to AI in Banking
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Overview of AI in Banking</li>
                          <li>Use Cases</li>
                          <li>AI Technologies in Banking</li>
                          <li>Hands-on Intriduction</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        AI Applications in Banking Operations
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Automated Customer Service</li>
                          <li>Fraud Detection and Prevention</li>
                          <li>Risk Management</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        AI for Customer Experience Enhancement
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Personalised Marketing and Recommendation</li>
                          <li>Pedictive Analytics</li>
                          <li>Sentiment Analysis and VoC Analytics</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Future Trends and Ethical Considerations
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Emerging AI Technologies</li>
                          <li>Ethical Considerations</li>
                          <li>Regulatory Landscape</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Exploring Feature Selection
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Exploring Feature Selection
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Feature Selection Techniques</li>
                          <li>Types of Features</li>
                          <li>Overview of Feature Selection</li>
                          <li>Hands-on Introduction</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Filter Methods
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Filter Method Overview</li>
                          <li>Fraud Detection and Prevention</li>
                          <li>Risk Management</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Wrapper Method
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Wrapper Methods Overview</li>
                          <li>Generic Algorithms</li>
                          <li>Recirsive Feature Elimination</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Future Trends and Ethical Considerations
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Embedded Methods</li>
                          <li>Feature Sleection with Deep Learning</li>
                          <li>Regulatory Landscape</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Chatbots
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Chatbots
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Overview of Chatbots</li>
                          <li>Types of chatbots</li>
                          <li>Introduction to NLP</li>
                          <li>Hands-on Introduction</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Building AI-based Chatbots
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>AI-based Chatbots Overview</li>
                          <li>Dialog Systems</li>
                          <li>Training Chatbots</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Chatbots Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>NLU and Sentiments Analysis</li>
                          <li>Conversational AI</li>
                          <li>Chatbot Analytics</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Ethical Considerations and Future Trends
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Ethical Considerations</li>
                          <li>Feature Sleection with Deep Learning</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Graphs and Graph Databases
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Graphs
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Graph Theory basics</li>
                          <li>Types of Graph</li>
                          <li>Graph Representation</li>
                          <li>Graph Algorithms</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Graph Databases
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Introduction to Graph Databases</li>
                          <li>Quey Languages</li>
                          <li>Graph Database Models</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Graph Algorithms and Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Traversal Algorithms</li>
                          <li>Community Detection</li>
                          <li>Applications of Graphs</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advan' Topics and Case Studies
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Graph Embeddings</li>
                          <li>Time Series Analysis</li>
                          <li>Spatial Analysis</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 2: Essential of Machine Learning
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">15%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Graphs and Graph Databases
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Python for Machine Learning
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Python Basics</li>
                          <li>Control Flow</li>
                          <li>Data Structures</li>
                          <li>Functions and Modules</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to NumPy and Pandas
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Introduction to Pandas</li>
                          <li>Data Visualization</li>
                          <li>Data Cleaning and Preprocessing</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Manchine Learning woth Scikit-Learn
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Introduction to Machine</li>
                          <li>Learning with Scikit-Learn</li>
                          <li>Model Evaluation</li>
                          <li>Reinforcement Learning</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Model Deployment and Real-world Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Model Deployment</li>
                          <li>Best Practices</li>
                          <li>Real-World Applications of Machine Learning</li>
                          <li>Hands-on Exercise</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Supervised Learning: Classification and Regression
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Supervised Learning and Linear
                        Regression
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Overview of supervised Learning </li>
                          <li>Linear Regression</li>
                          <li>Multiple Linear Regression</li>
                          <li>Model Evaluations Metrics</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Classification Algorithms
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Introduction to Algorithms</li>
                          <li>Decision Trees</li>
                          <li>Model Evaluation Metrics</li>
                          <li>Logistic Regression</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Classification Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Support Vector Machines</li>
                          <li>Ensemble Methods</li>
                          <li>Hyperparameter Tuning</li>
                          <li>Hands-on Exercise</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Project Work
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Prject Work</li>
                          <li>Real World Applications</li>
                          <li>Case Studies</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Unsupervised Learning: Detecting Patterns
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Unsupervised Learning and Clustering
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Overview of Unsupervised Learning</li>
                          <li>K-means Clustering</li>
                          <li>Hierarchical Clustering</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Density-based Clustering and Dimensionality Reduction
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Density based Clustering: DBSACN</li>
                          <li>Principal Component Analysis</li>
                          <li>Risk Management</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Topics and Real-World Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Semi Supervised Learning</li>
                          <li>Real-world Applications</li>
                          <li>Best Practices and Pitfalls</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Visualising Data for Machine Learning
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introductionto Data Visualization and Basic Plotting
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Importance of Data Visualising</li>
                          <li>Customisiing Plots</li>
                          <li>Overview of Visualization Libraries</li>
                          <li>Hands-on Introduction</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Plotting Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Statistical Visualization</li>
                          <li>Fraud Detection and Prevention</li>
                          <li>Geographic Data Visualization</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Interactive Dashboards and Real-World Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Deployment of Dashboards</li>
                          <li>Creating Interactive Visualizations</li>
                          <li>Introduction to Interactive Dashboards</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 3: Deep Learning
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">15%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  TensorFlow and its Functionalities
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to TensorFlow Basics
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Overview of TensorFlow</li>
                          <li>TensorFlow Architecture</li>
                          <li>Building Computational Graphs</li>
                          <li>Custom Loss Functions</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        TensorFlow Operations and Optimization
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>TensorFlow Operations</li>
                          <li>Optimizers</li>
                          <li>Saving and Restoring Models</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        TensorFlow High-level APIs and Advanced Topics
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Training and Evaluating Model</li>
                          <li>Building Models with Keras</li>
                          <li>Advacned TensorFlow Topics</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        TensorFlow Deployment and Real-World Application
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>TensorFlow Serving</li>
                          <li>TensorFlow Lite</li>
                          <li>Temporal Difference</li>
                          <li>Real-world Applications</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Tensor Flow for Mobile and IoT
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        TensorFlow for Moblie Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>TensorFlow Lite Convertor</li>
                          <li>Mobile Acceleration</li>
                          <li>Model Optimization Techniques</li>
                          <li>Mobile Acceleration</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        TensorFlow for IoT Devices
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Introduction to IoT Devices</li>
                          <li>TensorFlow lite for Micro Controllers</li>
                          <li>Supported Hardware Platform</li>
                          <li>Deploying Models to IoT Devices</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Real world Application and Case Studies
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Real World Applications</li>
                          <li>Case Studies</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Underfitting and Overfitting
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Techniques to Address Underfitting
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Increasing Model Complexity</li>
                          <li>Feature Engineering</li>
                          <li>Model Ensemble</li>
                          <li>Hyperparameter Tuning</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Techniques to Address Overfitting
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Regularization Techniques</li>
                          <li>Early Stopping</li>
                          <li>Dropout Regularization</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Early Stopping Data Augmentation
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Cross-validation</li>
                          <li>Model Selection</li>
                          <li>Fine-tuning</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 4: Natural Language Processing (NLP)
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Natural Language Processing using Python
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Natural Language Processing (NLP)
                        Fundamentals
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Intoduction to Natural</li>
                          <li>Text Normalization</li>
                          <li>EDA for Text Data</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Text Representation and Feature Extraction
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Bag of Words (BOW) Model</li>
                          <li>TF-IDF</li>
                          <li>Document Embeddings</li>
                          <li>Word Embeddings</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Support Vector Machines (SVM) Sentiment Analysis
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>File Input/Output</li>
                          <li>Parsing Techniques</li>
                          <li>Regular Expression</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Deep Learing with Keras
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Deep Learning Model with Keras
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Functional APIs</li>
                          <li>Batch Normalization</li>
                          <li>Callbacks</li>
                          <li>Custom Loss Functions</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Image Classification Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Image Classification ALgorithm</li>
                          <li>Convolutional Neural Network</li>
                          <li>Model Training</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Transfer Learning and Model Fine-tuning
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Transfer Learning</li>
                          <li>Fine-tuning techniques</li>

                          <li>Handling imbalanced Techniques</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Deployment and Real world Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Model Deployment</li>
                          <li>serving keras model</li>
                          <li>Case studies</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Visualization Optimization Techniques
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Word Embeddings
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Word Representations</li>
                          <li>Word Embeddings Techniques</li>
                          <li>Word2Vec</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Text Distance Metrics
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Text Similarity Metrics</li>
                          <li>Edit Distance</li>
                          <li>Cosine Similarity</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Text Dsitance Metrics and Application
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Word Mover's Distance</li>
                          <li>Sentence Embeddings</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Text Data Analysis
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Text Data Analysis
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Text Data Analysis Overview</li>
                          <li>Exploratory Data Analysis</li>
                          <li>Text Data Preprocessing</li>
                          <li>Hands-on Introduction</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Text Mining and feature Extraction
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Text Mining Techniques</li>
                          <li>Bag of Words (BoW) model</li>
                          <li>TF-IDF</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Text Analysis Techniques and Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Advanced Text analysis Techniques</li>
                          <li>Sentiments Analysis Techniquest</li>
                          <li>Text Classification Pipeline</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 5: Computer Vision and GANs
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Computer Vision, Raspberry Pi
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Computer Vision and Raspberry Pi
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Image Filtering</li>
                          <li>Basics of Image Processing</li>
                          <li>Model Evaluations Metrics</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Image Acquisition and Processing
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Intoduction to OpenCV</li>
                          <li>Raspberry pi setup</li>
                          <li>Object Detection Techniques</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Object Detection and Recognition
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Image Classification Techniques</li>
                          <li>Transfer Learning</li>
                          <li>Introduction to Deep Learning</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Topics and project
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Real time object tracking</li>
                          <li>Raspberry pi camera Module</li>
                          <li>Facial Recognition</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Multiclassifier to recognize traffic signals
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Traffic Sign Recognition
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Introduction to Traffic Sign Recognition</li>
                          <li>Dataset Exploration</li>
                          <li>Data Preprocessing</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Image Classification Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Image Classification ALgorithm</li>
                          <li>Convolutional Neural Network</li>
                          <li>Model Training</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Evaluation and Optimization
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Model Evaluation</li>
                          <li>Hyperparameter Tuning</li>
                          <li>Data Augmentation</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Deployment and Future Enhancement
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Model Deployment</li>
                          <li>Real-time Inference</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  GANs: Applications, Architecture, Variants and Advantages
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to GANs and Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Introduction</li>
                          <li>GANs Applications</li>
                          <li>Hands on experience</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        GAN Architecture and Training
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>GAN Architecture</li>
                          <li>Training GANs</li>
                          <li>Loss Functions</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Variants of GANs
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Conditional GANs </li>
                          <li>Cycle GANs</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Image, Age and Gender Detection
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Image Analysis
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Image analysis Overview</li>
                          <li>Introduction to OpenCV</li>
                          <li>Image Preprocessing</li>
                          <li>Hands-on Introduction</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Real-time Image, Age and Gender Detection
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Performnace Optimization</li>
                          <li>Application Development</li>
                          <li>UCB-Tuned Algorithm</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Techniques and Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Advanced Image analysis Techniques</li>
                          <li>Application Development</li>
                          <li>Performance Optimization</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class=" mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 6: Reinforcement Learning
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Reinforcement Learning
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Reinforcement Learning
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Q-Learning</li>
                          <li>Markov Decision Processes</li>
                          <li>Model Evaluations Metrics</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Deep Q-Network
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Challenges with Q-Learning</li>
                          <li>Decision Trees</li>
                          <li>Experience Replay</li>
                          <li>Logistic Regression</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced DQN Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Double DQN</li>
                          <li>Dueling DQN</li>
                          <li>Hands-on Exercise</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Applications and Future Directions
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Application of DQN</li>
                          <li>Recent Advances and Future Directions</li>
                          <li>Case Studies</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Monte Carlo Method
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Monte Carlo Method
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Monte Carlo Methods Overview</li>
                          <li>Monte Carlo Prediction</li>
                          <li>First Visit Monte Carlo Method</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Monte Carlo Control
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Monte Carlo Control Overview</li>
                          <li>On-Policy Monte Carlo Control</li>
                          <li>Experience Replay</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Exploration Strategies and Improvements
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Explorating Starts</li>
                          <li>Incremental Implementation</li>
                          <li>Hands-on Exercise</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Applications and Future Directions
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Application of Monte Carlo Method</li>
                          <li>Batch Reinforcement Learning</li>
                          <li>Temporal Difference</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Temporal Difference Learning
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Temporal Difference Control
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>TD control Overview</li>
                          <li>SARSA Algorithm</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Eligibility Traces and Improvements
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Introduction to Elegibility Traces</li>
                          <li>TD Algorithm</li>
                          <li>n-step TD Method</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Extensions and Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>TD Learning Extensions</li>
                          <li>Hands-on Projects</li>
                          <li>Applications of TD Learning</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Multi-Armed Bandit(MAB) Problem
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Upper Conofidence Bound (UCB) Methods
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>UCB Methods Overview</li>
                          <li>UCB-Tuned ALgorithm</li>
                          <li>UCB1 Algorithm</li>
                          <li>Hands-on Introduction</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Thompsom Sampling
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Thompsom Sampling Overview</li>
                          <li>Thompson Sampling Algorithms</li>
                          <li>UCB-Tuned Algorithm</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Extensions and Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Contextual Bandits</li>
                          <li>Applicatoins on MAB problem</li>
                          <li>Hands-on Project</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
            </ul>
          </div>

          <div class="bg-[#e7e7e7] mx-4 relative">
            <div class="relative flex p-4 justify-between">
              <h1 class=" text-2xl text-[#074D8D] font-semibold">
                Module 7: Deep Reinforcement Learning
              </h1>
              <h1 class="text-2xl text-[#CBA135] font-semibold">10%</h1>
            </div>
            <div class="bg-[black] h-[2px] w-full"></div>
            <ul class="grid grid-cols-2 p-4 list-inside list-disc text-[18px] md:grid-cols-1">
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Deep Q Network
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Reinforcement Learning
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Q-Learning</li>
                          <li>Markov Decision Processes</li>
                          <li>Model Evaluations Metrics</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Deep Q-Network
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Challenges with Q-Learning</li>
                          <li>Decision Trees</li>
                          <li>Experience Replay</li>
                          <li>Logistic Regression</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced DQN Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Double DQN</li>
                          <li>Dueling DQN</li>
                          <li>Hands-on Exercise</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Applications and Future Directions
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Application of DQN</li>
                          <li>Recent Advances and Future Directions</li>
                          <li>Case Studies</li>
                          <li>Future Trends</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Actor Critic and Policy Gradient
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Policy Gradient Methods
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Reinforcement Learning Overview</li>
                          <li>Markov Decision Processes (MDPs)</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Actor-Critic Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>A3C</li>
                          <li>Proximal Policy Optimization (PPO)</li>
                          <li>Trust Region Policy</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Application and Future Directions
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Applications of Actor</li>
                          <li>Recent Advances and Future Directions</li>
                          <li>Hands on Project</li>
                        </ul>
                      </div>
                    </details>
                  </ul>
                </div>
              </details>
              <details class="p-2">
                <summary class="outline-none font-semibold cursor-pointer focus:underline">
                  Method Learning DDPG TD3 and SAC
                </summary>
                <div class="">
                  <ul class="p-4 list-inside list-disc">
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Deep Deterministic Policy Gradient (DDPG)
                        Techniques
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Challenges with DDPG</li>
                          <li>Exploration Strategies</li>
                          <li>Overview of Visualization Libraries</li>
                          <li>Hands-on Introduction</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Introduction to Soft Actor-Critic (SAC)
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Extropy Regularisation</li>
                          <li>Target Entropy and Temperature</li>
                          <li>Soft Actor-Critic (SAC) Overview</li>
                        </ul>
                      </div>
                    </details>
                    <details class="p-2">
                      <summary class="outline-none cursor-pointer focus:underline">
                        Advanced Topics and Applications
                      </summary>
                      <div class="px-4 pb-4">
                        <ul class="list-inside list-disc">
                          <li>Continuos Control Applications</li>
                          <li>Hands-on Projects</li>
                          <li>Introduction to Interactive Dashboards</li>
                        </ul>
                      </div>
                    </details>
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
              <strong style="color: blue;">Early10</strong> at checkout!
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
