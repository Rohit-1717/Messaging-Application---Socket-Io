import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signUser = async (req, res) => {
  try {
    const { fullName, username, email, password, confirmPassword, gender } =
      req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password does not match." });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash password

    // https://avatar.iran.liara.run/public/boy?username=boy

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      email,
      gender,
      profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generate token and set cookie
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        profilePicture: newUser.profilePicture,
        message: "User created successfully.",
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error on sign up:", error.message);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

export const loginUser = (req, res) => {
  res.send("Login Controller And Route.");
};

export const logoutUser = (req, res) => {
  res.send("Logout Controller And Route.");
};
