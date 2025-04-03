const express = require('express');
const router = express.Router();

const { getProductStock, updateCategory, addProduct, updateProductPrice } = require('./controller');

router.post('/add', addProduct);
router.get('/:id/stock', getProductStock);
router.put('/products/:id/category', updateCategory);
router.put('/:id/price', updateProductPrice);


module.exports = router;
