import taskModel from "../models/task.model.js";
import userModel from "../models/user.model.js";

const createTask = async (req, res) => {
  const { title, description, completed } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Title and description are required",
    });
  }

  const newTask = await taskModel({
    title,
    description,
    completed: completed ?? false,
    user: req.user.id,
  });

  await newTask.save();

  res.status(201).json({
    success: true,
    message: "task created successfully",
    data: newTask,
  });
};

const getTasks = async (req, res) => {
  try {
    const userTasks = await taskModel.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: userTasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { createTask, getTasks };
