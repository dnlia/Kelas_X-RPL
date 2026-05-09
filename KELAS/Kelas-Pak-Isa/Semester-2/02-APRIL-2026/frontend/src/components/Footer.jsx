import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Tentang Saya</h3>
        <p>Aplikasi Web Profil Pribadi berbasis Fullstack.</p>
        <p>Dibuat dengan penuh cinta 💖</p>
        <div style={{ marginTop: '20px' }}>
          <h4>Kontak</h4>
          <p>Email: hubungi@saya.com</p>
          <p>Telepon: +62 812 3456 7890</p>
        </div>
        <p style={{ marginTop: '30px', fontSize: '12px' }}>&copy; 2026 Web Profil Fullstack. All rights reserved.</p>
        <p style={{ marginTop: '30px', fontSize: '12px' }}>Created by dnlia</p>
      </div>
    </footer>
  );
};

export default Footer;
