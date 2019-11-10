var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE

const routes = require("./routes/index");
const port = process.env.PORT || 3001;
const path = require('path');
//Initialize Express
var app = express();
var db = require(path.join(__dirname ,'../database'));

//Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '../react-client/dist')));

//Make public static folder 
//app.use('/', routes);

// UNCOMMENT FOR REACT
const URI = process.env.mongoURI || "mongodb+srv://fatoom:fatoom@cluster0-hft43.mongodb.net/basic-info?retryWrites=true&w=majority";
//require(path.join(__dirname ,'../config/keys.js')).mongoURI;
mongoose.connect(URI, {useNewUrlParser: true});
var dbCon = mongoose.connection;
dbCon.on('error', console.error.bind(console, 'connection error:'));
dbCon.once('open', function() {
  console.log("We're connected")
});

//Start the server 
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});

