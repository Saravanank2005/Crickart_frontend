import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useUserAuth();
    const adminToken = localStorage.getItem('adminToken');

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (!adminToken) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default ProtectedRoute; 