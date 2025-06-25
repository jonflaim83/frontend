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
            <p>Ethical Hacker & Data Scientist</p>
            <p>Building secure, data-driven solutions for the digital world.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
              <li><button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
              <li><button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
              <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Projects</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/jonflaim83/Cybersecurity-Portfolio" target="_blank" rel="noopener noreferrer">Cybersecurity</a></li>
              <li><a href="https://github.com/jonflaim83/datascienceprojects" target="_blank" rel="noopener noreferrer">Data Science</a></li>
              <li><a href="https://github.com/jonflaim83/Python" target="_blank" rel="noopener noreferrer">Python Development</a></li>
              <li><a href="https://github.com/jonflaim83" target="_blank" rel="noopener noreferrer">View All</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="mailto:jonflaim83@outlook.com" className="social-link email-link">
                <span>📧</span> jonflaim83@outlook.com
              </a>
              <a href="https://github.com/jonflaim83" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>💻</span> GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>🔗</span> LinkedIn
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