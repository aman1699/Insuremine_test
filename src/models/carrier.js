const mongoose = require('mongoose');
const CarrierSchema = new mongoose.Schema({
    CompanyName: {
        type: String,
        required: true,
        trim: true,
    
    },


}, { timestamps: true });

module.exports = mongoose.model('Carrier',CarrierSchema);