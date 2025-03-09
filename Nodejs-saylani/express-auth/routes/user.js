const express = require("express");
const router = express.Router();
const { register, login, sendEmail, allUsers } = require("../controllers/user.js");

router.post("/register", register);
router.post("/login", login);
router.post("/send-email", sendEmail);
router.get("/all-users", allUsers);

module.exports = router;