'use strict';
const Serveur = require('./serveur');
const ConfigRouter = require('./configRouter');

let configRouter = new ConfigRouter();

let srv = new Serveur(configRouter);
srv.start();