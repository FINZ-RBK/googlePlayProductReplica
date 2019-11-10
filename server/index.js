var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE

const routes = require("./routes/index");
const port = process.env.PORT || 3001;
const path = require('path');
//Initialize Express
var app = express();

//Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '../react-client/dist')));
//Make public static folder 
//app.use('/', routes);

// UNCOMMENT FOR REACT


//Start the server 
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});

