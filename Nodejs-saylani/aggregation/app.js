import express from "express";
const app = express();
import connectDB from "./db/db.js";
import User from "./models/user.model.js";

connectDB();

app.use(express.json());

const orders = [
  { id: 1, name: "John Doe", item: "Laptop", price: 1200, total: 5, status: "Shipped" },
  { id: 2, name: "Alice Smith", item: "Smartphone", price: 800, total: 10, status: "Pending" },
  { id: 3, name: "Bob Johnson", item: "Tablet", price: 500, total: 7, status: "Delivered" },
  { id: 4, name: "Charlie Brown", item: "Headphones", price: 150, total: 15, status: "Shipped" },
  { id: 5, name: "David Miller", item: "Smartwatch", price: 250, total: 8, status: "Cancelled" },
  { id: 6, name: "Eve Thompson", item: "Monitor", price: 300, total: 6, status: "Pending" },
  { id: 7, name: "Frank White", item: "Keyboard", price: 100, total: 12, status: "Delivered" },
  { id: 8, name: "Grace Lee", item: "Mouse", price: 50, total: 20, status: "Shipped" },
  { id: 9, name: "Hank Williams", item: "Printer", price: 200, total: 4, status: "Cancelled" },
  { id: 10, name: "Ivy Carter", item: "External Hard Drive", price: 120, total: 9, status: "Pending" },
  { id: 11, name: "Jack Wilson", item: "USB Flash Drive", price: 30, total: 25, status: "Shipped" },
  { id: 12, name: "Kelly Davis", item: "Gaming Console", price: 500, total: 3, status: "Delivered" },
  { id: 13, name: "Leo Martinez", item: "Camera", price: 700, total: 5, status: "Pending" },
  { id: 14, name: "Mia Gonzalez", item: "Router", price: 90, total: 11, status: "Shipped" },
  { id: 15, name: "Noah Robinson", item: "Speakers", price: 180, total: 7, status: "Cancelled" },
];


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/seed", async (req, res) => {
  try {
    await User.deleteMany();
    await User.insertMany(orders);
    res.status(201).json({ message: "Users seeded successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error seeding users", error });
  }
});

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.aggregate([
//       { $match: { name: "Alice" } }
//     ]);
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// });


// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.aggregate([
//       {$group: { _id: "$name", total: { $sum: "$total" } }},

//     ]);
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// });


// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.aggregate([
//       { $match: { status: "Shipped" } },
//       {$group: { _id: "$name", total: { $sum: "$total" } }},

//     ]);
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// });


// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.aggregate([
//       {$group: { _id: "$name", total: { $sum: "$total" } }},
//       {$sort: { total: -1 }},

//     ]);
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// });


// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.aggregate([
//       {$group: { _id: "$name", total: { $sum: "$total" } }},
//       {$sort: { total: -1 }},
//     ]);
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// });


app.get("/users", async (req, res) => {
  try {
    const users = await User.aggregate([
      {$unwind: "$status"}
    ]); 
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});


app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
