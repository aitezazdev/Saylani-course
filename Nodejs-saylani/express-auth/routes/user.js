const express = require("express");
const router = express.Router();
const { register, login, sendEmail, allUsers, deleteUser } = require("../controllers/user.js");

router.post("/register", register);
router.post("/login", login);
router.post("/send-email", sendEmail);
router.get("/all-users", allUsers);
router.delete("delete-user/:id", deleteUser);

module.exports = router;