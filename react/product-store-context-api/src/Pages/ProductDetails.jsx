import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleDeleteProduct = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      try {
        const response = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
        alert('Product deleted successfully');
        navigate('/products');
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
      }
    }
  };

  const goBack = () => {
    navigate('/products');
  };

  if (!product) {
    return <div className="text-4xl font-bold mt-20 text-center">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
      <img src={product.images[0]} alt={product.title} className="w-full h-80 object-cover mb-6" />
      <p className="text-xl mb-6">{product.description}</p>
      <p className="text-2xl font-semibold mb-6">${product.price}</p>

      <div className='flex gap-5 justify-center'>
      <button
        onClick={goBack}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Go To Products
      </button>
      <button
        onClick={handleDeleteProduct}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Product
      </button>
      </div>
    </div>
  );
};

export default ProductDetails;
