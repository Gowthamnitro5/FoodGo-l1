// App.js
import React from 'react';
import Navbar from './components/navbarl1';
import HeroText from './components/heroTextl1';
import FoodCard from './components/foodCardl1';
import Footer from './components/footerl1';
import pizza3 from './components/images/pizza3.png';



function App() {
  const foodItems = [
    { name: 'Pizza', description: 'Cheesy and delicious', imageUrl: pizza3 },
    { name: 'Burger', description: 'Juicy and tasty', imageUrl: pizza3 },
    { name: 'Pasta', description: 'Creamy and savory', imageUrl: pizza3 },
    { name: 'Salad', description: 'Fresh and healthy', imageUrl: pizza3 },
  ];

  return (
    <div>
      <Navbar />
      <HeroText />
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        {foodItems.map((item, index) => (
          <FoodCard 
            key={index} 
            name={item.name} 
            description={item.description} 
            imageUrl={item.imageUrl} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;