const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
  name: {
    type: String,
    required: 'The name of the product is required'
  },
  price: {
    type: Number,
    required: 'The price of the product is required'
  },
  list_price: {
    type: Number,
    required: 'The list price of the product is required'
  },
  brand: {
    type: String,
    required: 'The brand of the product is required'
  },
  category_id: {
    type: Number,
    required: 'The category ID of the product is required'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Products', Products);
