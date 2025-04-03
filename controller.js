const Product = require('./model'); 

// Get product stock by ID
const getProductStock = async (req, res) => {
    try {
        const {id} = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ 
            id: product._id, 
            stock: product.stock 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getProductStock
};
