const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    supplier_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    contact_info: { type: String, required: true }
}, { timestamps: true });

const Supplier = mongoose.model('Supplier', SupplierSchema);

module.exports = Supplier;
