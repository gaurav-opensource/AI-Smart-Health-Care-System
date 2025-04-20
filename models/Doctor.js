
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    specialization:{
        type: String,
        required: true 
    },
    availability: [{
        date: Date,
        slots: [String], // e.g., ["10:00", "11:00"]
    }],
} , { timestamps: true })

module.exports = mongoose.model('Doctor', doctorSchema);