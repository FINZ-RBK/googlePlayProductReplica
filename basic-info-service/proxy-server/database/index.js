var mongoose = require('mongoose');
const URI = process.env.mongoURI || "mongodb+srv://fatoom:fatoom@cluster0-hft43.mongodb.net/basic-info?retryWrites=true&w=majority";
mongoose.connect(URI, {useNewUrlParser: true ,  useUnifiedTopology: true});

var db = mongoose.connection;
var Product =  require('./models/Product');

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var retriveData = function(query, callback) {
  var options = {};
  if (query) {
      options = query;
  }

  Product.find(options, (err, data) => {
    console.log("ddd", data);
      callback(err, data);
  });
};

module.exports = {
  Product: require('./models/Product'),
  retriveData: retriveData
};