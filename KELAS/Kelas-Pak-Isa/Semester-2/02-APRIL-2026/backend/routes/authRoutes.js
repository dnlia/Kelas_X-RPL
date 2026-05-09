const express = require('express');
const router = express.Router();
const { registerUser, loginUser, deleteAccount } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/account', protect, deleteAccount);

module.exports = router;
