// middleware/recaptchaFallback.js
const { verifyToken } = require("../utils/recaptcha");
const { verifyRecaptchaV2 } = require("./verifyRecaptchaV2");

const EXTREME = 0.2;
const SOFT = 0.5;

function recaptchaFallback(actionName) {
  return async function (req, res, next) {
    const v3token = req.body.recaptchaToken;
    const v2token = req.body.recaptchaV2Token;

    // If neither v3 nor v2 token is present, reject immediately
    if (!v3token && !v2token) {
      return res.status(400).json({
        success: false,
        message: "No reCAPTCHA token provided",
      });
    }

    let score;

    // If we have a v3 token, verify it first
    if (v3token) {
      let data;
      try {
        data = await verifyToken(v3token, actionName);
      } catch (err) {
        return res.status(400).json({
          success: false,
          message: "reCAPTCHA v3 validation failed",
          errors: err.details || err.message,
        });
      }

      score = typeof data.score === "number" ? data.score : 0;
      //score = 0.1; (For Testing)
    } else {
      score = SOFT;
    }

    // Hard block if score is below EXTREME
    if (score < EXTREME) {
      return res.status(403).json({
        success: false,
        message: `User Access Denied`,
      });
    }

    // Soft‐fail: require v2 if score is below SOFT
    if (score < SOFT) {
      // If a v2 token is already provided, verify it now
      if (v2token) {
        try {
          await verifyRecaptchaV2(v2token);
        } catch (err) {
          return res.status(400).json({
            success: false,
            message: "reCAPTCHA v2 validation failed",
            errors: err.message,
          });
        }
        // v2 passed, so continue to the actual controller
        return next();
      }

      // Otherwise, tell client to show the v2 widget
      return res.status(200).json({
        success: false,
        captchaRequired: true,
        message: `Low reCAPTCHA v3 score (${score.toFixed(
          2
        )}). Please complete the v2 challenge.`,
      });
    }

    // Good v3 score → proceed directly
    next();
  };
}

module.exports = recaptchaFallback;
