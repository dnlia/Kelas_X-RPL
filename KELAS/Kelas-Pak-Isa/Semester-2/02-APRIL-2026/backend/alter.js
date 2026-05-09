const db = require('./config/db');

async function alterTable() {
  try {
    console.log("Altering tblporto...");
    // Make columns nullable to avoid constraint errors
    await db.query('ALTER TABLE tblporto MODIFY deskripsi TEXT NULL');
    await db.query('ALTER TABLE tblporto MODIFY gambar TEXT NULL');
    await db.query('ALTER TABLE tblporto MODIFY link_project VARCHAR(255) NULL');
    console.log("Table tblporto altered successfully.");
  } catch(e) {
    console.error("Error altering tblporto:", e.message);
  }

  try {
    console.log("Altering tblcv...");
    await db.query('ALTER TABLE tblcv MODIFY telepon VARCHAR(50) NULL');
    await db.query('ALTER TABLE tblcv MODIFY alamat TEXT NULL');
    await db.query('ALTER TABLE tblcv MODIFY pendidikan TEXT NULL');
    await db.query('ALTER TABLE tblcv MODIFY pengalaman TEXT NULL');
    await db.query('ALTER TABLE tblcv MODIFY skills TEXT NULL');
    await db.query('ALTER TABLE tblcv MODIFY cita_cita VARCHAR(255) NULL');
    await db.query('ALTER TABLE tblcv MODIFY kegemaran VARCHAR(255) NULL');
    console.log("Table tblcv altered successfully.");
  } catch(e) {
    console.error("Error altering tblcv:", e.message);
  }
  process.exit();
}

alterTable();
