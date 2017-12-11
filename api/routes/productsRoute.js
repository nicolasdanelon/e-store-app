module.exports = function(app) {
  const product = require('../controllers/productController');

  /**
   * @swagger
   * definitions:
   *   Product:
   *     properties:
   *       name:
   *         type: string
   *       brand:
   *         type: string
   *       price:
   *         type: integer
   *       list_price:
   *         type: integer
   *       category_id:
   *         type: integer
   */

  /**
   * @swagger
   * tags:
   *   name: Product
   *   description: A product ready for sold
   */

  /**
   * @swagger
   * /products:
   *   get:
   *     tags:
   *       - Products
   *     description: Returns products
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of products
   *         schema:
   *           $ref: '#/definitions/Products'
   */
  app.route('/products')
    .get(product.listAll);

  /**
   * @swagger
   * /products:
   *   post:
   *     tags:
   *       - Product
   *     description: Creates a new product
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: product
   *         description: Product object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Product'
   *     responses:
   *       201:
   *         description: Product object
   */
  app.route('/products')
    .post(product.create);

};
