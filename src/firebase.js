// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD8Kzp0TjyjYYjvSLnFTCVOw-HmWNv7akQ",
  authDomain: "crave-uploads.firebaseapp.com",
  projectId: "crave-uploads",
  storageBucket: "crave-uploads.appspot.com",
  messagingSenderId: "501111922513",
  appId: "1:501111922513:web:698b192a8d2c463fd37d70",
  measurementId: "G-1P3F5EFQQC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app)
