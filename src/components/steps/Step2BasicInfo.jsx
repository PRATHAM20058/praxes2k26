import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { getEventsList } from '../../utils/eventManager';

const Step2BasicInfo = ({ nextStep, prevStep, data, updateFormData }) => {
  const [errors, setErrors] = useState({});
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    setEventsList(getEventsList());
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!data.collegeName.trim()) newErrors.collegeName = "College Name is required";
    if (!data.selectedEvent) newErrors.selectedEvent = "Please select an event";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  const handleEventChange = (e) => {
    const eventId = e.target.value;
    const selected = eventsList.find(ev => ev.id === eventId);
    updateFormData({
      selectedEvent: eventId,
      eventFee: selected ? selected.fee : 0
    });
  };

  return (
    <div className="step-container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Shield size={64} className="glow-text-emerald" style={{ margin: '0 auto' }} />
        <h2 className="glow-text-gold mt-4 mb-4">Step 2: Basic Information</h2>
      </div>

      <div className="form-group">
        <label className="form-label">College / Institute Name *</label>
        <input 
          type="text" 
          className="form-input" 
          placeholder="e.g. Government Engineering College, Palanpur"
          value={data.collegeName}
          onChange={(e) => updateFormData({ collegeName: e.target.value })}
        />
        {errors.collegeName && <p className="form-error">{errors.collegeName}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Select Event *</label>
        <select 
          className="form-select"
          value={data.selectedEvent}
          onChange={handleEventChange}
        >
          <option value="">-- Choose an Event --</option>
          {eventsList.map(ev => (
            <option key={ev.id} value={ev.id}>{ev.name} (₹{ev.fee})</option>
          ))}
        </select>
        {errors.selectedEvent && <p className="form-error">{errors.selectedEvent}</p>}
      </div>

      <div className="form-navigation">
        <button type="button" className="btn" onClick={prevStep}>
          ← Back
        </button>
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next Step →
        </button>
      </div>
    </div>
  );
};

export default Step2BasicInfo;
