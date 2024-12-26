import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/auth.route.js";
import { connectToMongoDB } from "./DB/connect.mongodb.js";

const app = express();
const PORT = process.env.PORT;

dotenv.config();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT || 8000, () => {
  connectToMongoDB();
  console.log(`Server is running on PORT ${PORT}!!`);
});
