import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is a token in localStorage on page load
    const storedToken = localStorage.getItem('adminToken');
    if (storedToken) {
      // Optionally, verify the token with an API call here (e.g., to fetch user info)
      // For now, we're assuming the token is valid
      setAdmin({ token: storedToken });
    }
  }, []);

  const login = (adminData) => {
    // Implement the actual authentication logic (e.g., API call) here
    setAdmin(adminData); // Save the admin data (e.g., token, name, email, etc.)
    localStorage.setItem('adminToken', adminData.token); // Persist the token in localStorage
    navigate('/admin/dashboard'); // Redirect to dashboard
  };

  const logout = () => {
    setAdmin(null); // Clear the admin data
    localStorage.removeItem('adminToken'); // Remove the token from localStorage
    navigate('/admin/login'); // Redirect to login page
  };

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
