// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFQku0qD1q5GR4zFgH6_3G-tspbl6BOTc",
  authDomain: "transmuscle-849c5.firebaseapp.com",
  databaseURL: "https://transmuscle-849c5-default-rtdb.firebaseio.com",
  projectId: "transmuscle-849c5",
  storageBucket: "transmuscle-849c5.appspot.com",
  messagingSenderId: "405649869520",
  appId: "1:405649869520:web:b854b3f7631d22b4d56cd5",
  measurementId: "G-YFREY93XEP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
