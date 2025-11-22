# Job Portal — Admin Portal

Ringkasan singkat, tech stack & cara menjalankan project lokal.

Tech stack
- Next.js v15
- Tailwind CSS
- shadcn/ui (Shadcn UI)
- Prisma (database ORM)
- TypeScript, React, Postgres (direkomendasikan)

Prasyarat
- Node.js (LTS) — disarankan v18+ atau sesuai engine project versi v20.19.3 (Ketika project ini didevelop)
- npm / yarn / pnpm
- Database (Postgres/MySQL/SQLite). Contoh memakai Postgres.
- Git (opsional)

Instalasi cepat (Windows / Laragon)
1. Clone repo
   - git clone <repo-url> .
2. Install dependency
   - cd c:\laragon\www\job-portal\admin-portal-job
   - npm install
   - atau yarn / pnpm install

Konfigurasi environment
1. Buat file .env di root project (salin .env.example bila ada).
2. Minimal variables:
   - DATABASE_URL="postgresql://user:password@localhost:5432/job_portal"
   - NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   - (tambahan: NEXTAUTH_URL, SECRET, dsb. sesuai kebutuhan)

Prisma (setup database)
- Inisialisasi / generate client (jika belum):
  - npx prisma generate
- Jalankan migrasi (development):
  - npx prisma migrate dev --name init
- Seed (jika ada skrip seed):
  - node prisma/seed.js
- Buka Prisma Studio:
  - npx prisma studio

Menjalankan aplikasi (development)
- npm run dev
- Akses: http://localhost:3000

Build & produksi
- Build: npm run build
- Start production (set env sesuai produksi):
  - npm run start

Tailwind CSS & shadcn/ui
- Tailwind sudah terkonfigurasi melalui postcss/tailwind config. Untuk perubahan kelas tailwind, hanya restart dev server bila perlu.
- Jika menggunakan shadcn/ui components, jalankan generator UI bila perlu:
  - pnpm dlx @shadcn/ui@latest add
  - Ikuti petunjuk untuk menambah komponen.

Prisma (migrasi tambahan)
- Tambah model di prisma/schema.prisma → npx prisma migrate dev --name your_change → npx prisma generate

Troubleshooting cepat
- Error "Can't resolve '@ckeditor/ckeditor5-build-classic'":
  - Jalankan: npm i @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
  - Restart dev server setelah install.
- Jika ada error import dynamic di server (SSG/SSR), pastikan komponen yang hanya berjalan di browser di-load secara dynamic / guarded dengan cek typeof window.
- Jika migrations gagal, periksa DATABASE_URL dan koneksi DB.

Tips pengembangan
- Gunakan Node version manager (nvm-windows) untuk konsistensi versi Node.
- Gunakan VSCode + ekstensi Tailwind CSS IntelliSense dan Prisma.
- Pastikan .env tidak di-commit (gitignore).

