import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdWbSunny, MdNightlight } from 'react-icons/md';
import Logo from '../../assets/Logo.png';
import './Header.css';

function Header({ isDarkMode, setIsDarkMode, isLoggedIn, userRole, onLogout }) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="header-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={Logo} alt="Innovate Logo" />
        </motion.div>

        <motion.nav 
          className="nav-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isLoggedIn && (
            <>
              <button 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => {
                  scrollToSection('home');
                  navigate('/');
                }}
              >
                Home
              </button>
              <button 
                className={`nav-link ${activeSection === 'events' ? 'active' : ''}`}
                onClick={() => scrollToSection('events')}
              >
                Events
              </button>
              <button 
                className={`nav-link ${activeSection === 'feedback' ? 'active' : ''}`}
                onClick={() => scrollToSection('feedback')}
              >
                Reviews
              </button>
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
              {userRole === 'admin' && (
                <Link to="/admin" className="nav-link admin-link">
                  Admin Dashboard
                </Link>
              )}
            </>
          )}
        </motion.nav>

        <motion.div 
          className="header-actions"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? <MdWbSunny /> : <MdNightlight />}
          </button>

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="btn btn-login">
                Login
              </Link>
              <Link to="/register" className="btn btn-register">
                Register
              </Link>
            </>
          ) : (
            <button className="btn btn-logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
