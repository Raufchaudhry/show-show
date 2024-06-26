

import React from 'react';

import './index.css'; // Import Tailwind CSS styles
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './Skills';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
  
 
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    
    </>
  )
}

export default App
