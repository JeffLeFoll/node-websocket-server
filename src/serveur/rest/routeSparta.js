'use strict';
const Express = require('express');

module.exports = function () {
    let router = Express.Router();

    router.get('/sparta', (req, res) => {
        return res.send('THIS IS SPARTA !!');
    });

    return router;
};
