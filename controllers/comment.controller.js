const Comment = require("../models/comment.model");

module.exports = {
  getAllComment: async (req, res) => {
    try {
      const { id } = req.params;
      const comments = await Comment.find({
        videoID: id,
      });
      if (comments.length === 0) {
        throw new Error(
          "Tidak dapat menemukan comment untuk id yang diberikan"
        );
      }
      const mappedComments = comments.map((item) => {
        return {
          username: item.username,
          comment: item.body,
          timestamp: {
            createdtAt: item.createdAt,
            updatedAt: item.updatedAt,
          },
        };
      });
      res.status(200).json(mappedComments);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  createNewComment: async (req, res) => {
    try {
      const { username, bodyComment, videoID } = req.body;
      const comment = new Comment({ username, body: bodyComment, videoID });
      await comment.save();
      res.status(200).json({
        success: true,
        fail: false,
      });
    } catch (err) {
      res
        .status(400)
        .json({ success: false, fail: true, message: err.message });
    }
  },
};
