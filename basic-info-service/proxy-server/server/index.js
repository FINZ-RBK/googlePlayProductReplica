var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE

const routes = require("./routes/index");
const port = process.env.PORT || 3001;
const URI = process.env.mongoURI || "mongodb+srv://fatoom:fatoom@cluster0-hft43.mongodb.net/basic-info?retryWrites=true&w=majority";
mongoose.connect(URI);

//Initialize Express
var app = express();
//Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//Make public static folder 
//app.use('/', routes);

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


//Start the server 
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});

