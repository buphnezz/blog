const VectorDB = require('../utils/vectorDb');

exports.query = async (req, res) => {
    const results = await VectorDB.query(req.body.vector);
    res.json({ results });
};
