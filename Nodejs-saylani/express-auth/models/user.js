const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        min: 6,
        required: true
    }
});

module.exports = mongoose.model("User", registerSchema);