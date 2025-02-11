const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const provinces = require("./data/provinces.json");

const app = express();
app.use(cors());

// Swagger Options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Wilayah Indonesia",
      version: "1.0.0",
      description: "API untuk data provinsi dan kota di Indonesia",
      contact: {
        name: "Khalied Nauly Maturino",
        email: "khalidmaturino@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Development server",
      },
      {
        url: "https://indonesia-regions-api.vercel.app",
        description: "Production server",
      },
    ],
    tags: [
      {
        name: "Provinces",
        description: "Endpoints untuk manajemen data provinsi",
      },
    ],
    externalDocs: {
      description: "GitHub Repository",
      url: "https://github.com/kp-dpmptsp-padang/indonesia-regions-api",
    },
  },
  apis: ["./server.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Custom options untuk Swagger UI
const swaggerUIOptions = {
  customCss: `
    .swagger-ui .topbar { background-color: #FF0000; }
    .swagger-ui .info .title { font-family: system-ui, -apple-system; }
    .swagger-ui .info .title small.version-stamp { background-color: #FF0000; }
    .swagger-ui .info a { color: #FF0000; }
    .swagger-ui .scheme-container { background-color: #f8f9fa; box-shadow: none; }
    .swagger-ui .btn.execute { background-color: #FF0000; border-color: #FF0000; }
    .swagger-ui .btn.execute:hover { background-color: #cc0000; border-color: #cc0000; }
    .swagger-ui .opblock.opblock-get .opblock-summary { border-color: #FF0000; }
    .swagger-ui .opblock.opblock-get .opblock-summary-method { background-color: #FF0000; }
    .swagger-ui .opblock.opblock-get .tab-header .tab-item.active h4 span:after { background: #FF0000; }
  `,
  customSiteTitle: "API Wilayah Indonesia - Dokumentasi",
  customfavIcon: "https://www.indonesia.go.id/favicon.ico",
  swaggerOptions: {
    persistAuthorization: true,
    displayRequestDuration: true,
    docExpansion: "list",
    filter: true,
    deepLinking: true,
  },
};

app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs, swaggerUIOptions));

/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: ID kota/kabupaten
 *           example: 101
 *         name:
 *           type: string
 *           description: Nama kota/kabupaten
 *           example: Kota Banda Aceh
 *     Province:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - cities
 *       properties:
 *         id:
 *           type: integer
 *           description: ID provinsi
 *           example: 1
 *         name:
 *           type: string
 *           description: Nama provinsi
 *           example: Aceh
 *         cities:
 *           type: array
 *           description: Daftar kota/kabupaten dalam provinsi
 *           items:
 *             $ref: '#/components/schemas/City'
 */

/**
 * @swagger
 * /provinces:
 *   get:
 *     summary: Mendapatkan semua data provinsi
 *     description: Mengambil daftar seluruh provinsi beserta kota/kabupaten di dalamnya
 *     tags: [Provinces]
 *     responses:
 *       200:
 *         description: Daftar semua provinsi berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Province'
 */
app.get("/provinces", (req, res) => {
  res.json(provinces);
});

/**
 * @swagger
 * /provinces/{id}:
 *   get:
 *     summary: Mendapatkan data provinsi berdasarkan ID
 *     description: Mengambil data detail sebuah provinsi berdasarkan ID yang diberikan
 *     tags: [Provinces]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID provinsi
 *         example: 1
 *     responses:
 *       200:
 *         description: Data provinsi ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Province'
 *       404:
 *         description: Provinsi tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Province not found
 */
app.get("/provinces/:id", (req, res) => {
  const province = provinces.find((p) => p.id == req.params.id);
  if (province) res.json(province);
  else res.status(404).json({ message: "Province not found" });
});

app.listen(4000, () => {
  console.log("API is running on port 4000");
  console.log("Swagger documentation available at http://localhost:4000/");
});
