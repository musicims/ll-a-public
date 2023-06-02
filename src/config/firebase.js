// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "BLAH",
  authDomain: "BLAH",
  projectId: "BLAH",
  storageBucket: "BLAH",
  messagingSenderId: "BLAH",
  appId: "BLAH",
  measurementId: "BLAH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default db;
