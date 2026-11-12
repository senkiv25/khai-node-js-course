const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

router.get('/products', (request, response) => {
   return response.json(products);
});

router.get('/products/:brand', blockSpecialBrand, (request, response) => {
   const { brand } = request.params;
   const filteredProducts = products.filter(product => product.brand === brand);
   response.json(filteredProducts);
});

// Додаткове завдання: пошук товару за ID
router.get('/products/id/:id', (request, response) => {
   const { id } = request.params;
   const product = products.find(item => item.id === Number(id));

   if (!product) {
       return response.status(404).json({ message: 'Product not found' });
   }

   response.json(product);
});

router.get('/productswitherror', (request, response) => {
   let err = new Error("processing error ");
   err.statusCode = 400;
   throw err;
});

module.exports = router;