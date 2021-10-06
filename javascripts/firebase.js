// import firebase libraries
{/* <script type="module" src="firebase.js"></script> */}

import { initializeApp } from "../node_modules/firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "../node_modules/firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBGgLKR3AVxxw0P6KLiySpve8K6Y7aBrYU",
    authDomain: "i-survive-bebd8.firebaseapp.com",
    projectId: "i-survive-bebd8",
    storageBucket: "i-survive-bebd8.appspot.com",
    messagingSenderId: "408996964951",
    appId: "1:408996964951:web:ca90980396dc376c7b5112",
    measurementId: "G-B3668HE15F"
  };

 


//   initialize Firiebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// get signup form
const signupForm = document.querySelector('#signupForm');
// const signupBtn = document.querySelector('#btn-register');
signupForm.addEventListener('submit', (e)=>{
    alert('i am here');
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    const cPassword = signupForm['cpassword'].value;
    console.log(email,password,cPassword);
})
// $("#cancel").click(function(){
//     location.href="home.html"
// });

// $("#btn-register").click(function()
// {
//     alert("the button was clicked");
//     var email = $('#email').value;
//     var password = $('#password').value;
//     var cPassword = $('#cpassword').value;

//     if (email != "" && password != "" && cPassword != "" )
//     {
//         if(password == cPassword)
//         {
//             createUserWithEmailAndPassword(auth, email,password).then();
//         }
//     }
// });