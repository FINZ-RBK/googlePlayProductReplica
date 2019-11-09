const express = require("express");
const router = express.Router();
var request = require("request");

router.get("/", (req, res) => {
    res.status(200).send("Homepage renders");
});
// var request = require("request");
// router.get("/google", function(req, res) {
//     //modify the url in any way you want
//     var newurl = "http://google.com/";
//     console.log(res);
//     request(newurl).pipe(res);
// });
router.get("/slider", function(req, res) {
    request("https://slider-service.herokuapp.com/bundle.js", function(
        error,
        response,
        body
    ) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.send(body);
        } else {
            res.end("err:" + error);
        }
    });
});
module.exports = router;