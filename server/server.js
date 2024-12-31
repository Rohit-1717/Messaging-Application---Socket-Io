import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/messages.route.js";
import userRoutes from "./routes/user.route.js";
import { connectToMongoDB } from "./DB/connect.mongodb.js";

const app = express();
const PORT = process.env.PORT;

dotenv.config();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT || 8000, () => {
  connectToMongoDB();
  console.log(`Server is running on PORT ${PORT}!!`);
});
