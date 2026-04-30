import React, { useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);
  const toastTimeoutRef = useRef(null);

  const showToast = (message) => {
    // Clear existing timeout
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    
    setToast(message);
    
    // Set new timeout
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
      toastTimeoutRef.current = null;
    }, 3000);
  };

  const addToCart = (name, price) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === name);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        showToast(`${name} quantity: ${newQuantity}`);
        return prevCart.map(item =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        showToast(`${name} added to cart`);
        return [...prevCart, { name, price, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === name);
      
      if (existingItem.quantity > 1) {
        const newQuantity = existingItem.quantity - 1;
        showToast(`${name} removed (${newQuantity} left in cart)`);
        return prevCart.map(item =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        showToast(`${name} removed from cart`);
        return prevCart.filter(item => item.name !== name);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
    showToast('Cart cleared successfully');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu addToCart={addToCart} />
      <Cart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart}
        total={getCartTotal()}
      />
      <Gallery />
      <About />
      <Contact showToast={showToast} />
      <Footer />
      {toast && <Toast message={toast} onComplete={() => setToast(null)} />}
    </div>
  );
}

export default App;