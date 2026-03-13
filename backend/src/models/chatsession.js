// backend/src/models/chatsession.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  role:      { type: String, enum: ['user', 'assistant'], required: true },
  content:   { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
}, { _id: false });

const chatSessionSchema = new mongoose.Schema({
  userId:     { type: String, required: true, index: true },
  sessionId:  { type: String, required: true, unique: true, index: true },
  isGuest:    { type: Boolean, default: false },
  userName:   { type: String },
  userEmail:  { type: String },
  messages:   { type: [messageSchema], default: [] },
  createdAt:  { type: Date, default: Date.now },
  updatedAt:  { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatSession', chatSessionSchema);
