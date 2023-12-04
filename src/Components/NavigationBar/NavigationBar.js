// components/NavigationBar/NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="logo">BESESG</div>
      <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/questionnaire">Questionnaire</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      <Footer/>
    </nav>

   
  );
}

export default NavigationBar;
