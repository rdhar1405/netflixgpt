// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA120BeYiRG1Oa_oTOtZPMDRslh48raq74",
  authDomain: "netflixgpt-e7614.firebaseapp.com",
  projectId: "netflixgpt-e7614",
  storageBucket: "netflixgpt-e7614.appspot.com",
  messagingSenderId: "444249246470",
  appId: "1:444249246470:web:02274148708db4ba15ec87",
  measurementId: "G-92Y7M5MW0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();