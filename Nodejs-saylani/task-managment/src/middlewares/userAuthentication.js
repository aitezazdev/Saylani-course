import jwt from "jsonwebtoken";

const authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "token not found, plz log in",
      });
    }

    const decodedInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedInfo;
    next();
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export default authenticateUser;
