
'use strict';

var express = require('express'),
    app = express();

var http = require('http');

app.get('/', function (req, res) {
    res.send('Hello World Docker CI With Everything Set Up!');
});

app.listen(8080);

module.exports = app;
