import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Jon Flaim</h1>
          <div className="subtitle">Ethical Hacker & Data Scientist</div>
          <p className="description">
            Penetration testing specialist with strong data science foundations, 
            building secure applications and extracting insights from complex datasets. 
            Ready to tackle cybersecurity challenges and drive data-driven solutions.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <a 
              href="https://github.com/jonflaim83" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;