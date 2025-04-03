const Supplier = require('./model');

const addSupplier = async (req, res) => {
    try {
        const { supplier_id, name, contact_info } = req.body;
        const newSupplier = new Supplier({ supplier_id, name, contact_info });
        await newSupplier.save();
        res.status(201).json({ message: 'Supplier added successfully', supplier: newSupplier });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { addSupplier };
