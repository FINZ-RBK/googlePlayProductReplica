var mongoose = require("mongoose");

//GET the Schema constructor

var Schema = mongoose.Schema;

//Using Schema constructor, create a UserSchema
var ReviewSchema = new Schema({
    productId: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    userAvatar: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },

    rate: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        required: true
    },
    likesCount: {
        type: Number,
        required: true
    },
    inserted: {
        type: Date,
        required: true
    }
});

//Create model from the Schema
var Review = mongoose.model("Review", ReviewSchema);

module.exports.Review = Review; 