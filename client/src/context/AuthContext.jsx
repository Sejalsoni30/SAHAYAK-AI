import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('sahayak_token') || null);

  useEffect(() => {
    const savedUser = localStorage.getItem('sahayak_user');
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    } else if (!savedUser) {
      setUser(null);
    }
  }, [token]);

  const login = (userData, authToken) => {
    const safeUser = userData || { full_name: 'Demo Citizen', phone: '9876543210' };
    const safeToken = authToken || 'demo-token';
    setUser(safeUser);
    setToken(safeToken);
    localStorage.setItem('sahayak_token', safeToken);
    localStorage.setItem('sahayak_user', JSON.stringify(safeUser));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('sahayak_token');
    localStorage.removeItem('sahayak_user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);