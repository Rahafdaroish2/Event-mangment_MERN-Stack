import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdStar, MdClose } from 'react-icons/md';
import './ReviewModal.css';

function ReviewModal({ isOpen, onClose, onSubmit, isDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) {
      alert('Please fill all required fields');
      return;
    }

    onSubmit(formData);
    setFormData({ name: '', rating: 5, comment: '' });
    onClose();
  };

  const renderStars = (rating, interactive = false, onRate = null) => {
    return (
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map(num => (
          <button
            key={num}
            type="button"
            className={`star-button ${num <= rating ? 'filled' : ''}`}
            onClick={() => interactive && onRate && onRate(num)}
            disabled={!interactive}
            aria-label={`Rate ${num} stars`}
          >
            <MdStar size={20} />
          </button>
        ))}
      </div>
    );
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`modal-overlay ${isDarkMode ? 'dark' : 'light'}`}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className={`modal-content review-modal ${isDarkMode ? 'dark' : 'light'}`}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <MdClose size={24} />
            </button>

            <h2>Share Your Review</h2>
            <p className="modal-subtitle">Help us improve by sharing your feedback</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Rating <span className="required">*</span></label>
                {renderStars(formData.rating, true, (rating) => 
                  setFormData(prev => ({ ...prev, rating }))
                )}
              </div>

              <div className="form-group">
                <label>Your Review <span className="required">*</span></label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Share your experience with us..."
                  rows="6"
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Submit Review
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ReviewModal;
