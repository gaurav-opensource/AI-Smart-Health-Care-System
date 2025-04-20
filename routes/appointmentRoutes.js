const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, appointmentController.bookAppointment);
router.get('/', authMiddleware, appointmentController.getUserAppointments);

module.exports = router;