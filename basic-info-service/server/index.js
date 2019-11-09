var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database/');
console.log(db);
var PORT = 3000;

//Initialize Express
var app = express();

//Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Make public static folder 
app.use(express.static("public"));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

//Routes
app.get("/", function(req, res){
  res.send("Hello from demo App!!");
})

//Start the server 
app.listen(PORT, function() {
  console.log('listening on port ' + PORT + '!');
});

