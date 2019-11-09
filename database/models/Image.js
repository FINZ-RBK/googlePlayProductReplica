var mongoose = require("mongoose");

//GET the Schema constructor

var Schema = mongoose.Schema;

//Using Schema constructor, create a ImageSchema
var ImageSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    url: String,
    type: String,
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product" //refernces userID
    }
});

//Create model from the Schema
var Image = mongoose.model("Image", ImageSchema);

module.exports = Image;