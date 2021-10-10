import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyCDrtrzP-Tf-VkA4aKFQjIkUcNYduxZmJQ",
authDomain: "isurvive-c513b.firebaseapp.com",
projectId: "isurvive-c513b",
storageBucket: "isurvive-c513b.appspot.com",
messagingSenderId: "251409467344",
appId: "1:251409467344:web:759d25ce597d233620dbd5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
//const userId = auth.currentUser.uid;
const db = getDatabase(app);

const groupid = 0;

const sub = document.querySelector('#subBtn');
sub.addEventListener('click', (e)=>{
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    set(ref(db, 'users/2'), {
        'user': fname+ ' ' + lname,
        'groupName': groupid 
        });
    document.location.href('client/messenger.html');
}); 