import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../images/calAILOGO.png";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogin = () => {
    navigate("/login&signup"); // Adjust the path to your login route
  };

  const handleProfile = () => {
    navigate("/user/Profile"); // Adjust the path to your profile route
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/"); // Adjust the path to your homepage or other desired page
    });
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <div>
        <div
          id="banner"
          className="flex bg-white w-full justify-between px-4 items-center"
        >
          <div className="flex items-center">
            <a href="/">
              <img className="h-[80px] p-4" src={logo} alt="CalAI-logo" />
            </a>
            <div className="mr-3 h-[60px] w-[4px] bg-[#074D8D]"></div>{" "}
            {/* Vertical Line */}
            <h1 className="text-[#074D8D] text-[25px] font-bold md:text-[14px]">
              <a href="/">California Artificial Intelligence Institute</a>
            </h1>
          </div>

          <div className="relative flex items-center">
            {currentUser ? (
              <>
                <button className="focus:outline-none" onClick={toggleDropdown}>
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt="User"
                      className="rounded-full"
                      style={{ width: "40px", height: "40px" }}
                    />
                  ) : (
                    <AccountCircleIcon
                      className="text-gray-300"
                      style={{ fontSize: "40px" }}
                    />
                  )}
                </button>
                {dropdownVisible && (
                  <div
                    className="absolute right-0 w-40 bg-white border border-gray-200 rounded shadow-lg z-20"
                    style={{ top: "calc(100% + 10px)" }} // Positioned below the icon
                  >
                    <button
                      onClick={handleProfile}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                      <AccountBoxIcon className="mr-2 text-[#CBA135]" />
                      Profile
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                      <LogoutIcon className="mr-2 text-rose-600" />
                      Sign Out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex justify-center items-center">
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 text-[1rem] text-white bg-blue-600 font-bold rounded hover:bg-blue-700 md:text-[14px]"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
        <hr className="bg-gray-500 w-full h-3/4" />
        <div className="flex flex-row md:flex-row items-center justify-between px-4 py-2 w-full md:hidden">
          <div className="w-full md:w-auto">
            <div className="flex justify-start text-[0.875rem] md:text-xs whitespace-nowrap">
              <EmailIcon className="mr-2 md:hidden" />
              Email: <strong className="ml-1">info@calai.org</strong>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex justify-end text-[0.875rem] md:text-xs whitespace-nowrap">
              <CallIcon />
              Call Us: <strong className="ml-1">+1 334-432-8116</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
