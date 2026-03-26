import React from 'react';
import { Cpu, Shield, Music, Code, Gamepad, Mic, Monitor, Zap, Star } from 'lucide-react';

const DEFAULT_EVENTS = [
  { id: 'hackathon', name: 'Hackathon', fee: 500, limit: '4 Members', desc: '36-hour coding marathon to solve real-world problems.', iconName: 'Cpu' },
  { id: 'robo-wars', name: 'Robo-Wars', fee: 800, limit: '4 Members', desc: 'Build and battle your robots in the ultimate arena.', iconName: 'Shield' },
  { id: 'dance', name: 'Dance Competition', fee: 300, limit: 'Solo/Group', desc: 'Showcase your moves and groove to the beat.', iconName: 'Music' },
  { id: 'code-debugging', name: 'Code Debugging', fee: 100, limit: 'Solo', desc: 'Find and fix bugs in complex codebases.', iconName: 'Code' },
  { id: 'bgmi', name: 'BGMI Tournament', fee: 400, limit: '4 Members', desc: 'Compete in the ultimate battle royale.', iconName: 'Gamepad' },
  { id: 'singing', name: 'Singing', fee: 150, limit: 'Solo/Duet', desc: 'Let your voice be heard on the grand stage.', iconName: 'Mic' },
  { id: 'esports', name: 'E-Sports Showcase', fee: 200, limit: 'Solo', desc: 'Demonstrate your gaming prowess.', iconName: 'Monitor' }
];

export const getEventsList = () => {
  const saved = localStorage.getItem('praxes_events');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error parsing events from localStorage");
    }
  }
  // Initialize if empty
  localStorage.setItem('praxes_events', JSON.stringify(DEFAULT_EVENTS));
  return DEFAULT_EVENTS;
};

export const saveEventsList = (events) => {
  localStorage.setItem('praxes_events', JSON.stringify(events));
};

export const getIconComponent = (iconName, props = {}) => {
  const icons = {
    Cpu: <Cpu {...props} />,
    Shield: <Shield {...props} />,
    Music: <Music {...props} />,
    Code: <Code {...props} />,
    Gamepad: <Gamepad {...props} />,
    Mic: <Mic {...props} />,
    Monitor: <Monitor {...props} />,
    Zap: <Zap {...props} />,
    Star: <Star {...props} />
  };
  return icons[iconName] || <Star {...props} />;
};
