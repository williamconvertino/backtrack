// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRBH4jaadBoa0C61UF6rpgo9KCJh2b8OQ",
    authDomain: "back-track-175d4.firebaseapp.com",
    projectId: "back-track-175d4",
    storageBucket: "back-track-175d4.appspot.com",
    messagingSenderId: "267195084669",
    appId: "1:267195084669:web:614d8eb6612ab5a720a614",
    measurementId: "G-128SHZBHX5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };


