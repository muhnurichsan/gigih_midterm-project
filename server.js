require("dotenv").config();
const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const mongoClient = process.env.DATABASE_URL;

// mongoose initialization
mongoose.connect(mongoClient);
const database = mongoose.connection;

database.on("error", (err) => {
  console.log(err);
});

database.once("connected", () => {
  console.log("Database connected");
});

// Express routes
const commentRoute = require("./routes/comment.route");
const videoRoute = require("./routes/video.route");
const productRoute = require("./routes/product.route");

// Express config
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/comment", commentRoute);
app.use("/video", videoRoute);
app.use("/product", productRoute);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
