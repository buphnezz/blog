const User = require('../models/User');

exports.getUser = async (req, res) => {
    const user = await User.findById(req.params.userId);
    res.json(user);
};

exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.json(user);
};
