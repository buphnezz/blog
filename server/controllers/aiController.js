const AI = require('../utils/ai');

exports.interact = async (req, res) => {
    const response = await AI.interact(req.body.prompt);
    res.json({ response });
};
