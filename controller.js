
const Product = require('./model'); // Ensure the correct path to the model
const mongoose = require('mongoose'); // Ensure you have mongoose imported

const updateProductPrice = async (req, res) => {
  try {
    const { id } = req.params; // Extract the product ID from the request parameters
    const { price, } = req.body;


    // Find the product by product_id
    const product = await Product.findById( id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update product fields
    product.price = price;

    await product.save();

    res.status(200).json({ message: 'Price updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

const updateCategory = async (req, res) => {
    try {
        const {id}=req.params;
        const {category, tags}=req.body;

        const product = await Product.findById(id)
        if(!product)return res.status(500).json({message:'product not found'});

        if(product) product.category = category;
        if(product) product.tags = tags;
        
        await product.save()
        res.json(product);
    } catch (error) {
        res.status(500).json({success:false, message:err})
    }
}

module.exports={
    updateCategory,
    getProductStock,
    addProduct,
    updateProductPrice
};