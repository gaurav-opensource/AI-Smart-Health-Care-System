const Doctor = require('../models/Doctor');
const User = require('../models/User');

exports.createDoctorProfile = async (req, res) => {
    const { specialization, availability } = req.body;
    try {
        const doctor = new Doctor({
            userId: req.user.id,
            specialization,
            availability,
        });
        await doctor.save();
        await User.findByIdAndUpdate(req.user.id, { role: 'doctor' });
        res.status(201).json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().populate('userId', 'name email location');
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};