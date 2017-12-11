const mongoose = require('mongoose'),
  Products = mongoose.model('Products');

exports.listAll = function(req, res) {
  let pageOptions = {
    page: Math.abs(req.query.page) || 0,
    limit: Math.abs(req.query.limit) || 9
  };

  Products.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort([['created_at', -1]])
    .exec(function (err, products) {
      Products.count().exec(function (err, count) {
        if(err) {
          res.status(500).json(err);
        }
        console.log(products);
        res.status(200).json({
          products: products,
          page: pageOptions.page,
          pages: Math.floor(count / pageOptions.limit),
          total: count
        });
      })
    });
};

exports.create = function(req, res) {
  const newProduct = new Products(req.body);

  newProduct.save(function(err, product) {
    if (err) {
      console.log('err', err);
      res.status(500).json(err);
    }
    console.log('err', product);
    res.status(201).json(product);
  });
};
