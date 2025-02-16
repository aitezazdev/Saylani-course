import express from "express";
const app = express();

app.get("/", (req, res) => {
  throw new Error("error occurred haha 😂😂");
});

app.get("/user", (req, res) => {
  try {
    res.send("working");
  } catch (error) {
    throw new Error("error occurred haha 😂😂");
  }
});

app.use((err, req, res, next) => { // error handling middlware
  console.log(err.message);
  res.status(500).json({
    success: false,
    message: "something went wrong",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
