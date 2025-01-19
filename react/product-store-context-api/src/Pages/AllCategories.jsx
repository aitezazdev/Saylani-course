import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
  };

  if (loading) {
    return <div className='text-4xl font-bold mt-20 text-center'>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Categories</h1>
      <div className="grid grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border p-4 cursor-pointer rounded-lg shadow hover:bg-gray-100"
            onClick={() => handleCategoryClick(category.id)}
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
