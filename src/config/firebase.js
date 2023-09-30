// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4dP9rKpv93TTRfFOy4nKz0MjCTGupizk",
  authDomain: "post-nest.firebaseapp.com",
  projectId: "post-nest",
  storageBucket: "post-nest.appspot.com",
  messagingSenderId: "154442836454",
  appId: "1:154442836454:web:8c0ea733609b8d59684e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);