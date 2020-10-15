# University-Backend-Nashta
Backend Data Management to impelement Modern Javascript's Framework

Stack technologies:

Back-end :
- Node.js
- Express.js
- Postgresql
- Sequelize-ORM
- Restful API

Langkah-Langkah Menginstall, Config, Migrasi Data dan Pengetesan API

1. Klon Aplikasi $ git clone <repository-url>

git clone https://github.com/TriCodeIT/University_Backend_NashTa

2. Install seluruh dependency

npm install

3. Config Sistem Database pada folder config terdapat file config.json, Sistem Data Base yang dipakai postgreSQL (dialect : postgres), username (harus sesuai nama username nya yang dipakai pada postgreSQL), password (harus sesuai password nya dengan yang dibuat pada postgreSQL), database (harus sesuai nama database nya dengan yang dipakai di postgreSQL)

{
  "development": {
    "username": "postgres",
    "password": "tribay99",
    "database": "uni_be_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },

4. Migrasikan Data ke Sistem Data Base PostgreSQL

node_modules/.bin/sequelize db:migrate

5. Jalankan aplikasi Backend dengan mengaktifkan nodemon

npm run dev

6. Lakukan pengetesan endpoint-endpoint API menggunakan Postman

a. GET Data Mahasiswa dan Matakuliah

http://localhost:3000/ dengan METHOD GET lalu Send

b. GET Nilai Rata-Rata dari tiap Mahasiswa

http://localhost:3000/average dengan METHOD GET lalu Send

c. POST mengupload Data Mahasiswa dengan MataKuliah beserta Nilainya

http://localhost:3000/ dengan METHOD POST lalu Send and Download

d. PUT mengedit Data Mahasiswa dengan MataKuliah beserta Nilainya

http://localhost:3000/ dengan METHOD PUT lalu Send and Download

e. DELETE menghapus Nilai pada Data Mahasiswa yang Mengontrak Mata Kuliah tersebut

http://localhost:3000/ dengan METHOD DELETE lalu Send and Download


