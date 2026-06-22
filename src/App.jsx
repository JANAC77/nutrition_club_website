import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Gallery />
      <Contact />
      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Nutrition Club. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
