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
          <div className="subtitle"> ServiceNow Developer & Business Intelligence Specialist </div>
          <p className="description">
            ServiceNow Developer and Business Analyst with strong foundations in platform development, business intelligence, and process automation. 
            Experienced in building ServiceNow workflows, business rules, and integrations while delivering data-driven solutions that streamline operations and drive business outcomes. 
            Skilled in Python, SQL, and advanced analytics to solve complex business challenges and implement scalable ServiceNow solutions.
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