const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.get('/:userId', usersController.getUser);
router.put('/:userId', usersController.updateUser);

module.exports = router;
