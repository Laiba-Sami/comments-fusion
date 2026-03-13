const express = require("express");
const { protect } = require("../middleware/auth");
const { asyncHandler } = require("../middleware/errorHandler");
const { dashboardController } = require("../controllers");

const router = express.Router();

router.get("/metrics", protect, asyncHandler(dashboardController.getMetrics));

module.exports = router;
