# 🇮🇩 API Wilayah Indonesia

API sederhana untuk data provinsi dan kota/kabupaten di Indonesia yang mencakup 38 provinsi termasuk pemekaran terbaru.

## 📝 Deskripsi

Repository ini menyediakan REST API sederhana untuk mengakses data wilayah administratif Indonesia. Data mencakup 38 provinsi beserta kota dan kabupaten di dalamnya dalam format JSON.

## 💻 Teknologi yang Digunakan

- Node.js
- Express.js
- CORS

## 🚀 Cara Menjalankan

1. Clone repository ini
```bash
git clone https://github.com/kp-dpmptsp-padang/indonesia-regions-api.git
```

2. Install dependencies
```bash
cd api-wilayah-indonesia
npm install
```

3. Jalankan server
```bash
nodemon server.js
```

Server akan berjalan di `http://localhost:3000`

## 📚 Dokumentasi API

### Endpoints

#### 1. Mendapatkan Semua Provinsi

```http
GET /provinces
```

Response:
```json
[
  {
    "id": 1,
    "name": "Aceh",
    "cities": [
      {
        "id": 101,
        "name": "Kota Banda Aceh"
      },
      // ...
    ]
  },
  // ...
]
```

#### 2. Mendapatkan Provinsi Berdasarkan ID

```http
GET /provinces/:id
```

Response Success:
```json
{
  "id": 1,
  "name": "Aceh",
  "cities": [
    {
      "id": 101,
      "name": "Kota Banda Aceh"
    },
    // ...
  ]
}
```

Response Error (404):
```json
{
  "message": "Province not found"
}
```

## 📦 Struktur Project

```
api-wilayah-indonesia/
├── server.js
├── package.json
├── data/
│   └── provinces.json
└── README.md
```

## 🔧 Dependencies

```json
{
  "dependencies": {
    "express": "^4.17.1",
    "cors": "^2.8.5",
    "nodemon": "^3.1.9"
  }
}
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda menemukan kesalahan data atau ingin menambahkan fitur:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/UpdateData`)
3. Commit perubahan (`git commit -m 'Menambahkan data baru'`)
4. Push ke branch (`git push origin feature/UpdateData`)
5. Buat Pull Request


## ✨ Contributors

- Mustafa Fathur Rahman
- Khalied Nauly Maturino

## 📞 Kontak

Jika Anda memiliki pertanyaan atau saran, silakan buka issue baru atau hubungi kami di:
- Email: khalidmaturino@gmail.com

## ⭐ Dukung Kami

Jika Anda merasa API ini bermanfaat, berikan ⭐️ pada repository ini!
