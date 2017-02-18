'use strict';
const restRoutes = require('./rest/index').restEndPoints;

class ConfigRest {
    constructor() {}

    enregistrerRoute(expressApp) {
         restRoutes.forEach(route => {
           expressApp.use(route())
        });
    }
}

module.exports = ConfigRest;