const express = require("express");
const router = express.Router();
const {
  createNewVideo,
  getAllVideo,
} = require("../controllers/video.controller");

router.get("/", getAllVideo);
router.post("/", createNewVideo);
module.exports = router;
