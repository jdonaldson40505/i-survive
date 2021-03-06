//import { group } from "console";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
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

//const userId = auth.currentUser.uid;
const db = getDatabase(app);

var groupid = 0;
const sub = document.querySelector('#subBtn');
sub.addEventListener('click', (e)=>{
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;

          //set user id in db
          groupid = Math.floor(Math.random()*8);
          set(ref(db, 'users/'+ uid), {
            'user': fname+ ' ' + lname,
            'groupName': groupid 
            });
          set(ref(db, 'groups/' +groupid+'/users/'+fname+ ' ' + lname+'/'),{
            
              'uid': uid
            
          });
          // ...
          window.location.href='client/messenger.html';
        } 
        else {
          
          // User is signed out
          window.location.href='client/messenger.html';
        }
   
    });
}); 

