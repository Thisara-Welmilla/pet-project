import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Reveal root after React has mounted to avoid flash of unstyled content
const rootEl = document.getElementById('root');
if (rootEl) rootEl.style.visibility = 'visible';
// Reveal the body only after React has mounted and hydrated
try {
  document.body.style.visibility = 'visible';
} catch (e) {
  // ignore if document body not available
}
