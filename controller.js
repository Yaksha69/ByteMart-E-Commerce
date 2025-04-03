const Product = require('./model');

const addProduct = async (req, res) => {
    try {
        const { name, category, tags, price, stock } = req.body;

        const newproduct = new Product({ name, category, tags, price, stock });
        await newproduct.save();

        res.status(201).json({ message: 'product added successfully', product: newproduct });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    addProduct
}; 