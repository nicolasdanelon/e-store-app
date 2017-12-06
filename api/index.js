let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let mongoose = require('mongoose');
let products = require('./models/productsModel');
let bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/estore');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

const routes = require('./routes/productsRoute');
routes(app);

app.listen(port);

console.log('yeah!', port);
