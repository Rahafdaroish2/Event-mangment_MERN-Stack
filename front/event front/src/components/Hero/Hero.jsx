import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { useNavigate, useLocation } from 'react-router-dom';
import BookingModal from '../Modals/BookingModal';
import heroBgImage from '../../assets/b2304e9e5e5e957c71148c51e7424000.jpg';
import heroSideImage from '../../assets/70a8ff1878dd9344de1a2188b9c3bd69.jpg';



function Hero({ isDarkMode, isLoggedIn, onAddBooking }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBookingModal, setShowBookingModal] = useState(false);

  const generateInviteLink = () => {
    const link = `invite-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    return `${window.location.origin}?invite=${link}`;
  };

  const handleBookingSubmit = (formData) => {
    const booking = {
      ...formData,
      inviteLink: formData.type === 'private' ? generateInviteLink() : null
    };

    onAddBooking(booking);
    setShowBookingModal(false);
    alert(`Booking created! ${formData.type === 'private' ? 'Invite link: ' + booking.inviteLink : ''}`);
  };

  useEffect(() => {
    // If URL has ?openBooking=1 then open the booking modal (used after login redirect)
    const params = new URLSearchParams(location.search);
    if (params.get('openBooking') === '1') {
      setShowBookingModal(true);
    }
  }, [location.search]);

  const handleAddBookingClick = () => {
    // if not logged in, redirect to login and set a redirect flag
    if (!isLoggedIn) {
      navigate('/login?redirect=addBooking');
      return;
    }
    setShowBookingModal(!showBookingModal);
  };

  return (
    <section
      id="home"
      className={`hero ${isDarkMode ? 'dark' : 'light'}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${isDarkMode ? 'rgba(38, 26, 34, 0.8)' : 'rgba(243, 242, 244, 0.8)'} 0%, ${isDarkMode ? 'rgba(61, 42, 53, 0.8)' : 'rgba(213, 193, 217, 0.8)'} 50%, ${isDarkMode ? 'rgba(42, 31, 41, 0.8)' : 'rgba(250, 248, 252, 0.8)'} 100%), url(${heroBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
          
            Create Unforgettable Events
          </h1>
          <p>
            Organize and manage your events with ease. Whether it's a public gathering or an exclusive private event,
            Innovate helps you create magical moments.
          </p>
          <button
            className="btn-add-booking"
            onClick={handleAddBookingClick}
          >
            + Create Event
          </button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={heroSideImage}
            alt="Event Management"
          />
          <div className="image-overlay">
            <p>Plan, Organize, Celebrate</p>
          </div>
        </motion.div>

      </div>
      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        onSubmit={handleBookingSubmit}
        isDarkMode={isDarkMode}
      />
    </section>
  );
}

export default Hero;
