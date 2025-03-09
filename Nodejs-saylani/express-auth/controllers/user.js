const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const { log } = require("console");
const userModel = require("../models/user.js");

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

const userData = {
  id: 123,
  username: "Zaz",
  password: process.env.PASSWORD,
  role: "user",
};

const sendEmail = async (req, res) => {
  try {
    const { receiver, subject, name } = req.body;

    if (!receiver || !subject || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const templatePath = path.join(
      __dirname,
      "../utils/emailTemplate/email.html"
    );
    let emailTemplate = fs.readFileSync(templatePath, "utf8");

    emailTemplate = emailTemplate.replace("{{name}}", name);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: receiver,
      subject,
      html: emailTemplate,
    };

    const info = await transport.sendMail(mailOptions);
    log("Email sent:", info.messageId);
    return res.status(200).json({
      message: "Email sent successfully",
      info: {
        messageId: info.messageId,
        recipient: receiver,
      },
    });
  } catch (error) {
    console.error("Email sending error:", error.message);
    return res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await userModel.findOne({ email: email });
    if (userExist) return res.status(400).json({ message: `User already exists : ${email}` });

    if (!username || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userModel.create({
      userName: username,
      email,
      password: hashPassword,
    })

    res.status(201).send({
      message: "User created successfully",
      data: newUser
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
