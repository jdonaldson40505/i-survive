import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
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
const signupBtn = document.querySelector('#btn-register');
// const login = document.querySelector("#modal_form");
signupBtn.addEventListener('click', (e) =>{
    // e.preventDefault();
    const email = document.getElementById('email').value;
    // log.console(email);
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth,email,password).then(token =>{
        document.location.href = "client/messenger.html";
    })
    
})