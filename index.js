function addSendAwait(ws) {
	let cbs = [];
	ws.on('message', msg => {
		cbs.forEach(c => c(msg));
		cbs = [];
	});
	ws.sendAwait = function(message) {
		return new Promise((resolve, reject) => {
			cbs.push(resolve);
			ws.send(message);	
		});
	}
}

module.exports = { addSendAwait };
