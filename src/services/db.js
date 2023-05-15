// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeARFvp_I0e7Oy6YgXz5IbCyBMA-VEizw",
  authDomain: "mi-segunda-app-17d57.firebaseapp.com",
  projectId: "mi-segunda-app-17d57",
  storageBucket: "mi-segunda-app-17d57.appspot.com",
  messagingSenderId: "967008598112",
  appId: "1:967008598112:web:95c61eb8ccccfdde6beb05"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()