const express = require('express');
const router = express.Router();
const { getProductStock } = require('./controller');

router.get('/:id/stock', getProductStock);

module.exports = router;
