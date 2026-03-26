import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEventsList, getIconComponent } from '../utils/eventManager';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getEventsList());
  }, []);

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 className="text-center glow-text-gold mb-4" style={{ fontSize: '3rem' }}>Events Overview</h1>
      <p className="text-center text-muted" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
        Discover the wide range of technical and cultural events at PRAXES 2K26-27. 
        Compete, learn, and win amazing prizes!
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {events.map(event => (
          <div key={event.id} className="card" style={{ transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ color: 'var(--accent-emerald)', marginBottom: '1rem', background: 'rgba(11, 218, 81, 0.1)', padding: '1rem', borderRadius: '50%', display: 'inline-block' }}>
              {getIconComponent(event.iconName || 'Star', { size: 32 })}
            </div>
            <h3 className="glow-text-gold" style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{event.name}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '48px' }}>{event.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
              <span><strong>Fee:</strong> ₹{event.fee}</span>
              <span><strong>Limit:</strong> {event.limit}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 className="glow-text-emerald" style={{ marginBottom: '1.5rem' }}>Ready to Compete?</h2>
        <Link to="/register" className="btn btn-primary btn-lg">Register Now</Link>
      </div>
    </div>
  );
};

export default Events;
