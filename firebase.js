// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v3.firebaseapp.com",
  projectId: "twitter-v3",
  storageBucket: "twitter-v3.appspot.com",
  messagingSenderId: "913687213025",
  appId: "1:913687213025:web:e9bf91d95237136e2358a0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();
export {app,db,storage}

