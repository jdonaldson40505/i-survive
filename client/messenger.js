/**
 * All functions related to the messaging functionality. 
 */
let today = new Date();
var timeStamp = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() + ':' + today.getHours() + ':' + today.getMinutes();
//import { get } from "http";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

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
//const userId = auth.currentUser.uid;
const database = getDatabase(app);

// get user info 
// const dbref = ref(getDatabase());
// const name = setProfileInfo('name');
const groupName = 0;//setProfileInfo('groupName');
// function setProfileInfo(item){
// 	get(child(dbref, `users/` + userId + "/" + item)).then((snapshot) => {
// 		if (snapshot.exists()) {
// 			return index = snapshot.val();
// 		} else {
// 			console.log("No data available");
// 		}
// 	}).catch((error) => {
// 	console.error(error);
// 	});
// }

// log out user.
const signout = document.querySelector('#signOut');
signout.addEventListener('click', (e)=>{
   auth.signOut();
   document.location.href='../Hackathonn index.html';
});


// set listener for message count
const db = getDatabase(app);
var loadedMessages = 0;
var messagesRef = ref(db, 'messages/' + groupName);
//var test = ref(db, 'messages/' + groupName + '/message count').val();
//alert('testValue = ' + test);
onValue(messagesRef, (snapshot) => {
	// If for some reason the message counter isn't initialized:
	var messageList = snapshot.val();
	console.log(messageList);
	//set(ref(db, 'messages/' + groupName + '/messageCount'), 3); // Reset message count value from wonky bugs
	if (messageList['messageCount'] === null)
	{
		alert('messageCount is null, setting to zero instead.');
		messageList['messageCount'] = 0;
		set(ref(db, 'messages/' + groupName + '/messageCount'), 0);
	}

	if (messageList['messageCount'] > 0)
	{
		for (let i = loadedMessages + 1; i <= messageList['messageCount']; i += 1)
		{
			console.log('i is currently: ' + i);
			//alert('i is currently: ' + i)
			// Create container for message body.
			var container = document.createElement('div');
			container.classList.add('spacer')
			// Create the message body element.
			var body = document.createElement('div');
			container.appendChild(body);
			body.classList.add('message');

			// Add message content to body.
			var message = document.createElement('p');
			message.innerHTML = messageList[i]['message'];
			body.appendChild(message);

			// Add user's name to end of message.
			var author = document.createElement('p');
			author.classList.add('user');
			author.innerHTML = messageList[i]['author'];
			body.appendChild(author);

			// Add message's timestamp to bottom of message.
			var time = document.createElement('p');
			time.classList.add('timeStamp');
			time.innerHTML = messageList[i]['timestamp'];
			body.appendChild(time);

			// Add message as child of messageContainer.
			document.querySelector('#messageContainer').appendChild(container);

			var chatHistory = document.querySelector('#messageContainer');
			chatHistory.scrollTop = chatHistory.scrollHeight;
		}
		loadedMessages = messageList['messageCount'];
	}
	//else {alert('message count is zero!');}
});

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
// //  solve     }
// //     }
//         // "users" : {
//         //     "userid" : {
//         //         "groupName": "groupName"
//         //         "name": "don cheedle"
//         //     }
//         // }
// //   }
//var messageCount = 0
const messageBtn = document.querySelector('#sendButton');
messageBtn.addEventListener("click", (b)=>{
	const dbRef = ref(getDatabase());
	var erase = false;
	get(child(dbRef, 'messages/' + groupName + '/messageCount')).then((snapshot) => {
		if (snapshot.exists()) {
			var messageCount = snapshot.val();
			// Update number of messages in the conversation.
			messageCount += 1;

			//alert(document.querySelector('#messageBox').value);
			var message = document.querySelector('#messageBox').value;
			set(ref(db, 'messages/' + groupName + '/' + messageCount + '/message'), message);
			set(ref(db, 'messages/' + groupName + '/' + messageCount + '/author'), 'don cheedle');
			set(ref(db, 'messages/' + groupName + '/' + messageCount + '/timestamp'), timeStamp);
			// set(ref(db, 'messages/' + groupName + '/' + messageCount), {
			// 	'message': document.querySelector('#messageInput').value,
			// 	'author': 'Don Cheedle',
			// 	'timestamp': timeStamp
			// });
			set(ref(db, 'messages/' + groupName + '/messageCount'), messageCount);

			// Erase message from text bar after sending.
			document.querySelector('#messageBox').value = '';

		} else {
			alert('No data avaliable');
		}
	});//.catch((error));
	
});
	// // Create new message with meta data and update message count for next message to be sent.
	// //messageCount += 1;
	// const message = document.querySelector('#messageBox').value;
	// const db = getDatabase();
	// var messageCount = ref(db, 'messages/' + groupName + '/message count').val();
	// set(ref(db, 'messages/' + groupName + '/messageCount'), messageCount += 1);

	// set(ref(db, 'messages/' + groupName + '/' + messageCount), {
	// 'message': message,
	// 'author': name,
	// 'timestamp': "yesterday" 
	// });

	// var messageCount = ref(db, 'messages/' + groupName + '/message count').val();	

	// //Old sendMessage() function
	// if  (document.getElementById('messageBox').value.trim() != '')
	// {
	// 	// Create JSON message object to send to db.
	// 	var newMessage = {
	// 	'group':'12345', // Find a way to get group ID (probably assigned by db)
	// 	'user':'John Doe', // Test user, in practice pull from account username/id.
	// 	'content':document.getElementById('messageBox').value, // Pull text from message box.
	// 	};

	// 	// Send message object to db.
	// 	var messageList = [];
	// 	messageList.push(newMessage);
	// 	loadMessage(messageList);

	// 	// Clear previous input from textbox.
	// 	document.getElementById("messageInput").reset();
	// }
	
	// Clear sent message from textbox.
	//document.getElementById('messageBox').value = '';
//});
// sendButton.addEventListener("click", (b)=>{
// 	firebase.database().ref('messages/"message count"').on('value', (snapshot)=> {
// 		console.log(snapshot);
// 		alert(snapshot);
// 	})
// });


document.getElementById('sendButton').addEventListener('keydown', (e)=>
{
    if (Event.code === 'Enter')
    {
        sendMessage();
    }
});


document.getElementById('sendButton').addEventListener('keydown', (e)=>
{
    if (Event.code === 'Enter')
    {
        sendMessage();
    }
});


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
