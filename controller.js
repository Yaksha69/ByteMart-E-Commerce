const Product = require('./model'); // Ensure the correct path to the model

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
const createProduct = async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      name,
      category,
      tags: [], 
      price,
      stock,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { updateProductPrice, createProduct };