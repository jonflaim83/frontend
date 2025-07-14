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
          <div className="subtitle"> Data Analyst and Pentration Tester</div>
          <p className="description">
            Data analyst and pentration tester with strong foundations in statistical analysis, machine learning, and business intelligence. 
            Skilled in Python, SQL, and advanced analytics to solve complex business challenges and deliver data-driven solutions that impact bottom-line results.
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