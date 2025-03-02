import express from "express";
const router = express.Router();

router.post("/allProducts", (req, res) => {
  const products = [
    { id: 1, name: "product 1", price: 100 },
    { id: 2, name: "product 2", price: 200 },
    { id: 3, name: "product 3", price: 300 },
  ];
  res.json({
    success: true,
    data: products,
  });
}); 

export default router;
