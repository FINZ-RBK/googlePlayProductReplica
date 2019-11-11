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

var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;