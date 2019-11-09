var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require('../database');

console.log(db);
var PORT = 3000;

//Initialize Express
var app = express();

//Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Make public static folder 
app.use(express.static("public"));

app.use(express.static(__dirname + '/../react-client/dist'));




//Routes
// Home route. Currently just to make sure app is running returns hello message.
app.get("/", function(req, res) {
  res.send("Hello from demo app!");
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

//Route to get all reviews
app.get("/reviews", function(req, res) {
  db.Review.find({})
  .then(function(dbReviews) {
    res.json(dbReviews);
  })
  .catch(function(err) {
    res.json(err);
  })
});

//Route to get all users
app.get("/users", function(req, res) {
  db.Review.find({})
  .then(function(dbUsers) {
    res.json(dbUsers);
  })
  .catch(function(err) {
    res.json(err);
  })
});

//Route to get all images
app.get("/images", function(req, res) {
  db.Review.find({})
  .then(function(dbImages) {
    res.json(dbImages);
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

app.post("/user", function(req, res) {
  db.User.create(req.body)
  .then(function(dbUser) {
    //After creating the user successfully, return it back to the client
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err);
  })

});

app.post("/review", function(req, res) {
  db.Review.create(req.body)
  .then(function(dbReview) {
    //After creating the user successfully, return it back to the client
    res.json(dbReview);
  })
  .catch(function(err) {
    res.json(err);
  })

});

//Route for retrieving a Product by id and populating it's Review
app.get("/products/:id", function(req, res) {
  //using the passed id in the parameter, prepare a query that
  //finds the matching one in the db
  db.Product.findOne({_id: PaymentRequestUpdateEvent.params.id})
  // and populate all the reviews associated with it
  .populate('review')
  .then(function(dbProduct) {
    //If we find an Product with the given id send it back to the client
    req.json(dbProduct); 
  })
  .catch(function(err) {
    res.json(err);
  })
})
//Start the server 
app.listen(PORT, function() {
  console.log('listening on port ' + PORT + '!');
});

