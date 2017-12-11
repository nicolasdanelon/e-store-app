const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const products = require('./models/productsModel');
const bodyParser = require('body-parser');
const routes = require('./routes/productsRoute');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/estore');

let whitelist = [
  'http://db',
  'http://127.0.0.1',
  'http://127.0.0.1/',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3000/',
  'http://127.0.0.1:8080/',
  'http://127.0.0.1:8080'
];
let corsOptions = {
  optionsSuccessStatus: 200,
  origin: function (origin, callback) {
    // if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    // } else {
    //   callback(new Error('Not allowed by CORS ' + origin))
    // }
  }
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

const swaggerDefinition = {
  info: {
    title: 'E-Shop API',
    version: '1.0.0',
    description: 'API for E-commerce',
  },
  host: '127.0.0.1:3000',
  basePath: '/',
};

const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/*.*'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

routes(app);
app.listen(port);
console.log('yeah!', port);
