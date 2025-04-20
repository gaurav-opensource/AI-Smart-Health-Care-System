const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    }, // e.g., "Delhi"
    healthMetrics: {
        bloodPressure: String,
        sugarLevel: String,
        weight: Number,
    },
    role: {
        type: String, 
        enum: ['user', 'doctor'], 
        default: 'user' 
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);