// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSUUwsjMmMM3hao8uV_1p2qFtF7rX97BE",
  authDomain: "medvaultxr.firebaseapp.com",
  projectId: "medvaultxr",
  storageBucket: "medvaultxr.appspot.com", // Fixed the storageBucket
  messagingSenderId: "1018111378864",
  appId: "1:1018111378864:web:9c81a8b4a0734fa95c0275",
  measurementId: "G-439J5RX9DF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export the app instance if needed
export default app;
