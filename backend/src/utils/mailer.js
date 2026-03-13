// src/utils/mailer.js
const nodemailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodemailer.createTransport({
  host: config.email.smtp.host,
  port: config.email.smtp.port,
  secure: config.email.smtp.secure,
  requireTLS: !config.email.smtp.secure,
  auth: {
    user: config.email.smtp.auth.user,
    pass: config.email.smtp.auth.pass,
  },
});

async function sendVerificationMail(toEmail, code) {
  await transporter.sendMail({
    from: config.email.smtp.auth.user,
    to: toEmail,
    subject: 'Your verification code',
    text: `Your signup code is ${code}. It expires in 5 minutes.`,
  });
}

module.exports = { sendVerificationMail };
