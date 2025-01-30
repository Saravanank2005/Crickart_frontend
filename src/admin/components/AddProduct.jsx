import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';
import styles from './AddProduct.module.css';

const AddProduct = () => {
  const { admin } = useAdminAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    oldPrice: '',
    newPrice: '',
    category: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.title);
      formDataToSend.append('old_price', formData.oldPrice);
      formDataToSend.append('new_price', formData.newPrice);
      formDataToSend.append('category', formData.category);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await fetch('http://localhost:4000/api/products/addproduct', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${admin.token}`
        },
        body: formDataToSend
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add product');
      }

      setSuccess('Product added successfully!');
      setFormData({
        title: '',
        oldPrice: '',
        newPrice: '',
        category: '',
        image: null
      });
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  return (
    <div className={styles.addProduct}>
      <h1>Add New Product</h1>
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Product Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Old Price</label>
          <input
            type="number"
            name="oldPrice"
            value={formData.oldPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>New Price</label>
          <input
            type="number"
            name="newPrice"
            value={formData.newPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="bats">Bats</option>
            <option value="balls">Balls</option>
            <option value="kits">Kits</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct; 