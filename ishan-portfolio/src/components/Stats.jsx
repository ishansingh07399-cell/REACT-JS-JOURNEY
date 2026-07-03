import React from 'react';

const Stats = () => {
  return (
    <section id="skills" className="content-section">
      <h2 className="section-title">Technical Arsenal</h2>
      <div className="grid">
        <div className="card">
          <h3>Competitive Programming</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Consistently participating in coding contests to sharpen algorithmic thinking and problem-solving speed. Active on AlgoZenith and GeeksforGeeks.
          </p>
          <ul style={{ listStyle: 'none', color: 'var(--text)', fontSize: '0.9rem' }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--accent)' }}>CodeChef:</span> Rating 1204 (21+ Contests)
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--accent)' }}>Codeforces:</span> Active Participant
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Languages & Tools</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Comfortable working across the stack, from low-level memory management to dynamic frontend frameworks.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">C / C++</span>
            <span className="tech-tag">HTML & CSS</span>
            <span className="tech-tag">JavaScript (ES6+)</span>
            <span className="tech-tag">React & Vite</span>
            <span className="tech-tag">Mongodb,Postman</span>
            <span className="tech-tag">Nodejs</span>
            <span className="tech-tag">Git&GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;