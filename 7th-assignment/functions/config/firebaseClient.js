// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI_eLwzFyadNVDcCSNctVShLQvZCUGg4U",
  authDomain: "wesopt29-164ba.firebaseapp.com",
  projectId: "wesopt29-164ba",
  storageBucket: "wesopt29-164ba.appspot.com",
  messagingSenderId: "412183629866",
  appId: "1:412183629866:web:1cf249a1676ab91bdd7353",
  measurementId: "G-CX37ETK2YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);