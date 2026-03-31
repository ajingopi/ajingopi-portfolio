import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from "react-ga4";

const GA = ReactGA?.default || ReactGA;

if (typeof window !== "undefined") {
  GA.initialize("G-5PZDJ16PYV");
  GA.send({ hitType: "pageview", page: window.location.pathname });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
