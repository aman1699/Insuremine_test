const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    Dob: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true,
        
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zipcode: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    userType: {
        type: String,
        required: true,
        trim: true
    },
},{ timestamps: true });

module.exports = mongoose.model('User',userSchema);
