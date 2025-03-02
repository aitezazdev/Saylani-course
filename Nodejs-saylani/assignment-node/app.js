const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





// Logging Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Authentication Middleware for /profile
const authMiddleware = (req, res, next) => {
    if (req.query.auth === "true") {
        next();
    } else {
        res.status(403).json({ message: "Access denied. Auth required." });
    }
};

// profile route
app.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your profile!" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});






app.get("/", (req, res) => {
  res.status(200).send("working fine");
});

app.get("/create-file", (req, res) => {
  fs.writeFile(
    "data/file.txt",
    "newly created file, this data will be modified in future, so sit back, relax and enjoy the journey",
    (err) => {
      if (err) {
        res.status(500).send("error creating file");
      } else {
        res.status(200).send("file created successfully");
      }
    }
  );
});

app.get("/read-file", (req, res) => {
  fs.readFile("data/file.txt", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("error reading file");
    } else {
      res.status(200).send("file data: " + data);
    }
  });
});

app.get("/append-file", (req, res) => {
  fs.appendFile("data/file.txt", "new data\n", (err) => {
    if (err) {
      res.status(500).send("Error appending file");
    } else {
      res.status(200).send("File appended successfully");
    }
  });
});

app.get("/delete-file", (req, res) => {
  fs.unlink("data/file.txt", (err) => {
    if (err) {
      res.status(500).send("Error deleting file");
    } else {
      res.status(200).send("File deleted successfully");
    }
  });
});







let users = [];

// fetch users
app.get("/users", (req, res) => {
  res.json(users);
});

// add users
app.post("/add-user", (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({ message: "User added successfully", user });
})

// update user
app.put("/update-user/:id", (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    users = users.map(user => user.id === id ? updatedUser : user);
    res.status(200).json({ message: "User updated successfully", updatedUser });
})

// delete user
app.delete("/delete-user/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    res.status(200).json({message: "User deleted successfully"});
})




app.listen(3000, () => {
  console.log("server started on port 3000");
});
