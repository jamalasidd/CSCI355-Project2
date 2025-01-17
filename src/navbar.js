import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import siteLogo from './Images/sitelogo.png';

function Navbar({ cart }) { // Accept cart as a prop
  return (
    <div className="NavbarContainer">
      {/* Site Logo */}
      <div className="LogoContainer">
        <img src={siteLogo} alt="Site Logo" className="SiteLogo" />
      </div>
      {/* Navigation Links */}
      <nav className="Navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/locations">Locations and Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/buyproducts">Buy Products</Link></li>
          <li>
            <Link to="/cart" className="CartLink">
              Cart ({cart.length}) {/* Show the number of items in the cart */}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
