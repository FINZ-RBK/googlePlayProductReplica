var mongoose = require("mongoose");

//GET the Schema constructor

var Schema = mongoose.Schema;

//Using Schema constructor, create a ReviewSchema
var ReviewSchema = new Schema({
    stars: Number,
    comment: String,
    noLikes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User" //refernces userID
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product" //refernces userID
    }
});

//Create model from the Schema
var Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;