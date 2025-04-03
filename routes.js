const express = require('express');
const router = express.Router();

const { getProductStock, updateCategory, addProduct } = require('./controller');

router.post('/add', addProduct);
router.get('/:id/stock', getProductStock);
router.put('/products/:id/category', updateCategory);


module.exports = router;