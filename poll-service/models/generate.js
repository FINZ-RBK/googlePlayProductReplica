var faker = require('faker');
var mongoose = require("mongoose");
const mogoUrl = require('../config/keys').mongoUrl;
mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/reviews`);
mongoose.connect(mogoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

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




for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        var item = new Review({
            productId: i,
            productName: faker.commerce.productName(),
            userAvatar: faker.internet.avatar(),
            userName: faker.internet.userName(),
            userId: faker.random.number(),
            rate: Math.floor((Math.random() * ((5 - 1) + 1)) + 1),
            comment: faker.lorem.paragraph(),
            state: 0,
            likesCount: faker.random.number(),
            inserted: faker.date.past()
        });
        console.log(item);
        item.save();
    }
}