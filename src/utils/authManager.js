export const DEFAULT_ADMINS = [
  { email: 'admin@praxes.com', password: 'password123' }
];

export const getAdmins = () => {
  const saved = localStorage.getItem('praxes_admins');
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  localStorage.setItem('praxes_admins', JSON.stringify(DEFAULT_ADMINS));
  return DEFAULT_ADMINS;
};

export const saveAdmins = (admins) => {
  localStorage.setItem('praxes_admins', JSON.stringify(admins));
};

export const login = (email, password) => {
  const admins = getAdmins();
  const valid = admins.find(a => a.email === email && a.password === password);
  if (valid) {
    localStorage.setItem('praxes_logged_in', 'true');
    localStorage.setItem('praxes_active_user', email);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('praxes_logged_in');
  localStorage.removeItem('praxes_active_user');
};

export const isAuthenticated = () => {
  return localStorage.getItem('praxes_logged_in') === 'true';
};

export const getActiveUser = () => {
  return localStorage.getItem('praxes_active_user') || '';
};
