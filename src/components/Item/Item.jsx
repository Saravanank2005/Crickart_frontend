import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = (e) => {
        console.error('Image failed to load:', e.target.src);
        setImageError(true);
    };

    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img
                    src={imageError ? '/images/placeholder.png' : props.image}
                    alt={props.name}
                    onError={handleImageError}
                />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">₹{props.new_price}</div>
                <div className="item-price-old">₹{props.old_price}</div>
            </div>
        </div>
    );
};

export default Item;
