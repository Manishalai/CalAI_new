import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import manab from '../../images/manab.jpeg';
import Sulabh from '../../images/sulabh.jpeg';
import Dhiraj from '../../images/dhiraj.jpeg';
import Pankaj from '../../images/pk.jpeg';
import Atul from '../../images/atul.jpeg';
import Amitesh from '../../images/amitesh.jpeg';
import LinkedIn_logo from '../../images/linkedin-2815969.jpg';
import aadil from '../../images/aadil.jpg'

const testimonials = [
  {
    name: 'Manab Majumdar',
    position: 'Management Consultant @ Accenture',
    image: manab,
    linkedin:
      'https://www.linkedin.com/feed/update/urn:li:activity:7216303129766580224/',
    text: `Being selected for the CAIL™ Programme by CalAI is a pivotal step
              forward in my management consulting career. The self-paced nature
              of the program allows me to tailor my learning around my
              professional commitments, ensuring I can apply AI leadership
              principles directly to my consulting practice. Already, I'm
              impressed by the comprehensive curriculum, which seamlessly
              integrates theory with practical insights crucial for navigating
              today's AI landscape.`,
    country: 'UAE',
    certification: 'Certified Artificial Intelligence Leader (CAIL™)',
    exCompany: 'Ex-Deloitte, Oracle Top-Voice',
  },
  {
    name: 'Aadil Aziz Fatmi',
    position: 'Head of HR @ ALTRAD',
    image: aadil,
    linkedin:
      'https://www.linkedin.com/posts/aadilfatmi_calai-california-artificial-intelligence-activity-7234432097115938816-QuAq/?utm_source=combined_share_message&utm_medium=member_desktop',
    text: `I’m happy to share my experience with the Certified Artificial Intelligence Leader (CAIL) program at the CalAI :California Artificial Intelligence Institute. I chose this program because it focuses on developing leadership skills and applying AI strategically.

The program has been a great fit for my busy schedule with its flexible pace. It dives deep into AI, offering both the theory and practical tools that have already started making a difference in my projects.

The knowledge I’ve gained is practical and directly useful. The certification helps leaders like me to make the most of AI. I’d recommend the CalAI :California Artificial Intelligence Institute program to any leader wanting to use AI in their strategy. It’s a smart investment for your growth and your organisation’s success.`,
    country: 'UAE',
    certification: 'Certified Artificial Intelligence Leader (CAIL™)',
    exCompany: 'Ex-Interserve, Ex-Topaz Energy and Marine',
  },
  {
    name: 'Pankaj Kumar',
    position: 'Tech Team Lead @ PropertyGuru Group',
    image: Pankaj,
    linkedin:
      'https://www.linkedin.com/posts/pankajkumarverma_calai-california-artificial-intelligence-activity-7219924065426268160-ms4J/?utm_source=share&utm_medium=member_desktop',
    text: `This certification is unparalleled in its scope and depth, making it the premier choice for those looking to transition into the AI field.

          The curriculum is exceptional, providing a comprehensive understanding of AI development and its strategic applications. It is a transformative journey, equipping me with the tools to lead AI initiatives and drive innovation in AI development.`,
    country: 'INDIA',
    certification: 'Certified Artificial Intelligence Developer (CAID™)',
    exCompany: 'Ex-HSBC, Ex-Cognizant',
  },
  {
    name: 'Atul Naik',
    position: 'Associate Vice President @ Barclays',
    image: Atul,
    linkedin:
      'https://www.linkedin.com/posts/atulnaik_aidevelopment-innovation-certifiedaideveloper-activity-7219732006429949952-vVKk/?utm_source=share&utm_medium=member_android',
    text: `This certification is a game-changer for those wanting to transition into AI development.

The curriculum stands out for its depth and practical relevance, offering everything needed to implement AI effectively. The knowledge and skills gained are instrumental in fostering innovation and driving success in AI projects. Proud to be a part of this elite program and highly recommend it to all aspiring AI developers.`,
    country: 'INDIA',
    certification: 'Certified Artificial Intelligence Developer (CAID™)',
    exCompany: 'Ex-HSBC GLT',
  },
  {
    name: 'Sulabh Bhanti',
    position: 'Director APAC - JLL Technologies',
    image: Sulabh,
    linkedin:
      'https://www.linkedin.com/posts/sulabhbhanti_artificialintelligence-leadership-innovation-activity-7220424702341627904-vEcu/?utm_source=share&utm_medium=member_android',
    text: `This certification is unparalleled in its scope and depth, making it the premier choice for leaders who want to harness AI's potential.

The curriculum is exceptional, providing a comprehensive understanding of AI and its strategic applications. It is a transformative journey, equipping me with the tools to lead AI initiatives and drive innovation in my organization. I highly recommend this program to any leader aiming to excel with AI.`,
    country: 'USA',
    certification: 'Certified Artificial Intelligence Leader (CAIL™)',
    exCompany: 'Ex-Transit Link Pte Ltd',
  },
  {
    name: 'Amitesh Jain',
    position: 'Assistant Vice President @ Credit Suisse',
    image: Amitesh,
    linkedin:
      'https://www.linkedin.com/posts/amitesh-jain-aa4b6732_calai-aileadership-cailprogramme-activity-7220388903671783424-xi1o/?utm_source=share&utm_medium=member_ios',
    text: `This certification is a game-changer for those wanting to transition into AI development.

The curriculum stands out for its depth and practical relevance, offering everything needed to implement AI effectively. The knowledge and skills gained are instrumental in fostering innovation and driving success in AI projects. Proud to be a part of this elite program and highly recommend it to all aspiring AI developers.`,
    country: 'INDIA',
    certification: 'Certified Artificial Intelligence Leader (CAIL™)',
    exCompany: 'Ex-Barclays, Ex-Bentley Systems',
  },
  {
    name: 'Dhiraj Saxena',
    position: 'AVP @ Barclays',
    image: Dhiraj,
    linkedin:
      'https://www.linkedin.com/posts/dhiraj-saxena-0182ba14_cail-calai-artificialintelligence-activity-7220703511628369920-fS2K/?utm_source=share&utm_medium=member_android',
    text: `This exceptional program has been pivotal in advancing my AI leadership skills. After thorough research, I chose this program, which has proven to be the best decision for my career.
The comprehensive knowledge and strategies I've gained drive innovation and significantly enhance my leadership effectiveness. The program's emphasis on ethical AI practices and future trends has been particularly enlightening, ensuring we lead with integrity and foresight.`,
    country: 'INDIA',
    certification: 'Certified Artificial Intelligence Leader (CAIL™)',
    exCompany: 'Ex-Coforge',
  },
];

