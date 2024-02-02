// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoYFlesombuaRwagq4MNB3BlDWQVIGz4E",
    authDomain: "account-management-c805f.firebaseapp.com",
    projectId: "account-management-c805f",
    storageBucket: "account-management-c805f.appspot.com",
    messagingSenderId: "811500866767",
    appId: "1:811500866767:web:ce9b31e48109230ed93bba"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;