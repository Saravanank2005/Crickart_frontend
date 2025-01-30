import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { FaUser, FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    // Check if user is logged in on component mount
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setShowUserMenu(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.svg" alt="Logo" className="nav-logo" />
      </div>

      <div className="navbar-menu">
        <a href="/" className="nav-link">Home</a>
        <a href="/reviews" className="nav-link">Reviews</a>
      </div>

      <div className="navbar-auth">
        {!isLoggedIn ? (
          <>
            <button 
              className="nav-button" 
              onClick={() => setShowLogin(true)}
            >
              Log In
            </button>
            <button 
              className="nav-button primary" 
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </button>
          </>
        ) : (
          <div className="user-menu" onClick={() => setShowUserMenu(!showUserMenu)}>
            <div className="user-menu-button">
              <FaUser className="user-icon" />
              <span>{user?.firstName || 'User'}</span>
              <FaCaretDown className={`caret-icon ${showUserMenu ? 'open' : ''}`} />
            </div>
            
            {showUserMenu && (
              <div className="user-dropdown">
                <div className="user-dropdown-header">
                  <span className="user-full-name">
                    {user?.firstName} {user?.lastName}
                  </span>
                  <span className="user-email">{user?.email}</span>
                </div>
                <div className="user-dropdown-divider" />
                <a href="/profile" className="dropdown-item">Profile</a>
                <a href="/settings" className="dropdown-item">Settings</a>
                <div className="user-dropdown-divider" />
                <button 
                  className="dropdown-item logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {showLogin && (
        <LoginForm 
          onClose={() => setShowLogin(false)} 
          onSuccess={(userData) => {
            setIsLoggedIn(true);
            setUser(userData);
            setShowLogin(false);
          }}
        />
      )}
      
      {showSignUp && (
        <SignUpForm 
          onClose={() => setShowSignUp(false)}
          onSuccess={(userData) => {
            setIsLoggedIn(true);
            setUser(userData);
            setShowSignUp(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar; 