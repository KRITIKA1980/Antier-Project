import Customer from "../models/Customer.js";
import generateToken from "../utils/generateToken.js";

export const registerCustomer = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    const customerExists = await Customer.findOne({ email });
    if (customerExists) return res.status(400).json({ message: "Customer already exists" });

    const customer = await Customer.create({ name, email, password, address });
    res.status(201).json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
      address: customer.address,
      token: generateToken(customer._id, "customer"),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });

    if (customer && customer.password === password) {
      res.json({
        _id: customer._id,
        name: customer.name,
        email: customer.email,
        address: customer.address,
        token: generateToken(customer._id, "customer"),
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
