// utils/recaptcha.js
const config = require("../config/config");

async function verifyToken(token, expectedAction) {
  if (!token) throw new Error("No reCAPTCHA token provided");

  const secret = config.recaptcha.secretKey;
  if (!secret) throw new Error('reCAPTCHA secret key missing in config');

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(
      token
    )}`,
  });
  const data = await res.json();

  if (!data.success) {
    const err = new Error("reCAPTCHA validation failed");
    err.details = data["error-codes"];
    throw err;
  }
  if (expectedAction && data.action !== expectedAction) {
    throw new Error(`Unexpected reCAPTCHA action: ${data.action}`);
  }
  return data;
}

module.exports = { verifyToken };
