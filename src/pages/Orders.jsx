import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import './CSS/Orders.css';

const Orders = () => {
    const { user } = useUserAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) return;

        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/orders/user', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }
                
                const data = await response.json();
                setOrders(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [user]);

    if (!user) {
        return (
            <div className="orders-container">
                <h2>Please login to view your orders</h2>
            </div>
        );
    }

    if (loading) return <div className="orders-container">Loading...</div>;
    if (error) return <div className="orders-container">Error: {error}</div>;

    return (
        <div className="orders-container">
            <h2>My Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found</p>
            ) : (
                <div className="orders-list">
                    {orders.map(order => (
                        <div key={order._id} className="order-card">
                            <div className="order-header">
                                <h3>Order #{order._id.slice(-6)}</h3>
                                <span className="order-date">
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="order-items">
                                {order.items.map(item => (
                                    <div key={item._id} className="order-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Price: ₹{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="order-footer">
                                <p>Total: ₹{order.total}</p>
                                <p>Status: {order.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders; 