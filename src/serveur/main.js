'use strict';
const Serveur = require('./serveur');
const ConfigRest = require('./configRest');
const ConfigWebSocket = require('./configWebSocket');

let configRest = new ConfigRest();
let configWebSocket = new ConfigWebSocket();

let srv = new Serveur(configRest, configWebSocket);
srv.start();
