import React from 'react';
import './NewArrivals.css';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    // You can fetch this data from your backend
    const newProducts = [
        // Add your new products data here
    ];

    return (
        <section className="new-arrivals">
            <div className="section-header">
                <h2>New Arrivals</h2>
                <Link to="/new-collections" className="view-all">View All</Link>
            </div>
            <div className="products-grid">
                {newProducts.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">₹{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals; 