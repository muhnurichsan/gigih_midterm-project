const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
    body: {
      required: true,
      type: String,
    },
    videoID: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema, "comments");
