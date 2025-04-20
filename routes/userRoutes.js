const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware, userController.getProfile);
router.put('/profile', authMiddleware, userController.updateProfile);

module.exports = router;





// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDRhYjFhNmE4NjE5Mzc5N2ZmZTE0OSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQ1MTM2NDEwLCJleHAiOjE3NDUxNDAwMTB9.1Si5ooBKG0s6qvPmtGtzDJtOIYzOyPjO1h5PlRXYNcg

// doctor 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDRhYmEzNmE4NjE5Mzc5N2ZmZTE0YyIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3NDUxMzY1NDcsImV4cCI6MTc0NTE0MDE0N30.n3KZNbLoSG8f0UR7Ci5OxWKONf6aDUzoQhNyIs4pL40
