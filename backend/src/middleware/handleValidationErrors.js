// middleware/handleValidationErrors.js
const { validationResult } = require("express-validator");

exports.handleValidationErrors = (req, res, next) => {
  const errs = validationResult(req);
  if (!errs.isEmpty()) {
    return res.status(400).json({ message: errs.array()[0].msg });
  }
  next();
};
