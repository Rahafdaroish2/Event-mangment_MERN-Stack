import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
$ the body of the request in patch create new event
{
  "eventName": "Party in Lounge",
  "eventDescription": "Lounge in the Royal  LOUNGEEE",
  "occasionType": "private",
  "eventDate": "2025-12-10",
  "eventTime": "20:00",
  "maxAttendance": 50,
  "eventType": "custom",
  "locationType": "lounge",
  "venueId":"692d541c55f354db0bec9f0a",

  "services": {
    "hospitality": {
      "enabled": true,
      "drinks": true,
      "food": true,
      "cake": false,
      "icecream": false
    },
    "camera": {
      "enabled": true
    },
    "decoration": {
      "enabled": true
    },
    "limousine": {
      "enabled": false
    },
    "musicalBand": {
      "enabled": false
    }
  }
}

*/
