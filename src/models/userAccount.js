const mongoose = require('mongoose');
const AccountSchema = new mongoose.Schema({
    AccountName: {
        type: String,
        required: true,
        trim: true,
    
    },


}, { timestamps: true });

module.exports = mongoose.model('Account',AccountSchema);