import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4 px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Products</h1>
        <div>
          <Link
            to="/"
            className="text-white mx-4 hover:bg-blue-700 px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white mx-4 hover:bg-blue-700 px-3 py-2 rounded"
          >
            Products
          </Link>
          <Link
            to="/create-product"
            className="text-white mx-4 hover:bg-blue-700 px-3 py-2 rounded"
          >
            Create Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
