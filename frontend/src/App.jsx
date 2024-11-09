import React, { useRef, useState, useEffect } from 'react';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Programs from './components/programs/Programs';
import Testimonials from './components/testimonial/Testimonials';
import ApplyForm from './components/apply/ApplyForm';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import { ToastContainer } from 'react-toastify';

import './App.css';

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const applyFormRef = useRef(null);

  // Scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle showing the scroll-to-top button when scrolling
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {  // Show button after scrolling down 300px
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Pass scroll function and refs to Navbar */}
      <NavBar
        scrollToSection={scrollToSection}
        refs={{ heroRef, aboutRef, programsRef, testimonialsRef, applyFormRef }}
      />

      {/* Each section with a corresponding ref */}
      <div className="container-root">
        <div ref={heroRef}><Hero /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={programsRef}><Programs /></div>
        <div ref={testimonialsRef}><Testimonials /></div>
        <div ref={applyFormRef}><ApplyForm /></div>
      </div>
      <Footer />

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeButton={true}
        theme="light"
        draggable
      />

      {/* Scroll-to-top button */}
      {showScrollTopButton && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
