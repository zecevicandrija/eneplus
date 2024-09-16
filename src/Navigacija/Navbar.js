import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for styling
import enepluslogo from '../slike/enepluslogo.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <img src={enepluslogo} alt="EnePlus Logo" className="logo" />
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item"><Link to='/' className='nav-link'>Početna</Link></li>
            <li className="nav-item"><Link to='/onama' className='nav-link'>O Nama</Link></li>
            <li className="nav-item"><Link to='/usluge' className='nav-link'>Usluge</Link></li>
            <li className="nav-item"><Link to='/softver' className='nav-link'>Softver</Link></li>
            <li className="nav-item"><Link to='/media' className='nav-link'>Media</Link></li>
            <li className="nav-item"><Link to='/kontakt' className='nav-link'>Kontakt</Link></li>
        </ul>
        <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
