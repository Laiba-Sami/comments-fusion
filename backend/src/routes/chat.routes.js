// src/routes/chat.routes.js
const express = require('express');
const router = express.Router();

console.log('Chat routes file loaded');

// Simple test route first
router.get('/chat/test', (req, res) => {
  console.log('Test route hit');
  res.json({ message: 'Chat routes are working!' });
});

// Your actual chat route
router.post('/chat', async (req, res) => {
  console.log('POST /chat route hit');
  console.log('Request body:', req.body);
  
  try {
    const { chatInput, sessionId } = req.body || {};

    // Basic validation
    if (typeof chatInput !== 'string' || typeof sessionId !== 'string') {
      return res.status(400).json({ error: 'chatInput and sessionId (both strings) are required' });
    }

    // For now, just return a test response to verify the route works
    return res.json({ 
      output: `Test response: You said "${chatInput}" with session "${sessionId}"`,
      timestamp: new Date().toISOString()
    });

  } catch (err) {
    console.error('Chat route error:', err.message);
    return res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

console.log('Chat router created with routes');
module.exports = router;