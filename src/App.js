import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';



function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        scrollY={scrollY}
      />
      <Hero />

      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;