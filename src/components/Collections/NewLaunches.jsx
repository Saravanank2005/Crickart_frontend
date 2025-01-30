import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewLaunches.css';
import all_product from '../assets/all_product';

const NewLaunches = () => {
  const [loading, setLoading] = useState(false);
  
  // Get the 6 most recent products
  const newProducts = all_product
    .sort((a, b) => b.id - a.id) // Sort by id in descending order
    .slice(0, 6); // Get first 6 products

  if (loading) {
    return <div className="loading">Loading new launches...</div>;
  }

  return (
    <div className='new-launches'>
      <div className="section-header">
        <h1>New Launches</h1>
        <Link to="/new-collections" className="view-all">View All New Products →</Link>
      </div>
      <hr />
      <div className="new-products">
        {newProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="new-product">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="launch-tag">NEW LAUNCH</div>
              {product.category && (
                <div className="special-tag">{product.category}</div>
              )}
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <div className="price-container">
                <p className="price">₹{product.new_price}</p>
                {product.old_price && (
                  <p className="old-price">₹{product.old_price}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewLaunches; 