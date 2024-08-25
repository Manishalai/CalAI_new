// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth"; 
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPze9CSiP1l4AfUNFHHJBiGTiPUs_i5qI",
  authDomain: "calaisite.firebaseapp.com",
  databaseURL: "https://calaisite-default-rtdb.firebaseio.com",
  projectId: "calaisite",
  storageBucket: "calaisite.appspot.com",
  messagingSenderId: "137219193547",
  appId: "1:137219193547:web:6961a289776640ea47794e",
  measurementId: "G-CY4YK6JNEX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth, firestore, storage  };
