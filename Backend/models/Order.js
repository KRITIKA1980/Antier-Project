// models/Order.js
// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  productId: { type: String, required: true },
  productTitle: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;


