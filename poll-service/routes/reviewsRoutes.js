const reviewDb = require("../models/review.js");
// Get the review for the product by the id and calculate its rate
module.exports = app => {
  app.get("/reviewsApi/reviewById/:id", function(req, res) {
    const id = req.params.id;
    var result = {};

    reviewDb.Review.find({ productId: id })
      .exec()
      .then(data => {
        result.comments = data;
        reviewDb.Review.find({ productId: id, rate: 1 })
          .exec()
          .then(data => {
            result.ones = data.length;
            reviewDb.Review.find({ productId: id, rate: 2 })
              .exec()
              .then(data => {
                result.tows = data.length;
                reviewDb.Review.find({ productId: id, rate: 3 })
                  .exec()
                  .then(data => {
                    result.threes = data.length;
                    reviewDb.Review.find({ productId: id, rate: 4 })
                      .exec()
                      .then(data => {
                        result.fours = data.length;
                        reviewDb.Review.find({ productId: id, rate: 5 })
                          .exec()
                          .then(data => {
                            result.fives = data.length;
                            res.json(result);
                          });
                      });
                  });
              });
          });
      });
  });

  // Get the rate of the product by id
  app.get("/reviewsApi/getRate/:id", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.params.id;
    var result = {};

    reviewDb.Review.find({ productId: id, rate: 1 })
      .exec()
      .then(data => {
        result.ones = data.length;
        reviewDb.Review.find({ productId: id, rate: 2 })
          .exec()
          .then(data => {
            result.tows = data.length;
            reviewDb.Review.find({ productId: id, rate: 3 })
              .exec()
              .then(data => {
                result.threes = data.length;
                reviewDb.Review.find({ productId: id, rate: 4 })
                  .exec()
                  .then(data => {
                    result.fours = data.length;
                    reviewDb.Review.find({ productId: id, rate: 5 })
                      .exec()
                      .then(data => {
                        result.fives = data.length;
                        total =
                          result.ones +
                          result.tows +
                          result.threes +
                          result.fours +
                          result.fives;
                        rate =
                          (result.ones * 1 +
                            result.tows * 2 +
                            result.threes * 3 +
                            result.fours * 4 +
                            result.fives * 5) /
                          total;
                        res.json({
                          total: total,
                          rate: rate
                        });
                      });
                  });
              });
          });
      });
  });

  // Get the reviews by product name
  app.get("/reviewsApi/reviewByName/:name", function(req, res) {
    const productName = req.params.name;

    reviewDb.Review.find({ productName: productName }).exec(function(
      err,
      data
    ) {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
  });

  // Add a review to the product
  app.post("/reviewsApi/addReview", function(req, res) {
    var review = new reviewDb.Review(req.body);

    review.save(function(err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log("review saved");
        res.send("saved");
      }
    });
  });
};
