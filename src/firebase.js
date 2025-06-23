// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsd9Vra4-MboSWLElPzcrQSNo5CTt55Es",
  authDomain: "dinesh-portfolio-93b90.firebaseapp.com",
  projectId: "dinesh-portfolio-93b90",
  storageBucket: "dinesh-portfolio-93b90.appspot.com", // corrected
  messagingSenderId: "714521333506",
  appId: "1:714521333506:web:e5af0a19c1efdddabbfc1b",
  measurementId: "G-DQM277S2WZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
