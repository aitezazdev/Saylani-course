import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

const Navbar = () => {
  const navbar = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Signup",
      path: "/signup",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Product Details",
      path: "/product-details",
    },
  ];

  return (
    <>
      <nav className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex space-x-6">
            {navbar.map((nav) => (
              <NavLink
                key={nav.name}
                to={nav.path}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-blue-400 ${
                    isActive ? "text-blue-500 underline" : ""
                  }`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </main>
    </>
  );
};

export default Navbar;
