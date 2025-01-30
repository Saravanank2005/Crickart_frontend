import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
// import { ShopContext } from '../../context/ShopContext';
// import { useContext } from 'react';
import { 
    FaUser, 
    FaShoppingCart, 
    FaBars, 
    FaTimes, 
    FaHome,
    FaBaseballBall,
    FaTshirt,
    FaGripHorizontal,  // Using this for bats instead of FaCricket
    FaSignOutAlt
} from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { user, logout } = useUserAuth();
    // const { getTotalCartItems } = useContext(ShopContext);
    const { getCartCount } = useCart();
    const cartCount = getCartCount();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);  // Close menu after navigation
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    {/* <img src={logo} alt="CricKart" /> */}
                    <span>CricKart</span>
                </Link>

                {/* Right Section */}
                <div className="nav-right">
                    {user ? (
                        <div className="user-menu" ref={dropdownRef}>
                            <button 
                                className="profile-button"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                <FaUser />
                            </button>
                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/orders">Orders</Link>
                                    <button onClick={handleLogout}>
                                        <FaSignOutAlt /> Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="auth-buttons">
                            <Link to="/login" className="login-btn">Login</Link>
                            <Link to="/signup" className="signup-btn">Sign Up</Link>
                        </div>
                    )}

                    <Link to="/cart" className="nav-cart">
                        <FaShoppingCart />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>

                    {/* Menu Button */}
                    <button 
                        className="menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className="menu-dropdown" ref={menuRef}>
                    <div className="dropdown-content">
                        <div className="dropdown-link" onClick={() => handleNavigation('/')}>
                            <FaHome className="dropdown-icon" />
                            <span>Home</span>
                        </div>
                        <div className="dropdown-link" onClick={() => handleNavigation('/bats')}>
                            <FaGripHorizontal className="dropdown-icon" />
                            <span>Bats</span>
                        </div>
                        <div className="dropdown-link" onClick={() => handleNavigation('/balls')}>
                            <FaBaseballBall className="dropdown-icon" />
                            <span>Balls</span>
                        </div>
                        <div className="dropdown-link" onClick={() => handleNavigation('/kits')}>
                            <FaTshirt className="dropdown-icon" />
                            <span>Kits</span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
