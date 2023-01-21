// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAO9FIOeo0v0lq2UXkAX0rPvd0LobHrj8",
  authDomain: "userauth-7270d.firebaseapp.com",
  projectId: "userauth-7270d",
  storageBucket: "userauth-7270d.appspot.com",
  messagingSenderId: "205253277591",
  appId: "1:205253277591:web:9717ed7ef0e7fa313b76d2",
  measurementId: "G-F2HNC15B0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);