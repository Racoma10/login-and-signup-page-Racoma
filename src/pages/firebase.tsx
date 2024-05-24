// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCir4yuInbVFwtSJinMEh9Ae5ATAz25tRg",
  authDomain: "racoma-login-signup-page.firebaseapp.com",
  projectId: "racoma-login-signup-page",
  storageBucket: "racoma-login-signup-page.appspot.com",
  messagingSenderId: "542045597089",
  appId: "1:542045597089:web:3a0620af1c4f9fc1c3efe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
