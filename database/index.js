var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/play-replica');

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