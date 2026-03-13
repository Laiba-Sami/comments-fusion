const profileService = require('./profile.service');
const commentService = require('./comment.service');
const authService    = require('./auth.service');
const dashboardService = require('./dashboard.service');

module.exports = {
  authService,
  profileService,
  commentService,
  dashboardService,
  SEVEN_DAYS: profileService.SEVEN_DAYS,
};
