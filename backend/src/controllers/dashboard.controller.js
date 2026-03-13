const httpStatus = require('http-status').default;
const { dashboardService } = require('../services');

exports.getMetrics = async (req, res) => {
  const userId = req.user._id;
  const { period = '7d' } = req.query;
  const metrics = await dashboardService.getMetrics(userId, period);
  res.status(httpStatus.OK).json(metrics);
};
