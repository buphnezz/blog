const SEOTool = require('../utils/seoTool');

exports.optimizeContent = async (req, res) => {
    const optimizedContent = await SEOTool.optimize(req.body.content);
    res.json({ optimizedContent });
};
