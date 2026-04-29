import React from 'react';

const menuItems = [
  { id: 1, name: 'Koshari', price: 20, desc: 'A famous Egyptian dish made with rice, lentils, macaroni, chickpeas, fried onions, and spicy tomato sauce.' },
  { id: 2, name: 'Molokhia with Chicken', price: 25, desc: 'Traditional molokhia soup served with rice and roasted chicken, full of classic Egyptian flavor.' },
  { id: 3, name: 'Mahshi Platter', price: 75, desc: 'Stuffed grape leaves, peppers, and zucchini with seasoned rice and herbs.' },
  { id: 4, name: 'Grilled Kofta', price: 30, desc: 'Juicy grilled kofta served with Egyptian bread, tahini, salad, and fries.' },
  { id: 5, name: 'Feteer Meshaltet', price: 35, desc: 'Layered Egyptian pastry served with cheese, honey, or meat fillings.' },
  { id: 6, name: 'Basbousa', price: 80, desc: 'Sweet semolina cake soaked in syrup, a beloved Egyptian dessert.' }
];

const Menu = ({ addToCart }) => {
  return (
    <section id="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-text">Enjoy traditional Egyptian dishes made with rich flavors, fresh ingredients, and recipes inspired by locals.</p>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-card">
              <h3>{item.name}</h3>
              <span className="price">${item.price} USD</span>
              <p>{item.desc}</p>
              <button onClick={() => addToCart(item.name, item.price)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;