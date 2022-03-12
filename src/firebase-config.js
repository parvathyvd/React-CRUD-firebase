// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdZaK-TY2fYmqqa0aHC_Qb-kOSiOTs-0Q",
  authDomain: "react-book-40d69.firebaseapp.com",
  projectId: "react-book-40d69",
  storageBucket: "react-book-40d69.appspot.com",
  messagingSenderId: "434948376430",
  appId: "1:434948376430:web:8bef7492c2a156537d637f",
  measurementId: "G-NM5D3PWR6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);