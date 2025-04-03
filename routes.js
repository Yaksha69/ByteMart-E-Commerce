const express = require('express');
const router = express.Router();
const { getProductStock, updateCategory } = require('./controller');

router.get('/:id/stock', getProductStock);
router.put('/products/:id/category', updateCategory);

module.exports = router;