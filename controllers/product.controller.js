const Product = require("../models/product.model");
const Video = require("../models/video.model");

module.exports = {
  getAllProduct: async (req, res) => {
    try {
      const { videoID } = req.params;
      if (!videoID.match(/^[0-9a-fA-F]{24}$/)) {
        throw new Error(
          "Tidak dapat menemukan product untuk id yang diberikan"
        );
      }
      const products = await Product.find({
        videoID,
      });
      if (products.length === 0) {
        throw new Error(
          "Tidak dapat menemukan product untuk id yang diberikan"
        );
      }
      const mappedProducts = products.map((item) => {
        return {
          productID: item._id,
          link: item.link,
          title: item.title,
          price: item.price,
        };
      });
      res.status(200).json(mappedProducts);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  createNewProduct: async (req, res) => {
    try {
      const { link, title, price, videoID } = req.body;
      const product = new Product({ link, title, price, videoID });
      await product.save();
      res.status(200).json({
        success: true,
        fail: false,
      });
    } catch (err) {
      res.status(400).json({ success: false, fail: true });
    }
  },
  searchProduct: async (req, res) => {
    try {
      const { videoID } = req.params;
      const { title } = req.query;
      if (!videoID.match(/^[0-9a-fA-F]{24}$/)) {
        throw new Error(
          "Tidak dapat menemukan product untuk id yang diberikan"
        );
      }
      const product = await Product.find({
        videoID,
      });
      const filteredProduct = product.filter((item) => {
        return item.title.toLowerCase().match(title.toLowerCase());
      });

      res.status(200).json(filteredProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
