const mongoose = require('mongoose');
const LobSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true,
        trim: true,
    
    },


}, { timestamps: true });

module.exports = mongoose.model('Lob',LobSchema);