// middleware/verifyRecaptchaV2.js
const fetch = require("node-fetch");
const config = require("../config/config");

async function verifyRecaptchaV2(token) {
  if (!token) {
    throw new Error("No reCAPTCHA v2 token provided");
  }

  const v2VerifyURL = "https://www.google.com/recaptcha/api/siteverify";
  const params = new URLSearchParams();
  params.append("secret", config.RECAPTCHA_SECRET_KEY);
  params.append("response", token);

  const googleRes = await fetch(v2VerifyURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
  const data = await googleRes.json();

  if (!data.success) {
    // You could inspect data["error-codes"] if you want
    throw new Error("reCAPTCHA v2 validation failed");
  }

  return data; // { success: true, ... }
}

module.exports = { verifyRecaptchaV2 };
