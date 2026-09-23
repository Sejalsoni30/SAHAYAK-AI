import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Lock, Phone, User } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export default function Login() {
  const [phone, setPhone] = useState('9876543210');
  const [fullName, setFullName] = useState('Demo Citizen');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!phone) return alert('Please enter phone number');

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, { phone, fullName });
      const user = res.data.user || { full_name: fullName || 'Demo Citizen', phone };
      const token = res.data.token || 'demo-token';
      login(user, token);
      navigate('/dashboard');
    } catch (err) {
      const fallbackUser = { full_name: fullName || 'Demo Citizen', phone };
      login(fallbackUser, 'demo-token');
      navigate('/dashboard');
    }
  };

  return (
    <div className="page-shell auth-page">
      <div className="auth-card animate-fade-up">
        <div className="auth-header">
          <h2 className="page-title auth-title">Citizen Login / Register</h2>
          <p className="page-subtitle auth-subtitle">Access your saved scheme applications and profile data.</p>
        </div>

        <form onSubmit={handleAuth} className="auth-form">
          <div className="field-group">
            <label className="field-label">Full Name</label>
            <div className="field-wrap">
              <User className="field-icon" size={18} />
              <input
                type="text"
                placeholder="Sejal Soni"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="field-input"
              />
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Mobile Number</label>
            <div className="field-wrap">
              <Phone className="field-icon" size={18} />
              <input
                type="text"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="field-input"
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            Continue to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}