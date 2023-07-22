const express = require("express");
const router = express.Router();
const {
  getAllComment,
  createNewComment,
} = require("../controllers/comment.controller");

router.get("/:id", getAllComment);
router.post("/", createNewComment);

module.exports = router;
