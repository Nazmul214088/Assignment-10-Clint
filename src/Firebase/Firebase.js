// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuMRuXh4iWj-q4AFV41FyBzQbxfC5Bc6k",
  authDomain: "assignment-10-5fd2c.firebaseapp.com",
  projectId: "assignment-10-5fd2c",
  storageBucket: "assignment-10-5fd2c.firebasestorage.app",
  messagingSenderId: "787533418691",
  appId: "1:787533418691:web:f35317e17107ed44711276",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
