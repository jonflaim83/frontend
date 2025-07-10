import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <h3>Jon Flaim</h3>
            <p>Data Analyst</p>
            <p>Building secure, data-driven solutions for the digital world.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Projects</h4>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/jonflaim83/Cybersecurity-Portfolio" target="_blank" rel="noopener noreferrer">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="https://github.com/jonflaim83/datascienceprojects" target="_blank" rel="noopener noreferrer">
                  Data Science
                </a>
              </li>
              <li>
                <a href="https://github.com/jonflaim83/Python" target="_blank" rel="noopener noreferrer">
                  Python Development
                </a>
              </li>
              <li>
                <a href="https://github.com/jonflaim83" target="_blank" rel="noopener noreferrer">
                  View All
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center'}}>
              <a href="mailto:jonflaim83@outlook.com" 
                 style={{
                   display: 'flex',
                   alignItems: 'center',
                   padding: '0.75rem 1rem',
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderRadius: '8px',
                   textDecoration: 'none',
                   color: 'white',
                   width: '120px',
                   minWidth: '120px',
                   maxWidth: '120px',
                   boxSizing: 'border-box',
                   fontSize: '14px'
                 }}>
                <span style={{marginRight: '0.5rem'}}>📧</span> Email
              </a>
              <a href="https://github.com/jonflaim83" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 style={{
                   display: 'flex',
                   alignItems: 'center',
                   padding: '0.75rem 1rem',
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderRadius: '8px',
                   textDecoration: 'none',
                   color: 'white',
                   width: '120px',
                   minWidth: '120px',
                   maxWidth: '120px',
                   boxSizing: 'border-box',
                   fontSize: '14px'
                 }}>
                <span style={{marginRight: '0.5rem'}}>💻</span> GitHub
              </a>
              <a href="#" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 style={{
                   display: 'flex',
                   alignItems: 'center',
                   padding: '0.75rem 1rem',
                   background: 'rgba(255, 255, 255, 0.1)',
                   borderRadius: '8px',
                   textDecoration: 'none',
                   color: 'white',
                   width: '120px',
                   minWidth: '120px',
                   maxWidth: '120px',
                   boxSizing: 'border-box',
                   fontSize: '14px'
                 }}>
                <span style={{marginRight: '0.5rem'}}>🔗</span> LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Jon Flaim. All rights reserved.</p>
            <p>Built with React • Designed for Impact</p>
            <button onClick={scrollToTop} className="back-to-top">
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;