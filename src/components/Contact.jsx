import React from 'react';

const Contact = () => {
  // Inline styles for consistent tile sizing
  const contactInfoStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '0 1rem'
  };

  const contactItemStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '1.5rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease, background 0.3s ease',
    minHeight: '140px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Ready to discuss cybersecurity challenges, data science projects, or development opportunities.
          Let's build something amazing together.
        </p>
        
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <h3>Professional Opportunities</h3>
            <p>Open to full-time, contract, and consulting opportunities in cybersecurity, data science, and software development.</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>Interested in collaborating on open-source projects, research, or innovative solutions in security and data analytics.</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">🎓</div>
            <h3>Knowledge Sharing</h3>
            <p>Available for technical discussions, code reviews, and sharing insights on cybersecurity and data science best practices.</p>
          </div>
        </div>
        
        {/* Fixed: Single container with inline styles for consistent sizing */}
        <div style={contactInfoStyle}>
          <div style={contactItemStyle}>
            <span className="contact-emoji">📧</span>
            <div className="contact-details">
              <h4>Email</h4>
              <a href="mailto:jonflaim83@outlook.com" className="contact-email-link">
                jonflaim83@outlook.com
              </a>
            </div>
          </div>
          
          <div style={contactItemStyle}>
            <span className="contact-emoji">💻</span>
            <div className="contact-details">
              <h4>GitHub</h4>
              <a href="https://github.com/jonflaim83" target="_blank" rel="noopener noreferrer">
                github.com/jonflaim83
              </a>
            </div>
          </div>
          
          <div style={contactItemStyle}>
            <span className="contact-emoji">🔗</span>
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <div style={contactItemStyle}>
            <span className="contact-emoji">📍</span>
            <div className="contact-details">
              <h4>Location</h4>
              <span>Parsippany, New Jersey, US</span>
            </div>
          </div>
        </div>
        
        <div className="contact-cta">
          <h3>Ready to start a conversation?</h3>
          <p>Whether you're looking to secure your infrastructure, extract insights from data, or build robust applications, I'm here to help.</p>
          <a href="mailto:jonflaim83@outlook.com" className="btn btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;