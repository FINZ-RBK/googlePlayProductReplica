const express = require("express");
const path = require("path");
const request = require("request");
const app = express();
// const config = require(__dirname + "/config/keys");

// requiring and using body parser to parse our req body
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// if the app is depoyed then the port is ganna be taken from the env ,else its 3003
const port = process.env.PORT || 3005;

/// this line is for te cross origin - prplem
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/getRate", (req, res) => {
  console.log(req.query);
  res.header("Access-Control-Allow-Origin", "*");
  request(
    "https://protected-plains-93575.herokuapp.com/reviewsApi/getRate/" +
      req.body.id,

    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        debugger;
        console.log("rate", body);
        res.json(body);
      } else {
        res.end("err:" + error);
      }
    }
  );
});

/// define and use our static directores in the app
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, 'module-0')));
app.use(express.static(path.join(__dirname, "node_nmodules")));

app.get("/", (req, res) => {
  // db.save({ description: "wyruu", updateDate: Date.now() });
});
// app.set('view engine', 'jsx')

// app.get('/mod1', function(req, res){
//   request('http://127.0.0.1:3001/main.js', function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//       console.log(body);
//       res.send(body);
//     }
//    });
// });

app.listen(port, () => console.log(`Listening on ${port}`));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('/', (req, res) => res.render('public/index'))
//   .set('view engine', 'jsx')
//   .listen(port, () => console.log(`Listening on ${ port }`))
