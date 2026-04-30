import React, { useEffect, useState } from 'react';

const Toast = ({ message, onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger animation
    const showTimer = setTimeout(() => setIsVisible(true), 10);
    
    // Start hiding after 2.5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    
    // Remove completely after animation
    const removeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`cart-toast ${isVisible ? 'show' : 'hide'}`}>
      {message}
    </div>
  );
};

export default Toast;