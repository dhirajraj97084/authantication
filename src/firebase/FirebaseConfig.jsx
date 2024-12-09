// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRF0mHQsUEhM-zuNZ0eFch64aNznnZJ20",
  authDomain: "auth-cb9a6.firebaseapp.com",
  projectId: "auth-cb9a6",
  storageBucket: "auth-cb9a6.firebasestorage.app",
  messagingSenderId: "277188067052",
  appId: "1:277188067052:web:96e924d2ae6cc1dacbefc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);