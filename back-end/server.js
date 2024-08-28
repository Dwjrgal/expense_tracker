const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();
const { logger } = require("./middlewares/logger");

app.use(cors());
app.use(express.json());
app.use(logger());

app.get("/user", (req, res) => {
  console.log("all user is read successfully");
  res.json({ message: "Get success" });
});
app.post("/user", (req, res) => {
  console.log("New user is created successfully");
});
app.put("/user", (req, res) => {
  console.log("user is updated successfully");
});
app.delete("/user", (req, res) => {
  console.log("user is deleted successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running  at localhost ${PORT}`);
});
