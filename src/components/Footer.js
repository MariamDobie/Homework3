import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Follow us:
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"> Facebook</a> |
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"> Instagram</a>
      </p>
      <p className="hours">Business Hours: <br /> Monday - Friday: 11:00 AM – 10:00 PM <br /> Saturday: 10:00 AM – 11:00 PM <br />Sunday: 10:00 AM – 9:00 PM</p>
    </footer>
  );
};

export default Footer;