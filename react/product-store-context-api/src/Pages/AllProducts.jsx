import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return <div className='text-4xl font-bold mt-20 text-center'>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 cursor-pointer rounded-lg shadow hover:bg-gray-100"
            onClick={() => handleProductClick(product.id)}
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover mt-2" />
            <p className="mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
