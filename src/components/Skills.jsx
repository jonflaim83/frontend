import React from 'react';

const Skills = () => {
  const skills = [
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Penetration testing methodologies, vulnerability assessments, and ethical hacking demonstrations through TryHackMe challenges and real-world scenarios.",
      technologies: ["Python", "Kali Linux", "Metasploit", "Burp Suite", "Nmap"]
    },
    {
      icon: "📊",
      title: "Data Science",
      description: "Machine learning models, statistical analysis, and predictive analytics with real-world datasets and business applications.",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Jupyter"]
    },
    {
      icon: "🌐",
      title: "Full-Stack Development",
      description: "Modern web applications with responsive design, robust backend architectures, and seamless user experiences.",
      technologies: ["React", "Node.js", "PostgreSQL", "MongoDB", "Docker"]
    },
    {
      icon: "🔧",
      title: "Network Security",
      description: "Network monitoring, analysis, and vulnerability assessment of enterprise network infrastructure and protocols.",
      technologies: ["Wireshark", "pfSense", "Suricata", "OSSEC", "Nagios"]
    },
    {
      icon: "⚡",
      title: "ETL Pipelines",
      description: "Automated data processing workflows, migration scripts, and real-time data pipeline optimization for large datasets.",
      technologies: ["Apache Airflow", "Spark", "Kafka", "Redis", "Elasticsearch"]
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Scalable cloud deployments with modern DevOps practices, Infrastructure as Code, and container orchestration.",
      technologies: ["AWS", "Terraform", "Kubernetes", "Jenkins", "Ansible"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Core Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-technologies">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;