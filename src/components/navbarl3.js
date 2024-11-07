// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 20px', 
      backgroundColor: '#4caf50', 
      color: 'white' 
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Food App
      </div>
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '20px', 
        margin: 0, 
        padding: 0 
      }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/menu" style={{ color: 'white', textDecoration: 'none' }}>Menu</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;