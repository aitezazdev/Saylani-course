const express = require("express");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));


let users = [
    { name: "zaz", age: 22 },
    { name: "bro", age: 21 },
    { name: "khan", age: 23 }
];

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/users", (req, res) => {
    res.render("users", { users });
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    const formData = { name, email, message }; 
    fs.appendFileSync("users.json", JSON.stringify(formData) + "\n");
    res.render("success", { name });
});

app.listen(3100, () => console.log(`Server running on http://localhost:3000`));
