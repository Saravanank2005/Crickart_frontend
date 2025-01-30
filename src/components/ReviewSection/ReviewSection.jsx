import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import './ReviewSection.css';

const ReviewSection = ({ productId, onReviewAdded }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { user } = useUserAuth();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login', { state: { from: window.location.pathname } });
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Validate user
            if (!user) {
                navigate('/login', { state: { from: window.location.pathname } });
                return;
            }

            // Get token
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Authentication token not found');
            }

            // Validate inputs
            if (!productId) throw new Error('Product ID is missing');
            if (rating < 1 || rating > 5) throw new Error('Invalid rating');
            if (comment.trim().length < 10) throw new Error('Comment too short');

            setIsSubmitting(true);
            setError('');

            const response = await fetch(`http://localhost:4000/api/products/${productId}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    rating, 
                    comment,
                    userId: user.uid
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit review');
            }

            const data = await response.json();
            if (data.success) {
                setRating(0);
                setComment('');
                if (typeof onReviewAdded === 'function') {
                    onReviewAdded();
                }
            } else {
                throw new Error(data.message || 'Review submission failed');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setError(error.message || 'An error occurred while submitting your review');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="review-section">
            <h3>Write a Review</h3>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="rating-input">
                    <label>Rating:</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        disabled={!user || isSubmitting}
                    >
                        <option value={0}>Select rating</option>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num} star{num > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="comment-input">
                    <label>Comment:</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        disabled={!user || isSubmitting}
                        minLength={10}
                        maxLength={500}
                        required
                    />
                </div>
                {user ? (
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                ) : (
                    <button 
                        type="button" 
                        onClick={() => navigate('/login', { state: { from: window.location.pathname } })}
                        className="login-to-review"
                    >
                        Login to Submit Review
                    </button>
                )}
            </form>
        </div>
    );
};

export default ReviewSection; 