import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f8f8' }}>
      <h2>Food App</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;