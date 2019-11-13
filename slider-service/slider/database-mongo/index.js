var mongoose = require("mongoose");
var url =
    process.env.MONGODB_URI ||
    "mongodb+srv://finz:1111@cluster0-toym4.mongodb.net/finz?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// mongoose
// .connect(url)
// .then(() => require("./db-init")(server))
// .catch(err => console.error(err));
var db = mongoose.connection;
db.on("error", function(err) {
    console.log(err);
});

db.once("open", function() {
    console.log("mongoose connected successfully");
});
//GET the Schema constructor

var Schema = mongoose.Schema;

//Using Schema constructor, create a ImageSchema
var ImageSchema = new Schema({
    id: {
        type: Number,
        required: true,
        index: true
    },
    url: String,
    type: String,
    product_id: Number
        // product: {
        //     type: Schema.Types.ObjectId,
        //     ref: "Product" //refernces userID
        // }
});

//Create model from the Schema
var Image = mongoose.model("Image", ImageSchema);

var save = function(image) {
    var image = new Image({
        id: image.id,
        url: image.url,
        type: image.type,
        product_id: image.product_id
    });
    image.save(err => {
        // callback(err);
        console.log(err);
    });
};

var retriveData = function(query, callback) {
    var options = {};
    if (query) {
        options = query;
    }
    Image.find(options, (err, data) => {
        callback(err, data);
    });
};

module.exports = { Image, save, retriveData };