const Speaker = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 5000, // Slide change interval (in milliseconds)
    swipe: true, // Enable swipe functionality (usually enabled by default)
    responsive: [
      {
        breakpoint: 1000, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex items-center justify-center bg-gray-300">
      <div className="mx-8 my-6 w-full px-9">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-0 bg-white border-gray-500 border-2 rounded-lg"
            >
              <div className="flex flex-col">
                <div className="flex flex-row md:flex-col items-center">
                  <div className="flex md:w-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 md:w-full md:h-full object-cover m-4 md:m-0"
                    />
                  </div>
                  <div className="flex flex-col text-left md:w-full p-2">
                    <div className="flex flex-row">
                      <div className="w-full">
                        <h3 className="text-xl font-semibold text-blue-900 md:text-lg">
                          {testimonial.name}
                        </h3>
                      </div>
                      <div>
                        <a href={`${testimonial.linkedin}`}>
                          <img
                            src={LinkedIn_logo}
                            className="w-8 h-8 md:w-6 md:h-6"
                          />
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-600 md:text-sm">
                      {testimonial.position}
                    </p>
                    <hr className="w-full border-t my-1 border-gray-400" />
                    <p className="text-gray-600 md:text-sm">
                      {testimonial.certification}
                    </p>
                    <hr className="w-full border-t my-1 border-gray-400" />
                    <p className="text-gray-600 md:text-sm">
                      {testimonial.exCompany}
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-2">
                  <p className="text-gray-700 md:text-sm">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Speaker;
