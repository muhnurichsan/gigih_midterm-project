const Video = require("../models/video.model");

module.exports = {
  getAllVideo: async (req, res) => {
    try {
      const videos = await Video.find();
      if (videos.length === 0) {
        res.status(200).json({
          message: "Belum ada video",
        });
        return;
      }
      const mappedVideos = videos.map((item) => {
        return {
          videoID: item._id,
          url_image_thumbnail: item.url_image_thumbnail,
        };
      });
      res.status(200).json(mappedVideos);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  createNewVideo: async (req, res) => {
    try {
      const { url_image_thumbnail, url_youtube } = req.body;
      const video = new Video({ url_image_thumbnail, url_youtube });
      await video.save();
      res.status(200).json({
        success: true,
        fail: false,
      });
    } catch (error) {
      res.status(400).json({ success: false, fail: true });
    }
  },
};
