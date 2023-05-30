const express = require('express');
const seoController = require('../controllers/seoController');
const router = express.Router();

router.post('/optimize', seoController.optimizeContent);

module.exports = router;
