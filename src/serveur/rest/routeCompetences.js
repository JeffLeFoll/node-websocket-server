'use strict';
const Express = require('express');

module.exports = function () {
    let router = Express.Router();

    router.get('/competences', (req, res) => {
        let comp = require('./competences/competences_techniques.json');
        return res.send(comp);
    });

    return router;
};
