import React from 'react';
import { Info, Phone } from 'lucide-react';

const Step4Instructions = ({ nextStep, prevStep }) => {
  return (
    <div className="step-container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Info size={64} className="glow-text-emerald" style={{ margin: '0 auto' }} />
        <h2 className="glow-text-gold mt-4 mb-4">Step 4: Instructions & Support</h2>
      </div>

      <div className="instructions-card" style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', borderLeft: '4px solid var(--accent-gold)' }}>
        <h3 className="glow-text-gold mb-4" style={{ marginBottom: '1rem' }}>Important Instructions</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
          <li>Please ensure all entered details are accurate. Certificates will be generated based on this data.</li>
          <li>For team events, only the team leader needs to register and submit the payment.</li>
          <li>Payments are accepted via UPI only (Google Pay / PhonePe / Paytm).</li>
          <li><strong>Take a screenshot of the successful payment displaying the UTR/Transaction ID clearly.</strong></li>
          <li>Registration is confirmed only after the payment is verified by our team.</li>
          <li>Registration fees are non-refundable under any circumstances.</li>
        </ul>
      </div>

      <h3 className="glow-text-emerald" style={{ marginBottom: '1rem' }}>Event Coordinators</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div className="coordinator-card" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(11, 218, 81, 0.3)', padding: '1rem', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>John Doe</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Chief Coordinator</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)' }}>
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </div>
        </div>
        <div className="coordinator-card" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(11, 218, 81, 0.3)', padding: '1rem', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Jane Smith</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Technical Head</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)' }}>
            <Phone size={16} />
            <span>+91 87654 32109</span>
          </div>
        </div>
      </div>

      <div className="form-navigation">
        <button type="button" className="btn" onClick={prevStep}>
          ← Back
        </button>
        <button type="button" className="btn btn-primary" onClick={nextStep}>
          Proceed to Payment →
        </button>
      </div>
    </div>
  );
};

export default Step4Instructions;
