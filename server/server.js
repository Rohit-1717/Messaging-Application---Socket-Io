import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/auth", authRoutes);

app.listen(PORT || 8000, () => {
  console.log(`Server is running on PORT ${PORT}!!`);
});
