// validators/auth.js
const { body } = require("express-validator");

exports.sendCodeRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone")
    .isLength({ min: 10 })
    .withMessage("Phone must be at least 10 digits")
    .matches(/^\d+$/)
    .withMessage("Phone must contain only numbers"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be 8+ chars")
    .matches(/\d/)
    .withMessage("Password must include a digit")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password needs a special char"),
];

exports.verifyOTPRules = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("code")
    .isLength({ min: 6, max: 6 })
    .withMessage("Code must be 6 digits")
    .isNumeric()
    .withMessage("Code must be numeric"),
];

exports.loginRules = [
  body("email").isEmail().withMessage("Must be a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];

exports.forgotPasswordRules = [
  body("email").isEmail().withMessage("A valid email is required"),
];

exports.resetPasswordRules = [
  body("email").isEmail().withMessage("A valid email is required"),
  body("code").isLength({ min: 6, max: 6 }).withMessage("OTP must be 6 digits"),
  body("newPassword")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/\d/)
    .withMessage("Password must include a digit")
    .matches(/[!@#$%^&*]/)
    .withMessage("Password must include a special character"),
  body("confirmNewPassword")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/\d/)
    .withMessage("Password must include a digit")
    .matches(/[!@#$%^&*]/)
    .withMessage("Password must include a special character"),
];
