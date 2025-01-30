import React from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import './CSS/Profile.css';

const Profile = () => {
    const { user, logout } = useUserAuth();

    if (!user) {
        return (
            <div className="profile-container">
                <h2>Please login to view your profile</h2>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h2>My Profile</h2>
                <div className="profile-info">
                    <div className="info-group">
                        <label>Name</label>
                        <p>{user.name || 'Not provided'}</p>
                    </div>
                    <div className="info-group">
                        <label>Email</label>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile; 