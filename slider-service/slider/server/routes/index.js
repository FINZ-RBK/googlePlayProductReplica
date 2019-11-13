const express = require("express");
const router = express.Router();
const db = require("../../database-mongo/index.js");

router.get("/", (req, res) => {
    res.status(200).send("Home1");
});

router.post("/save", (req, res) => {
    console.log(req.body);
    db.save(req.body);
    res.send(req.body.id);
});

router.get("/retrive", (req, res) => {
    // console.log(req.query);
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.query);
    db.retriveData(req.query, (err, data) => {
        res.send(data);
    });
});

router.get("/save", (req, res) => {
    // req.query;
    console.log(req.body);
    // var image = {
    //     id: 1,
    //     url: "https://choosemuse.com/app/uploads/2018/10/personal-meditation-assistant-muse-app-mobile.jpg",
    //     product_id: 1,
    //     type: 1
    // };
    // db.save(image);
    res.status(200).send("Home1");
});

module.exports = router;