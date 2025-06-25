import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Cybersecurity Portfolio",
      description: "Comprehensive collection of penetration testing tools, vulnerability assessments, and ethical hacking demonstrations organized by specialty areas including forensics, network tools, and red ops.",
      tags: ["Python", "Security", "Penetration Testing", "Forensics"],
      link: "https://github.com/jonflaim83/Cybersecurity-Portfolio",
      featured: true,
      status: "Active Development"
    },
    {
      title: "Data Science Projects",
      description: "Machine learning models, statistical analysis, and predictive analytics projects featuring real-world datasets, business intelligence, and advanced analytics solutions.",
      tags: ["Python", "Machine Learning", "Analytics", "Visualization"],
      link: "https://github.com/jonflaim83/datascienceprojects",
      featured: true,
      status: "Portfolio Showcase"
    },
    {
      title: "Python Development Suite",
      description: "Diverse collection of Python applications including web scrapers, REST APIs, automation tools, data processing scripts, and full-stack web applications.",
      tags: ["Python", "Web Development", "Automation", "APIs"],
      link: "https://github.com/jonflaim83/Python",
      featured: true,
      status: "Growing Collection"
    },
    {
      title: "ETL Pipeline Framework",
      description: "Data processing workflows showcasing automated data migration scripts, real-time processing, data cleaning processes, and pipeline optimization techniques.",
      tags: ["Python", "Data Engineering", "ETL", "Big Data"],
      link: "https://github.com/jonflaim83/ETLPipelines",
      featured: false,
      status: "Production Ready"
    },
    {
      title: "Network Security Toolkit",
      description: "Advanced network security tools and scripts for monitoring, analysis, vulnerability assessment, and automated security testing of network infrastructure.",
      tags: ["Python", "Network Security", "Monitoring", "Automation"],
      link: "https://github.com/jonflaim83/networksecurity",
      featured: true,
      status: "Enterprise Grade"
    },
    {
      title: "Cloud Infrastructure",
      description: "Cloud computing projects featuring multi-cloud deployments, container orchestration, Infrastructure as Code implementations, and DevOps automation pipelines.",
      tags: ["AWS", "Docker", "DevOps", "Terraform"],
      link: "https://github.com/jonflaim83/cloud",
      featured: false,
      status: "Scalable Solutions"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Featured Projects */}
        <div className="projects-grid featured-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card featured">
              <div className="project-header">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-body">
                <p>{project.description}</p>
                <div className="project-links">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    View Repository →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="subsection-title">Additional Projects</h3>
        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-body">
                <p>{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Repository →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in collaborating or learning more about these projects?</p>
          <a 
            href="https://github.com/jonflaim83" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;