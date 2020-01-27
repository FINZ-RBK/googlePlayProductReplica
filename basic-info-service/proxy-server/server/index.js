var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

const routes = require("./routes/index");
const port = process.env.PORT || 3001;
//Initialize Express
var app = express();

//Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , '../react-client/dist')));
//Allow the express server to use routes
app.use("/", routes);

//Start the server 
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});
