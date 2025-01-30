import React, { useState, useEffect } from 'react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import styles from './ProductList.module.css';

const ProductList = () => {
  const { admin } = useAdminAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch products when component mounts
  useEffect(() => {
    if (!admin || !admin.token) {
        setError('Please log in as admin');
        return;
    }
    fetchProducts();
  }, [admin]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/products');
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched products:', data);
        setProducts(data);
      } else {
        setError('Failed to fetch products');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveProduct = async (productId, productName) => {
    if (!admin || !admin.token) {
        setError('Please log in as admin first');
        return;
    }

    if (!window.confirm(`Are you sure you want to remove ${productName}?`)) return;

    try {
        console.log('Attempting to remove product:', { id: productId, name: productName });
      
        const response = await fetch(`http://localhost:4000/api/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${admin.token}`
            }
        });

        let data;
        try {
            const text = await response.text();
            data = JSON.parse(text);
            console.log('Server response:', data);
        } catch (err) {
            console.error('Error parsing response:', err);
            throw new Error(`Server error: ${response.statusText}`);
        }

        if (!response.ok) {
            throw new Error(data.message || 'Failed to remove product');
        }

        // Update local state immediately
        setProducts(prevProducts => prevProducts.filter(p => p._id !== productId));
        
        // Show success message
        alert(data.message || 'Product removed successfully');

    } catch (err) {
        console.error('Error removing product:', err);
        setError(err.message || 'Error connecting to server');
    }
  };

  // Separate function to refresh products
  const refreshProducts = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/products');
        if (response.ok) {
            const data = await response.json();
            console.log('Refreshed products:', data);
            setProducts(data);
        }
    } catch (error) {
        console.error('Error refreshing products:', error);
    }
  };

  // Add this useEffect to periodically refresh the product list
  useEffect(() => {
    const interval = setInterval(refreshProducts, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.productList}>
      <h1>All Products List</h1>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Products</th>
              <th>Title</th>
              <th>Old Price</th>
              <th>New Price</th>
              <th>Category</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={styles.productImage} 
                  />
                </td>
                <td>{product.name}</td>
                <td>₹{product.old_price}</td>
                <td>₹{product.new_price}</td>
                <td>{product.category}</td>
                <td>
                  <button 
                    className={styles.removeButton}
                    onClick={() => handleRemoveProduct(product._id, product.name)}
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList; 