import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import Customer from "../models/Customer.js";

export const protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token, access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role === "admin") {
      req.user = await Admin.findById(decoded.id).select("-password");
    } else if (decoded.role === "customer") {
      req.user = await Customer.findById(decoded.id).select("-password");
    } else {
      return res.status(403).json({ message: "Unauthorized role" });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalid or expired", error });
  }
};
