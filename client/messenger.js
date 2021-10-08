/**
 * All functions related to the messaging functionality. 
 */

document.getElementById('sendButton').addEventListener('keydown', (e)=>
{
    if (Event.code === 'Enter')
    {
        sendMessage();
    }
});


/**
 * Loads messages from JSON objects into chat box.
 * @param {JSON[]} messageList 
 */
function loadMessage(messageList)
{
    for (let message of messageList)
    {
        // Create container for message body.
        var container = document.createElement('div');
        container.classList.add('spacer')
        // Create the message body element.
        var body = document.createElement('div');
        container.appendChild(body);

        /**
        if (message['user'] == 'local')
        {
            body.classList.add('local');
        } */
        body.classList.add('message');

        // Add message content to body.
        var content = document.createElement('p');
        content.innerHTML = message['content'];
        body.appendChild(content);

        // Add user's name to end of message.
        var user = document.createElement('p');
        user.classList.add('user');
        user.innerHTML = message['user'];
        body.appendChild(user);

        // Add message as child of messageContainer.
        document.getElementById('messageContainer').appendChild(container);

        var chatHistory = document.getElementById('messageContainer');
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
}

/**
 * Sends a new message from the user to the database.
 */
function sendMessage()
{
    if  (document.getElementById('messageBox').value.trim() != '')
    {
        // Create JSON message object to send to db.
        var newMessage = {
            'group':'12345', // Find a way to get group ID (probably assigned by db)
            'user':'John Doe', // Test user, in practice pull from account username/id.
            'content':document.getElementById('messageBox').value, // Pull text from message box.
        };

        /**
        if (document.getElementById('localUser').checked)
        {
            newMessage['user'] = 'local'
        }
        */

        // Send message object to db.
        var messageList = [];
        messageList.push(newMessage);
        loadMessage(messageList);

        // Clear previous input from textbox.
        document.getElementById("messageInput").reset();
    }
}
