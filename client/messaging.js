/**
 * All functions related to the messaging functionality. 
 */

/**
 * Loads messages from JSON objects into chat box.
 * @param {JSON[]} messageList 
 */
function loadMessage(messageList)
{
    for (let message of messageList)
    {
        // Create the message body element.
        var m = document.createElement('div');
        m.classList.add('message');

        // Add message content to body.
        var c = document.createElement('p');
        c.innerHTML = message['content'];
        m.appendChild(c);

        // Add user's name to end of message.
        var u = document.createElement('p');
        u.classList.add('user');
        u.innerHTML = message['user'];
        m.appendChild(u);

        // Add message as child of messageContainer.
        document.getElementById('messageContainer').appendChild(m);

        var chatHistory = document.getElementById("messageContainer");
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
}

/**
 * Sends a new message from the user to the database.
 */
function sendMessage()
{
   // Create JSON message object to send to db.
   var newMessage = {
       'group':'12345', // Find a way to get group ID (probably assigned by db)
       'user':'John Doe', // Test user, in practice pull from account username/id.
       'content':document.getElementById('messageBox').value, // Pull text from message box.
   };
   //alert(newMessage['content']);

   // Send message object to db.
   var messageList = [];
   messageList.push(newMessage);
   loadMessage(messageList);

   // Clear previous input from textbox.
   document.getElementById("messageInput").reset(); 
}
