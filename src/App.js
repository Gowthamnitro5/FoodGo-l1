// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbarl2';
import HeroText from './components/heroTextl2';
import FoodCard from './components/foodCardl2';
import Footer from './components/footerl2';
import PaymentPage from './components/paymentl1';
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
      
      {/* Define Routes */}
      <Routes>
        <Route 
          path="/" 
          element={
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
          } 
        />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;