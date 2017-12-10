const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const products = require('./models/productsModel');
const bodyParser = require('body-parser');
const routes = require('./routes/productsRoute');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/estore');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

routes(app);
app.listen(port);
console.log('yeah!', port);
