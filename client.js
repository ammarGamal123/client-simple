
const WebSocket = require('ws');

// specified ip for address is live in my local machine
const serverAddress = "ws://127.0.0.1:5000";

// this opens connection with the server but no thing happens
const ws = new WebSocket(serverAddress);


// here send a message to a server
ws.on('open',function(){
    ws.send("Hello server!");
});


ws.on('message' , function(msg){
    console.log("A message was received from server: " + msg);
});