
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB0XhV4eZ9SVJ_GfdE7GAyH40XFco91esg",
  authDomain: "coffe-store-auth-f9e4f.firebaseapp.com",
  projectId: "coffe-store-auth-f9e4f",
  storageBucket: "coffe-store-auth-f9e4f.firebasestorage.app",
  messagingSenderId: "232248838879",
  appId: "1:232248838879:web:7a3fa2be6c91d5ffd3f76a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;