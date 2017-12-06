module.exports = function(app) {
  const product = require('../controllers/productController');

  app.route('/products')
    .get(product.listAll)
    .post(product.create);

};
