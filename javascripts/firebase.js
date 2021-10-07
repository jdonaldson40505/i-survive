// import firebase libraries

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDrtrzP-Tf-VkA4aKFQjIkUcNYduxZmJQ",
  authDomain: "isurvive-c513b.firebaseapp.com",
  projectId: "isurvive-c513b",
  storageBucket: "isurvive-c513b.appspot.com",
  messagingSenderId: "251409467344",
  appId: "1:251409467344:web:759d25ce597d233620dbd5"
};

 


//   initialize Firiebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

//handle user signup
// get signup form
const signupForm = document.querySelector('#signupForm');
const signupBtn = document.querySelector('#btn-register');
signupBtn.addEventListener("click", (e)=>{
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    const cPassword = signupForm['cpassword'].value;
    if(email != "" && password != "" && cPassword != "")
    {
      if(password == cPassword)
      {
        createUserWithEmailAndPassword(auth,email,password);
        document.location.href = 'home.html';
      }
      else{
        alert('passwords do not match');
      }  
    }  
    else
    {
      alert('one or more fields need to be filled out.');
    }
});
