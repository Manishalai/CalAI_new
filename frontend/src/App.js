import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home.jsx";
import Login from "./Screens/Login/Login.jsx";
import AID from "./Screens/Know_more/AID.jsx";
import AIM from "./Screens/Know_more/AIM.jsx";
import AIL from "./Screens/Know_more/AIL.jsx";
import PvP from "./Screens/TnC&PvP/PvPo.jsx";
import TNC from "./Screens/TnC&PvP/TNC.jsx";
import Blog_AI from "./Screens/Blogs/Blog6_AI.jsx";
import Blog_ES from "./Screens/Blogs/Blog3_ES.jsx";
import Blog_MP from "./Screens/Blogs/Blog5_MP.jsx";
import Blog_UC from "./Screens/Blogs/Blog4_UC.jsx";
import Blog_PF from "./Screens/Blogs/Blog2_PF.jsx";
import Blog_ML from "./Screens/Blogs/Blog1_ML.jsx";
import Checkout from "./Screens/Checkout/Checkout.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login&signup" element={<Login />} />
        <Route path="/AI_Developer" element={<AID />} />
        <Route path="/AI_Manager" element={<AIM />} />
        <Route path="/AI_Leader" element={<AIL />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Privacy_Policy" element={<PvP />} />
        <Route path="/Terms&Conditions" element={<TNC />} />
        <Route path="/Blog/Blog1" element={<Blog_AI />} />
        <Route path="/Blog/Blog2" element={<Blog_ES />} />
        <Route path="/Blog/Blog3" element={<Blog_ML />} />
        <Route path="/Blog/Blog4" element={<Blog_MP />} />
        <Route path="/Blog/Blog5" element={<Blog_PF />} />
        <Route path="/Blog/Blog6" element={<Blog_UC />} />
      </Routes>
    </Router>
  );
};

export default App;
