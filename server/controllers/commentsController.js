const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
    const comments = await Comment.find({ blog: req.params.blogId });
    res.json(comments);
};

exports.addComment = async (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        blog: req.params.blogId
    });
    await comment.save();
    res.status(201).json(comment);
};
