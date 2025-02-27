import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import Faqs from './components/Faqs.jsx';
import EventHighlight from './components/EventHighlight.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <AboutUs/>
        <EventHighlight/>
        <Faqs/>
      </div>
    </BrowserRouter>
  )
}

export default App
