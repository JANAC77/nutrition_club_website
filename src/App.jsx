import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stats from './components/Stats';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  useEffect(() => {
    // Automatically scroll to section if URL path matches (e.g. /about)
    setTimeout(() => {
      const path = window.location.pathname.substring(1);
      if (path) {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Stats />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
