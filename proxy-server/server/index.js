var express = require("express");
var bodyParser = require("body-parser");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
var request = require("request");
const port = process.env.PORT || 3008;

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + "/../react-client/dist"));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get("/slider", function(req, res) {
    request("https://slider-service.herokuapp.com/bundle.js", function(
        error,
        response,
        body
    ) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.send(body);
        } else {
            res.end("err:" + error);
        }
    });
});
app.listen(port, function() {
    console.log("listening on port 3008!");
});