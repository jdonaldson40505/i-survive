// import firebase libraries

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

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
        createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {

          // Signed in 
          const user = userCredential.user;
          document.location.href = 'createAccount.html';
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
        // const user = userCredential.user;
        document.location.href = 'createAccount.html';
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



//save user in database
// var groupId = 1;
// // function send_message()
// // {
// const messageBtn = document.querySelector('#sendButton');
// messageBtn.addEventListener("click", (b)=>{
//   alert("here I am");
//   const message = document.querySelector('#messageBox').value;
//   const db = getDatabase();
//   set(ref(db, 'group/messages'), {
//     'message': message,
//     'author': "don",
//     'messageId': 2,
//     'timestamp': "yesterday" 
//   });
// })
// })


//get messages

//get users for group