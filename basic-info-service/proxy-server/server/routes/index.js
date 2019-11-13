const express = require("express");
const router = express.Router();
var request = require("request");
var db = require("../../database/index.js");
router.get("/", (req, res)=> {
    res.status(200).send("Home Page");
});
  //Route to get all products
  router.get('/products', (req, res) =>{
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
  
  router.get("/getProduct" ,(req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.query);
    db.retriveData(req.query, (err, data) => {
        console.log(data);
        res.send(data);
    });

  });

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