# 💻 Developer Guide - Code Examples & API Reference

## Component Communication

### Passing Data Down (Props)

**Parent Component:**
```javascript
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <Header 
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
    />
  );
}
```

**Child Component:**
```javascript
function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}
```

---

## State Management Examples

### Using useState Hook
```javascript
import { useState } from 'react';

function MyComponent() {
  // State: [current value, function to update value]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update single field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <input
      name="email"
      value={formData.email}
      onChange={handleInputChange}
    />
  );
}
```

### Using useEffect Hook
```javascript
import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Run on component mount
  useEffect(() => {
    // Fetch data
    const saved = localStorage.getItem('user');
    if (saved) {
      setData(JSON.parse(saved));
    }
    setLoading(false);
  }, []); // Empty dependency array = run once

  if (loading) return <div>Loading...</div>;
  return <div>{data?.name}</div>;
}
```

---

## Form Handling

### Form with Validation
```javascript
const [formData, setFormData] = useState({
  email: '',
  password: ''
});
const [errors, setErrors] = useState({});

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
    // Form is valid - submit
    console.log('Form submitted:', formData);
  } else {
    setErrors(newErrors);
  }
};
```

---

## Routing Examples

### Basic Routing Setup
```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
```

### Protected Routes
```javascript
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route 
        path="/admin" 
        element={
          isLoggedIn ? <AdminDashboard /> : <Navigate to="/login" />
        } 
      />
    </Routes>
  );
}
```

### Using useNavigate Hook
```javascript
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // After successful login
    navigate('/dashboard');
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

---

## Framer Motion Examples

### Basic Animation
```javascript
import { motion } from 'framer-motion';

function AnimatedButton() {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}      // Start state
      animate={{ opacity: 1, y: 0 }}        // End state
      transition={{ duration: 0.5 }}        // Animation timing
    >
      Click me
    </motion.button>
  );
}
```

### Hover Animation
```javascript
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Interactive element
</motion.div>
```

### Stagger Children
```javascript
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

function List() {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map(item => (
        <motion.li key={item.id} variants={itemVariants}>
          {item.name}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

---

## Array Operations

### Adding Item
```javascript
// Add new booking
setBookings([...bookings, { ...newBooking, id: Date.now() }]);

// Or using concat (immutable)
setBookings(bookings.concat(newBooking));
```

### Filtering Items
```javascript
// Get only approved bookings
const approved = bookings.filter(b => b.status === 'approved');

// Get by ID
const booking = bookings.find(b => b.id === 123);
```

### Updating Item
```javascript
// Update booking status
setBookings(
  bookings.map(b => 
    b.id === bookingId 
      ? { ...b, status: 'approved' } 
      : b
  )
);
```

### Removing Item
```javascript
// Remove booking
setBookings(bookings.filter(b => b.id !== bookingId));
```

---

## localStorage Examples

### Saving Data
```javascript
// Save user info
const user = { email: 'user@test.com', role: 'admin' };
localStorage.setItem('innovateUser', JSON.stringify(user));
```

### Retrieving Data
```javascript
// Get user info
const saved = localStorage.getItem('innovateUser');
if (saved) {
  const user = JSON.parse(saved);
  console.log(user.email);
}
```

### Clearing Data
```javascript
// Remove specific item
localStorage.removeItem('innovateUser');

// Clear all
localStorage.clear();
```

---

## CSS Patterns

### Gradient Background
```css
background: linear-gradient(135deg, #b1378b 0%, #a87ba2 100%);
```

### Gradient Text
```css
background: linear-gradient(135deg, #b1378b 0%, #a87ba2 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Box Shadow
```css
box-shadow: 0 5px 20px rgba(177, 55, 139, 0.3);
```

### Smooth Transition
```css
transition: all 0.3s ease;
```

### Responsive Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
```

---

## Common Patterns

### Conditional Rendering
```javascript
// If-else style
{isLoggedIn ? (
  <button>Logout</button>
) : (
  <button>Login</button>
)}

// Show if true
{isLoading && <Spinner />}

// Switch style
{status === 'pending' && <PendingMessage />}
{status === 'approved' && <ApprovedMessage />}
{status === 'rejected' && <RejectedMessage />}
```

### Conditional CSS Classes
```javascript
<div className={`card ${isDarkMode ? 'dark' : 'light'}`}>
  Content
</div>

// Or with template literals
<div className={`booking-card ${booking.status}`}>
  Content
</div>
```

### Event Handling
```javascript
// Button click
<button onClick={handleClick}>Click</button>

// Form submit
<form onSubmit={handleSubmit}>...</form>

// Input change
<input onChange={handleChange} />

// Keyboard event
<input onKeyPress={handleKeyPress} />
```

---

## Debug Tips

### Console Logging
```javascript
// Log state changes
console.log('Current state:', formData);

// Log events
const handleClick = (e) => {
  console.log('Button clicked:', e);
};

// Log array operations
console.table(bookings);
```

### React DevTools
1. Install React DevTools browser extension
2. Open DevTools (F12)
3. Go to Components tab
4. View component state and props
5. Monitor re-renders

### Common Errors

**"Can't perform a React state update on an unmounted component"**
- Cause: Updating state after component unmounts
- Fix: Add cleanup in useEffect

```javascript
useEffect(() => {
  let isMounted = true;
  
  fetchData().then(data => {
    if (isMounted) setData(data);
  });
  
  return () => { isMounted = false; };
}, []);
```

**"Key prop warning in lists"**
- Cause: Missing unique key prop
- Fix: Add key to list items

```javascript
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

---

## Performance Tips

### Memoization
```javascript
import { memo } from 'react';

// Prevent unnecessary re-renders
const UserCard = memo(({ user }) => {
  return <div>{user.name}</div>;
});
```

### useCallback Hook
```javascript
import { useCallback } from 'react';

function Parent() {
  // Memoize callback function
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return <Child onClick={handleClick} />;
}
```

### useMemo Hook
```javascript
import { useMemo } from 'react';

function Component({ items }) {
  // Memoize expensive calculation
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <div>Total: {total}</div>;
}
```

---

## Testing Examples

### Testing Components (Using React Testing Library)
```javascript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders button with text', () => {
  render(<MyComponent />);
  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();
});
```

### Testing User Interactions
```javascript
import { render, screen, fireEvent } from '@testing-library/react';

test('button click updates count', () => {
  render(<Counter />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

---

## Best Practices

### ✅ Do's
- Use meaningful variable names
- Keep components small and focused
- Extract reusable logic to custom hooks
- Use const for variables, never var
- Validate form inputs
- Handle loading and error states
- Use semantic HTML
- Write descriptive comments

### ❌ Don'ts
- Don't use index as array key
- Don't put state in deeply nested props (prop drilling)
- Don't mutate state directly
- Don't update state in loops
- Don't use inline functions in render
- Don't forget cleanup in useEffect
- Don't ignore console warnings

---

## Resources

- [React Docs](https://react.dev)
- [Framer Motion Examples](https://www.framer.com/motion/)
- [React Router Guide](https://reactrouter.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Happy Coding! 🚀**
