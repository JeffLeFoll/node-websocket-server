'use strict';
const Express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const http = require('http');

class Serveur {
    constructor(configRest, configWebSocket) {
        this.app = new Express();
        this.server = http.Server(this.app);

        this.app.use(serveStatic(path.join(__dirname, '../front')));

        configRest.enregistrerRoute(this.app);
        configWebSocket.enregistrerWebSocket(this.server);
    }

    start() {
        console.log('Configuration de l\'application pour l\'environnement ' + this.app.get('env'));

        let port = process.env.PORT || 5000;
        this.server.listen(port, () => console.log('Écoute sur le port ' + port));
    }
}

module.exports = Serveur;
