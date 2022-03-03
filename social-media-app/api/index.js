const PORT = 5000;

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");

const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use("/api/user", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

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

app.get("/", (req, res) => {
  res.send("Helloooooo");
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
