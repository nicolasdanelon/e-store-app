const mongoose = require('mongoose'),
 Products = mongoose.model('Products');

exports.listAll = function(req, res) {
  let pageOptions = {
    page: req.query.page || 0,
    limit: req.query.limit || 10
  };

  Products.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, products) {
      if(err) {
        res.status(500).json(err);
      }

      //products.push({ meta: this.productCount() });

      res.status(200).json(products);
    });
};

exports.create = function(req, res) {
  const newProduct = new Products(req.body);

  newProduct.save(function(err, product) {
    if (err) {
      res.status(500).json(err);
    }
    res.status(201).json(product);
  });
};

exports.productCount = function(req, res) {
  Products.count()
    .exec(function (err, count) {
      if (err) {
        res.status(500).json(err);
      }
      //return count;
      res.status(200).json(count);
    });
};
