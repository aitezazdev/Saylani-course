import express from "express";
const app = express();
import connectDB from "./db/db.js";
import User from "./models/user.model.js";

connectDB();

app.use(express.json());

const users = [
  { name: "Alice Johnson", age: 25, city: "New York" },
  { name: "Bob Smith", age: 32, city: "Los Angeles" },
  { name: "Charlie Brown", age: 28, city: "Chicago" },
  { name: "David Miller", age: 40, city: "Houston" },
  { name: "Eve Thompson", age: 22, city: "Miami" },
  { name: "Frank White", age: 35, city: "San Francisco" },
  { name: "Grace Lee", age: 30, city: "Seattle" },
  { name: "Hank Williams", age: 27, city: "Denver" },
  { name: "Ivy Carter", age: 29, city: "Boston" },
  { name: "Jack Wilson", age: 33, city: "Atlanta" },
  { name: "Kelly Davis", age: 31, city: "Dallas" },
  { name: "Leo Martinez", age: 26, city: "Phoenix" },
  { name: "Mia Gonzalez", age: 24, city: "San Diego" },
  { name: "Noah Robinson", age: 37, city: "Philadelphia" },
  { name: "Olivia Scott", age: 23, city: "Austin" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/seed", async (req, res) => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    res.status(201).json({ message: "Users seeded successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error seeding users", error });
  }
});

app.get("/users", async (req, res) => {
  try {
    const getUsers = await User.find({
      $and: [{ age: { $gt: 10 } }, { city: "New York" }],
    });
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json({ message: `Error occurred: ${error.message}` });
  }
});

// $gt -> greater than
// $gte -> greater than or equal to
// $lt -> less than
// $lte -> less than or equal to
// $ne -> not equal to
// $in -> in
// $nin -> not in
// $regex -> regular expression
// $exists -> exists




// mongoDB cursor -> used to iterate over the results of a query
app.get("/cursor", async (req, res) => {
  try {
    // const users = await User.find().countDocuments(); // countDocuments() is used to count the number of documents in the collection
    // const users = await User.find().sort({ age: -1 }); // -1 for descending
    // const users = await User.find().sort({ age: 1 }); // 1 for ascending
    // const users = await User.find().limit(5); // limit() is used to limit the number of documents returned
    const users = await User.find().skip(5); // skip() is used to skip the first n documents
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `Error occurred: ${error.message}` });
  }
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

