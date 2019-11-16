const mongoose = require("mongoose");
const config = require("../config/keys");

mongoose
  .connect(config.mongoURI, config.monoCFG)
  .catch(() => {
    console.log("no connection", error);
  })
  .then(() => {
    console.log("CONNECTED");
  });

// var Schema = mongoose.Schema;

//Using Schema constructor, create a ProductSchema
var ProductSchema = new mongoose.Schema({
  userID: Number,
  description: String,
  updateDate: {
    type: Date,
    default: Date.now
  }
});

var ExampleData = {
  userID: 5,
  description: "ddddddddddddd",
  updateDate: Date.now()
};
console.log(Date.now());

var Product = mongoose.model("Product", ProductSchema);

/// function to save the new value for this item dicription
var save = function(data) {
  // console.log(data);
  var newProduct = new Product(data);
  newProduct.save((error, product) => {
    if (error) {
      console.log("error", err);
    } else {
      console.log(product);
    }
  });
};

save(ExampleData);
//a function to find the disciption of this item
var findOne = function(obj, callback) {
  Product.findOne(obj, "disciption", function(err, person) {
    if (err) console.log(err, "this a database error");
    // Prints "Space Ghost is a talk show host".
    else console.log("%s %s is a %s.", Product.disciption);
  });
};

//eporting all needed attributes in this model
module.exports.Product = Product;
module.exports.save = save;
module.exports.findOne = findOne;
