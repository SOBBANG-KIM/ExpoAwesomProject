// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD-m7KuBGjFH25tZWOZw9MKO87c5obgkc",
  authDomain: "react-native-todo-app-bef47.firebaseapp.com",
  projectId: "react-native-todo-app-bef47",
  storageBucket: "react-native-todo-app-bef47.firebasestorage.app",
  messagingSenderId: "234030261761",
  appId: "1:234030261761:web:5a092cb42e0c2c2762c200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;