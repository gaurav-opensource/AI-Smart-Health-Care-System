const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true 
    },
    doctorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Doctor', required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    slot: { 
        type: String, 
        required: true 
    },
    status: { type: String, 
        enum: ['pending', 'confirmed', 'cancelled'], 
        default: 'pending' 
    },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);