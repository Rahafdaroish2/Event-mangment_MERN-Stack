import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdCalendarToday, MdLocationOn, MdPerson, MdCheck, MdClose } from 'react-icons/md';
import './AdminDashboard.css';

function AdminDashboard({ isDarkMode, bookings, onApproveBooking, onRejectBooking }) {
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredBookings = filterStatus === 'all' 
    ? bookings 
    : bookings.filter(b => b.status === filterStatus);

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    approved: bookings.filter(b => b.status === 'approved').length,
    rejected: bookings.filter(b => b.status === 'rejected').length
  };

  return (
    <div className={`admin-dashboard ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="admin-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Admin Dashboard
        </motion.h1>

        <div className="stats-grid">
          <motion.div 
            className={`stat-card ${isDarkMode ? 'dark' : 'light'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Total Bookings</h3>
            <p className="stat-number">{stats.total}</p>
          </motion.div>

          <motion.div 
            className={`stat-card pending ${isDarkMode ? 'dark' : 'light'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Pending</h3>
            <p className="stat-number">{stats.pending}</p>
          </motion.div>

          <motion.div 
            className={`stat-card approved ${isDarkMode ? 'dark' : 'light'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Approved</h3>
            <p className="stat-number">{stats.approved}</p>
          </motion.div>

          <motion.div 
            className={`stat-card rejected ${isDarkMode ? 'dark' : 'light'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Rejected</h3>
            <p className="stat-number">{stats.rejected}</p>
          </motion.div>
        </div>

        <motion.div 
          className={`bookings-section ${isDarkMode ? 'dark' : 'light'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Manage Bookings</h2>

          <div className="filter-buttons">
            {['all', 'pending', 'approved', 'rejected'].map(status => (
              <button
                key={status}
                className={`filter-btn ${filterStatus === status ? 'active' : ''}`}
                onClick={() => setFilterStatus(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="bookings-list">
            {filteredBookings.length === 0 ? (
              <p className="no-bookings">No bookings found</p>
            ) : (
              <AnimatePresence mode="wait">
                {filteredBookings.map(booking => (
                  <motion.div 
                    key={booking.id}
                    className={`booking-card ${isDarkMode ? 'dark' : 'light'}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="booking-info">
                      <div className="booking-details">
                        <h3>{booking.eventName}</h3>
                        <p><MdCalendarToday /> {booking.date}</p>
                        <p><MdLocationOn /> {booking.location}</p>
                        {booking.attendeeCount && (
                          <p><MdPerson /> Expected Attendees: {booking.attendeeCount}</p>
                        )}
                        <div className={`event-type ${booking.type}`}>
                          {booking.type.toUpperCase()}
                        </div>
                        {booking.inviteLink && (
                          <div className="invite-link">
                            <strong>Invite Link:</strong>
                            <code>{booking.inviteLink}</code>
                          </div>
                        )}
                      </div>

                      <div className={`booking-status ${booking.status}`}>
                        {booking.status.toUpperCase()}
                      </div>
                    </div>

                    {booking.status === 'pending' && (
                      <div className="booking-actions">
                        <motion.button
                          className="btn-approve"
                          onClick={() => onApproveBooking(booking.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          title="Approve booking"
                        >
                          <MdCheck /> Approve
                        </motion.button>
                        <motion.button
                          className="btn-reject"
                          onClick={() => onRejectBooking(booking.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          title="Reject booking"
                        >
                          <MdClose /> Reject
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminDashboard;
