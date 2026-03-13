// routes/user.routes.js
const express = require("express");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.get("/me", protect, (req, res) => {
  res.json({ id: req.user.id, role: req.user.role });
});

module.exports = router;
