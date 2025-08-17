// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace these with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCpqGd18MZdRsxRKy3snCU7nfXi4pA1RfA",
  authDomain: "event-eplorer.firebaseapp.com",
  projectId: "event-eplorer",
  storageBucket: "event-eplorer.firebasestorage.app",
  messagingSenderId: "888312703116",
  appId: "1:888312703116:web:7bf1778530ce8d0e1af3a9",
  measurementId: "G-WQ782PZ805"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
