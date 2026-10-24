import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdPerson, MdStar } from 'react-icons/md';
import './Feedback.css';
import ReviewModal from '../Modals/ReviewModal';

function Feedback({ isDarkMode }) {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing event! The organization was perfect and I had an incredible time.',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Ahmed Al-Rashid',
      rating: 5,
      comment: 'Best conference I\'ve attended. Great speakers and networking opportunities.',
      avatar: '👨‍💼'
    },
    {
      id: 3,
      name: 'Fatima Hassan',
      rating: 4,
      comment: 'Really enjoyed the event. Just a few minor logistics issues.',
      avatar: '👩'
    }
  ]);

  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleReviewSubmit = (formData) => {
    setFeedbacks([...feedbacks, {
      id: Date.now(),
      ...formData,
      avatar: '👤'
    }]);
    setShowReviewModal(false);
    alert('Thank you for your review!');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        <MdStar />
      </span>
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="feedback" className={`feedback ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="feedback-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Customer Reviews
        </motion.h2>

        <motion.div 
          className="reviews-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {feedbacks.map(feedback => (
            <motion.div 
              key={feedback.id}
              className={`review-card ${isDarkMode ? 'dark' : 'light'}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="review-header">
                <div className="avatar"><MdPerson /></div>
                <div className="reviewer-info">
                  <h4>{feedback.name}</h4>
                  <div className="rating">
                    {renderStars(feedback.rating)}
                  </div>
                </div>
              </div>
              <p className="comment">{feedback.comment}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="add-review-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button 
            className="btn-add-review"
            onClick={() => setShowReviewModal(!showReviewModal)}
          >
            + Add Review
          </button>

          <ReviewModal 
            isOpen={showReviewModal}
            onClose={() => setShowReviewModal(false)}
            onSubmit={handleReviewSubmit}
            isDarkMode={isDarkMode}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Feedback;

