const express = require('express');
const blogsController = require('../controllers/blogsController');
const router = express.Router();

router.get('/trending', blogsController.getTrendingBlogs);

module.exports = router;
