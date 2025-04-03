const express = require('express');

const controller = require('./controller');
const router = express.Router();

router.put('/products/:id/category', controller.updateCategory);

module.exports=router;

