// services/commentService.js
const Comment = require("../models/comment");
const Profile = require("../models/profile");
const ApiError = require("../utils/apiError");

async function createComment({
  commenterId,
  receiverLinkedInUsername,
  postContent,
  commentText,
}) {
  let receiverProfile = await Profile.findOne({
    linkedinUsername: receiverLinkedInUsername,
    user: null,
  });
  if (!receiverProfile) {
    receiverProfile = await Profile.create({
      linkedinUsername: receiverLinkedInUsername,
      user: null,
    });
  }

  const comment = await Comment.create({
    commenter: commenterId,
    receiverProfile: receiverProfile._id,
    post: postContent,
    commentText,
  });

  return comment;
}

async function listComments(commenterId) {
  return Comment.find({ commenter: commenterId })
    .sort({ createdAt: -1 })
    .populate({
      path: 'receiverProfile',
      select: 'name tag_line',
    })
    .lean();
}


module.exports = {
  createComment,
  listComments
};
