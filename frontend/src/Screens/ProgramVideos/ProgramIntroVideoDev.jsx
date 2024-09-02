import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { getVideoUrl } from '../../firebase/getVideoUrl';

const ProgramIntroVideoDev = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const videoName = 'videoplaybackdev.mp4';

  useEffect(() => {
    const fetchVideoUrl = async () => {
      const url = await getVideoUrl(videoName);
      if (url) {
        setVideoUrl(url);
      }
    };

    fetchVideoUrl();
  }, [videoName]);

  return (
    <>
      <Header />
      <Navbar />
      <div className="w-full h-screen flex flex-col">
        <h2 className="ml-16 sm:ml-2 mt-8 mb-4 text-3xl text-[#074D8D] font-bold">
          Program Intro Video
        </h2>
        <div className="w-full max-w-4xl mx-auto p-1 sm:p-1 sm:m-0 rounded-lg shadow-lg bg-gray-100">
          {videoUrl ? (
            <div className="relative pb-[56.25%] h-0">
              <video
              controls
                className="absolute top-0 left-0 w-full h-full rounded-md"
                controlsList="nodownload"
                autoPlay 
                muted 
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="w-full h-[530px] sm:h-[300px] flex items-center justify-center">
              <svg
                className="animate-spin h-12 w-12 sm:h-10 sm:w-10 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
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

export default ProgramIntroVideoDev;
