import React from 'react';

const Cart = ({ cart, removeFromCart, clearCart, total }) => {
  return (
    <section id="cart">
      <div className="container">
        <h2 className="section-title">Shopping Cart</h2>
        <div className="cart-container">
          <div id="cart-items">
            {cart.length === 0 ? (
              <div className="empty-cart">Your cart is empty. Add some delicious Egyptian dishes!</div>
            ) : (
              cart.map(item => (
                <div key={item.name} className="cart-item">
                  <div className="cart-item-info">
                    <strong>{item.name}</strong> × {item.quantity}
                  </div>
                  <div className="cart-item-details">
                    ${item.price} each → ${item.price * item.quantity}
                  </div>
                  <button onClick={() => removeFromCart(item.name)}>Remove One</button>
                </div>
              ))
            )}
          </div>
          <div className="cart-total-area">
            <span>Total Amount:</span>
            <span className="cart-total-price">${total}</span>
            {cart.length > 0 && (
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;