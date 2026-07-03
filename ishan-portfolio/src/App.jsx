import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* Hero handles the black background and particles internally */}
      <Hero />
      
      <main>
        <About />
        <Stats />
        <Projects />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '3rem 2rem', color: 'var(--muted)', borderTop: '1px solid var(--border)', marginTop: '4rem' }}>
        <p>Built with React & Vite. © {new Date().getFullYear()} Ishan Singh.</p>
      </footer>
    </div>
  );
}

export default App;