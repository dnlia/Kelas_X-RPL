import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://127.0.0.1:8000/api';


function CV() {
  const [cv, setCv] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    nama_lengkap: '',
    email: '',
    telepon: '',
    alamat: '',
    pendidikan: '',
    pengalaman: '',
    skills: '',
    cita_cita: ''
  });

  useEffect(() => {
    axios.get(`${API}/cv`)
      .then(res => {
        if (res.data) {
          setCv(res.data);
          setForm(res.data);
        }
      })
      .catch(err => console.error('CV load error:', err));
  }, []);

  const simpan = () => {
    axios.post(`${API}/cv`, form)
      .then(() => {
        setCv(form);
        setEditMode(false);
        alert('✅ CV berhasil disimpan!');
      })
      .catch(err => {
        console.error('CV save error:', err);
        alert('Error: ' + (err.response?.data?.message || err.message || 'Network Error - check backend server'));
      });
  };

  if (!cv && !editMode) {
    return (
      <div className="container">
        <div className="card" style={{textAlign: 'center'}}>
          <h2>✨ Belum ada CV ✨</h2>
          <button className="btn" onClick={() => setEditMode(true)}>+ Buat CV</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2 className="judul">📄 Data Diri</h2>
          <button className="btn" onClick={() => setEditMode(!editMode)}>
            {editMode ? '✖️ Batal' : '✏️ Edit CV'}
          </button>
        </div>

        {editMode ? (
          <div>
            {Object.keys(form).map(key => (
              <div key={key} className="form-group">
                <label>{key.replace('_', ' ').toUpperCase()}</label>
                <textarea 
                  rows="3"
                  value={form[key]} 
                  onChange={e => setForm({...form, [key]: e.target.value})}
                />
              </div>
            ))}
            <button className="btn" onClick={simpan}>💾 Simpan CV</button>
          </div>
        ) : (
          <div>
            <h2 style={{color: '#89b4e4'}}>{cv.nama_lengkap}</h2>
            <p>📧 {cv.email}</p>
            <p>📱 {cv.telepon}</p>
            <p>📍 {cv.alamat}</p>
            <hr style={{margin: '20px 0'}} />
            <h3>🎓 Pendidikan</h3>
            <p>{cv.pendidikan}</p>
            <h3>💼 Pengalaman</h3>
            <p>{cv.pengalaman}</p>
            <h3>⚙️ Skills</h3>
            <p>{cv.skills}</p>
            <h3>🌟 Cita-cita</h3>
            <p>{cv.cita_cita}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CV;
