import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/next"

createRoot(document.getElementById('root')).render(
  <SpeedInsights>
  <StrictMode>
    <App />
  </StrictMode>
  </SpeedInsights>,
)
