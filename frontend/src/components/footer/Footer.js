import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { firestore } from '../../firebase/firebase'; // Ensure this path matches where your firebase.js is located
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { handleSuccess } from '../../notifications/notify';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Email cannot be empty.');
      return;
    }

    const apiKey = process.env.REACT_APP_BREVO_API_KEY;
    const listId = 96;

    try {
      // Check if the email is already in the list
      const checkResponse = await axios.get(
        `https://api.brevo.com/v3/contacts/${email}`,
        {
          headers: {
            'api-key': apiKey,
          },
        },
      );
      console.log(checkResponse);
      if (checkResponse.data) {
        // Delete the existing contact
        await axios.delete(`https://api.brevo.com/v3/contacts/${email}`, {
          headers: {
            'api-key': apiKey,
          },
        });
      }

      // Add the contact back
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts',
        {
          email: email,
          listIds: [listId],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
          },
        },
      );
      handleSuccess(response);
      await addDoc(collection(firestore, 'newsLetter_subscription'), {
        email: email,
        timestamp: new Date(),
        brevo_id: response.data.id,
      });

      setEmail(''); // Clear the input after success
    } catch (err) {
      if (err.response.status === 404) {
        // Add the contact back
        const response = await axios.post(
          'https://api.brevo.com/v3/contacts',
          {
            email: email,
            listIds: [listId],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'api-key': apiKey,
            },
          },
        );
        console.log(response);
        handleSuccess(response);
        await addDoc(collection(firestore, 'newsLetter_subscription'), {
          email: email,
          timestamp: new Date(),
          brevo_id: response.data.id,
        });

        setEmail(''); // Clear the input after success
      } else {
        console.error('Error subscribing to Brevo: ', err);
        toast.error('An unexpected error occured');
      }
    }
  };

  return (
    <>
      <div id="footer">
        <footer class="bg-gray-200">
          <div class=" px-6 lg:px-8 pt-8">
            <div class="flex items-start ">
              <div class=" flex justify-around items-start w-full mt-3 md:flex-col gap-8 ">
                <div class="w-4/12 flex flex-col justify-center md:w-full">
                  <div className="mt-0">
                    <h1 className="font-medium text-lg text-gray-900">
                      Subscribe to Our Newsletter
                    </h1>
                    <form className="flex-row px-0 my-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-1/2 flex-grow p-2 border border-gray-400 rounded-l-lg text-gray-900"
                      />
                      <button
                        id="newsLetter_subs"
                        type="submit"
                        onClick={handleSubmit}
                        className="py-2 px-4 bg-blue-500 text-white font-medium border border-blue-500 rounded-r-lg hover:bg-blue-600 transition"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                  {/* ***** */}
                  {/* FAQS */}
                  <div class="w-full flex flex-col">
                    <h2 class="font-medium text-lg text-gray-900">
                      Frequently Asked Questions
                    </h2>
                    <div class="w-full flex flex-col divide-y divide-gray-700">
                      <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">
                          What is CalAI Scholarship Test and how can it benefit
                          me?
                        </summary>
                        <div class="px-4 pb-4">
                          <ol>
                            <li>
                              <span class="font-bold">Apply Now:</span>Click on
                              the 'Apply Now' button located on the prominent
                              orange strip at the top{' '}
                            </li>
                            <li>
                              <span class="font-bold">Personal Details:</span>
                              Fill in your personal details, enabling us to
                              tailor your scholarship based on your performance.
                            </li>
                            <li>
                              <span class="font-bold">Take the Test:</span>
                              Participate in our straightforward online
                              scholarship test, assessing your general
                              understanding of AI.
                            </li>
                            <li>
                              <span class="font-bold">
                                Complete and Submit:
                              </span>
                              Participate in our straightforward online
                              scholarship test, assessing your general
                              understanding of AI.
                            </li>
                            <li>
                              <span class="font-bold">
                                Schedule an Interview:
                              </span>
                              Upon submission, access the Calendly link to
                              schedule a second-round online interview with our
                              academic counselor.
                            </li>
                            <p>
                              After the test and interview, your scholarship
                              percentage will be calculated and promptly emailed
                              to you. Seize the opportunity to enroll in your
                              preferred program with the exclusive CalAI
                              Scholarship! Apply Now and pave your way to
                              success.
                            </p>
                          </ol>
                        </div>
                      </details>
                      <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">
                          How will a CalAI certification in Artificial
                          Intelligence help me?
                        </summary>
                        <div class="px-4 pb-4">
                          <ol>
                            <li>
                              <span class="font-bold">
                                Comprehensive Knowledge:
                              </span>{' '}
                              Gain expertise in Industry Practices and
                              Functional capabilities of AI with a focus on
                              modern tools and techniques.
                            </li>
                            <br />
                            <li>
                              <span class="font-bold">
                                Hands-on Experience:
                              </span>{' '}
                              Develop models for NLP-based and robotics-based
                              projects, directly applicable to organizational
                              needs.
                            </li>
                            <br />
                            <li>
                              <span class="font-bold">
                                Excellence in Advanced AI:
                              </span>{' '}
                              Acquire superior knowledge in advanced AI,
                              Consulting approaches, and strategic AI and
                              management ecosystems.
                            </li>
                            <br />
                            <li>
                              <span class="font-bold">Career Advancement:</span>{' '}
                              Increase chances of landing dream jobs or projects
                              with a specialized AI certification.
                            </li>
                            <br />
                            <li>
                              <span class="font-bold">Salary Growth:</span>{' '}
                              Experience an exponential salary hike, reflecting
                              the value brought to the organization.
                            </li>
                            <br />
                            <li>
                              <span class="font-bold">
                                Distinguished Credential:
                              </span>{' '}
                              Earn a recognized credential exclusive for
                              Techno-Strategic careers.
                            </li>
                            <br />
                            <li>
                              <span class="font-bold">Digital Badge:</span>{' '}
                              Receive a world-class digital badge with lifelong
                              validity, showcasing your expertise throughout
                              your career journey.
                            </li>
                          </ol>
                        </div>
                      </details>
                      <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">
                          What is the process for CalAI program application?
                        </summary>
                        <div class="px-4 pb-4">
                          <ol>
                            <li>
                              Click on the 'Apply Now' button for the program of
                              your choice
                            </li>
                            <li>
                              Fill in your details on the next page and click on
                              Submit
                            </li>
                            <li>
                              Our academic counselor will get in touch with you
                              to clarify any doubts and for the next steps.
                            </li>
                          </ol>
                        </div>
                      </details>
                      <details>
                        <summary class="py-2 outline-none cursor-pointer focus:underline">
                          {' '}
                          What resources will I get on enrolling for a CalAI
                          program?
                        </summary>
                        <div class="px-4 pb-4">
                          <ol>
                            <li>
                              <span class="font-bold">
                                PDF Downloadable Study Materials:
                              </span>
                            </li>
                            <p>
                              {' '}
                              - Comprehensive study guides and materials
                              available for download.
                            </p>
                            <br />
                            <li>
                              <span class="font-bold">Recorded Videos:</span>
                            </li>
                            <p>
                              {' '}
                              - Access to a library of recorded instructional
                              videos for flexible, self-paced learning.
                            </p>
                            <br />
                            <li>
                              <span class="font-bold">
                                Real-World Worksheet-Based Learning:
                              </span>
                            </li>
                            <p>
                              - Practical application through industry-relevant
                              worksheets for hands-on experience.
                            </p>
                            <br />
                            <li>
                              <span class="font-bold">
                                State-of-the-Art Lab-Based Practice Code:
                              </span>
                            </li>
                            <p>
                              - Utilize cutting-edge lab resources for practical
                              coding exercises and application development.
                            </p>
                            <br />
                            <li>
                              <span class="font-bold">
                                Free Lifetime Newsletter Subscription:
                              </span>
                            </li>
                          </ol>
                          <p>
                            - Stay informed with the latest industry trends
                            through a complimentary lifetime subscription
                            to our newsletter
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                  {/* ***** */}
                </div>
                {/* PAYMENTS LINKS */}
                {/* {location.pathname === '/partnerWithUs' && (
                  <div class="flex-col">
                    <p class="font-medium text-lg text-gray-900">
                      Payments Links
                    </p>
                    <ul class="mt-6 space-y-4 text-sm">
                      <li>
                        <Link
                          to="/register_form/register.html"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          Express-Checkout
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/payments/razorpay"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          PayPal-270
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/AIDpayment.html"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          PayPal-400
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/CalAI_CAIL.html"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          PayPal-250
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/calAI_CAIL.html"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          PayPal-880
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/AILpayement.html"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          PayPal-480
                        </Link>
                      </li>
                    </ul>
                  </div>
                )} */}

                {/* CERTIFICATION */}
                <div className="flex flex-col gap-4">
                  <div class="flex-col items-center">
                    <p className="font-medium text-lg text-gray-900">
                      Certification
                    </p>
                    <ul className="mt-6 space-y-4 text-sm ">
                      <li>
                        <Link
                          to="/Artificial-intelligence-certifications/certified-ai-developer"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          Certified Artificial Intelligence Developer{' '}
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/Artificial-intelligence-certifications/certified-ai-manager"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          Certified Artificial Intelligence Manager
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/Artificial-intelligence-certifications/certified-ai-leader"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          Certified Artificial Intelligence Leader{' '}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* {location.pathname === '/partnerWithUs' && (
                    <div>
                      <p className="font-medium text-lg text-gray-900">
                        Registered address:
                      </p>
                      <p className="text-gray-700 transition text-sm mt-2">
                        Hno.438, pocket-4, sector-22, rohini, New Delhi
                      </p>
                      <p className="text-gray-700 transition text-sm mt-2">
                        Palpreneur web agreegator private limited
                        </p>
                    </div>
                  )} */}
                </div>

                {/* QUICK LINKS */}
                <div class="flex-col">
                  <p class="font-medium text-lg text-gray-900">Quick Links</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        to="/terms-conditions"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        {' '}
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Privacy_Policy"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        {' '}
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                    <Link
                          to="/register_form/register.html"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {' '}
                          Express-Checkout
                        </Link>
                    </li>
                    <li>
                      <Link
                        to="/StartTest"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        {' '}
                        CalAI-Test
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/IntrestForm"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        {' '}
                        Intrest-Form
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/partnerWithUs"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        {' '}
                        Partner With Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* BLOGS */}
                <div class="flex-col">
                  <p class="font-medium text-lg text-gray-900">Blogs</p>

                  <ul class="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        to="/Blog/Blog5"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        {' '}
                        The Present and Future of AI: Shaping Our Lives{' '}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Blog/Blog2"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        {' '}
                        Enhancing Software Development with Generative AI{' '}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Blog/Blog6"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        {' '}
                        Unlocking Creativity: ChatGPT's Role in Content Writing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Blog/Blog3"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        The Machine Learning Product Lifecycle
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Blog/Blog1"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        AI revolutionizes communication through NLP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Blog/Blog4"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        Maximize productivity: ChatGPT tools, tips, efficiency
                      </Link>
                    </li>
                  </ul>

                  {/* Subscribe to Newsletter */}
                </div>
              </div>
            </div>
            {/* COPYRIGHT */}
            <div class="mt-2 border-t border-gray-100 pt-4">
              <div class="sm:flex sm:justify-between">
                <p class="text-xs text-center text-gray-800">
                  &copy; 2024. California Artifical Intelligence Institute. All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
