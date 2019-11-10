const express = require("express");
const router = express.Router();
var request = require("request");

router.get("/", (req, res)=> {
    res.status(200).send("Home Page");
});

router.get("/basic", (req, res) => {
    request("http://localhost:3001/bundle.js", (error, response, body) => {
        if(!error && response.statusCode === 200) {
            console.log(body);
            res.send(body);
        }
    });
});
module.exports = router;