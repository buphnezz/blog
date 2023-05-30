const Blog = require('../models/Blog');

exports.getTrendingBlogs = async (req, res) => {
    const blogs = await Blog.find().sort({ date: -1 }).limit(5);
    res.json(blogs);
};
