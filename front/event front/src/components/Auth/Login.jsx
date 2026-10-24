import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Auth.css';

function Login({ onLogin, isDarkMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user'
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      onLogin(formData.email, formData.role);
      // If redirected here for an action, keep that flow
      const params = new URLSearchParams(location.search);
      const redirect = params.get('redirect');
      if (redirect === 'addBooking') {
        // redirect back to home and open booking form
        navigate('/?openBooking=1');
      } else {
        navigate('/');
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={`auth-container ${isDarkMode ? 'dark' : 'light'}`}>
      <motion.div 
        className={`auth-form-wrapper ${isDarkMode ? 'dark' : 'light'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Welcome Back</h1>
        <p>Sign in to your Innovate account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email *</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* <div className="form-group">
            <label>Login as *</label>
            <div className="role-selector">
              <label>
                <input 
                  type="radio" 
                  name="role" 
                  value="user"
                  checked={formData.role === 'user'}
                  onChange={handleInputChange}
                />
                User
              </label>
              <label>
                <input 
                  type="radio" 
                  name="role" 
                  value="admin"
                  checked={formData.role === 'admin'}
                  onChange={handleInputChange}
                />
                Admin
              </label>
            </div>
          </div> */}

          <button type="submit" className="btn-submit">Login</button>
        </form>

        <p className="switch-form">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </motion.div>

      <motion.div 
        className="auth-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="image-content">
          <img src={Logo} alt="Innovate Logo" />
          <p>Create unforgettable events</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
