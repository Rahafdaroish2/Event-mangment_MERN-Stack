import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdCalendarToday, MdAccessTime, MdLocationOn, MdPerson, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './Events.css';

function Events({ isDarkMode, events }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const currentEvent = events[currentIndex];

  return (
    <section id="events" className={`events ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="events-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Events
        </motion.h2>

        <div className="horizontal-carousel">
          <button className="carousel-arrow left" onClick={goToPrevious} title="Previous Event" aria-label="Previous Event">
            <MdChevronLeft size={18} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="carousel-slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="slide-image-wrapper">
                <img 
                  src={currentEvent.image} 
                  alt={currentEvent.name}
                  className="slide-image"
                />
                <div className={`event-badge ${currentEvent.type}`}>
                  {currentEvent.type.toUpperCase()}
                </div>
              </div>

              <div className="slide-content">
                <h3>{currentEvent.name}</h3>
                <p className="description">{currentEvent.description}</p>
                
                <div className="event-details">
                  <div className="detail-item">
                    <span className="detail-icon">
                      <MdCalendarToday size={16} />
                    </span>
                    <span>{currentEvent.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">
                      <MdAccessTime size={16} />
                    </span>
                    <span>{currentEvent.time}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">
                      <MdLocationOn size={16} />
                    </span>
                    <span>{currentEvent.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">
                      <MdPerson size={16} />
                    </span>
                    <span>{currentEvent.attendees} Attendees</span>
                  </div>
                </div>

                <button className="btn-join">Join Event</button>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="carousel-arrow right" onClick={goToNext} title="Next Event" aria-label="Next Event">
            <MdChevronRight size={18} />
          </button>
        </div>

        <div className="carousel-indicators">
          {events.map((_, index) => (
            <motion.div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
