import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Pending", "Shipped", "Delivered", "Cancelled"], // Restrict values
    default: "Pending", // Default status
  },
});

export default mongoose.model("Order", orderSchema);
