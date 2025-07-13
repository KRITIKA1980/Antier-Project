import Admin from "../models/Admin.js";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Incoming admin registration:", req.body); // ✅ Debug log

    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ message: "Admin already exists" });

    const newAdmin = new Admin({ name, email, password });
    const savedAdmin = await newAdmin.save();

    console.log("Saved admin:", savedAdmin); // ✅ Debug log

    const token = jwt.sign({ id: savedAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({ ...savedAdmin._doc, token });
  } catch (error) {
    console.error("Error in registerAdmin:", error.message); // ✅ Log error
    res.status(500).json({ message: "Registration failed" });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin && admin.password === password) {
      res.json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token: generateToken(admin._id, "admin"),
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
