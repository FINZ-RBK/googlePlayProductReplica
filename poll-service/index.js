const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3004;
const mogoUrl = require('./config/keys').mongoUrl;
mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/reviews`);
mongoose.connect(mogoUrl, { useNewUrlParser: true });

mongoose.connection.once('open', function () { console.log('connected to db') });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/reviewsRoutes.js')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}
app.listen(port, () => console.log(`connected to port ${port}`));
