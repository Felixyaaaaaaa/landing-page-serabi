// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // ✅ tambahkan ini

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHR9xb4zK82JVLSHH-ReBeWYo_f7WjCAI",
  authDomain: "serabi-notosuman-visitcount.firebaseapp.com",
  databaseURL: "https://serabi-notosuman-visitcount-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "serabi-notosuman-visitcount",
  storageBucket: "serabi-notosuman-visitcount.firebasestorage.app",
  messagingSenderId: "572701071590",
  appId: "1:572701071590:web:694689c736a98edfac4327",
  measurementId: "G-85YWRYR24M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app); // ✅ tambahkan ini

// ✅ Ekspor db agar bisa diimport di App.js
export { db };
