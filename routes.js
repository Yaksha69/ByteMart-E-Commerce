const express = require('express');
const router = express.Router();
const {addProduct} = require('./controller');

router.post('/add', addProduct);

module.exports = router;