const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getPortfolios, createPortfolio, updatePortfolio, deletePortfolio } = require('../controllers/portfolioController');
const { protect } = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.get('/', protect, getPortfolios);
router.post('/', protect, upload.single('imageFile'), createPortfolio);
router.put('/:id', protect, upload.single('imageFile'), updatePortfolio);
router.delete('/:id', protect, deletePortfolio);

module.exports = router;
