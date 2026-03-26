import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Calendar, Users, Trophy } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Alert Banner */}
      <div className="alert-banner">
        <div className="container alert-content">
          <AlertTriangle className="alert-icon" />
          <p><strong>URGENT:</strong> Registrations are open until 08/03/2026, 06:00 PM. Late entries will not be accepted.</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h2 className="hero-subtitle glow-text-gold">Annual Cultural & Technical Fest</h2>
          <h1 className="hero-title glow-text-emerald">PRAXES 2K26-27</h1>
          <p className="hero-description">
            Experience the ultimate fusion of technology, arts, and culture at Government Engineering College, Palanpur.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary btn-lg">Register Now</Link>
            <Link to="/events" className="btn btn-emerald btn-lg">Explore Events</Link>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-item glow-text-gold">★ Hackathon</span>
          <span className="marquee-item glow-text-emerald">★ Robo-Wars</span>
          <span className="marquee-item glow-text-gold">★ Dance Competition</span>
          <span className="marquee-item glow-text-emerald">★ Code Debugging</span>
          <span className="marquee-item glow-text-gold">★ Singing</span>
          <span className="marquee-item glow-text-emerald">★ BGMI Tournament</span>
          <span className="marquee-item glow-text-gold">★ E-Sports Showcase</span>
          {/* Duplicate for infinite loop */}
          <span className="marquee-item glow-text-gold">★ Hackathon</span>
          <span className="marquee-item glow-text-emerald">★ Robo-Wars</span>
          <span className="marquee-item glow-text-gold">★ Dance Competition</span>
          <span className="marquee-item glow-text-emerald">★ Code Debugging</span>
          <span className="marquee-item glow-text-gold">★ Singing</span>
          <span className="marquee-item glow-text-emerald">★ BGMI Tournament</span>
          <span className="marquee-item glow-text-gold">★ E-Sports Showcase</span>
        </div>
      </div>

      {/* Highlights */}
      <section className="highlights container">
        <div className="highlight-card card">
          <Calendar className="highlight-icon glow-text-gold" />
          <h3>3 Days of Events</h3>
          <p>Action-packed schedule featuring 20+ technical and cultural competitions.</p>
        </div>
        <div className="highlight-card card">
          <Users className="highlight-icon glow-text-emerald" />
          <h3>5000+ Attendees</h3>
          <p>Join students from across the state in making memories that last a lifetime.</p>
        </div>
        <div className="highlight-card card">
          <Trophy className="highlight-icon glow-text-gold" />
          <h3>Amazing Prizes</h3>
          <p>Compete to win cash prizes, certificates, and the prestigious PRAXES cup.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
