import express from "express";
import productRoutes from "./routes/product.js";
const app = express();

app.use("/product/v1", productRoutes);

// const userLogin = false;

// app.use((req, res, next) => {
//   if(userLogin){
//     console.log("middleware is running");
//     next();
//   } else {
//     res.status(401).json({
//       success: false,
//       message: "user is not logged in",
//     })
//   }
// });

app.get("/", (req, res) => {
  console.log("home");
  res.json({
    success: true,
    message: "zaz khan",
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
