import React, { useState } from 'react';
import './navbar.css';
import logo1 from '../assets/logo1.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("shop");

    return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo1} alt='logo' />
        <p>ricKart</p>
      </div>
      <ul className="nav-menu">
      <li onClick={()=>{setMenu("Shop")}}><Link style={{ textDecoration  : 'none'}} to="/">Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("Bats")}}><Link style={{ textDecoration  : 'none'}} to="/Bats">Bats</Link>{menu==="Bats"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Balls")}}><Link  style={{ textDecoration  : 'none'}}  to="/Balls">Balls</Link>{menu==="Balls"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kits")}}><Link style={{ textDecoration  : 'none'}}  to="/Kits">Kits</Link>{menu==="Kits"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'> 
        <button>Login</button> </Link>
        <Link to='/cart'>
        <img src={cart_icon} alt='cart' /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;  // Corrected export statement
