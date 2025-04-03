const express = require('express');
const { updateProductPrice, createProduct } = require('./controller'); // Adjust path if needed

const router = express.Router();

router.put('/:id/price', updateProductPrice);
router.post('/', createProduct);

module.exports = router;

