# 🚀 Quick Start Guide - Innovate Event Management

## Installation & Setup (First Time)

```bash
# 1. Navigate to project
cd Event/Event

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit: http://localhost:5173
```

## Testing Credentials

### User Account
- **Email:** user@test.com
- **Password:** password123
- **Role:** User

### Admin Account
- **Email:** admin@test.com
- **Password:** admin123
- **Role:** Admin

## Feature Walkthrough

### 1. Register/Login
- Click **Register** or **Login** in the header
- Fill in credentials
- Select role (User/Admin)
- Click submit

### 2. Create Booking
1. After login, click **+ Add Booking**
2. Fill event details:
   - Event Name
   - Date
   - Location
   - Expected Attendees (optional)
3. Select event type (Public/Private)
4. If Private → get auto-generated **invite link**
5. Click **Create Booking**

### 3. View Events
- Use **↑** and **↓** arrows to navigate carousel
- Click dots to jump to specific event
- See event details and attendee count

### 4. Leave Review
1. Scroll to **Reviews** section
2. Click **+ Add Review**
3. Enter name and rating (⭐)
4. Write review comment
5. Click **Submit Review**

### 5. Send Message
1. Scroll to **Contact** section
2. Fill contact form
3. Click **Send Message**
4. See success confirmation

### 6. Admin Functions (Login as Admin)
1. Click **Admin Dashboard** in header
2. View statistics cards
3. Filter bookings by status
4. Click **Approve** or **Reject** for pending bookings
5. See invitation links and booking details

## Dark Mode
- Click **☀️** (sun) for dark mode
- Click **🌙** (moon) for light mode
- Toggle anytime in header

## Color Palette (CSS)
```css
--primary: #b1378b        /* Main purple */
--accent: #a87ba2         /* Muted purple */
--primary-light: #d7b2b7  /* Light purple */
--dark: #261a22           /* Dark background */
--light: #f3f2f4          /* Light background */
--lighter: #d5c1d9        /* Light gray */
```

## File Structure (Key Files)

```
src/
├── App.jsx                      ← Main routing logic
├── components/
│   ├── Header/Header.jsx        ← Navigation & auth buttons
│   ├── Hero/Hero.jsx            ← Booking form & hero image
│   ├── Events/Events.jsx        ← Vertical carousel
│   ├── Feedback/Feedback.jsx    ← Reviews system
│   ├── Contact/Contact.jsx      ← Contact form
│   ├── Footer/Footer.jsx        ← Footer links
│   ├── Auth/Login.jsx           ← Login page
│   ├── Auth/Register.jsx        ← Registration page
│   └── Admin/AdminDashboard.jsx ← Admin panel
```

## Common Tasks

### Run in Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## Component Props

### Header
```jsx
<Header 
  isDarkMode={boolean}
  setIsDarkMode={function}
  isLoggedIn={boolean}
  userRole={string}
  onLogout={function}
/>
```

### Hero
```jsx
<Hero 
  isDarkMode={boolean}
  isLoggedIn={boolean}
  onAddBooking={function}
/>
```

### Events
```jsx
<Events 
  isDarkMode={boolean}
  events={array}
/>
```

### Admin Dashboard
```jsx
<AdminDashboard
  isDarkMode={boolean}
  bookings={array}
  onApproveBooking={function}
  onRejectBooking={function}
/>
```

## State Management

### App State
- `isDarkMode` - Theme toggle
- `isLoggedIn` - Authentication status
- `userRole` - 'user' or 'admin'
- `bookings` - Array of all bookings
- `events` - Array of featured events

### LocalStorage
- `innovateUser` - Stores user info (persists on refresh)

## Navigation

```javascript
// Scroll to section
<button onClick={() => scrollToSection('events')}>Events</button>

// Navigate to page
<Link to="/admin">Admin Dashboard</Link>
```

## Booking Object Structure

```javascript
{
  id: number,
  eventName: string,
  date: string (YYYY-MM-DD),
  location: string,
  attendeeCount: string,
  type: 'public' | 'private',
  status: 'pending' | 'approved' | 'rejected',
  inviteLink: string (if private)
}
```

## Form Validation Rules

### Login
- Email: Required, valid format
- Password: Required, min 6 characters

### Register
- Name: Required
- Email: Required, valid format
- Phone: Required
- Password: Required, min 6 characters
- Confirm Password: Must match password

### Booking
- Event Name: Required
- Date: Required
- Location: Required
- Attendee Count: Optional

### Review
- Name: Required
- Rating: 1-5 stars
- Comment: Required

### Contact
- Name: Required
- Email: Required
- Subject: Required
- Message: Required

## Animations Used

- **Page Transitions:** Initial + Animate
- **Hover Effects:** WhileHover
- **Click Feedback:** WhileTap
- **Stagger:** StaggerChildren
- **Carousel:** Exit modes with smooth transitions

## Responsive Breakpoints

```css
/* Desktop: 1400px and up */
/* Tablet: 768px to 1399px */
/* Mobile: 320px to 767px */
```

## Common Issues & Fixes

**Issue:** Dark mode not persisting
- **Fix:** Currently per-session. localStorage integration can add persistence.

**Issue:** Images not loading
- **Fix:** Using Unsplash URLs - ensure internet connection.

**Issue:** Form not submitting
- **Fix:** Check console for validation errors.

## Dependencies

- `react@19.2.0` - UI framework
- `react-dom@19.2.0` - React DOM renderer
- `react-router-dom@6.22.0` - Client routing
- `framer-motion@10.16.4` - Animations

## Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com/)

## Need Help?

1. Check the **DOCUMENTATION.md** for detailed features
2. Review component comments in the code
3. Check browser console for errors
4. Test with provided credentials

---

**Happy coding! 🎉**
