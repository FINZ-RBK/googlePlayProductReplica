var mongoose = require('mongoose');
//Database URI
const URI = process.env.mongoURI || "mongodb+srv://<user>:<password>@cluster0-hft43.mongodb.net/basic-info?retryWrites=true&w=majority";
mongoose.connect(URI, {useNewUrlParser: true ,  useUnifiedTopology: true});

//Connect to Database
var db = mongoose.connection;
var Product =  require('./models/Product');

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

//get products depending on the given query
var retriveData = function(query, callback) {
  var options = {};
  if (query) {
      options = query;
  }
  Product.find(options, (err, data) => {
      callback(err, data);
  });
};

// export Product model and retrieveData 
module.exports = {
  Product: require('./models/Product'),
  retriveData: retriveData
};
