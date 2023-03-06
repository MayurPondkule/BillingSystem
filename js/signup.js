import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiKJR7OX9EIOuLKM_741wy-vMtB5nwRc8",
  authDomain: "billing-system9.firebaseapp.com",
  projectId: "billing-system9",
  storageBucket: "billing-system9.appspot.com",
  messagingSenderId: "84625039509",
  appId: "1:84625039509:web:04b65c0b62b4b89f2a7b9c",
  measurementId: "G-JE9PGWDCXV"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const auth = getAuth()



const email = document.getElementById("email"); 
const password = document.getElementById("password");
const signupbtn = document.getElementById("signupbtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
      location.href="./index.html";
  }
});

// 
signupbtn.addEventListener('click', function()
{
  //alert("working");
  if(email.value!=null||password.value!=null)
  {
      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // alert("user created");
        location.href="./login.html";
         console.log(userCredential)
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage+" "+errorCode)
      });
  }
  else{
      alert("Empty fields are not allowed");
  }
 
});