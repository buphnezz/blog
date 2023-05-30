const DeploymentTool = require('../utils/deploymentTool');

exports.deploy = async (req, res) => {
    const deploymentStatus = await DeploymentTool.deploy(req.body.projectPath);
    res.json({ deploymentStatus });
};
