const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema(
  {
    url_image_thumbnail: {
      required: true,
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema, "videos");
