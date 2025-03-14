import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    const isUserExist = await userModel.findOne({ email: email });
    if (isUserExist) {
      return res.status(401).json({
        success: false,
        message: `user with this email: ${email} already exist`,
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const createUser = await userModel.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.status(201).json({
      success: true,
      message: "user registered successfully",
      data: createUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    const isUserExist = await userModel.findOne({ email: email });
    if (!isUserExist) {
      return res.status(401).json({
        success: false,
        message: "invalid email or password",
      });
    }

    const comparePasswords = await bcrypt.compare(password, isUserExist.password);
    if (!comparePasswords) {
      return res.status(401).json({
        success: false,
        message: "invalid email or password",
      });
    }

    const token = jwt.sign({ id: isUserExist._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    const {password: _, ...userData} = isUserExist.toObject();

    res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        data: userData
      });
      

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export { registerUser, loginUser };
