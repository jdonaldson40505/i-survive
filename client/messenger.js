/**
 * All functions related to the messaging functionality. 
 */
//  import { get } from "http";
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
 
  
 
 
 //   initialize Firiebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
//  const userId = auth.currentUser.uid;
 const database = getDatabase(app);

 //get user info 
//  const dbref = ref(getDatabase());
//  const name = setProfileInfo('name');
//  const groupName = setProfileInfo('groupName');
//  function setProfileInfo(item){
//  get(child(dbRef, `users/` + userId + "/" + item)).then((snapshot) => {
//     if (snapshot.exists()) {
//       return index = snapshot.val();
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
// }

//log out user.
const signout = document.querySelector('#signOut');
signout.addEventListener('click', (e)=>{
    auth.signOut();
    document.location.href='../Hackathonn index.html';
})


//set listener for message count
// const db = getDatabase();
// messageCount = ref(db, 'messages/' + groupName + '/message count');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

//  //database format
// //  {
// //     "groups" : {
// //       "groupName" : { 
// //         "users" : {
// //           "userid" : { //use user id for auth
// //             "name" : "don cheedle"
// //           }
// //         }
// //       }
// //     },
// //     "messages" : {
// //       "groupName" : {
// //         "message count": 1 add number each message to update sequential Id
// //         "sequentialId" : {
// //           "author" : "don cheedle", 
// //           "message" : "hello",
// //           "timestamp" : 777
// //         }
// //       }
// //     }
//         // "users" : {
//         //     "userid" : {
//         //         "groupName": "groupName"
//         //         "name": "don cheedle"
//         //     }
//         // }
// //   }

// const messageBtn = document.querySelector('#sendButton');
// messageBtn.addEventListener("click", (b)=>{
//   alert("here I am");

//   //create new message with meta data and update message count for next message to be sent.
//   messageCount += 1;
//   const message = document.querySelector('#messageBox').value;
//   const db = getDatabase();
//   set(ref(db, 'messages/' + groupName + '/' + messageCount), {
//     'message': message,
//     'author': name,
//     'timestamp': "yesterday" 
//   });
//   set(ref(db, 'messages/' + groupName + '/' + messageCount),{
//       "message count" : messageCount
//   });

//   //initiate send message
//   if  (document.getElementById('messageBox').value.trim() != '')
//     {
//         // Create JSON message object to send to db.
//         var newMessage = {
//             'group':'12345', // Find a way to get group ID (probably assigned by db)
//             'user':'John Doe', // Test user, in practice pull from account username/id.
//             'content':document.getElementById('messageBox').value, // Pull text from message box.
//         };

//         /**
//         if (document.getElementById('localUser').checked)
//         {
//             newMessage['user'] = 'local'
//         }
//         */

//         // Send message object to db.
//         var messageList = [];
//         messageList.push(newMessage);
//         loadMessage(messageList);

//         // Clear previous input from textbox.
//         document.getElementById("messageInput").reset();
//     }
// })
// document.getElementById('sendButton').addEventListener('keydown', (e)=>
// {
//     if (Event.code === 'Enter')
//     {
//         sendMessage();
//     }
// });


// /**
//  * Loads messages from JSON objects into chat box.
//  * @param {JSON[]} messageList 
//  */
// function loadMessage(messageList)
// {
//     for (let message of messageList)
//     {
//         // Create container for message body.
//         var container = document.createElement('div');
//         container.classList.add('spacer')
//         // Create the message body element.
//         var body = document.createElement('div');
//         container.appendChild(body);

//         /**
//         if (message['user'] == 'local')
//         {
//             body.classList.add('local');
//         } */
//         body.classList.add('message');

//         // Add message content to body.
//         var content = document.createElement('p');
//         content.innerHTML = message['content'];
//         body.appendChild(content);

//         // Add user's name to end of message.
//         var user = document.createElement('p');
//         user.classList.add('user');
//         user.innerHTML = message['user'];
//         body.appendChild(user);

//         // Add message as child of messageContainer.
//         document.getElementById('messageContainer').appendChild(container);

//         var chatHistory = document.getElementById('messageContainer');
//         chatHistory.scrollTop = chatHistory.scrollHeight;
//     }
// }

// /**
//  * Sends a new message from the user to the database.
//  */
// function sendMessage()
// {
//     if  (document.getElementById('messageBox').value.trim() != '')
//     {
//         // Create JSON message object to send to db.
//         var newMessage = {
//             'group':'12345', // Find a way to get group ID (probably assigned by db)
//             'user':'John Doe', // Test user, in practice pull from account username/id.
//             'content':document.getElementById('messageBox').value, // Pull text from message box.
//         };

//         /**
//         if (document.getElementById('localUser').checked)
//         {
//             newMessage['user'] = 'local'
//         }
//         */

//         // Send message object to db.
//         var messageList = [];
//         messageList.push(newMessage);
//         loadMessage(messageList);

//         // Clear previous input from textbox.
//         document.getElementById("messageInput").reset();
//     }
// }
