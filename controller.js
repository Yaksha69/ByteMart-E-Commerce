const Product = require('./model')

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
};