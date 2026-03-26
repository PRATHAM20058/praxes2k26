import React, { useState } from 'react';
import { UserCheck } from 'lucide-react';

const Step3ParticipantDetails = ({ nextStep, prevStep, data, updateFormData }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!data.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!data.department) newErrors.department = 'Please select a department';
    if (!data.semester) newErrors.semester = 'Please select a semester';
    if (!data.enrollmentNo.trim()) newErrors.enrollmentNo = 'Enrollment number is required';
    if (!data.contactNo.trim() || !/^\d{10}$/.test(data.contactNo)) newErrors.contactNo = 'Valid 10-digit contact number is required';
    if (!data.emailId.trim() || !/^\S+@\S+\.\S+$/.test(data.emailId)) newErrors.emailId = 'Valid email ID is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="step-container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <UserCheck size={64} className="glow-text-gold" style={{ margin: '0 auto' }} />
        <h2 className="glow-text-gold mt-4 mb-4">Step 3: Participant Details</h2>
      </div>

      <div className="form-group">
        <label className="form-label">Team Name (Optional)</label>
        <input 
          type="text" 
          className="form-input" 
          placeholder="Enter Team Name (if applicable)"
          value={data.teamName}
          onChange={(e) => updateFormData({ teamName: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Full Name *</label>
        <input 
          type="text" 
          className="form-input" 
          placeholder="First Last"
          value={data.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
        />
        {errors.fullName && <p className="form-error">{errors.fullName}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Department *</label>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          {['Computer', 'Civil', 'Mechanical', 'Electrical', 'Mining'].map(dept => (
            <label key={dept} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="department" 
                value={dept}
                checked={data.department === dept}
                onChange={(e) => updateFormData({ department: e.target.value })}
              />
              {dept}
            </label>
          ))}
        </div>
        {errors.department && <p className="form-error">{errors.department}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Semester *</label>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          {['2nd', '4th', '6th', '8th'].map(sem => (
            <label key={sem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="semester" 
                value={sem}
                checked={data.semester === sem}
                onChange={(e) => updateFormData({ semester: e.target.value })}
              />
              {sem}
            </label>
          ))}
        </div>
        {errors.semester && <p className="form-error">{errors.semester}</p>}
      </div>

      <div className="form-group" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div>
          <label className="form-label">Enrollment No. *</label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="e.g. 210610107000"
            value={data.enrollmentNo}
            onChange={(e) => updateFormData({ enrollmentNo: e.target.value })}
          />
          {errors.enrollmentNo && <p className="form-error">{errors.enrollmentNo}</p>}
        </div>
        <div>
          <label className="form-label">Contact No. *</label>
          <input 
            type="tel" 
            className="form-input" 
            placeholder="10-digit mobile number"
            value={data.contactNo}
            onChange={(e) => updateFormData({ contactNo: e.target.value })}
          />
          {errors.contactNo && <p className="form-error">{errors.contactNo}</p>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Email Address *</label>
        <input 
          type="email" 
          className="form-input" 
          placeholder="your.email@example.com"
          value={data.emailId}
          onChange={(e) => updateFormData({ emailId: e.target.value })}
        />
        {errors.emailId && <p className="form-error">{errors.emailId}</p>}
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

export default Step3ParticipantDetails;
