import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Register = () => {
  const [formData, setFormData] = useState({ nama_lengkap: '', email: '', password: '' });
  const [error, setError] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', formData);
      localStorage.setItem('user', JSON.stringify(res.data));
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat register');
    }
  };

  return (
    <div className="auth-container">
      <div className="card auth-card">
        <h2>Buat Akun Baru ✨</h2>
        {error && <div className="error-msg">{error}</div>}
        <form onSubmit={onSubmit}>
          <input type="text" name="nama_lengkap" placeholder="Nama Lengkap" value={formData.nama_lengkap} onChange={onChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={onChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={onChange} required />
          <button type="submit" style={{ width: '100%', marginTop: '10px' }}>Daftar</button>
        </form>
        <div className="link">
          Sudah punya akun? <Link to="/login"><span>Masuk di sini</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
