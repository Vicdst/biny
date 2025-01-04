// Import the Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3qGCPOvXCaet2Z6T4F-rgeo1-rOgAti4",
  authDomain: "biny-suggestion.firebaseapp.com",
  projectId: "biny-suggestion",
  storageBucket: "biny-suggestion.firebasestorage.app",
  messagingSenderId: "745044704489",
  appId: "1:745044704489:web:90cba968132f75adbb0478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById('suggestionForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const suggestion = document.getElementById('suggestion').value;

  try {
    await addDoc(collection(db, "suggestions"), { text: suggestion });
    alert("Suggestion submitted successfully!");
    document.getElementById('suggestion').value = ""; // Clear the form
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Failed to submit suggestion. Try again.");
  }
});
