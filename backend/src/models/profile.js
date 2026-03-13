const mongoose = require("mongoose");

const snapshotSchema = new mongoose.Schema({
  count: Number,
  timestamp: { type: Date, default: Date.now },
});

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
    default: null,
  },

  linkedinUsername: {
    type: String,
    required: true,
    trim: true,
  },

  name: String,
  tag_line: String,
  location: String,
  about: String,
  services: String,

  connections: {
    type: Number,
    default: 0,
    description: "Number of LinkedIn connections",
  },

  followers: {
    type: Number,
    default: 0,
    description: "Number of LinkedIn followers",
  },

  connectionSnapshots: { type: [snapshotSchema], default: [] },
  followerSnapshots: { type: [snapshotSchema], default: [] },

  experience: [
    {
      role: String,
      at: String,
    },
  ],

  education: [
    {
      place: String,
      degree: String,
    },
  ],

  certifications: [
    {
      certificate: String,
      issuer: String,
    },
  ],

  projects: [String],
  skills: [String],

  lastFetchedAt: { type: Date, default: null },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

profileSchema.index({ user: 1, linkedinUsername: 1 }, { unique: true });

module.exports = mongoose.model("Profile", profileSchema);
