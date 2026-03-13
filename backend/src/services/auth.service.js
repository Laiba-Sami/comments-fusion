// services/auth.service.js
const bcrypt = require('bcryptjs');
const VerificationToken = require('../models/verificationToken');
const { sendVerificationMail } = require('../utils/mailer');
const ApiError = require('../utils/apiError');
const httpStatus = require('http-status').default;

async function generateOtp(email, purpose, extra = {}) {
  const rawCode = Math.floor(100000 + Math.random() * 900000).toString();
  const codeHash = await bcrypt.hash(rawCode, 10);
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  await VerificationToken.findOneAndUpdate(
    { email, purpose },
    { email, purpose, codeHash, expiresAt, ...extra },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  
  await sendVerificationMail(email, rawCode);
}

async function verifyOtp(email, code, purpose) {
  const record = await VerificationToken.findOne({ email, purpose });
  if (!record) throw new ApiError(httpStatus.BAD_REQUEST, 'No pending action for this email');

  if (record.expiresAt < Date.now()) {
    await VerificationToken.deleteMany({ email, purpose });
    throw new ApiError(httpStatus.BAD_REQUEST, 'Code expired');
  }

  
  const valid = await bcrypt.compare(code, record.codeHash);
  if (!valid) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid code');
  }

  const data = {
    name:         record.name,
    email:        record.email,
    phone:        record.phone,
    passwordHash: record.passwordHash,
  };

  await VerificationToken.deleteMany({ email, purpose });

  return data;
}

module.exports = {
  generateOtp,
  verifyOtp,
};
