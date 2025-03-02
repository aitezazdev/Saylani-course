import express from "express";
import multer from "multer";
import morgan from "morgan";

const app = express();
const upload = multer();

app.use(morgan("dev"));
app.use(upload.any()); // allows any type of file

app.use(express.json()); // build-in middleware
app.use(express.urlencoded({ extended: true })); // build-in middleware

app.get("/", (req, res) => {
    res.send("Welcome! Use POST to upload files.");
});

app.post("/", (req, res) => {
    console.log(req.files); // contains uploaded files
    console.log(req.body);  // contains other form data
    res.status(201).send({ files: req.files, data: req.body });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
