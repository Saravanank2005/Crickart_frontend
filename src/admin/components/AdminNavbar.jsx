import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import styles from './AdminNavbar.module.css';

const AdminNavbar = () => {
    const { admin, logout } = useAdminAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className={styles.adminNavbar}>
            <div className={styles.logo}>
                <h1>CricKart Admin</h1>
            </div>
            <div className={styles.adminInfo}>
                <div className={styles.adminProfile}>
                    <FaUser className={styles.adminIcon} />
                    <span>{admin?.email}</span>
                </div>
                <button onClick={handleLogout} className={styles.logoutButton}>
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </div>
    );
};

export default AdminNavbar; 