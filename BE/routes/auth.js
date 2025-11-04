const express = require('express');
const router = express.Router();
const { register, login, verify, logout } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);
router.get('/verify', verify);

// Protected routes
router.post('/logout', authenticateToken, logout);

module.exports = router;