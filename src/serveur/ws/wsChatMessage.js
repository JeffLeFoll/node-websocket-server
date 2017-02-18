'use strict';

module.exports = function (socket, webSocketServer) {
    socket.on('chat message', (msg) => {
        webSocketServer.emit('chat message', msg);
    });
};
