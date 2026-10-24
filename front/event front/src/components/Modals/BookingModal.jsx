import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose, MdInfo } from 'react-icons/md';
import './BookingModal.css';

function BookingModal({ isOpen, onClose, onSubmit, isDarkMode }) {
  const [eventType, setEventType] = useState('public');
  const [paymentMethod, setPaymentMethod] = useState('syriatel');
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    location: '',
    attendeeCount: '',
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
    if (!formData.eventName || !formData.date || !formData.location) {
      alert('Please fill all required fields');
      return;
    }

    onSubmit({
      ...formData,
      type: eventType,
      paymentMethod: paymentMethod
    });

    setFormData({ eventName: '', date: '', location: '', attendeeCount: '' });
    setEventType('public');
    setPaymentMethod('syriatel');
    onClose();
  };

  const generateInviteLink = () => {
    return `invite-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
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
            className={`modal-content booking-modal ${isDarkMode ? 'dark' : 'light'}`}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <MdClose size={24} />
            </button>

            <h2>Create Event Booking</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Event Type</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="public"
                      checked={eventType === 'public'}
                      onChange={(e) => setEventType(e.target.value)}
                    />
                    <span>Public Event</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="private"
                      checked={eventType === 'private'}
                      onChange={(e) => setEventType(e.target.value)}
                    />
                    <span>Private Event (Generate Invite Link)</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Event Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleInputChange}
                  placeholder="Enter event name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date <span className="required">*</span></label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Expected Attendees</label>
                  <input
                    type="number"
                    name="attendeeCount"
                    value={formData.attendeeCount}
                    onChange={handleInputChange}
                    placeholder="Number of attendees"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Location <span className="required">*</span></label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                  required
                />
              </div>

              <div className="form-group">
                <label>Payment Method <span className="required">*</span></label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="syriatel"
                      checked={paymentMethod === 'syriatel'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Syriatel Cash</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="mtn"
                      checked={paymentMethod === 'mtn'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>MTN</span>
                  </label>
                </div>
              </div>

              {eventType === 'private' && (
                <div className="info-box">
                  <MdInfo size={16} />
                  <span>A unique invite link will be generated for this private event</span>
                </div>
              )}

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Create Booking
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BookingModal;
