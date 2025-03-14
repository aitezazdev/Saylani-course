import express from "express";
import dbConnection from "./src/config/db.js";
import dotenv from "dotenv"
import authRouter from "./src/routes/auth.route.js";
import taskRouter from "./src/routes/task.route.js";

const app = express();
dotenv.config();

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("working bro!");
});

app.use("/api/auth", authRouter);
app.use("/api/tasks", taskRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server listening on PORT: ${3000}`);
});
