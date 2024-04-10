// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-system-c61e9.firebaseapp.com",
  projectId: "real-estate-system-c61e9",
  storageBucket: "real-estate-system-c61e9.appspot.com",
  messagingSenderId: "476617701760",
  appId: "1:476617701760:web:f407a87d6fa4fce0e02965"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
