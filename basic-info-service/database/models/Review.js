var mongoose = require("mongoose");

//GET the Schema constructor

var Schema = mongoose.Schema;

//Using Schema constructor, create a UserSchema
var ReviewSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    email: String,
    name: String,
    image: String
});

//Create model from the Schema
var User = mongoose.model("User", UserSchema);

module.exports = User;