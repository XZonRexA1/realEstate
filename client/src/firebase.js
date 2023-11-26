// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-e8ae1.firebaseapp.com",
  projectId: "real-estate-e8ae1",
  storageBucket: "real-estate-e8ae1.appspot.com",
  messagingSenderId: "218417050171",
  appId: "1:218417050171:web:74c6bdfabfeb16e0b7a21e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);