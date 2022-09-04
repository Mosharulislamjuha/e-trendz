// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxw6tVQYSUL8VlzlJ3Uu7GcAfk-fRtvOI",
  authDomain: "etrendz-4ab00.firebaseapp.com",
  projectId: "etrendz-4ab00",
  storageBucket: "etrendz-4ab00.appspot.com",
  messagingSenderId: "646484146579",
  appId: "1:646484146579:web:dd384c5522605f7b635066",
};

// Initialize Firebase
export const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};
