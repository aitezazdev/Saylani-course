import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryByProducts = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [id]);

  const handleDeleteCategory = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this category?');
    if (confirmed) {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete category');
        }
        alert('Category deleted successfully');
        navigate('/');
      } catch (error) {
        console.error('Error deleting category:', error);
        alert('Failed to delete category');
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products in this Category</h1>
      <button
        onClick={handleDeleteCategory}
        className="bg-red-500 text-white px-4 py-2 rounded mb-6"
      >
        Delete Category
      </button>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryByProducts;
