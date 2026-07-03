import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Mess Management System",
      role: "Frontend Developer",
      description: "A dynamic web portal designed for hostel students. Features include real-time daily and weekly menu displays and a structured feedback system to streamline communication between students and mess administration.",
      tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"]
    }
  ];

  return (
    <section id="projects" className="content-section">
      <h2 className="section-title">Featured Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((proj, index) => (
          <div className="card" key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{proj.title}</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', background: 'var(--bg)', padding: '0.3rem 0.8rem', borderRadius: '20px' }}>
                {proj.role}
              </span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.7' }}>
              {proj.description}
            </p>
            <div className="tech-stack">
              {proj.tech.map((tag, i) => (
                <span className="tech-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;