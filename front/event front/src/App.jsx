import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Events from './components/Events/Events';
import Feedback from './components/Feedback/Feedback';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Admin/AdminDashboard';
import eventImage1 from './assets/WhatsApp Image 2025-12-01 at 9.47.32 AM.jpeg';
import eventImage2 from './assets/WhatsApp Image 2025-12-01 at 9.47.56 AM.jpeg';
import eventImage3 from './assets/WhatsApp Image 2025-12-01 at 9.47.26 AM.jpeg';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'
  const [bookings, setBookings] = useState([]);
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Tech Conference 2024',
      description: 'Join us for an exciting tech conference featuring top industry speakers.',
      date: '2024-12-15',
      time: '09:00 AM',
      location: 'Dubai Convention Center',
      type: 'public',
      image: eventImage1,
      attendees: 245
    },
    {
      id: 2,
      name: 'Corporate Gala Night',
      description: 'An exclusive evening celebrating corporate achievements and networking.',
      date: '2024-12-20',
      time: '07:00 PM',
      location: 'Riyadh Grand Hotel',
      type: 'private',
      image: eventImage2,
      attendees: 150
    },
    {
      id: 3,
      name: 'Music Festival',
      description: 'A spectacular music event featuring international and local artists.',
      date: '2024-12-25',
      time: '06:00 PM',
      location: 'King Fahd Park',
      type: 'public',
      image: eventImage3,
      attendees: 5000
    }
  ]);

  useEffect(() => {
    const saved = localStorage.getItem('innovateUser');
    if (saved) {
      const user = JSON.parse(saved);
      setIsLoggedIn(true);
      setUserRole(user.role);
    }
  }, []);

  const handleLogin = (email, role = 'user') => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem('innovateUser', JSON.stringify({ email, role }));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('user');
    localStorage.removeItem('innovateUser');
  };

  const handleAddBooking = (booking) => {
    setBookings([...bookings, { ...booking, id: Date.now(), status: 'pending' }]);
  };

  const handleApproveBooking = (bookingId) => {
    setBookings(bookings.map(b => b.id === bookingId ? { ...b, status: 'approved' } : b));
  };

  const handleRejectBooking = (bookingId) => {
    setBookings(bookings.map(b => b.id === bookingId ? { ...b, status: 'rejected' } : b));
  };

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <Header 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode}
          isLoggedIn={isLoggedIn}
          userRole={userRole}
          onLogout={handleLogout}
        />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero isDarkMode={isDarkMode} isLoggedIn={isLoggedIn} onAddBooking={handleAddBooking} />
                <Events isDarkMode={isDarkMode} events={events} />
                <Feedback isDarkMode={isDarkMode} />
                <Contact isDarkMode={isDarkMode} />
                <Footer isDarkMode={isDarkMode} />
              </>
            }
          />
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} isDarkMode={isDarkMode} />} 
          />
          <Route 
            path="/register" 
            element={<Register onRegister={handleLogin} isDarkMode={isDarkMode} />} 
          />
          <Route 
            path="/admin" 
            element={
              userRole === 'admin' ? (
                <AdminDashboard 
                  isDarkMode={isDarkMode} 
                  bookings={bookings}
                  onApproveBooking={handleApproveBooking}
                  onRejectBooking={handleRejectBooking}
                />
              ) : (
                <div className="p-10 text-center">Access Denied</div>
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
