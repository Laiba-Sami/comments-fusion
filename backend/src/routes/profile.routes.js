const express = require("express");
const { asyncHandler } = require("../middleware/errorHandler");
const { profileController } = require("../controllers");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post(
  "/extract-profile-data",
  protect,
  asyncHandler(profileController.extractProfileData)
);

router.post(
  "/generate-reply",
  protect,
  asyncHandler(profileController.generateReply)
);

router.get(
  '/exists/:linkedinUsername',
  protect,
  asyncHandler(profileController.checkProfileExists)
);

module.exports = router;