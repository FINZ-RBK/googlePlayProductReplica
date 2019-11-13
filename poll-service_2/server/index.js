var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(express.static(__dirname + '/../node_modules'));

app.listen(3004, function () {
  console.log('listening on port 3004!');
});
//
