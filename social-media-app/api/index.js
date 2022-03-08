/** @format */

const PORT = 5000;

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const multer = require("multer");
const path = require("path");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log(error);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
