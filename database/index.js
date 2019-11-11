var mongoose = require('mongoose');
const URI = process.env.mongoURI || "mongodb+srv://fatoom:fatoom@cluster0-hft43.mongodb.net/basic-info?retryWrites=true&w=majority";
mongoose.connect(URI);

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});
module.exports = {
    Product: require('./models/Product'),
    User: require('./models/User'),
    Review: require('./models/Review'),
    Image: require('./models/Image')
};