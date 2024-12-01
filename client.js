
const WebSocket = require('ws');

// specified ip for address is live in my local machine
const serverAddress = "ws://127.0.0.1:5000";

const ws = new WebSocket(serverAddress);

