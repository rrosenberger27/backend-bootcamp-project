// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIxf6HLUkpH9f-Bt0IlmtGNgYO4NkiCDg",
  authDomain: "bootcamp-project-1f9c3.firebaseapp.com",
  projectId: "bootcamp-project-1f9c3",
  storageBucket: "bootcamp-project-1f9c3.appspot.com",
  messagingSenderId: "959551994450",
  appId: "1:959551994450:web:9cc0d83fdf40f902cebd8b",
  measurementId: "G-H7T7CDTGZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);