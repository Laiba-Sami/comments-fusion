// controllers/commentController.js
const httpStatus = require("http-status").default;
const { commentService } = require("../services");

exports.createComment = async (req, res, next) => {
  try {
    const commenterId = req.user._id;
    const { receiverLinkedInUsername, postContent, commentText } = req.body;

    const comment = await commentService.createComment({
      commenterId,
      receiverLinkedInUsername,
      postContent,
      commentText,
    });

    res.status(httpStatus.CREATED).json(comment);
  } catch (err) {
    next(err);
  }
};

exports.listComments = async (req, res, next) => {
  const comments = await commentService.listComments(req.user._id);
  res.json(comments);
};
