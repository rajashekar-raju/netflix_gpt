// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHZyIfWg0T5zImol1vparCpcraMjb5s40",
  authDomain: "netflixgpt-427f5.firebaseapp.com",
  projectId: "netflixgpt-427f5",
  storageBucket: "netflixgpt-427f5.appspot.com",
  messagingSenderId: "788104646394",
  appId: "1:788104646394:web:a7f9bbb888f8c021158343",
  measurementId: "G-Y5VQLHTJ0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();