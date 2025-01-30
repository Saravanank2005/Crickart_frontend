import React, { useState } from 'react';
import './Profile.css';
import { FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa';
import { useUserAuth } from '../../context/UserAuthContext';

const Profile = () => {
    const { user } = useUserAuth();
    const [activeTab, setActiveTab] = useState('orders');

    // Dummy data - replace with actual data from your backend
    const orders = [
        {
            id: 1,
            date: '2024-03-10',
            items: [
                { name: 'Cricket Bat', price: 199.99, quantity: 1 },
                { name: 'Cricket Ball', price: 29.99, quantity: 2 }
            ],
            status: 'Delivered'
        }
    ];

    const favorites = [
        {
            id: 1,
            name: 'Premium Cricket Bat',
            price: 299.99,
            image: '/path/to/image.jpg'
        }
    ];

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="user-info">
                    <div className="avatar">
                        <FaUser />
                    </div>
                    <h2>{user?.email}</h2>
                </div>
            </div>

            <div className="profile-tabs">
                <button 
                    className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orders')}
                >
                    <FaShoppingBag /> My Orders
                </button>
                <button 
                    className={`tab ${activeTab === 'favorites' ? 'active' : ''}`}
                    onClick={() => setActiveTab('favorites')}
                >
                    <FaHeart /> Favorites
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'orders' ? (
                    <div className="orders-list">
                        {orders.map(order => (
                            <div key={order.id} className="order-card">
                                <div className="order-header">
                                    <span className="order-date">
                                        {new Date(order.date).toLocaleDateString()}
                                    </span>
                                    <span className={`order-status ${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className="order-items">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="order-item">
                                            <span>{item.name} x{item.quantity}</span>
                                            <span>${item.price}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="order-total">
                                    <span>Total:</span>
                                    <span>
                                        ${order.items.reduce((sum, item) => 
                                            sum + (item.price * item.quantity), 0).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="favorites-grid">
                        {favorites.map(item => (
                            <div key={item.id} className="favorite-card">
                                <img src={item.image} alt={item.name} />
                                <div className="favorite-info">
                                    <h3>{item.name}</h3>
                                    <span className="price">${item.price}</span>
                                </div>
                                <button className="remove-favorite">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile; 