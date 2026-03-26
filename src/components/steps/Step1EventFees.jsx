import React, { useState, useEffect } from 'react';
import { getEventsList } from '../../utils/eventManager';

const Step1EventFees = ({ nextStep }) => {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    setEventsList(getEventsList());
  }, []);

  return (
    <div className="step-container">
      <h2 className="glow-text-gold mb-4">Step 1: Event Information & Fees</h2>
      
      <div className="table-responsive" style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.4)' }}>
              <th style={{ padding: '1rem', color: 'var(--accent-gold)' }}>Event Name</th>
              <th style={{ padding: '1rem', color: 'var(--accent-gold)' }}>Registration Fee</th>
              <th style={{ padding: '1rem', color: 'var(--accent-gold)' }}>Team Limit</th>
            </tr>
          </thead>
          <tbody>
            {eventsList.map((event, idx) => (
              <tr key={event.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: idx % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'transparent' }}>
                <td style={{ padding: '1rem' }}>{event.name}</td>
                <td style={{ padding: '1rem' }}>₹{event.fee}</td>
                <td style={{ padding: '1rem' }}>{event.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="form-navigation" style={{ justifyContent: 'flex-end' }}>
        <button type="button" className="btn btn-primary" onClick={nextStep}>
          Proceed to Registration →
        </button>
      </div>
    </div>
  );
};

export default Step1EventFees;
