const express = require('express');
const aiController = require('../controllers/aiController');
const router = express.Router();

router.post('/interact', aiController.interact);

module.exports = router;
