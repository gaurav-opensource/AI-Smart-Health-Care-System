const User = require('../models/User');

exports.updateProfile = async (req, res) => {
    const { name, location, healthMetrics } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            req.user.id,
            { name, location, healthMetrics },
            { new: true, runValidators: true }
        );
        res.json({ user: { id: user._id, name: user.name, email: user.email, location, healthMetrics } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};