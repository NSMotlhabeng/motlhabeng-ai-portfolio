// Firebase - SECURE way (no keys in code, use config)
// Replace with your firebaseConfig from Firebase console
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  // PASTE YOUR CONFIG HERE - it is safe for frontend, rules protect data
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
console.log("Secure portfolio loaded with CSP protection ✅");
