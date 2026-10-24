# 🎉 Innovate - Event Management Platform

A professional, full-featured event management web application built with React, featuring user authentication, event creation, admin dashboard, and beautiful UI with dark/light mode support.

## 🌟 Features

### User Features
- **Authentication System**
  - User registration with validation
  - Secure login functionality
  - Admin role support
  - Session persistence

- **Event Management**
  - Create public or private events
  - Generate unique invitation links for private events
  - Add event details (name, date, time, location, attendee count)
  - Browse events with vertical carousel slider
  - Join events

- **User Experience**
  - Dark/Light mode toggle
  - Smooth animations with Framer Motion
  - Responsive design for mobile and desktop
  - Navigation with smooth scrolling between sections
  - Professional color palette

### Content Sections
1. **Header** - Navigation bar with login/register buttons, dark mode toggle
2. **Hero Section** - Welcome screen with add booking functionality
3. **Events** - Vertical carousel displaying featured events
4. **Reviews** - Customer testimonials with star ratings and review submission
5. **Contact** - Contact form and company information
6. **Footer** - Links and social media

### Admin Features
- **Admin Dashboard**
  - View all bookings (pending, approved, rejected)
  - Filter bookings by status
  - Approve or reject pending bookings
  - View booking statistics
  - Display invitation links for private events

## 🎨 Design & Colors

The application uses a carefully selected color palette:
- **Primary:** #b1378b (Purple)
- **Primary Light:** #d7b2b7 (Light Purple)
- **Secondary:** #c9a0bf (Mauve)
- **Dark:** #261a22 (Deep Dark)
- **Accent:** #a87ba2 (Muted Purple)
- **Light:** #f3f2f4 (Off White)
- **Lighter:** #d5c1d9 (Light Gray)

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Routing:** React Router DOM 6.22.0
- **Animations:** Framer Motion 10.16.4
- **Build Tool:** Vite
- **Styling:** CSS3 with custom design system
- **Language:** JavaScript (ES6+)

## 📁 Project Structure

```
src/
├── App.jsx                    # Main app component with routing
├── App.css                    # Global styles
├── index.css                  # Base styles
├── main.jsx                   # Entry point
└── components/
    ├── Header/
    │   ├── Header.jsx         # Navigation component
    │   └── Header.css
    ├── Hero/
    │   ├── Hero.jsx           # Hero section with booking form
    │   └── Hero.css
    ├── Events/
    │   ├── Events.jsx         # Vertical carousel component
    │   └── Events.css
    ├── Feedback/
    │   ├── Feedback.jsx       # Reviews section
    │   └── Feedback.css
    ├── Contact/
    │   ├── Contact.jsx        # Contact form
    │   └── Contact.css
    ├── Footer/
    │   ├── Footer.jsx         # Footer component
    │   └── Footer.css
    ├── Auth/
    │   ├── Login.jsx          # Login page
    │   ├── Register.jsx       # Registration page
    │   └── Auth.css
    └── Admin/
        ├── AdminDashboard.jsx # Admin panel
        └── AdminDashboard.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd Event/Event
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

**Development Mode:**
```bash
npm run dev
```
The app will start on `http://localhost:5173`

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

## 📖 Usage Guide

### User Journey

1. **Sign Up / Login**
   - Click "Register" to create a new account
   - Enter full name, email, phone, and password
   - Or click "Login" if you already have an account
   - Choose between User or Admin role

2. **Browse Events**
   - After login, view the home page with featured events
   - Use up/down arrows to navigate through events
   - Read event details and descriptions

3. **Create a Booking**
   - Click "Add Booking" button in the hero section
   - Fill in event details (name, date, location)
   - Choose between public or private event
   - For private events, get an auto-generated invitation link
   - Submit to create booking (pending admin approval)

4. **Leave a Review**
   - Scroll to reviews section
   - Click "Add Review" button
   - Rate with stars and write your comment
   - Submit review

5. **Contact**
   - Fill out the contact form with your message
   - Get instant success confirmation

### Admin Features

1. **Access Admin Dashboard**
   - Login with admin role
   - Click "Admin Dashboard" in header
   - View booking statistics

2. **Manage Bookings**
   - Filter bookings by status (All, Pending, Approved, Rejected)
   - View detailed booking information
   - For pending bookings: Click Approve or Reject
   - View invitation links for private events

## 🎬 Animations & Motion

The application uses Framer Motion for smooth, professional animations:
- Page transitions
- Component entrance animations
- Hover effects on interactive elements
- Carousel animations
- Form submission feedback

## 🌓 Dark/Light Mode

Toggle between light and dark themes:
- Click the theme button (☀️/🌙) in the header
- Theme preference is user-specific per session
- All components smoothly transition between themes

## 📱 Responsive Design

The application is fully responsive:
- Desktop (1400px+)
- Tablet (768px - 1399px)
- Mobile (320px - 767px)

## 🔐 Authentication

- Form validation for registration and login
- Password confirmation matching
- Email format validation
- Session persistence using localStorage
- Admin and user role differentiation

## 🧪 Key Components Features

### Header
- Sticky navigation
- Dynamic navigation links
- Dark/light mode toggle
- Auth buttons (Login/Register/Logout)
- Admin dashboard link for admins

### Hero Section
- Hero image with overlay
- Booking form with validation
- Public/Private event toggle
- Auto-generated invitation links

### Events Carousel
- Vertical scrolling carousel
- Event cards with details
- Public/Private badges
- Smooth transitions
- Indicator dots

### Feedback Section
- Review card grid
- Star rating display
- Add review functionality
- Form validation

### Contact Form
- Validation on all fields
- Success message animation
- Responsive layout
- Contact information display

### Admin Dashboard
- Statistics cards
- Booking list with filtering
- Status badges
- Approve/Reject buttons
- Invitation link display

## 🎯 Best Practices

- ✅ Component-based architecture
- ✅ Separation of concerns
- ✅ Reusable CSS classes
- ✅ Proper error handling
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ Performance optimizations

## 🔄 State Management

- React hooks for local state
- Context API ready (can be added)
- localStorage for session persistence
- Parent-child component communication

## 📝 Future Enhancements

- Backend API integration
- Database connectivity
- Email notifications
- Payment gateway integration
- Calendar integration
- Real-time notifications
- Multi-language support
- Image upload for events
- RSVP tracking

## 🤝 Contributing

This is a project template. Feel free to:
- Add new features
- Improve styling
- Optimize performance
- Add more sections
- Integrate with backend

## 📄 License

Free to use for educational and commercial purposes.

## 👨‍💼 Project Team

**Bilal** • **Riem** • **Rahaf** • **Esraa** • **Yhiea**

---

**Built with ❤️ using React & Framer Motion**

Enjoy creating amazing events with Innovate! 🎉
