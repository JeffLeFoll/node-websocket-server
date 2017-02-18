'use strict';
const SocketIo = require('socket.io');
const wsRoutes = require('./ws/index').wsEndPoints;

class ConfigWebSocket {
    constructor() {
    }

    enregistrerWebSocket(server) {
        let wss = new SocketIo(server);

        wss.on('connection', (socket) => this.configurerSocket(socket, wss));
    }

    configurerSocket(socket, webSocketServer) {
        wsRoutes.forEach(route => route(socket, webSocketServer));
    }
}

module.exports = ConfigWebSocket;