const express = require('express');
const vectorDbController = require('../controllers/vectorDbController');
const router = express.Router();

router.post('/query', vectorDbController.query);

module.exports = router;
