const mongoose = require('mongoose');
const policySchema = new mongoose.Schema({
    policyNumber: {
        type: String,
        required: true,
        trim: true,
        },
    policyStartDate: {
        type: String,
        required: true,
        trim: true
    },
    policyEndDate : {
        type: String,
        required: true,
        trim: true,
    },
    policyCategory: {
        type: String,
        required: true,
        trim: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Carrier', required: true },
    collectionId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Lob', required: true }
  
},{ timestamps: true });

module.exports = mongoose.model('Policy',policySchema);
