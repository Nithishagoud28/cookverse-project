// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD410-8O0XZhP0FMB50M5NZVIVVXzb9pw",
  authDomain: "cookverse-js.firebaseapp.com",
  projectId: "cookverse-js",
  storageBucket: "cookverse-js.firebasestorage.app",
  messagingSenderId: "696766616224",
  appId: "1:696766616224:web:26b8740d3b35cbc641efc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get user inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Firebase Sign-In
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Logged in Successfully!");
        window.location.href = "loading.html"; // Redirect to homepage or dashboard
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert("Login Failed: " + error.message);
      });
  });
});
