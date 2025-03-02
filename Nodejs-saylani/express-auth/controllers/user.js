const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transport = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "aitezazsikandar@gmail.com",
    pass: process.env.APP_GOOGLE_PASSWORD,
  },
});

const mailOptions = {
  from: "aitezazsikandar@gmail.com",
  to: "aitezazsikandar@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

const userData = {
  id: 123,
  username: "Zaz",
  password: "password123",
  role: "user",
};

const sendEmail = (req, res) => {
  try {
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const hashPassword = await bcrypt.hash(password, 10);

    res.status(201).send({
      message: "User created successfully",
      user: {
        id: userData.id,
        username,
        email,
        hashPassword,
        role: userData.role,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const comparePassword = await bcrypt.compare(password, userData.password);

    if (!comparePassword)
      return res.status(400).json({ message: "Invalid credentials" });

    if (username === userData.username) {
      const token = jwt.sign(userData, process.env.SECRET_KEY, {
        expiresIn: "5h",
      });

      res.json({
        message: "Login successful",
        token,
      });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = { register, login, sendEmail };