import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

const ProgramIntroVideo = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="w-full h-screen flex flex-col">
        <h2 className='ml-16 sm:ml-2 mt-8 mb-4 text-3xl text-[#074D8D] font-bold'>Program Intro Video</h2>
        <div className="w-full max-w-4xl mx-auto h-[430px] sm:h-2/5 p-4 sm:p-1 sm:m-0 rounded-lg shadow-lg bg-gray-100">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ziuk1rL4LK0?autoplay=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            className="rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            aut
          ></iframe>
        </div>
        <div className="w-full">
          <div className="text-lg text-gray-700 mx-16 sm:mx-2 my-4 p-6 ">
            <p className="mb-4">
              Experience the convenience of learning at your own pace with our
              self-paced video courses. Perfect for those who prefer flexibility
              and the ability to learn anytime, anywhere. Gain knowledge in a
              structured way with high-quality video content that you can
              revisit as needed.
            </p>
            <p>
              Our self-paced videos cover a wide range of topics and are
              designed to provide you with the knowledge and skills to excel.
              Whether you're looking to learn a new skill, advance your career,
              or simply broaden your knowledge, our self-paced videos offer a
              comprehensive learning experience.
            </p>
          </div>
          </div>
      </div>
    </>
  );
};

export default ProgramIntroVideo;
