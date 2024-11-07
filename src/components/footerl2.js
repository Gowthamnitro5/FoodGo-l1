import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      fontSize: '14px',
    }}>
      <p style={{ margin: '5px 0' }}>© 2024 Food App. All Rights Reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <a href="https://www.reva.edu.in/" style={{ color: '#ffcc80', textDecoration: 'none', margin: '0 10px' }}>Facebook</a>
        <a href="https://www.reva.edu.in/" style={{ color: '#ffcc80', textDecoration: 'none', margin: '0 10px' }}>Instagram</a>
        <a href="https://www.reva.edu.in/" style={{ color: '#ffcc80', textDecoration: 'none', margin: '0 10px' }}>Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;