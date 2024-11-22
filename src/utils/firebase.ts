// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmlhGHBVEe9i8EYSCPkArJW-Hz86DRUeY",
    authDomain: "vue-firebase-a6f75.firebaseapp.com",
    projectId: "vue-firebase-a6f75",
    storageBucket: "vue-firebase-a6f75.firebasestorage.app",
    messagingSenderId: "54166451591",
    appId: "1:54166451591:web:7257835969160068c4cf22"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };