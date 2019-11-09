var express = require("express");
var bodyParser = require("body-parser");
const port = process.env.PORT || 3002;

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

// app.get("*", (req, res) => {
//   res.sendFile(express.static(__dirname + "/../react-client/dist/index.html"));
// });
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + "/../react-client/dist"));
app.use("/", routes);

app.listen(port, function() {
    console.log("listening on port 3002!");
});