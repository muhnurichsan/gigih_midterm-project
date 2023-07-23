const express = require("express");
const router = express.Router();
const {
  getAllComment,
  createNewComment,
} = require("../controllers/comment.controller");

router.get("/:videoID", getAllComment);
router.post("/", createNewComment);

module.exports = router;
