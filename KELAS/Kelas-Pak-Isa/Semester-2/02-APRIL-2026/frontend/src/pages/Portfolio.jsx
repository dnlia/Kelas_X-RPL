import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../api';

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [portfolios, setPortfolios] = useState([]);
  const [formData, setFormData] = useState({ nama_project: '', deskripsi: '', link_project: '' });
  const [imageFile, setImageFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchPortfolios();
    
    // Check if we should open the form immediately or reset it
    const params = new URLSearchParams(location.search);
    if (params.get('action') === 'add') {
      setShowForm(true);
    } else if (!location.search) {
      // If we come from a clean header click, show the list
      setShowForm(false);
    }
  }, [location]);

  const fetchPortfolios = async () => {
    try {
      const res = await api.get('/portfolio');
      setPortfolios(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onFileChange = (e) => setImageFile(e.target.files[0]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('nama_project', formData.nama_project);
      data.append('deskripsi', formData.deskripsi);
      data.append('link_project', formData.link_project);
      
      if (!imageFile && !isEditing) {
        setErrorMsg('Silakan pilih File Gambar terlebih dahulu.');
        return;
      }

      if (imageFile) {
        data.append('imageFile', imageFile);
      }

      if (isEditing) {
        await api.put(`/portfolio/${editId}`, data);
      } else {
        await api.post('/portfolio', data);
      }
      resetForm();
      fetchPortfolios();
    } catch (error) {
      console.error("Full error:", error);
      const serverMsg = error.response?.data?.message;
      const serverErr = error.response?.data?.error;
      setErrorMsg(serverMsg || serverErr || error.message || 'Gagal menyimpan portofolio. Pastikan form terisi.');
    }
  };

  const resetForm = () => {
    setFormData({ nama_project: '', deskripsi: '', link_project: '' });
    setImageFile(null);
    setShowForm(false);
    setIsEditing(false);
    setEditId(null);
    setErrorMsg('');
    // Clear URL parameters
    navigate('/portfolio');
  }

  const handleEdit = (porto) => {
    setFormData({
      nama_project: porto.nama_project,
      deskripsi: porto.deskripsi,
      link_project: porto.link_project || ''
    });
    setEditId(porto.id);
    setIsEditing(true);
    setShowForm(true);
    setErrorMsg('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus project ini?')) {
      try {
        await api.delete(`/portfolio/${id}`);
        fetchPortfolios();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="portfolio-page animate-fade-up">
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/dashboard')} className="nav-link" style={{ padding: '0', fontSize: '15px' }}>⬅ Kembali ke Home</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Portofolio Saya 🎨</h2>
        {portfolios.length > 0 && !showForm && (
          <button onClick={() => navigate('/portfolio?action=add')}>Tambah Project</button>
        )}
      </div>

      {errorMsg && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Gagal Menyimpan</h3>
            <p>{errorMsg}</p>
            <button className="danger" onClick={() => setErrorMsg('')}>OK</button>
          </div>
        </div>
      )}

      {showForm && (
        <div className="card">
          <h3>{isEditing ? 'Edit Project' : 'Tambah Project Baru'}</h3>
          <form onSubmit={onSubmit} style={{ marginTop: '15px' }}>
            <input type="text" name="nama_project" placeholder="Nama Project" value={formData.nama_project} onChange={onChange} required />
            <textarea name="deskripsi" placeholder="Deskripsi Singkat" value={formData.deskripsi} onChange={onChange} rows="3"></textarea>
            
            <div style={{ margin: '15px 0' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--card-text)' }}>Upload Gambar Portofolio:</label>
              <input type="file" name="imageFile" accept="image/*" onChange={onFileChange} className="file-input" />
            </div>
            
            <input type="text" name="link_project" placeholder="Link Project / Demo" value={formData.link_project} onChange={onChange} />
            <div className="actions" style={{ marginTop: '20px' }}>
              <button type="submit">{isEditing ? 'Update' : 'Simpan'}</button>
              <button type="button" className="danger" onClick={resetForm}>Batal</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid">
        {portfolios.map(porto => (
          <div key={porto.id} className="portfolio-item">
            {porto.gambar && (
              <img 
                src={porto.gambar} 
                alt={porto.nama_project} 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/400x200.png?text=Link+Gambar+Bukan+Format+Gambar+Valid';
                }} 
              />
            )}
            <div className="portfolio-info">
              <h3>{porto.nama_project}</h3>
              <p>{porto.deskripsi}</p>
              {porto.link_project && <a href={porto.link_project} target="_blank" rel="noreferrer" style={{ color: 'var(--primary-color)', fontSize: '14px', display: 'block', marginBottom: '10px', fontWeight: '500' }}>Lihat Project ➔</a>}
              <div className="actions">
                <button onClick={() => handleEdit(porto)} style={{ padding: '5px 15px', fontSize: '12px' }}>Edit</button>
                <button className="danger" onClick={() => handleDelete(porto.id)} style={{ padding: '5px 15px', fontSize: '12px' }}>Hapus</button>
              </div>
            </div>
          </div>
        ))}
        {portfolios.length === 0 && !showForm && (
          <div className="card" style={{ textAlign: 'center', padding: '50px 20px', width: '100%', gridColumn: '1 / -1' }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>🎨</div>
            <h2>Belum ada portofolio.</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Silakan tambah project terbaik Anda untuk memamerkan bakat Anda kepada dunia.</p>
            <button onClick={() => navigate('/portfolio?action=add')}>Tambah Project Sekarang</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
