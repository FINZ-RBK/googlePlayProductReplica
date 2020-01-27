const express = require("express");
const router = express.Router();
var request = require("request");
var db = require("../../database/index.js");
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());

router.get("/", (req, res)=> {
    res.status(200).send("Home Page");
});
  //Route to get all products
  router.get('/products', (req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    db.Product.find({})
    .then(function(dbProducts) {
      res.json(dbProducts);
    })
    .catch(function(err) {
      res.json(err);
    })
  });
  
  //Route for creating a new Product
  router.post("/product", (req, res) =>{
    db.Product.create(req.body)
    .then(function(dbProduct) {
      //After creating the product successfully, return it back to the client
      res.json(dbProduct);
    })
    .catch(function(err) {
      res.json(err);
    })
  });
  
//Route to get product based on the given query
  router.get("/getProduct" ,(req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    db.retriveData(req.query, (err, data) => {
        res.send(data);
    });

  });

//Route to get rate based on the given query
router.get("/getRate" ,(req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    //get rate from poll service using a given id
    request("https://protected-plains-93575.herokuapp.com/reviewsApi/getRate/" + req.body.id, function(
      error,
      response,
      body
  ) {
      if (!error && response.statusCode === 200) {
          res.json(body);
      } else {
          res.end("err:" + error);
      }
  });
  });

//Route to view the basic info of the product
router.get("/basic", (req, res) => {
    request("http://localhost:3001/bundle.js", (error, response, body) => {
        if(!error && response.statusCode === 200) {
            res.send(body);
        } else {
          res.end("err:" + error);
        }
    });
});
module.exports = router;
