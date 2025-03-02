const express = require("express");
const app = express();

app.use(express.static("./public")); // built-in middleware
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/home", (req, res) => {
  res.render("home.ejs", {
    userData: [
      {
        name: "John Doe",
        email: "QHmY0@example.com"
      },
      {
        name: "zaz khan",
        email: "zaz@example.com"
      },
      {
        name: "sama Doe",
        email: "sama@example.com"
      }
    ]
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
