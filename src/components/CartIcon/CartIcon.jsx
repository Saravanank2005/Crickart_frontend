import React from 'react';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './CartIcon.css';

const CartIcon = () => {
    const { getCartCount } = useCart();
    const count = getCartCount();

    return (
        <div className="cart-icon">
            <FaShoppingCart />
            {count > 0 && <span className="cart-count">{count}</span>}
        </div>
    );
};

export default CartIcon; 