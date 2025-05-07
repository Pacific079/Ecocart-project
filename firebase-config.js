// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBftBBS__W32K5hE2K1g_O8B3dUFyy3o3o",
  authDomain: "ecocart-form.firebaseapp.com",
  projectId: "ecocart-form",
  storageBucket: "ecocart-form.firebasestorage.app",
  messagingSenderId: "321964238504",
  appId: "1:321964238504:web:28ba4923fb1ed580b5c49d",
  measurementId: "G-4N61KGS0K6",
  databaseURL: "https://ecocart-form-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export database for use in other files
export { database };
