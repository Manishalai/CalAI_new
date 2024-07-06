import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
import Profile from "./Screens/Profile/Profile.jsx";
import Success from "./Screens/PostCheckout/Success.jsx";
import Cancel from "./Screens/PostCheckout/Cancel.jsx";
import { ContactUs } from "./components/contact/Contact.js";
import StartTest from "./components/calAI_test/StartTest.js";
import TestPage from "./components/calAI_test/ScholarshipTest.js";
import IntrestForm from "./components/calAI_test/IntrestForm.js";
import PartnerWithUs from "./Screens/Partner/partner.js";
import AboutUs from "./Screens/AboutUs/AboutUs.js";
import CertificationPage from "./Screens/Certifications/Certifications.js";
import ExpressCheckout from "./Screens/Checkout/Express_Checkout.jsx";
import PayPal270 from "./Screens/Checkout/PayPal270.jsx";
import PayPal400 from "./Screens/Checkout/PayPal400.jsx";
import PayPal480 from "./Screens/Checkout/PayPal480.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login&signup" element={<Login />} />
        <Route path="/AI_Developer" element={<AID />} />
        <Route path="/AI_Manager" element={<AIM />} />
        <Route path="/AI_Leader" element={<AIL />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/user/Profile" element={<Profile />} />
        <Route path="/Privacy_Policy" element={<PvP />} />
        <Route path="/Terms&Conditions" element={<TNC />} />
        <Route path="/StartTest" element={<StartTest />} />
        <Route path="/IntrestForm" element={<IntrestForm />} />
        <Route path="/calAIscholarshipTestPage" element={<TestPage />} />
        <Route path="/Blog/Blog1" element={<Blog_AI />} />
        <Route path="/Blog/Blog2" element={<Blog_ES />} />
        <Route path="/Blog/Blog3" element={<Blog_ML />} />
        <Route path="/Blog/Blog4" element={<Blog_MP />} />
        <Route path="/Blog/Blog5" element={<Blog_PF />} />
        <Route path="/Blog/Blog6" element={<Blog_UC />} />
        <Route path="/partnerWithUs" element={<PartnerWithUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Certifications" element={<CertificationPage />} />
        <Route path="/ExpressCheckout" element={<ExpressCheckout />} />
        <Route path="/PayPal/270" element={<PayPal270 />} />
        <Route path="/PayPal/400" element={<PayPal400 />} />
        <Route path="/PayPal/480" element={<PayPal480 />} />
      </Routes>
    </Router>
  );
};

export default App;
