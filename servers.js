const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
// const aiRoutes = require('./routes/aiRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for frontend (React on localhost:3000)
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Routes
app.use('/api/auth', authRoutes); // Authentication (register, login)
app.use('/api/users', userRoutes); // User profile management
app.use('/api/doctors', doctorRoutes); // Doctor profiles and availability
app.use('/api/appointments', appointmentRoutes); // Appointment booking
// app.use('/api/ai', aiRoutes); // AI doctor suggestions

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'AI Smart Healthcare API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});