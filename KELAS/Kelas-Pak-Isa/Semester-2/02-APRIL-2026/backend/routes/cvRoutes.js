const express = require('express');
const router = express.Router();
const { getCV, saveCV, deleteCV } = require('../controllers/cvController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getCV);
router.post('/', protect, saveCV);
router.put('/', protect, saveCV);
router.delete('/', protect, deleteCV);

module.exports = router;
