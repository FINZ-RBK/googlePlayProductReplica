var express = require("express");
var bodyParser = require("body-parser");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
const routes = require("./routes/index");
var app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(express.static(__dirname + "/../react-client/dist"));

app.use("/", routes);

// UNCOMMENT FOR REACT

app.listen(3007, function() {
    console.log("listening on port 3007 proxy!");
});