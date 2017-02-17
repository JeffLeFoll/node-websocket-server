'use strict';
const path = require('path');
const fs = require('fs');

let restEndPoints = [];

fs.readdirSync(__dirname).forEach(file => {
    let filePath = __dirname + '/' + file;
    let fileStat = fs.statSync(filePath);

    if (fileStat.isFile() && file !== 'index.js') {
        let endPoint = require(filePath);
        restEndPoints.push(endPoint);
    }
});

exports.restEndPoints = restEndPoints;