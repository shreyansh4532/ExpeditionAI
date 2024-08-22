// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnKphd1SddmdfW0lA5ddKBxmhIYuqNuSQ",
  authDomain: "ai-trip-planner-fae56.firebaseapp.com",
  projectId: "ai-trip-planner-fae56",
  storageBucket: "ai-trip-planner-fae56.appspot.com",
  messagingSenderId: "434825633608",
  appId: "1:434825633608:web:42bb931e6e171574dc1d7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);