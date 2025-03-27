// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyAqUhxza6DhTnIg7QxuFSoSHNlE1mSmX8Q",
  authDomain: "project-edffy.firebaseapp.com",
  projectId: "project-edffy",
  storageBucket: "project-edffy.firebasestorage.app",
  messagingSenderId: "896884206666",
  appId: "1:896884206666:web:75b110bbefe406b7ea8ab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;