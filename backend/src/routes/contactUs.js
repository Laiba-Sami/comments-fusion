const express = require('express');
const { sendContactUsMail } = require('../services/emailService'); 
const ContactForm = require('../models/contactFormModel');
const router = express.Router();  

router.post('/contact-us', async (req, res) => {
  const { fullName, email, phoneNo, message } = req.body;


  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const contactMessage = new ContactForm({
      fullName,
      email,
      phoneNo,
      message
    });
    await contactMessage.save();
 
    await sendContactUsMail({ fullName, email, phoneNo, message });

    res.status(200).json({ success: 'Your message has been sent!' });
  } catch (error) {
   
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

module.exports = router;
