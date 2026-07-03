import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '1.5rem 2rem',
      background: 'rgba(9, 9, 11, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--accent)' }}>
        IS.
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#about" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
        <a href="#skills" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem' }}>Skills</a>
        <a href="#projects" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem' }}>Projects</a>
      </div>
    </nav>
  );
};

export default Navbar;