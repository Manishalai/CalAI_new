import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import loginImage from "../../images/login.svg";
import registerImage from "../../images/register.svg";
import "./login.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, firestore } from "../../firebase/firebase";
import { collection, setDoc, doc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

    // Cleanup function to remove event listeners
    return () => {
      sign_up_btn.removeEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
      sign_in_btn.removeEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    };
  }, []);

  const saveEmailIfCheckout = async (email, from) => {
    if (email) {
      const collectionName =
        from === "/checkout" ? "apply_before_login" : "login_before_apply";
      try {
        const docRef = doc(firestore, collectionName, email); // Create a reference with the email as the document ID
        await setDoc(docRef, {
          email: email,
          timestamp: new Date(),
        });
        console.log("Email saved with ID: ", email);
      } catch (error) {
        console.error("Error saving email: ", error);
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Signed Up:", user);

      // Call saveEmailIfCheckout function
      await saveEmailIfCheckout(email, from);

      navigate(from, {
        state: {
          courseName: location.state?.courseName,
          price: location.state?.price,
        },
      });
    } catch (error) {
      console.error("Error Signing Up:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Logged In:", user);

      // Call saveEmailIfCheckout function
      await saveEmailIfCheckout(email, from);

      navigate(from, {
        state: {
          courseName: location.state?.courseName,
          price: location.state?.price,
        },
      });
    } catch (error) {
      console.error("Error Logging In:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    console.log("creating user");
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Signed In:", user);

      // Call saveEmailIfCheckout function
      await saveEmailIfCheckout(user.email, from);

      navigate(from, {
        state: {
          courseName: location.state?.courseName,
          price: location.state?.price,
        },
      });
    } catch (error) {
      console.error("Error with Google Sign In:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={handleLogin}>
              <h2 className="title">Sign In</h2>
              <button
                type="button"
                id="google-signin-btn"
                className="login-with-google-btn"
                onClick={handleGoogleSignIn}
              >
                Sign in with Google
              </button>
              <p className="social-text">OR</p>
              <div className="input-field">
                <i className="fas fa-user">
                  <PersonIcon />
                </i>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <PasswordIcon />
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>

            <form className="sign-up-form" onSubmit={handleSignUp}>
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user">
                  <PersonIcon />
                </i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope">
                  <EmailIcon />
                </i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <PasswordIcon />
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Sign Up" className="btn solid" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>Click below to Register</p>
              <button className="btn transparent" id="sign-up-btn">
                Sign Up
              </button>
            </div>
            <img src={loginImage} className="image" alt="register images" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>Click below to Login</p>
              <button className="btn transparent" id="sign-in-btn">
                Sign In
              </button>
            </div>
            <img src={registerImage} className="image" alt="login image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
