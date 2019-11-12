var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE

const routes = require("./routes/index");
const port = process.env.PORT || 3001;
const path = require('path');
//Initialize Express
var app = express();
var db = require('../../database');
console.log(path.join(__dirname ,'../../database'));

//Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , '../react-client/dist')));

//Make public static folder 
// UNCOMMENT FOR REACT
const URI = process.env.mongoURI || "mongodb+srv://fatoom:fatoom@cluster0-hft43.mongodb.net/basic-info?retryWrites=true&w=majority";
//require(path.join(__dirname ,'../config/keys.js')).mongoURI;
mongoose.connect(URI, {useNewUrlParser: true});
var dbCon = mongoose.connection;
dbCon.on('error', console.error.bind(console, 'connection error:'));
dbCon.once('open', function() {
  console.log("We're connected")
});

app.get('/', function(req, res){
  res.redirect('/:productId');
});

//Route to get all products
app.get('/products', function(req, res) {
  db.Product.find({})
  .then(function(dbProducts) {
    console.log(dbProducts);
    res.json(dbProducts);
  })
  .catch(function(err) {
    res.json(err);
  })
});

//Route for creating a new Product
app.post("/product", function(req, res) {
  db.Product.create(req.body)
  .then(function(dbProduct) {
    //After creating the product successfully, return it back to the client
    res.json(dbProduct);
  })
  .catch(function(err) {
    res.json(err);
  })
});

app.get("/:productId" ,function(req, res) {
  var productId = req.query.productId;
  db.Product.find({id: productId}).exec(function(err, product) {
    if (err)
      res.send(err);
    res.send(product);
  });
});

//Start the server 
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});
