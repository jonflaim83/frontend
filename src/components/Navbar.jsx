import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button 
          className="nav-logo"
          onClick={() => scrollToSection('home')}
        >
          Jon Flaim
        </button>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button onClick={() => scrollToSection('home')}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('skills')}>
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>
        </ul>
        
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;