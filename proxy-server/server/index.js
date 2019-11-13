var express = require("express");
var bodyParser = require("body-parser");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
var request = require("request");
const port = process.env.PORT || 3009;

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + "/../react-client/dist"));
// app.use("/details", express.static(__dirname + "/../react-client/dist"));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));
app.get("/slider", function (req, res) {
    request("https://slider-service.herokuapp.com/bundle.js", function (
        error,
        response,
        body
    ) {
        if (!error && response.statusCode === 200) {
            // console.log(body);
            res.send(body);
        } else {
            res.end("err:" + error);
        }
    });
});

app.get("/proxy-basic", function (req, res) {
    request("https://basic-info-proxy.herokuapp.com/bundle.js", function (
        error,
        response,
        body
    ) {
        if (!error && response.statusCode === 200) {
            // console.log(body);
            res.send(body);
        } else {
            res.end("err:" + error);
        }
    });
});

app.get("/Discrption", function (req, res) {
    request("https://agile-waters-08360.herokuapp.com/bundle.js", function (
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
app.get("/poll", function (req, res) {
    request("https://protected-plains-93575.herokuapp.com/bundle.js", function (
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
app.get("/", async function (req, res) {
    console.log("user");
    res.render("index");
    console.log("req.query");
    request("https://slider-service.herokuapp.com", function (
        error,
        response,
        body
    ) {
        if (!error && response.statusCode === 200) {
            // console.log(body);
            res.send(body);
        } else {
            res.end("err:" + error);
        }
    });
});
app.listen(port, function () {
    console.log("listening on port 3009!");
});