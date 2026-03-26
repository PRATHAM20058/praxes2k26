import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEventsList, saveEventsList } from '../utils/eventManager';
import { getAdmins, saveAdmins, logout, getActiveUser } from '../utils/authManager';
import { Trash2, Plus, Settings, LogOut, UserPlus, ShieldCheck } from 'lucide-react';

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ id: '', name: '', fee: '', limit: '', desc: '', iconName: 'Star' });
  
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ email: '', password: '' });
  
  const navigate = useNavigate();

  useEffect(() => {
    setEvents(getEventsList());
    setAdmins(getAdmins());
  }, []);

  const handleDeleteEvent = (id) => {
    const updated = events.filter(e => e.id !== id);
    setEvents(updated);
    saveEventsList(updated);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEvent.id || !newEvent.name || !newEvent.fee || !newEvent.limit) return;
    
    const eventToAdd = {
      ...newEvent,
      fee: parseInt(newEvent.fee, 10)
    };
    
    if (events.find(ev => ev.id === newEvent.id)) {
      alert("An event with this ID already exists!");
      return;
    }
    
    const updated = [...events, eventToAdd];
    setEvents(updated);
    saveEventsList(updated);
    setNewEvent({ id: '', name: '', fee: '', limit: '', desc: '', iconName: 'Star' });
  };

  const handleAddAdmin = (e) => {
    e.preventDefault();
    if (!newAdmin.email || !newAdmin.password) return;
    
    if (admins.find(a => a.email === newAdmin.email)) {
      alert("An admin with this email already exists!");
      return;
    }

    const updated = [...admins, newAdmin];
    setAdmins(updated);
    saveAdmins(updated);
    setNewAdmin({ email: '', password: '' });
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '1200px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Settings size={36} className="glow-text-emerald" />
          <div>
            <h1 className="glow-text-gold" style={{ fontSize: '1.8rem' }}>Admin Dashboard</h1>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Welcome, {getActiveUser()}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderColor: 'var(--error)', color: 'var(--error)' }}>
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem', marginBottom: '3rem' }}>
        
        {/* Add Event Form */}
        <div className="card" style={{ height: 'fit-content' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-emerald)' }}>Add New Event</h3>
          <form onSubmit={handleAddEvent}>
            <div className="form-group">
              <label className="form-label">Event ID (Unique)</label>
              <input type="text" className="form-input" placeholder="e.g. coding-relay" value={newEvent.id} onChange={(e) => setNewEvent({...newEvent, id: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">Event Name</label>
              <input type="text" className="form-input" value={newEvent.name} onChange={(e) => setNewEvent({...newEvent, name: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">Fee (₹)</label>
              <input type="number" className="form-input" value={newEvent.fee} onChange={(e) => setNewEvent({...newEvent, fee: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">Team Limit</label>
              <input type="text" className="form-input" placeholder="e.g. Solo or 4 Members" value={newEvent.limit} onChange={(e) => setNewEvent({...newEvent, limit: e.target.value})} required />
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-textarea" rows="3" value={newEvent.desc} onChange={(e) => setNewEvent({...newEvent, desc: e.target.value})} required></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Icon Identifier</label>
              <input type="text" className="form-input" placeholder="e.g. Star, Cpu, Zap" value={newEvent.iconName} onChange={(e) => setNewEvent({...newEvent, iconName: e.target.value})} />
            </div>
            <button type="submit" className="btn btn-emerald" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Plus size={18} /> Add Event
            </button>
          </form>
        </div>

        {/* List of Events */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>Current Events</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {events.length === 0 ? (
              <p style={{ color: 'var(--text-muted)' }}>No events found.</p>
            ) : (
              events.map((event) => (
                <div key={event.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{event.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ID: {event.id} | Fee: ₹{event.fee} | Limit: {event.limit}</span>
                  </div>
                  <button onClick={() => handleDeleteEvent(event.id)} className="btn" style={{ padding: '0.5rem', borderColor: 'var(--error)', color: 'var(--error)' }} title="Delete Event">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      <hr style={{ borderColor: 'rgba(255,255,255,0.05)', marginBottom: '3rem' }} />

      {/* ADMIN MANAGEMENT */}
      <h2 className="glow-text-gold" style={{ marginBottom: '1.5rem' }}>Committee Access Management</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        
        {/* Add Admin Form */}
        <div className="card" style={{ height: 'fit-content' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><UserPlus size={20}/> Create Admin</h3>
          <form onSubmit={handleAddAdmin}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="admin@praxes.com" value={newAdmin.email} onChange={(e) => setNewAdmin({...newAdmin, email: e.target.value})} required />
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Password</label>
              <input type="password" className="form-input" value={newAdmin.password} onChange={(e) => setNewAdmin({...newAdmin, password: e.target.value})} required />
            </div>
            <button type="submit" className="btn btn-emerald" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} /> Create Account
            </button>
          </form>
        </div>

        {/* List of Admins */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>Authorized Accounts</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {admins.map((adm, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <ShieldCheck size={24} className="glow-text-emerald" />
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{adm.email}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Role: Administrator</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admin;
