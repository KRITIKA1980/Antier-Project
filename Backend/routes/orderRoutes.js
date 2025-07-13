// routes/orderRoutes.js
import express from "express";
import { createOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/buy-now", createOrder); // ✅ ADD THIS

export default router;
