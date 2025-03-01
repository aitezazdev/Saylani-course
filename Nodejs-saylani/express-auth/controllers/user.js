const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userData = {
  id: 123,
  username: "Zaz",
  password: "password123",
  role: "user",
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


module.exports = { register, login };