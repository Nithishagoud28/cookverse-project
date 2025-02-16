import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js'

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD410-8O0XZhP0FMB50M5NZVIVVXzb9pw",
  authDomain: "cookverse-js.firebaseapp.com",
  projectId: "cookverse-js",
  storageBucket: "cookverse-js.firebasestorage.app",
  messagingSenderId: "696766616224",
  appId: "1:696766616224:web:26b8740d3b35cbc641efc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);



const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Siggned In Sucessfully");
      window.location.href = "login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Something Went Wrong");
      // ..
    });
});

document.getElementById("guest").onclick = function () {
  alert("Guest Logged In Sucessfully");
  window.location.href = "./home.html";
};

document.getElementById("guest-logout").onclick = function () {
  alert("Guest Logged Out Sucessfully");
  window.location.href = "./home.html";
};