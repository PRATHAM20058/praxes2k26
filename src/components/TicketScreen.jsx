import React, { useEffect } from 'react';
import { Download, CheckCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import html2pdf from 'html2pdf.js';

const TicketScreen = ({ data }) => {
  useEffect(() => {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
    
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const element = document.getElementById('ticket-content');
    const opt = {
      margin:       0.5,
      filename:     `${data.ticketId}-Ticket.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#120505' },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <CheckCircle size={80} className="glow-text-emerald" style={{ margin: '0 auto 1rem' }} />
      <h2 className="glow-text-gold mb-2">Registration Successful!</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>A confirmation email will be sent within 48 hours.</p>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <div 
          id="ticket-content" 
          style={{
            background: 'linear-gradient(135deg, #220b0b 0%, #120505 100%)',
            border: '2px solid var(--accent-gold)',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '500px',
            width: '100%',
            color: '#f8f8f8',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.15)',
            textAlign: 'left'
          }}
        >
          <div style={{ position: 'absolute', top: '-10%', right: '-10%', fontSize: '150px', opacity: '0.05', transform: 'rotate(-15deg)', color: 'var(--accent-gold)', pointerEvents: 'none' }}>
            ★
          </div>

          <div style={{ borderBottom: '1px dashed rgba(212, 175, 55, 0.5)', paddingBottom: '1rem', marginBottom: '1rem', textAlign: 'center' }}>
            <h1 className="glow-text-emerald" style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>PRAXES 2K26-27</h1>
            <p style={{ color: 'var(--accent-gold)', fontWeight: 'bold', letterSpacing: '2px' }}>PARTICIPATION TICKET</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.1rem' }}>Ticket ID</p>
              <p style={{ fontWeight: 'bold', color: 'var(--accent-gold)' }}>{data.ticketId}</p>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.1rem' }}>Date</p>
              <p style={{ fontWeight: 'bold' }}>{new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid #4a2828', paddingBottom: '0.5rem' }}>Event Details</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Event:</span>
              <span className="glow-text-emerald" style={{ fontWeight: 'bold' }}>{(data.selectedEvent || '').toUpperCase()}</span>
            </div>
            {data.teamName && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Team:</span>
                <span style={{ fontWeight: 'bold' }}>{data.teamName}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Fee Paid:</span>
              <span style={{ fontWeight: 'bold', color: 'var(--accent-gold)' }}>₹{data.eventFee}</span>
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', borderBottom: '1px solid #4a2828', paddingBottom: '0.5rem' }}>Participant Info</h3>
            <p style={{ marginBottom: '0.5rem' }}><strong>Name:</strong> {data.fullName}</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>College:</strong> {data.collegeName}</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Dept & Sem:</strong> {data.department} ({data.semester} Sem)</p>
            <p><strong>Contact:</strong> {data.contactNo}</p>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <p>Please present this ticket at the registration desk.</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={handleDownload} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Download size={18} />
          Download Ticket (PDF)
        </button>
        <Link to="/" className="btn btn-emerald" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Home size={18} />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default TicketScreen;
