'use strict';
const restRoutes = require('./rest/index').restEndPoints;

class ConfigRouter {
    constructor() {}

    enregistrerRoute(expressApp) {
         restRoutes.forEach(route => {
           expressApp.use(route())
        });
    }
}

module.exports = ConfigRouter;