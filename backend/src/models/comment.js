// models/Comment.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    commenter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      description: "The user who wrote this comment",
    },
    receiverProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
      description: "Whose (prospect) profile this comment was left on",
    },
    post: {
      type: String,
      required: true,
      description: "The content of post"
    },
    commentText: {
      type: String,
      required: true,
      trim: true,
      description: "The actual text of the comment",
    },
    status: {
      type: String,
      enum: ["pending", "online", "failed"],
      default: "online",
      description: "The status of the comment",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
