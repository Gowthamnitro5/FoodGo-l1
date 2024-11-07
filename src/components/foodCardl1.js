import React from 'react';

function FoodCard({ name, description, imageUrl }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', width: '200px', textAlign: 'center' }}>
      <img src={imageUrl} alt={name} style={{ width: '100%', borderRadius: '5px' }} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FoodCard;