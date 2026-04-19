# TODO: Cleanup Working Directory & Setup 02-APRIL-2026 Full-Stack Project

Status: Memulai git cleanup...

## Langkah-langkah:

- [ ] 1. Git add semua changes: `git add -A`
- [ ] 2. Cek status: `git status`
- [ ] 3. Commit: `git commit -m \"refactor: migrasi ke 02-APRIL-2026 (delete old SPA, add Laravel+React full-stack)\"`
- [ ] 4. Setup frontend: cd KELAS/Kelas-Pak-Isa/Semester-2/02-APRIL-2026/frontend && npm install
- [ ] 5. Setup backend: cd ../backend && composer install
- [ ] 6. Backend env: cp .env.example .env && php artisan key:generate
- [ ] 7. Backend DB (SQLite): touch database/database.sqlite && php artisan migrate
- [ ] 8. Jalankan: Backend `php artisan serve`, Frontend `npm start`
- [ ] 9. Test API/UI & update TODO progress

Langkah 1 selesai setelah confirm git add success.

