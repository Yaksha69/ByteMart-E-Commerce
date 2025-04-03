const express = require('express');
const { addSupplier } = require('./supplierController');
const router = express.Router();

router.post('/suppliers/add', addSupplier);

module.exports = router;
