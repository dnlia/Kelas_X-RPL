const db = require('../config/db');

const getPortfolios = async (req, res) => {
  const userId = req.user.id;
  try {
    const [portfolios] = await db.execute('SELECT * FROM tblporto WHERE user_id = ? ORDER BY created_at DESC', [userId]);
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const createPortfolio = async (req, res) => {
  const userId = req.user.id;
  const { nama_project, deskripsi, link_project } = req.body;
  
  let gambar = req.body.gambar || '';
  if (req.file) {
    gambar = `http://localhost:5000/uploads/${req.file.filename}`;
  }

  if (!nama_project) return res.status(400).json({ message: 'Nama project wajib diisi' });

  try {
    const [result] = await db.execute(`
      INSERT INTO tblporto (user_id, nama_project, deskripsi, gambar, link_project, created_at, updated_at) 
      VALUES (?, ?, ?, ?, ?, NOW(), NOW())
    `, [userId, nama_project, deskripsi, gambar, link_project]);
    res.status(201).json({ message: 'Portfolio berhasil ditambahkan', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updatePortfolio = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { nama_project, deskripsi, link_project } = req.body;

  let gambar = req.body.gambar || '';
  if (req.file) {
    gambar = `http://localhost:5000/uploads/${req.file.filename}`;
  }

  try {
    const [existing] = await db.execute('SELECT * FROM tblporto WHERE id = ? AND user_id = ?', [id, userId]);
    if (existing.length === 0) return res.status(404).json({ message: 'Portfolio tidak ditemukan atau bukan milik Anda' });

    // Jika upload file baru, kita gunakan URL file baru, jika input URL gambar diisi, gunakan itu.
    // Jika tidak ada keduanya, jangan ubah gambar lama (kecuali jika dikosongkan secara eksplisit, tapi di sini kita pertahankan gambar lama jika tidak ada input)
    if (!gambar && existing[0].gambar && !req.body.gambar) {
      gambar = existing[0].gambar;
    }

    await db.execute(`
      UPDATE tblporto SET nama_project = ?, deskripsi = ?, gambar = ?, link_project = ?, updated_at = NOW()
      WHERE id = ? AND user_id = ?
    `, [nama_project, deskripsi, gambar, link_project, id, userId]);
    res.json({ message: 'Portfolio berhasil diperbarui' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deletePortfolio = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  try {
    const [result] = await db.execute('DELETE FROM tblporto WHERE id = ? AND user_id = ?', [id, userId]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Portfolio tidak ditemukan atau bukan milik Anda' });
    res.json({ message: 'Portfolio berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getPortfolios, createPortfolio, updatePortfolio, deletePortfolio };
