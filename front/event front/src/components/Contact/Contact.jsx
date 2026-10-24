import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(v => !v)) {
      alert('Please fill all fields');
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={`contact ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="contact-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <span className="icon"><MdEmail /></span>
              <div>
                <h4>Email</h4>
                <p>support@innovate.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon"><MdPhone /></span>
              <div>
                <h4>Phone</h4>
                <p>+963 962 762 327</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon"><MdLocationOn /></span>
              <div>
                <h4>Location</h4>
                <p>Syria, Damascus
                </p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaFacebook /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaLinkedin /></a>
            </div>
          </motion.div>

          <motion.form 
            className={`contact-form ${isDarkMode ? 'dark' : 'light'}`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="6"
                required
              />
            </div>

            <button type="submit" className="btn-send">Send Message</button>

            {submitted && (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully!
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
