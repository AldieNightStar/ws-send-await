function addSendAwait(ws) {
	ws.sendAwait = function(message) {
		return new Promise((resolve, reject) => {
			ws.on('message', function listener(msg) {
				resolve(msg);
				ws.removeListener("message", listener);
			});
			ws.send(message);
		});
	}
}

module.exports = { addSendAwait };
