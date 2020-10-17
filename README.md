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



a. Mengambil Data Mahasiswa dengan Nama Mata Kuliahnya beserta Nilainya 

http://localhost:3000/ dengan METHOD GET lalu Send



b. Mengambil Jumlah Nilai Rata-Rata dari Seluruh Mahasiswa

http://localhost:3000/average dengan METHOD GET lalu Send



c. Mengupload Nilai dengan Data ID_Mahasiswa dan ID_MataKuliah

http://localhost:3000/ 

Pilihlah Bagian Body dan x-www-form-urlencoded

Lalu Masukan KEY : ID_Mahasiswa , ID_MataKuliah dan Nilai beserta masukan VALUE nya

Dengan METHOD POST lalu Send



d. Mengedit Data Mahasiswa dari file xls

http://localhost:3000/ 

Pilihlah Bagian Body dan form-data

Lalu Masukan KEY : filename pilih tanda bawah File dan masukan VALUE dengan memilih select file kemudian klik file xls yang dimaksudkan, kemudian edit merubah Data Mahasiswa dari xls file

Dengan METHOD PUT lalu Send

e. Menghapus Data Nilai dengan Data ID_Mahasiswa dan ID_MataKuliah melalui id

http://localhost:3000/ dengan METHOD DELETE lalu Send


