import express from "express";
import authenticateUser from "../middlewares/userAuthentication.js";
import { createTask, getTasks } from "../controllers/task.controller.js";
const taskRouter = express.Router();

taskRouter.post("/create-task", authenticateUser, createTask);
taskRouter.post("/user-tasks", authenticateUser, getTasks);

export default taskRouter;