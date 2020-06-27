# ws-send-await

Adds ability to send and wait for `WebSocket` response

# Install 
```
npm install AldieNightstar/ws-send-await
```

# Usage
```js
const { addSendAwait } = require("ws-send-await");

// This function will add `sendAwait` function
addSendAwait(ws);

// WebSockets
ws.on("message", msg => {
	let response = ws.sendAwait("How old are you?");
	console.log(response); // response - string
});
```
