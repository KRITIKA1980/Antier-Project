import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      email,
      productId,
      productTitle,
      price,
      quantity,
      totalAmount,
      address,
      phone,
      paymentMethod
    } = req.body;

    const newOrder = new Order({
      customerName,
      email,
      productId,
      productTitle,
      price,
      quantity,
      totalAmount,
      address,
      phone,
      paymentMethod
    });

    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order", details: error.message });
  }
};
