import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      localStorage.setItem('user', JSON.stringify(res.data));
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat login');
    }
  };

  return (
    <div className="auth-container">
      <div className="card auth-card">
        <h2>Welcome Back 🌸</h2>
        {error && <div className="error-msg">{error}</div>}
        <form onSubmit={onSubmit}>
          <input type="email" name="email" placeholder="Email Anda" value={formData.email} onChange={onChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={onChange} required />
          <button type="submit" style={{ width: '100%', marginTop: '10px' }}>Masuk</button>
        </form>
        <div className="link">
          Belum punya akun? <Link to="/register"><span>Daftar di sini</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
