import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 justify-center items-center">
        <div className="flex flex-col space-y-4 text-center text-white">
          <h1 className="text-4xl font-bold"> Under Development :(</h1>
          <p className="text-xl">
            This page is currently being built. Check back soon!
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/">
              <a
                href="#"
                className="px-4 py-2 bg-gray-800 hover:bg-opacity-75 text-white rounded-md"
              >
                Return to Home Page
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
