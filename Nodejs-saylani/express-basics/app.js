import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "hello world" });
});

app.post("/register", (req, res) => {
    console.log(req.body);
})

app.put("/update/:userID", (req, res) => {
    console.log(req.params.userID);
    res.json({ success: true, message: "user updated" });
})

app.get("/products", (req, res) => {
    const {limit, skip} = req.query;
    console.log(`limit: ${limit}, skip: ${skip}`);
    res.json({ success: true, message: "products" });
})

app.all("*", (req, res) => {
    res.status(404).json({ success: false, message: "page not found" });
})

app.listen(3000,() => {
  console.log("server started on port 4000");
});