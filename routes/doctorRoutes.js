const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/profile', authMiddleware, doctorController.createDoctorProfile);
router.get('/', doctorController.getDoctors);

module.exports = router;