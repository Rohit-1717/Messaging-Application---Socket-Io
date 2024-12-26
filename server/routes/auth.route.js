import express from "express";
import {
  loginUser,
  signUser,
  logoutUser,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signUser);
router.get("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
