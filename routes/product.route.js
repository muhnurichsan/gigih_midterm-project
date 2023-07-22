const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  createNewProduct,
  searchProduct,
} = require("../controllers/product.controller");

router.get("/:videoID", getAllProduct);
router.get("/", searchProduct);
router.post("/", createNewProduct);
module.exports = router;
