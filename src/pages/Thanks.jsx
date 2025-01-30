import React from 'react';
import './CSS/Thanks.css';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Thanks = ({ closePopup }) => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        if (typeof closePopup === 'function') {
            closePopup(); // Close the popup
        }
        navigate('/'); // Redirect to the home page
    };

    return (
        <div className='thanks-overlay'>
            <div className='thanks-popup'>
                <div className='thanks-icon'>
                    <FaCheckCircle />
                </div>
                <div className='orderplaced'>
                    <h1>ORDER PLACED</h1>
                </div>
                <div className='thanks-message'>
                    <p>Thank you for your purchase! Your order has been successfully placed.</p>
                </div>
                <div className='order-details'>
                    <p>You will receive an email confirmation shortly with your order details.</p>
                </div>
                <button className='return-home' onClick={handleContinueShopping}>Continue Shopping</button>
            </div>
        </div>
    );
}

export default Thanks;
