const mongoose = require('mongoose');
const AgentSchema = new mongoose.Schema({
    AgentName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },


}, { timestamps: true });

module.exports = mongoose.model('Agent',AgentSchema);