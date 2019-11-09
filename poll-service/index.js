const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3004

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/polls`);
mongoose.connection.once('open', function () { console.log('connected to db') });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`connected to port ${port}`));
