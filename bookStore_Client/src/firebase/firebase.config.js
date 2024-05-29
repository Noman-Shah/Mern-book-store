// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJRsTOJN0tQ_pwxERgzyyYHCaFzGkgqr0",
  authDomain: "mern-bookstore-inventory-caca0.firebaseapp.com",
  projectId: "mern-bookstore-inventory-caca0",
  storageBucket: "mern-bookstore-inventory-caca0.appspot.com",
  messagingSenderId: "514245245433",
  appId: "1:514245245433:web:c1e73f189c7a0a3c616528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;