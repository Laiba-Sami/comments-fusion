// utils/auth.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = 12;
const JWT_SECRET  = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES_IN;

exports.hashPassword = (plainText) => {
  return bcrypt.hash(plainText, SALT_ROUNDS);
};

exports.comparePassword = (plainText, hash) => {
  return bcrypt.compare(plainText, hash);
};

exports.signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};