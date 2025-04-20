const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async(req, res) => {
        
    const{name , email, password,location, role} = req.body;

    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:'User already exists'})
        }
        user = new User({ name, email, password, location, role });
        await user.save();
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token, user: { id: user._id, name, email, role } });

    }catch(error){
        res.status(500).json({ message: error.message });
    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, name: user.name, email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};