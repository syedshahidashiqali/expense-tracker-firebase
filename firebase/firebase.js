// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdZ6xucg4a7SHv88fW_y6qhWvDyHlYFcY",
  authDomain: "expense-tracker-87643.firebaseapp.com",
  projectId: "expense-tracker-87643",
  storageBucket: "expense-tracker-87643.appspot.com",
  messagingSenderId: "1090856346510",
  appId: "1:1090856346510:web:a1318b350b783acaf2fadf",
  measurementId: "G-NKYC28N3JV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
