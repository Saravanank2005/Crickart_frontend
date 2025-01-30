import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink 
        to="/admin/addproduct" 
        className={({ isActive }) => 
          `${styles.sidebarItem} ${isActive ? styles.active : ''}`
        }
      >
        <span className={styles.icon}>🛒</span>
        Add Product
      </NavLink>
      
      <NavLink 
        to="/admin/listproduct" 
        className={({ isActive }) => 
          `${styles.sidebarItem} ${isActive ? styles.active : ''}`
        }
      >
        <span className={styles.icon}>📁</span>
        Product List
      </NavLink>
    </div>
  );
};

export default Sidebar; 