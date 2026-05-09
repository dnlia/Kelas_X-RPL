const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const registerUser = async (req, res) => {
  const { nama_lengkap, email, password } = req.body;
  if (!nama_lengkap || !email || !password) {
    return res.status(400).json({ message: 'Silakan lengkapi semua field' });
  }

  try {
    const [existingUsers] = await db.execute('SELECT * FROM tblusers WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await db.execute(
      'INSERT INTO tblusers (nama_lengkap, email, password, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())',
      [nama_lengkap, email, hashedPassword]
    );

    res.status(201).json({
      id: result.insertId,
      nama_lengkap,
      email,
      token: generateToken(result.insertId, email)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Silakan isi email dan password' });
  }

  try {
    const [users] = await db.execute('SELECT * FROM tblusers WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(400).json({ message: 'Email tidak valid' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({
        id: user.id,
        nama_lengkap: user.nama_lengkap,
        email: user.email,
        token: generateToken(user.id, user.email)
      });
    } else {
      return res.status(400).json({ message: 'Email tidak valid' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deleteAccount = async (req, res) => {
  const userId = req.user.id;
  try {
    await db.execute('DELETE FROM tblporto WHERE user_id = ?', [userId]);
    await db.execute('DELETE FROM tblcv WHERE user_id = ?', [userId]);
    await db.execute('DELETE FROM tblusers WHERE id = ?', [userId]);
    res.json({ message: 'Akun berhasil dihapus secara permanen' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus akun', error: error.message });
  }
};

module.exports = { registerUser, loginUser, deleteAccount };
