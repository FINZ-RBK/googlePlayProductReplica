const mongoose = require('mongoose');
const reviewDb = require('../models/review.js');
const userDb = require('../models/user.js');
module.exports = (app) => {
    app.get('/reviewsApi/review/:id', function (req, res) {

        const reviewId = req.params.id;
        reviewDb.Review.find({ id: reviewId }).exec(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.send(data);
            }

        });
    });

    app.post('/reviewsApi/addReview', function (req, res) {

        var review = new reviewDb.Review(req.body);
        review.save(function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log('review saved');
                res.send('saved');
            }

        });
    });
}
