import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../api';

const CV = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cv, setCv] = useState({
    nama_lengkap: '', email: '', telepon: '', alamat: '',
    pendidikan: '', pengalaman: '', skills: '', cita_cita: '', kegemaran: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchCV();
    
    // Check if we should open the form immediately
    const params = new URLSearchParams(location.search);
    if (params.get('action') === 'add') {
      setShowForm(true);
    } else if (!location.search) {
      // If we come from a clean header click, reset states
      setShowForm(false);
      setIsEditing(false);
    }
  }, [location]);

  const fetchCV = async () => {
    try {
      const res = await api.get('/cv');
      if (res.data) {
        setCv(res.data);
        setHasData(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (e) => setCv({ ...cv, [e.target.name]: e.target.value });

  const resetForm = () => {
    // Clear all fields
    setCv({
      nama_lengkap: '', email: '', telepon: '', alamat: '',
      pendidikan: '', pengalaman: '', skills: '', cita_cita: '', kegemaran: ''
    });
    
    if (hasData) {
      // If we already have data, go back to the profile view
      setIsEditing(false);
      setShowForm(false);
    } else {
      // If we don't have data, just clear the form but stay on it (reset)
      // and keep showForm true so the user can start over
      setMessage('');
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/cv', cv);
      setMessage('CV berhasil disimpan! 🌸');
      setIsEditing(false);
      setHasData(true);
      fetchCV();
    } catch (error) {
      setMessage('Gagal menyimpan CV.');
    }
  };

  if (hasData && !isEditing) {
    return (
      <div className="cv-page animate-fade-up">
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => navigate('/dashboard')} className="nav-link" style={{ padding: '0', fontSize: '15px' }}>⬅ Kembali ke Home</button>
        </div>
        <div className="card cv-card">
        <h2>Profil Diri 👤</h2>
        <div className="cv-content">
          <div className="cv-item"><span className="cv-label">Nama</span><span className="cv-value">{cv.nama_lengkap}</span></div>
          <div className="cv-item"><span className="cv-label">Email</span><span className="cv-value">{cv.email}</span></div>
          <div className="cv-item"><span className="cv-label">Telepon</span><span className="cv-value">{cv.telepon}</span></div>
          <div className="cv-item"><span className="cv-label">Alamat</span><span className="cv-value">{cv.alamat}</span></div>
          <div className="cv-item"><span className="cv-label">Pendidikan</span><span className="cv-value">{cv.pendidikan}</span></div>
          <div className="cv-item"><span className="cv-label">Pengalaman</span><span className="cv-value">{cv.pengalaman}</span></div>
          <div className="cv-item"><span className="cv-label">Skills</span><span className="cv-value">{cv.skills}</span></div>
          <div className="cv-item"><span className="cv-label">Cita-cita</span><span className="cv-value">{cv.cita_cita}</span></div>
          <div className="cv-item"><span className="cv-label">Kegemaran</span><span className="cv-value">{cv.kegemaran}</span></div>
        </div>
        <button onClick={() => { setIsEditing(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ marginTop: '20px' }}>Edit CV</button>
      </div>
    </div>
    );
  }

  if (!hasData && !showForm) {
    return (
      <div className="cv-page animate-fade-up">
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => navigate('/dashboard')} className="nav-link" style={{ padding: '0', fontSize: '15px' }}>⬅ Kembali ke Home</button>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <div style={{ fontSize: '50px', marginBottom: '20px' }}>👤</div>
          <h2>Belum ada data diri.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Silakan buat CV Anda untuk melengkapi profil profesional Anda.</p>
          <button onClick={() => setShowForm(true)}>Buat CV Sekarang</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cv-edit-page animate-fade-up">
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/dashboard')} className="nav-link" style={{ padding: '0', fontSize: '15px' }}>⬅ Kembali ke Home</button>
      </div>
      <div className="card">
      <h2>{hasData ? 'Edit CV' : 'Buat CV Anda'} 📝</h2>
      {message && <p style={{ color: 'var(--primary-color)', margin: '10px 0' }}>{message}</p>}
      <form onSubmit={onSubmit}>
        <input type="text" name="nama_lengkap" placeholder="Nama Lengkap" value={cv.nama_lengkap} onChange={onChange} required />
        <input type="email" name="email" placeholder="Email" value={cv.email} onChange={onChange} required />
        <input type="text" name="telepon" placeholder="Nomor Telepon" value={cv.telepon} onChange={onChange} />
        <textarea name="alamat" placeholder="Alamat" value={cv.alamat} onChange={onChange} rows="3"></textarea>
        <textarea name="pendidikan" placeholder="Riwayat Pendidikan" value={cv.pendidikan} onChange={onChange} rows="3"></textarea>
        <textarea name="pengalaman" placeholder="Pengalaman Kerja/Organisasi" value={cv.pengalaman} onChange={onChange} rows="3"></textarea>
        <textarea name="skills" placeholder="Keahlian (pisahkan dengan koma)" value={cv.skills} onChange={onChange} rows="3"></textarea>
        <input type="text" name="cita_cita" placeholder="Cita-cita" value={cv.cita_cita} onChange={onChange} />
        <input type="text" name="kegemaran" placeholder="Kegemaran / Hobi" value={cv.kegemaran} onChange={onChange} />
        <div className="actions" style={{ marginTop: '20px' }}>
          <button type="submit">Simpan CV</button>
          <button type="button" className="danger" onClick={resetForm}>Batal</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default CV;
