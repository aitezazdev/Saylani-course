import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [images, setImages] = useState(['']);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !description || !categoryId || !images.length) {
      alert('Please fill in all fields.');
      return;
    }

    const productData = {
      title,
      price: parseFloat(price),
      description,
      categoryId: parseInt(categoryId),
      images,
    };

    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/products', productData);
      
      if (response.status === 201) {
        alert('Product created successfully');
        navigate('/products');
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product');
    }
  };

  if (loading) {
    return <div className="text-4xl font-bold mt-20 text-center">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium">Product Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-lg font-medium">Price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="categoryId" className="block text-lg font-medium">Category</label>
          <select
            id="categoryId"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="images" className="block text-lg font-medium">Product Images (comma separated URLs)</label>
          <input
            id="images"
            type="text"
            value={images.join(',')}
            onChange={(e) => setImages(e.target.value.split(','))}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Create Product</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
