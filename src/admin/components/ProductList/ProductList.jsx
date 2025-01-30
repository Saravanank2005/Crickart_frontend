import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../../context/AdminContext';
import './ProductList.css';

const ProductList = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { fetchProducts, deleteProduct } = useAdmin();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                const response = await fetchProducts();
                console.log('Raw response:', response);

                // Check if products array exists in the response
                if (response?.products && Array.isArray(response.products)) {
                    setProductList(response.products);
                    setError(null);
                } else {
                    console.error('Invalid products data:', response);
                    setProductList([]);
                    setError('Invalid data format received');
                }
            } catch (err) {
                console.error('Error loading products:', err);
                setError('Failed to load products');
                setProductList([]);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [fetchProducts]);

    const handleDelete = async (productId) => {
        try {
            const success = await deleteProduct(productId);
            if (success) {
                setProductList(current => 
                    current.filter(product => product._id !== productId)
                );
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (productList.length === 0) {
        return <div className="no-products">No products found</div>;
    }

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <div className="product-grid">
                {productList.map((product) => (
                    <div key={product._id || product.id} className="product-card">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="product-image"
                            onError={(e) => {
                                e.target.src = '/default-product-image.png';
                            }}
                        />
                        <div className="product-details">
                            <h3>{product.name || 'Untitled Product'}</h3>
                            <p className="price">₹{product.new_price || 0}</p>
                            <p className="category">{product.category || 'Uncategorized'}</p>
                            <div className="product-actions">
                                <button 
                                    onClick={() => handleDelete(product._id || product.id)}
                                    className="delete-btn"
                                >
                                    Delete
                                </button>
                                <button className="edit-btn">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList; 