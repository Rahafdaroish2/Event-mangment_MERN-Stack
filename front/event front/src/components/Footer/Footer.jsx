import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>About Innovate</h3>
          <p>
            Innovate is your trusted platform for creating and managing unforgettable events. 
            From corporate gatherings to intimate celebrations, we make event planning easy.
          </p>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#feedback">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Contact Us</h3>
          <ul>
            <li><MdEmail /> support@innovate.com</li>
            <li><MdPhone /> +963 962762327</li>
            <li><MdLocationOn /> Syria, Damascus</li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
          </div>
        </motion.div>
        
      </div>

      {/* <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>&copy; {currentYear} Innovate. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
          <span>•</span>
          <a href="#">thank you</a>
        </div>
      </motion.div> */}
    </footer>
  );
}

export default Footer;
