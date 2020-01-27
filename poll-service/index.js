const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Create Express server 
const app = express();
const port = process.env.PORT || 3004;
// Connection to database
const mongoUrl = require('./config/keys').mongoUrl;
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function () { console.log('connected to db') });
// body parser encodings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use reviewsRoutes as a router
require('./routes/reviewsRoutes.js')(app);
// serve static files
app.use(express.static('./node_modules'));
app.use(express.static('./client/node_modules'));
// production environment files to be served
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}
// instantiate the server
app.listen(port, () => console.log(`connected to port ${port}`));
