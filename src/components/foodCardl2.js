import React from 'react';

function FoodCard({ name, description, imageUrl }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      width: '220px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}>
      <img 
        src={imageUrl} 
        alt={name} 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
      />
      <div style={{ padding: '25px' }}>
        <h3 style={{ fontSize: '20px', color: '#333', margin: '10px 0' }}>{name}</h3>
        <p style={{ fontSize: '14px', color: '#777', marginBottom: '15px' }}>
          {description}
        </p>
        <button style={{
          padding: '10px 15px',
          backgroundColor: '#ff5722',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#e64a19'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ff5722'}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default FoodCard;