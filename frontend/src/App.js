import React from "react";
import Header from "./header/Header.js";
import Navbar from "./navbar/Navbar.js";
import Footer from "./footer/Footer.js";
import Courses from "./courses/Courses.js";
import Speaker from "./speakers/Speaker.js";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Courses />
      <Speaker />
      <Footer />
    </div>
  );
};

export default App;
