const express = require('express');
const deploymentController = require('../controllers/deploymentController');
const router = express.Router();

router.post('/deploy', deploymentController.deploy);

module.exports = router;
