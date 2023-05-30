const express = require('express');
const commentsController = require('../controllers/commentsController');
const router = express.Router();

router.get('/:blogId', commentsController.getComments);
router.post('/:blogId', commentsController.addComment);

module.exports = router;
