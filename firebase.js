import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyAnFUVWGj7F3T7ZDBRrkmoQRw605i1xB3Q",
  authDomain: "admin-panel-for-my-portfolio.firebaseapp.com",
  projectId: "admin-panel-for-my-portfolio",
  storageBucket: "admin-panel-for-my-portfolio.appspot.com", // Ensure storageBucket is defined
  messagingSenderId: "357442455184",
  appId: "1:357442455184:web:cda087e96fbf1d2be4fa15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { auth, db, storage }; // Export storage to be used in your AdminPanel
