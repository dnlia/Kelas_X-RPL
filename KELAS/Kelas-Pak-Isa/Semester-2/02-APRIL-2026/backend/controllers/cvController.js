const db = require('../config/db');

const getCV = async (req, res) => {
  const userId = req.user.id;
  try {
    const [cv] = await db.execute('SELECT * FROM tblcv WHERE user_id = ?', [userId]);
    if (cv.length > 0) {
      res.json(cv[0]);
    } else {
      res.json(null);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const saveCV = async (req, res) => {
  const userId = req.user.id;
  const { nama_lengkap, email, telepon, alamat, pendidikan, pengalaman, skills, cita_cita, kegemaran } = req.body;
  
  try {
    const [existing] = await db.execute('SELECT * FROM tblcv WHERE user_id = ?', [userId]);
    
    if (existing.length > 0) {
      await db.execute(`
        UPDATE tblcv SET 
          nama_lengkap = ?, email = ?, telepon = ?, alamat = ?, 
          pendidikan = ?, pengalaman = ?, skills = ?, cita_cita = ?, kegemaran = ?, updated_at = NOW()
        WHERE user_id = ?
      `, [nama_lengkap, email, telepon, alamat, pendidikan, pengalaman, skills, cita_cita, kegemaran, userId]);
      res.json({ message: 'CV berhasil diperbarui' });
    } else {
      await db.execute(`
        INSERT INTO tblcv (user_id, nama_lengkap, email, telepon, alamat, pendidikan, pengalaman, skills, cita_cita, kegemaran, created_at, updated_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
      `, [userId, nama_lengkap, email, telepon, alamat, pendidikan, pengalaman, skills, cita_cita, kegemaran]);
      res.status(201).json({ message: 'CV berhasil disimpan' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deleteCV = async (req, res) => {
  const userId = req.user.id;
  try {
    await db.execute('DELETE FROM tblcv WHERE user_id = ?', [userId]);
    res.json({ message: 'CV berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getCV, saveCV, deleteCV };
