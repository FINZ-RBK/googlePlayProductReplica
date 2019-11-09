var mongoose = require("mongoose");

//GET the Schema constructor

var Schema = mongoose.Schema;

//Using Schema constructor, create a ProductSchema
var ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    mainImage: String,
    updateDate: {
        type: Date,
        default: Date.now
    },
    size: String,
    noInstallation: Number,
    version: String,
    minimumReq: String,
    suitableAge: Number,
    permisssions: String,
    report: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User" //refernces userID
    },
    website: String,
    contactEmail: String,
    privacyPolicy: String
});

//Create model from the Schema
var Product = mongoose.model("Product", ProductSchema);

module.exports = Product;