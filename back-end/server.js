const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
dotenv.config();

const authRoutes = require("./routes/auth-route");
const categoryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-route");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.user("/auth",authRoutes)
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/records", recordRoutes);

app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа.`);
});
