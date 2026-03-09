// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZlx7U-Rq5UTApFXW7wXO2Epyd1LBaHM",
  authDomain: "celina-acevedo-react.firebaseapp.com",
  projectId: "celina-acevedo-react",
  storageBucket: "celina-acevedo-react.firebasestorage.app",
  messagingSenderId: "643200313550",
  appId: "1:643200313550:web:cb4315ebdbfe0663a5489f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)