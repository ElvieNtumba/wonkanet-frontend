// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import Filter from '../components/Filter';
// import logo from '../assets/logo2.png'; // Uncomment if you have a logo

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <Link to="#"><p>WONKANET</p></Link>
          <Link to="/"><p>Home</p></Link>
          <Link to="/products"><p>Products</p></Link>
          <Link to="/cart"><p>Cart</p></Link>
          <Link to="/signin"><p>Signin</p></Link>
          <Link to="/signup"><p>SignUp</p></Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
