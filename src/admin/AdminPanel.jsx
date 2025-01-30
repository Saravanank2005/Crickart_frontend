import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar';
import Sidebar from './components/Sidebar';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import styles from './AdminPanel.module.css';
import { useAdminAuth } from '../context/AdminAuthContext';

const AdminPanel = () => {
  const { admin } = useAdminAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay, remove in production
    const timer = setTimeout(() => {
      if (!admin) {
        navigate('/admin/login');
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [admin, navigate]);

  // Show loading or redirect if not logged in
  if (isLoading) {
    return <div>Loading...</div>; // You can replace with a spinner or loader component
  }

  if (!admin) {
    return null; // This case won't happen due to the redirect in useEffect
  }

  return (
    <div className={styles.adminContainer}>
      <AdminNavbar />
      <div className={styles.mainContent}>
        <Sidebar />
        <div className={styles.contentArea}>
          <Routes>
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/listproduct" element={<ProductList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
