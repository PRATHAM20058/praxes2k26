import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px' }}>
      <h1 className="text-center glow-text-emerald mb-4" style={{ fontSize: '3rem' }}>Contact Us</h1>
      <p className="text-center text-muted" style={{ marginBottom: '3rem' }}>
        Have questions or need assistance? Reach out to our organizing committee.
      </p>

      <div className="card" style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ color: 'var(--accent-gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '0.75rem', borderRadius: '8px' }}>
            <MapPin size={24} />
          </div>
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Our Location</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Government Engineering College,<br />
              Palanpur-Ahmedabad Highway,<br />
              Palanpur, Gujarat 385011
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ color: 'var(--accent-emerald)', background: 'rgba(11, 218, 81, 0.1)', padding: '0.75rem', borderRadius: '8px' }}>
            <Phone size={24} />
          </div>
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Phone</h3>
            <p style={{ color: 'var(--text-muted)' }}>+91 98765 43210 (John Doe - Chief Coordinator)</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ color: 'var(--accent-gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '0.75rem', borderRadius: '8px' }}>
            <Mail size={24} />
          </div>
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Email</h3>
            <p style={{ color: 'var(--text-muted)' }}>praxes2k26@gecpl.ac.in</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Follow us on social media for regular updates!</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Instagram</button>
          <button className="btn btn-emerald" style={{ padding: '0.5rem 1rem' }}>Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
