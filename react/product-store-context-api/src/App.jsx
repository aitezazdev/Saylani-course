import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCategories from "./Pages/AllCategories";
import CategoryByProducts from "./Pages/CategoryByProducts";
import AllProducts from "./Pages/AllProducts";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./Components/Navbar";
import CreateProduct from "./Pages/CreateProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllCategories />} />
        <Route path="/category/:id" element={<CategoryByProducts />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
