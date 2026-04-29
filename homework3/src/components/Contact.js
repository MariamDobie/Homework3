import React, { useState } from 'react';

const Contact = ({ showToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Message sent successfully! We\'ll contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-grid">
          <iframe 
            src="https://www.google.com/maps?q=Giza+Egypt&z=12&output=embed" 
            allowFullScreen="" 
            loading="lazy"
            title="Map"
          />
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <textarea 
              name="message"
              rows="6" 
              placeholder="Message" 
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;