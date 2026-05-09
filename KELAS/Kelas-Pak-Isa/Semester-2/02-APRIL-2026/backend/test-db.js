const db = require('./config/db');

async function test() {
  try {
    const [rows] = await db.query('SELECT id, nama_project, gambar FROM tblporto');
    console.log("DB rows:");
    console.log(rows);
  } catch (err) {
    console.error(err);
  }
  process.exit();
}
test();
