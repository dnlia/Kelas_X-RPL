import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:8000/api';

function Portfolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    nama_project: '',
    deskripsi: '',
    gambar: '',
    link_project: ''
  });

  useEffect(() => {
    axios.get(`${API}/portfolio`)
      .then(res => setPortfolios(res.data))
      .catch(err => {
        console.error('Portfolio fetch error:', err);
        setPortfolios([]);
      });
  }, []);

  const simpan = () => {
    const formData = new FormData();

    formData.append("nama_project", form.nama_project);
    formData.append("deskripsi", form.deskripsi);
    formData.append("link_project", form.link_project);

    // hanya kirim kalau file baru
    if (form.gambar instanceof File) {
      formData.append("gambar", form.gambar);
    }

    const url = editId 
      ? `${API}/portfolio/${editId}?_method=PUT`
      : `${API}/portfolio`;

    axios.post(url, formData)
      .then(() => {
        ambilData();
        batal();
      })
      .catch(err => console.log(err));
  };

  const ambilData = () => {
    axios.get(`${API}/portfolio`).then(res => setPortfolios(res.data));
  };

  const hapus = (id) => {
    if (window.confirm('Yakin hapus project ini?')) {
      axios.delete(`${API}/portfolio/${id}`).then(() => ambilData());
    }
  };

  const edit = (item) => {
    setForm(item);
    setEditId(item.id);
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const batal = () => {
    setShowForm(false);
    setEditId(null);
    setForm({
      nama_project: '',
      deskripsi: '',
      gambar: '',
      link_project: ''
    });
  };

  return (
    <div className="container">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2 className="judul">🎨 My Portfolio</h2>
        <button className="btn" onClick={() => setShowForm(true)}>+ Tambah Project</button>
      </div>

      {showForm && (
        <div className="card" style={{marginTop: '20px'}}>
          <h3>{editId ? '✏️ Edit Project' : '✨ Project Baru'}</h3>
          <div className="form-group">
            <label>Nama Project</label>
            <input value={form.nama_project} onChange={e => setForm({...form, nama_project: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Deskripsi</label>
            <textarea rows="3" value={form.deskripsi} onChange={e => setForm({...form, deskripsi: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Upload Gambar</label>
            <input type="file" onChange={(e) => setForm({...form, gambar: e.target.files[0]})} />
          </div>
          <div className="form-group">
            <label>Link Project</label>
            <input value={form.link_project} onChange={e => setForm({...form, link_project: e.target.value})} />
          </div>
          <button className="btn" onClick={simpan}>💾 Simpan</button>
          <button className="btn" onClick={batal} style={{background: '#999'}}>Batal</button>
        </div>
      )}

      <div className="grid-portfolio">
        {portfolios.map(p => (
          <div key={p.id} className="card-portfolio">
            
            {p.gambar && (
              <img 
                src={`http://localhost:8000/storage/${p.gambar}`} 
                alt={p.nama_project}
              />
            )}
            
            <div className="info-portfolio">
              <h3>{p.nama_project}</h3>
              <p>{p.deskripsi}</p>
              {p.link_project && (
                <a href={p.link_project} target="_blank" rel="noreferrer" className="btn" style={{display: 'inline-block', marginTop: '10px'}}>
                  🔗 Lihat Project
                </a>
              )}
              
              <div style={{marginTop: '15px'}}>
                <button className="btn" onClick={() => edit(p)} style={{marginRight: '10px'}}>Edit</button>
                <button className="btn btn-danger" onClick={() => hapus(p.id)}>Hapus</button>
              
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {portfolios.length === 0 && !showForm && (
        <div className="card" style={{textAlign: 'center'}}>
          <p>✨ Belum ada portfolio. Yuk tambah project pertama! ✨</p>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
