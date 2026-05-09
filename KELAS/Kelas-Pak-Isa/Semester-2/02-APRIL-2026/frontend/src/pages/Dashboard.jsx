import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [message, setMessage] = useState('');
  
  const [cv, setCv] = useState(null);
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resCv = await api.get('/cv');
        setCv(resCv.data);
      } catch (err) {}

      try {
        const resPorto = await api.get('/portfolio');
        setPortfolios(resPorto.data);
      } catch (err) {}
      
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDeleteAccount = async () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus akun secara PERMANEN? Semua data CV dan Portofolio akan terhapus.')) {
      try {
        await api.delete('/auth/account');
        localStorage.removeItem('user');
        window.location.href = '/login';
      } catch (error) {
        setMessage('Gagal menghapus akun.');
      }
    }
  };

  return (
    <div className="dashboard-container" style={{ marginTop: '30px' }}>
      {/* Hero Section */}
      <section className="hero-section animate-fade-up">
        <div className="hero-content">
          <h1>Halo, {user?.nama_lengkap}! 🎀</h1>
          <p>Senang melihat Anda kembali. Kelola CV dan Portofolio Anda dengan mudah untuk membangun kehadiran profesional yang memukau.</p>
        </div>
      </section>

      {/* Stats Summary */}
      {!loading && (
        <div className="stats-grid animate-fade-up delay-1">
          <div className="stat-card">
            <span className="stat-value">{cv ? '1' : '0'}</span>
            <span className="stat-label">CV Tersedia</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{portfolios.length}</span>
            <span className="stat-label">Project Portofolio</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">✨</span>
            <span className="stat-label">Status Profil: Aktif</span>
          </div>
        </div>
      )}

      {loading ? (
        <div className="card animate-fade-up delay-2" style={{ textAlign: 'center' }}>
          <p>Memuat data Anda yang luar biasa...</p>
        </div>
      ) : !cv && portfolios.length === 0 ? (
        <div className="card animate-fade-up delay-2" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '15px' }}>Mari Mulai Petualangan Anda! 🚀</h2>
          <p>Dashboard Anda masih terlihat sepi. Ayo buat CV pertama Anda atau tambahkan project portofolio untuk memamerkan bakat Anda.</p>
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => navigate('/cv?action=add')} style={{ marginRight: '10px' }}>Buat CV</button>
            <button onClick={() => navigate('/portfolio?action=add')} className="secondary" style={{ background: 'var(--secondary-color)' }}>Buat Project</button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-up delay-2">
          {cv && (
            <div style={{ marginBottom: '50px' }}>
              <div className="section-header">
                <h2>Profil Diri 👤</h2>
                <button className="nav-link" onClick={() => window.location.href = '/cv'}>Edit CV ➔</button>
              </div>
              <div className="card cv-card" style={{ marginBottom: '0' }}>
                <div className="cv-content">
                  <div className="cv-item"><span className="cv-label">Nama</span><span className="cv-value">{cv.nama_lengkap}</span></div>
                  <div className="cv-item"><span className="cv-label">Email</span><span className="cv-value">{cv.email}</span></div>
                  <div className="cv-item"><span className="cv-label">Pendidikan</span><span className="cv-value">{cv.pendidikan}</span></div>
                  <div className="cv-item"><span className="cv-label">Skills</span><span className="cv-value">{cv.skills}</span></div>
                </div>
                <div style={{ marginTop: '20px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '15px' }}>
                  <Link to="/cv" style={{ color: 'var(--primary-color)', fontSize: '13px', fontWeight: '600' }}>
                    Lihat Detail CV ➔
                  </Link>
                </div>
              </div>
            </div>
          )}

          {portfolios.length > 0 && (
            <div className="animate-fade-up delay-3">
              <div className="section-header">
                <h2>Portofolio Terkini 🎨</h2>
                <button className="nav-link" onClick={() => window.location.href = '/portfolio'}>Kelola Semua ➔</button>
              </div>
              <div className="grid">
                {portfolios.slice(0, 3).map(porto => (
                  <div key={porto.id} className="portfolio-item">
                    {porto.gambar && (
                      <img 
                        src={porto.gambar} 
                        alt={porto.nama_project} 
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = 'https://via.placeholder.com/400x200.png?text=Gambar+Tidak+Tersedia';
                        }} 
                      />
                    )}
                    <div className="portfolio-info">
                      <h3>{porto.nama_project}</h3>
                      <p style={{ fontSize: '14px', marginBottom: '10px' }}>{porto.deskripsi?.substring(0, 100)}{porto.deskripsi?.length > 100 ? '...' : ''}</p>
                      {porto.link_project && (
                        <Link to="/portfolio" style={{ color: 'var(--primary-color)', fontSize: '13px', fontWeight: '600' }}>
                          Lihat Detail ➔
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {message && <p className="error-msg" style={{ marginTop: '20px' }}>{message}</p>}

      <div className="animate-fade-up delay-4" style={{ marginTop: '60px', textAlign: 'center', borderTop: '1px solid var(--card-border)', paddingTop: '30px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px' }}>Ingin menghapus semua data Anda?</p>
        <button className="danger" onClick={handleDeleteAccount} style={{ padding: '8px 25px', fontSize: '13px', opacity: 0.7 }}>Hapus Akun Permanen</button>
      </div>
    </div>
  );
};

export default Dashboard;
