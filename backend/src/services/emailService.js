const nodemailer = require('nodemailer');
const config = require('../config/config'); 


const transporter = nodemailer.createTransport({
  host: config.email.smtp.host,      
  port: config.email.smtp.port,      
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: config.email.smtp.auth.user,  
    pass: config.email.smtp.auth.pass,  
  },
});


async function sendContactUsMail(formData) {
  try {
    const mailOptions = {
      from: formData.senderEmail || config.email.smtp.auth.user,  
      to: config.email.contactUsEmail,  
      subject: 'New Contact Us Message',  
      text: `
        You have received a new message from ${formData.fullName} (${formData.email})\n\n
        Phone Number: ${formData.phoneNo || 'Not provided'}\n
        Message: ${formData.message}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending Contact Us message:', error);
    throw new Error('Failed to send the email');
  }
}

module.exports = { sendContactUsMail };

