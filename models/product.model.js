const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    link: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: String,
    },
    videoID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Product", productSchema, "products");
