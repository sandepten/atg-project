// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2nP8nWRtzenn87eCakqsi_L46StwgL5s",
  authDomain: "atg-project-37554.firebaseapp.com",
  projectId: "atg-project-37554",
  storageBucket: "atg-project-37554.appspot.com",
  messagingSenderId: "882504596083",
  appId: "1:882504596083:web:2f8afc11d6c395d0ea4806",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default app;
export { auth };
