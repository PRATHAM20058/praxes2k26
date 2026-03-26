import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';
import BackgroundParticles from './BackgroundParticles';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <BackgroundParticles />
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="brand">
            <Zap className="brand-icon glow-text-gold" />
            <span className="brand-text">PRAXES <span className="highlight glow-text-emerald">2K26-27</span></span>
          </Link>
          <nav className="nav-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/events" className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}>Events</Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </nav>
        </div>
      </header>
      
      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Government Engineering College, Palanpur.</p>
          <p className="footer-credits">Developed for PRAXES 2K26-27</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
