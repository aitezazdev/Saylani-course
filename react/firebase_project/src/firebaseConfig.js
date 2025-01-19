// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ProcessingInstruction.env.FIREBASE_API_KEY,
  authDomain: ProcessingInstruction.env.FIREBASE_AUTH_DOMAIN,
  projectId: ProcessingInstruction.env.FIREBASE_PROJECT_ID,
  storageBucket: ProcessingInstruction.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ProcessingInstruction.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: ProcessingInstruction.env.FIREBASE_APP_ID,
  measurementId: ProcessingInstruction.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);