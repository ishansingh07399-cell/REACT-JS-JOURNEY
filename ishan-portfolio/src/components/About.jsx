import React from 'react';

const About = () => {
  return (
    <section id="about" className="content-section" style={{ paddingTop: '8rem' }}>
      <h2 className="section-title">About Me</h2>
      <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          I'm an 18-year-old student and developer currently navigating the intersection of computer science and complex systems.
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
          Whether I'm debugging C++ logic for a Codeforces contest, preparing for a Data Structures and Algorithms lab exam, or building interactive 3D web applications, I enjoy tearing down complex problems and building efficient solutions. I'm actively exploring opportunities in B.Tech programs to further bridge the gap between low-level logic and high-level architecture.
        </p>
      </div>
    </section>
  );
};

export default About;