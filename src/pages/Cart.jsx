import React from 'react';
import { useCart } from '../context/CartContext';
import './CSS/Cart.css';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity >= 1) {
            updateQuantity(productId, newQuantity);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your Cart is Empty</h2>
                <p>Add some products to your cart to see them here!</p>
            </div>
        );
    }

    return (
        <div className="cart">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img 
                            src={item.image} 
                            alt={item.name}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/placeholder.png';
                            }}
                        />
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <p className="price">₹{item.new_price}</p>
                            <div className="quantity-controls">
                                <button 
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button 
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button 
                            className="remove-item"
                            onClick={() => removeFromCart(item.id)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Cart Summary</h3>
                <div className="summary-item">
                    <span>Subtotal:</span>
                    <span>₹{getCartTotal()}</span>
                </div>
                <div className="summary-item">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className="summary-total">
                    <span>Total:</span>
                    <span>₹{getCartTotal()}</span>
                </div>
                <button className="checkout-button">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
