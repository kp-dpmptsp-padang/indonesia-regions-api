# 🇮🇩 API Wilayah Indonesia

API gratis untuk data wilayah administratif Indonesia yang mencakup data provinsi dan kota/kabupaten. API ini dapat digunakan untuk berbagai keperluan seperti formulir pendaftaran, sistem informasi, atau aplikasi yang membutuhkan data wilayah Indonesia.

## 🚀 Base URL

```
https://indonesia-regions-api.vercel.app
```

## 📚 Dokumentasi Endpoint

### 1. Mendapatkan Semua Provinsi

Mengambil daftar seluruh provinsi di Indonesia.

```http
GET /provinces
```

**Response Success (200):**
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
      {
        "id": 102,
        "name": "Kota Langsa"
      }
    ]
  },
  {
    "id": 2,
    "name": "Sumatera Utara",
    "cities": [
      {
        "id": 201,
        "name": "Kota Medan"
      }
    ]
  }
]
```

### 2. Mendapatkan Provinsi Berdasarkan ID

Mengambil data provinsi spesifik berdasarkan ID.

```http
GET /provinces/{id}
```

**Parameter:**
- `id` (number) - ID provinsi yang ingin diambil

**Response Success (200):**
```json
{
  "id": 1,
  "name": "Aceh",
  "cities": [
    {
      "id": 101,
      "name": "Kota Banda Aceh"
    },
    {
      "id": 102,
      "name": "Kota Langsa"
    }
  ]
}
```

**Response Error (404):**
```json
{
  "message": "Province not found"
}
```

## 💻 Contoh Penggunaan

### Menggunakan Fetch (JavaScript)

```javascript
// Mengambil semua provinsi
fetch('https://indonesia-regions-api.vercel.app/provinces')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Mengambil provinsi berdasarkan ID
fetch('https://indonesia-regions-api.vercel.app/provinces/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Menggunakan Axios (JavaScript)

```javascript
import axios from 'axios';

// Mengambil semua provinsi
axios.get('https://indonesia-regions-api.vercel.app/provinces')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// Mengambil provinsi berdasarkan ID
axios.get('https://indonesia-regions-api.vercel.app/provinces/1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

## ⚡ Rate Limiting

API ini bersifat gratis dan public, namun memiliki batasan rate limiting untuk menjaga kestabilan layanan. Mohon gunakan dengan bijak.

## 🤝 Kontribusi

API ini bersifat open source. Jika Anda menemukan bug atau ingin berkontribusi, silakan buat issue atau pull request di repository GitHub kami.

## 📝 Catatan

- API ini disediakan secara gratis dan dapat digunakan untuk keperluan development
- Data yang disediakan mencakup 38 provinsi di Indonesia termasuk pemekaran terbaru
- Gunakan API dengan bijak dan pastikan untuk menerapkan caching di sisi client untuk mengurangi beban server

## 📞 Kontak

Jika Anda memiliki pertanyaan atau menemukan masalah, silakan hubungi kami melalui:
- Email: khalidmaturino@gmail.com
- GitHub Issues: [Buat Issue Baru](https://github.com/kp-dpmptsp-padang/indonesia-regions-api/issues)

## ⭐ Dukung Kami

Jika API ini bermanfaat untuk Anda, mohon berikan stargazer di repository GitHub kami dan bagikan ke rekan developer lainnya!
